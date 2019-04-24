#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commandLineArgs = require("command-line-args");
const clipboardy = require("clipboardy");
const request = require("request");
const fs = require("fs");
const ProgressBar = require("progress");
require("colors");
const optionDefinitions = [
    { name: 'info', alias: 'i', defaultOption: true, type: String, defaultValue: undefined },
    { name: 'parts', alias: 'p', type: Number, defaultValue: 30 },
    { name: 'output', alias: 'o', type: String, defaultValue: '.' },
];
const commandLineOptions = commandLineArgs(optionDefinitions);
let options = commandLineOptions;
options.parts = Math.round(options.parts);
// if (fs.existsSync("settings.json"))
// {
//     const jsonOptions = JSON.parse(fs.readFileSync("settings.json").toString("utf-8")) as Settings;
//     options = Object.assign(jsonOptions, options);
// }
if (options.parts < 1) {
    console.error("分段数不能小于1".red);
    process.exit();
}
class Downloader {
    constructor(inputData) {
        this.inputData = inputData;
        this.progressMap = new Map();
        this.progressBar = new ProgressBar(":percent [:bar]", {
            total: this.inputData.totalSize,
            width: 20,
            incomplete: ' ',
        });
        Downloader.workingDownloader = this;
    }
    updateProgress() {
        const progress = this.progressMap ?
            [...this.progressMap.values()].reduce((a, b) => a + b, 0) / this.inputData.totalSize : 0;
        this.progressBar.update(progress);
    }
    cancelDownload() {
        [...this.progressMap.keys()].forEach(it => it.abort());
        this.progressBar.terminate();
        const files = fs.readdirSync(".");
        const parts = files.filter(it => it.includes(this.inputData.title));
        parts.forEach(file => fs.unlinkSync(file));
        console.log("已取消下载".blue);
    }
    async downloadFragment(fragment, index = -1) {
        const partialLength = Math.round(fragment.size / options.parts);
        const title = (index === -1 ? this.inputData.title : this.inputData.title + " - " + index.toString());
        let startByte = 0;
        let part = 0;
        const promises = [];
        while (startByte < fragment.size) {
            const endByte = Math.min(fragment.size - 1, Math.round(startByte + partialLength));
            const range = `bytes=${startByte}-${endByte}`;
            promises.push(new Promise((resolve, reject) => {
                const makeRequest = () => {
                    const req = request({
                        url: fragment.url,
                        method: "GET",
                        headers: {
                            Range: range,
                            Origin: "https://www.bilibili.com",
                            Referer: "https://www.bilibili.com",
                            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36",
                        },
                    }).on("complete", response => {
                        if (response.statusCode.toString()[0] === "2") {
                            resolve(response);
                        }
                        else {
                            reject(`请求失败`);
                        }
                    }).on("data", data => {
                        this.progressMap.set(req, this.progressMap.get(req) + data.length);
                        this.updateProgress();
                    }).on("error", error => {
                        this.progressMap.delete(req);
                        this.progressMap.set(makeRequest(), 0);
                        this.updateProgress();
                        console.error(`\n片段下载失败: ${error} 重试中...`.yellow);
                    });
                    req.pipe(fs.createWriteStream(`${title}.part${part}`));
                    return req;
                };
                this.progressMap.set(makeRequest(), 0);
            }));
            startByte = Math.round(startByte + partialLength) + 1;
            part++;
        }
        await Promise.all(promises);
        return title;
    }
    async mergeFragment(title, index = -1) {
        const dest = title + ".flv";
        if (index !== -1) {
            console.log("正在合并片段" + index.toString() + "...".green);
        }
        else {
            console.log("正在合并文件...".green);
        }
        if (options.parts === 1) {
            fs.renameSync(title + ".part0", dest);
        }
        else {
            if (fs.existsSync(dest)) {
                fs.unlinkSync(dest);
            }
            const files = fs.readdirSync(".");
            const parts = files.filter(it => it.includes(title + ".part"));
            const partRegex = /.*\.part([\d]+)/;
            parts.sort((a, b) => {
                const partA = parseInt(a.replace(partRegex, "$1"));
                const partB = parseInt(b.replace(partRegex, "$1"));
                return partA - partB;
            }).forEach(file => {
                const buffer = fs.readFileSync(file);
                fs.appendFileSync(dest, buffer);
            });
            parts.forEach(file => fs.unlinkSync(file));
        }
        return dest;
    }
    async download() {
        console.log(`正在下载: ${this.inputData.title}`.green);
        this.progressBar.render();
        let result;
        if (this.inputData.fragments.length === 1) {
            result = await this.mergeFragment(await this.downloadFragment(this.inputData.fragments[0]));
        }
        else {
            const titles = await Promise.all(this.inputData.fragments.map((f, i) => this.downloadFragment(f, i)));
            result = await Promise.all(titles.map((t, i) => this.mergeFragment(t, i)));
        }
        console.log(`下载完成: `.green);
        if (typeof result === "string") {
            console.log(result);
        }
        else {
            result.forEach(it => console.log(it));
        }
    }
}
Downloader.workingDownloader = null;
(async () => {
    try {
        let jsonText = '';
        if (fs.existsSync(options.info)) {
            jsonText = fs.readFileSync(options.info).toString("utf-8");
        }
        else {
            jsonText = await clipboardy.read();
        }
        const inputData = JSON.parse(jsonText);
        if (!(function (data) {
            if (Array.isArray(data) && data.length > 0) {
                return data[0].fragments !== undefined;
            }
            else {
                return data.fragments !== undefined;
            }
        })(inputData)) {
            throw new Error();
        }
        try {
            process.chdir(options.output);
            process.on("SIGINT", () => {
                Downloader.workingDownloader && Downloader.workingDownloader.cancelDownload();
                process.exit();
            });
            if (Array.isArray(inputData)) {
                for (const data of inputData) {
                    const downloader = new Downloader(data);
                    await downloader.download();
                }
            }
            else {
                const downloader = new Downloader(inputData);
                await downloader.download();
            }
        }
        catch (error) {
            Downloader.workingDownloader && Downloader.workingDownloader.cancelDownload();
            console.error(`\n错误: ${error}`.red);
        }
    }
    catch (error) {
        console.log(`[无数据] 未在剪贴板检测到有效数据/没有指定输入文件/输入文件的数据无效.`.red);
    }
})();
