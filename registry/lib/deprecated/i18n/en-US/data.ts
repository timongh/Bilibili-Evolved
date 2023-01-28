import type { RegexTranslation, Translation } from '@/components/i18n/types'

export const map = new Map<string, Translation>([
  ['主站', 'Home'],
  ['画友', 'Photos'],
  ['音频', 'Audio'],
  ['游戏中心', 'Game'],
  ['会员购', 'Shop'],
  ['下载APP', 'App'],
  [
    '会员',
    [
      'User',
      {
        selector: '.ep-list-wrapper .ep-item .badge.pink',
        text: 'VIP',
      },
    ],
  ],
  ['大会员', 'VIP'],
  ['小会员', 'Reverse VIP'],
  ['未登录', 'Not logged in'],
  ['注册会员', 'Registered User'],
  ['正式会员', 'Formal User'],
  ['年度大会员', 'Annual VIP'],
  ['年度小会员', 'Annual Reverse VIP'],
  ['消息', 'Notifications'],
  ['动态', 'Feeds'],
  ['稍后再看', 'Watchlater'],
  ['收藏', 'Favorite'],
  ['更多', 'More'],
  ['排行', 'Ranking'],
  ['图片', 'Photo'],
  ['视频', 'Video'],
  ['音乐', 'Music'],
  ['时尚', 'Fashion'],
  ['电影', 'Movie'],
  ['影视', 'Film'],
  ['特摄', 'Tokusatsu'],
  ['学习', 'Study'],
  ['放映厅', 'Cinema'],
  ['广告', 'Ads'],
  ['广场', 'Plaza'],
  ['发布', 'Post'],
  ['举报', 'Report'],
  ['首页', 'Home'],
  ['热门', 'Trending'],
  ['周一', 'MON'],
  ['周二', 'TUE'],
  ['周三', 'WED'],
  ['周四', 'THU'],
  ['周五', 'FRI'],
  ['周六', 'SAT'],
  ['周日', 'SUN'],
  ['今天', 'Today'],
  ['昨天', 'Yesterday'],
  ['近1周', 'This week'],
  ['1周前', 'Past week'],
  ['发送', 'Send'],
  ['取消', 'Cancel'],
  ['关闭', 'Close'],
  ['表情', 'Sticker'],
  ['小视频', 'Mini video'],
  ['短视频', 'Mini video'],
  ['查看更多', 'More'],
  ['显示更多', 'More'],
  ['浏览更多', 'More'],
  ['查看全部', 'More'],
  ['所有关注', 'All followings'],
  ['进入专栏区', 'Columns'],
  ['暂时没有新动态了哦！', 'No new feeds yet.'],
  ['播放历史', 'History'],
  ['暂停记录历史', 'Pause recording history'],
  ['啊叻？你要暂停历史记录功能吗？', 'Do you really want to pause recording history?'],
  ['确定暂停', 'Yes'],
  ['清空历史', 'Clear history'],
  ['已看完', 'Completed'],
  ['一键清空', 'Clear all'],
  ['移除已观看视频', 'Clear watched'],
  [
    '即将删除所有已观看视频，此操作不可恢复。确定是否删除？',
    'This will remove all watched videos and is unrecoverable, do you want to continue?',
  ],
  ['清空确认', 'Clear Confirm'],
  ['确定要清空你的稍后再看列表吗？', 'Clear the entire watchlater list?'],
  ['已观看', 'Watched'],
  ['删除', 'Delete'],
  ['确认', 'Yes'],
  ['添加', 'Add'],
  ['取消关注', 'Unfollow'],
  ['全部', 'All'],
  ['投稿视频', 'Posted video'],
  ['公告栏', 'Notice'],
  ['正在直播', 'Live broadcasting'],
  ['虚拟主播', 'Vtuber'],
  ['房间标题', 'Title'],
  ['设置', 'Settings'],
  ['频道', 'Channel'],
  ['标签', 'Tag'],
  [
    '关注',
    [
      'Follow',
      {
        selector: '.stats-item',
        text: 'Following',
      },
    ],
  ],
  ['关注数', 'Following'],
  ['粉丝', 'Follower'],
  ['粉丝数', 'Followers'],
  ['阅读数', 'Read'],
  ['阅读量', 'Read'],
  ['相簿', 'Photos'],
  ['我的频道', 'My Channel'],
  ['我的视频', 'My Video'],
  ['我的音频', 'My Audio'],
  ['我的音乐', 'My Music'],
  ['我的专栏', 'My Column'],
  ['我的相簿', 'My Photos'],
  ['我的关注', 'My Followings'],
  ['我的粉丝', 'My Follwers'],
  ['我的消息', 'My Messages'],
  ['我的收藏', 'My Favorites'],
  ['我的订阅', 'My Subscribes'],
  ['系统通知', 'System'],
  ['网游', 'Online'],
  ['手游', 'Mobile'],
  ['单机', 'Console'],
  ['电台', 'Radio'],
  ['绘画', 'Drawing'],
  ['投稿', 'Upload'],
  ['热门话题', 'Trending #Tags#'],
  ['人气排行', 'Trending'],
  ['我关注的话题', 'Following #Tags#'],
  ['前往TA的直播间', 'Open live room'],
  ['今天你想了解什么呢？(☆▽☆)', 'Search ~~~ (☆▽☆)'],
  ['请输入弹幕 DA☆ZE～', 'Enter your danmaku DA☆ZE～'],
  ['有什么想和大家分享的？', "What's happening?"],
  ['有新动态，点击查看', 'New feeds, click to view'],
  ['以上为热门评论，', 'Aboves are hot comments'],
  [
    '请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。',
    'Post your comments ε=ε=(ノ≧∇≦)ノ',
  ],
  ['点击查看', 'Click to view'],
  ['刚刚', 'Just now'],
  ['转发动态', 'Repost'],
  ['分享动态', 'Share'],
  ['转发', 'Repost'],
  ['赞', 'Like'],
  ['好评', 'Like'],
  ['支持一下', 'Like'],
  ['重播', 'Replay'],
  ['投币', 'Coin'],
  ['同时点赞内容', 'Like as well'],
  ['添加到收藏夹', 'Add to favorites'],
  ['投稿了', 'Posted'],
  ['动态首页', 'Feeds Home'],
  ['历史动态', 'Feeds History'],
  ['活动作品', 'Event'],
  ['未经作者授权，禁止转载', 'Please do not repost or reproduce without prior permission'],
  ['上一帧', 'Previous Frame'],
  ['下一帧', 'Next Frame'],
  ['人正在看', 'watching'],
  ['条实时弹幕', 'danmakus'],
  ['开启弹幕', 'Turn on danmakus'],
  ['显示弹幕', 'Show danmakus'],
  ['关闭弹幕', 'Turn off danmakus'],
  ['隐藏弹幕', 'Hide danmakus'],
  ['发个友善的弹幕见证当下', 'Enter your danmaku'],
  ['发个弹幕见证当下', 'Enter your danmaku'],
  ['弹幕礼仪', 'Guidelines'],
  [
    '追番',
    [
      'Subscribe',
      {
        selector: '.subscriptions-tabs .tab',
        text: 'Bangumi',
      },
      {
        selector: '.tab-bar .tab-text',
        text: 'Subscriptions',
      },
    ],
  ],
  ['已追番', 'Subscribed'],
  ['取消追番', 'Unsubscribe'],
  [
    '追剧',
    [
      'Subscribe',
      {
        selector: '.subscriptions-tabs .tab',
        text: 'Shows',
      },
    ],
  ],
  ['已追剧', 'Subscribed'],
  ['取消追剧', 'Unsubscribe'],
  ['取消订阅', 'Unsubscribe'],
  ['用手机观看', 'Mobile'],
  ['用手机看', 'Mobile'],
  ['弹幕列表', 'Danmaku List'],
  ['左舷弹幕太薄了，大家快来吐槽吧~', 'Danmaku list is empty. Be the first danmaku sender!'],
  ['屏蔽设定', 'Block Settings'],
  ['屏蔽列表', 'Block List'],
  ['高级弹幕', 'Special Danmaku'],
  ['时间', 'Time'],
  ['弹幕内容 (', 'Content ( '],
  ['发送时间', 'Time'],
  ['已屏蔽', 'Blocked'],
  ['查看历史弹幕', 'Danmaku history'],
  ['相关视频推荐', 'Related videos'],
  ['相关推荐', 'Related'],
  ['点评', 'Reviews'],
  ['评论', 'Comments'],
  ['新番时间表', 'Timetable'],
  ['小黑屋', 'Judge'],
  ['摄影', 'Photography'],
  ['插画', 'Illustration'],
  ['其他', 'Other'],
  ['下载', 'Download'],
  ['更新了', 'Updated'],
  ['排行榜', 'Ranking'],
  ['推荐', 'Recommended'],
  ['播放', 'Play'],
  ['播放数量', 'Plays'],
  ['暂停', 'Pause'],
  ['静音', 'Mute'],
  ['弹幕', 'Danmaku'],
  ['硬币', 'Coin'],
  ['宽屏模式', 'Widescreen'],
  ['退出宽屏', 'Exit widescreen'],
  ['退出网页全屏', 'Exit web fullscreen'],
  ['退出全屏', 'Exit fullscreen'],
  ['进入全屏', 'Fullscreen'],
  ['全屏模式', 'Fullscreen'],
  ['打开洗脑循环', 'Turn on loop'],
  ['观看人数', 'Viewers'],
  ['转载', 'Reproduction'],
  ['展开', 'Expand'],
  ['收起', 'Fold'],
  ['展开全部', 'Expand'],
  ['展开全文', 'Expand'],
  ['收起全文', 'Fold'],
  ['已结束', 'Ended'],
  ['电视剧', 'Drama'],
  ['上一页', 'Previous'],
  ['下一页', 'Next'],
  ['搜索', 'Search'],
  ['直播中', 'Live boradcasting'],
  ['等级', 'Level'],
  ['个人中心', 'Profile'],
  ['创作中心', 'Creations'],
  ['直播中心', 'Live center'],
  ['订单中心', 'Orders'],
  ['B币钱包', 'Bili Wallet'],
  ['B币', 'Bili Coin'],
  ['主页', 'Home'],
  ['排序', 'Sort'],
  ['移除', 'Remove'],
  ['复制', 'Copy'],
  ['换一换', 'Refresh'],
  ['特别推荐', 'Recommended'],
  ['热门榜单', 'Hits'],
  ['播放全部', 'Play all'],
  ['自动播放', 'Auto play'],
  ['观看历史', 'History'],
  ['个人收益', 'Personal income'],
  ['同时转发到我的动态', 'Repost to my feeds'],
  ['人气值', 'Popularity'],
  ['友爱社', 'Club'],
  ['话题', '#Tags#'],
  ['专题', 'Topics'],
  ['活动', 'Event'],
  ['活动中心', 'Event center'],
  ['消息中心', 'Messages'],
  ['专栏投稿', 'Post column'],
  ['音频投稿', 'Post audio'],
  ['视频投稿', 'Post video'],
  ['相簿投稿', 'Post photo'],
  ['上传视频', 'Upload'],
  ['退出登录', 'Log out'],
  ['回复我的', 'Reply'],
  ['TA 的直播间', 'Live room'],
  ['TA 的小视频', 'Mini videos'],
  ['TA的视频', 'Videos'],
  ['TA的音频', 'Audios'],
  ['TA的专栏', 'Columns'],
  ['TA的频道', 'Channels'],
  ['TA的订阅', 'Subscriptions'],
  ['TA的收藏夹', 'Favorites'],
  ['邮箱验证', 'Email verification'],
  ['手机验证', 'Phone verification'],
  ['领取', 'Collect'],
  ['确定', 'OK'],
  ['公开', 'Public'],
  ['隐藏', 'Private'],
  ['搜索设置项', 'Search settings'],
  ['样式', 'Style'],
  ['工具', 'Tools'],
  ['触摸', 'Touch'],
  ['指定播放器布局', 'Player layout'],
  ['视频区布局', 'Video'],
  ['番剧区布局', 'Bangumi'],
  ['默认播放器模式', 'Default player mode'],
  ['播放时应用模式', 'Apply on playing'],
  ['播放时自动关灯', 'Turn off light when playing'],
  ['使用默认视频画质', 'Default video quality'],
  ['画质设定', 'Quality'],
  ['使用默认弹幕设置', 'Default danmaku settings'],
  ['记住弹幕设置', 'Remember danmaku settings'],
  ['自动展开弹幕列表', 'Auto expand danmaku list'],
  ['自动展开视频简介', 'Auto expand video description'],
  ['自动从历史记录点播放', 'Auto continue by history'],
  ['允许跨集跳转', 'Allow jump across episodes'],
  ['自动播放视频', 'Auto play video'],
  ['跳过充电鸣谢', 'Skip charge acknowledgements'],
  ['启用逐帧调整', 'Enable seek by frame'],
  ['启用视频截图', 'Enable video screenshots'],
  ['自动定位到播放器', 'Auto locate player'],
  ['定位偏移量', 'Locate offset'],
  ['外置稍后再看', 'Outside watchlater'],
  ['主题颜色', 'Theme color'],
  ['使用自定义顶栏', 'Custom navbar'],
  ['主题色填充', 'Fill with theme color'],
  ['填充其他顶栏', 'Also fill other navbars'],
  ['紧凑布局', 'Compact layout'],
  ['背景模糊', 'Background blur'],
  ['夜间模式', 'Dark mode'],
  ['夜间模式计划时段', 'Dark mode schedule'],
  ['起始时间', 'From'],
  ['结束时间', 'To'],
  ['首页使用紧凑布局', 'Compact layout for homepage'],
  ['简化评论区', 'Simplify comments'],
  ['简化直播间', 'Simplify live room'],
  ['隐藏顶部横幅', 'Hide top banner'],
  ['播放器投影', 'Drop shadow for player'],
  ['强制保留弹幕栏', 'Force preserve danmaku input'],
  ['模糊视频控制栏背景', 'Background blur for video controls'],
  ['控制栏着色', 'Fill video controls'],
  ['不透明度', 'Opacity'],
  ['缩放直播看板娘', 'DPI-ware live room showgirl'],
  ['删除直播水印', 'Remove live watermark'],
  ['删除视频标题层', 'Remove video top mask'],
  ['隐藏返回旧版', 'Hide "Back to old"'],
  ['隐藏番剧点评', 'Hide bangumi reviews'],
  ['删除广告', 'Remove ads'],
  ['稍后再看重定向', 'Watchlater redirect'],
  ['收藏夹视频重定向', 'Favorites redirect'],
  ['隐藏搜索推荐', 'Hide search recommendation'],
  ['展开动态标题', 'Expand title in feeds'],
  ['展开选集列表', 'Expand episode list'],
  ['BiliPlus跳转支持', 'BiliPlus support'],
  ['高分辨率图片', 'DPI-aware images'],
  ['旧版动态跳转支持', 'Old feeds support'],
  ['界面翻译', 'UI translation'],
  ['语言', 'Language'],
  ['顶栏触摸优化', 'Touch support for navbar'],
  ['素质三连触摸支持', 'Touch support for combo like'],
  ['播放器触摸支持', 'Touch support for player'],
  ['启用实验性动画效果', 'Experimental animations'],
  ['启用双击控制', 'Enable double-tap control'],
  ['显示消息', 'Show toasts'],
  ['显示内部错误消息', 'Show internal errors'],
  ['新版本', 'New version'],
  ['已发布.', 'is available.'],
  ['安装', 'Install'],
  ['查看', 'Details'],
  ['检查更新', 'Check for updates'],
  ['安装更新', 'Install update'],
  ['查看更新', 'View update'],
  ['启用缓存', 'Enable cache'],
  ['附加功能', 'Add-ons'],
  ['清除缓存', 'Clear cache'],
  ['转到BiliPlus', 'Jump to BiliPlus'],
  ['顶栏布局', 'Navbar layout'],
  ['搜索框', 'Search box'],
  ['用户信息', 'User profile'],
  ['投稿入口', 'Post entrance'],
  ['转到新版', 'Jump to new version'],
  ['回到旧版', 'Jump to old verison'],
  ['查看封面', 'View cover'],
  ['复制原链接', 'Copy link'],
  ['在新标签页打开', 'Open in new tab'],
  ['下载弹幕', 'Download danmaku'],
  ['下载视频', 'Download video'],
  ['下载音频', 'Download audio'],
  ['更换勋章', 'Change badge'],
  ['更换头衔', 'Change title'],
  ['关于', 'About'],
  ['动画', 'Anime'],
  ['舞蹈', 'Dance'],
  ['国创', 'China'],
  ['科技', 'Tech'],
  ['生活', 'Life'],
  ['鬼畜', 'Kichiku'],
  ['专栏', 'Column'],
  ['游戏', 'Game'],
  ['直播', 'Live'],
  ['数码', 'Digital'],
  ['TV剧', 'TV'],
  [
    '番剧',
    [
      'Bangumi',
      {
        selector: '.elevator-module .nav-list .item',
        text: 'Bangu',
      },
    ],
  ],
  [
    '纪录片',
    [
      'Documentary',
      {
        selector: '.elevator-module .nav-list .item',
        text: 'Doc',
      },
    ],
  ],
  [
    '娱乐',
    [
      'Entertainment',
      {
        selector: '.primary-menu .nav-menu li .nav-name, .elevator-module .nav-list .item',
        text: 'Entmt',
      },
    ],
  ],
  ['自动', 'Auto'],
  ['常规', 'Normal'],
  ['宽屏', 'Widescreen'],
  ['网页全屏', 'Web fullscreen'],
  ['全屏', 'Fullscreen'],
  ['历史', 'History'],
  ['登录', 'Log in'],
  ['注册', 'Sign up'],
  ['我的直播间', 'My live room'],
  ['直播间', 'Live room'],
  [
    '订阅',
    [
      'Subscribe',
      {
        selector: '.main-content',
        text: 'Subscriptions',
      },
    ],
  ],
  ['主站空间', 'My space'],
  ['播放数', 'Plays'],
  ['综合', 'General'],
  ['用户', 'User'],
  ['投稿管理', 'Posts'],
  ['个人信息', 'Profiles'],
  ['开播设置', 'Live settings'],
  ['直播分类：', 'Live type'],
  ['修改分区', 'Edit category'],
  ['房间标题：', 'Live title'],
  ['开始直播', 'Start live'],
  ['关闭直播', 'Stop live'],
  ['主播公告', 'Host notice'],
  ['简介', 'Description'],
  ['直播封面', 'Live cover'],
  ['我的个人标签', 'My tags'],
  ['个人简介', 'Bio'],
  ['直播间信息', 'Live room info'],
  ['我的船员', 'My sailor'],
  ['直播数据', 'Live data'],
  ['数据总览', 'Overall stats'],
  ['直播时长', 'Total time'],
  ['最高人气值', 'Max popularity'],
  ['直播收益(金仓鼠)', 'Live income (Golden hamster)'],
  ['直播收益', 'Live income'],
  ['新增关注数', 'New subscribes'],
  ['人均观看时长', 'Avg watch time'],
  ['礼物流水', 'Gifts'],
  ['礼物统计', 'Gift stats'],
  ['消费排行', 'Consumption ranking'],
  ['更多>>', 'More>>'],
  ['主播', 'Host'],
  ['未开播', 'Idle'],
  ['金瓜子', 'Golden seeds'],
  ['银瓜子', 'Silver seeds'],
  ['残忍取关', 'Unfollow'],
  ['再考虑一下', 'Cancel'],
  ['已关注', 'Following'],
  ['七日榜', 'Rank'],
  ['舰队', 'Fleet'],
  ['房管', 'Manager'],
  ['粉丝榜', 'Follower'],
  ['分享', 'Share'],
  ['轮播', 'Slideshow'],
  ['闲置', 'Idle'],
  ['回复', 'Reply'],
  ['查看更多评论', 'View more comments'],
  ['英雄联盟', 'LOL'],
  ['APEX英雄', 'Apex Legends'],
  ['守望先锋', 'Overwatch'],
  ['绝地求生', 'PUBG'],
  ['王者荣耀', 'Arena Of Valor'],
  ['第五人格', 'Identity V'],
  ['绝地求生:刺激战场', 'PUBG Mobile'],
  ['崩坏3', 'Houkai 3rd'],
  ['主机游戏', 'Console games'],
  ['我的世界', 'MC'],
  ['怪物猎人:世界', 'Monster Hunter: World'],
  ['只狼：影逝二度', 'Sekiro: Shadows Die Twice'],
  ['鬼泣5', 'Devil May Cry 5'],
  ['视频唱见', 'Singer'],
  ['舞见', 'Dancer'],
  ['视频聊天', 'Chat'],
  ['才艺', 'Talent show'],
  ['唱见电台', 'Singer radio'],
  ['声优', 'CV'],
  ['聊天电台', 'Chat radio'],
  ['同人绘画', 'Doujin'],
  ['原创绘画', 'Original'],
  ['临摹绘画', ' Copy'],
  ['其他绘画', 'Other'],
  ['扭蛋机', 'Capsule machine'],
  ['我关注的直播', 'Following lives'],
  ['我关注的动态', 'Following feeds'],
  ['按热度排序', 'By likes'],
  ['按时间排序', 'By time'],
  ['全部评论', 'All comments'],
  ['发消息', 'Send message'],
  ['点赞', 'Like'],
  ['发表评论', 'Comment'],
  ['你的rtmp地址：', 'Yout RTMP address: '],
  ['你的直播码：', 'Streaming code: '],
  ['颜值领域专属封面', '顔出し用サムネ'],
  ['私信存档', 'Archive'],
  ['历史私信', 'Message History'],
  ['用户中心', 'User center'],
  ['我的信息', 'My messages'],
  ['领取奖励', 'Collect'],
  ['关注直播间', 'Follow'],
  ['加入黑名单', 'Block'],
  ['悄悄关注', 'Private follow'],
  ['个人信息举报', 'Report'],
  ['观众分析', 'Audience'],
  ['游客分析', 'Visitor'],
  ['粉丝分析', 'Follower'],
  ['游客基本属性', 'Basic properties of visitor'],
  ['性别占比', 'Gender ratio'],
  ['观众年龄', 'Ages'],
  ['观看途径', 'Approach'],
  ['消息设置', 'Settings'],
  ['消息提醒样式', 'Style'],
  ['（不含应援团）', '（Support groups are not included）'],
  ['数字', 'Number'],
  ['收到的赞消息提醒', 'Likes'],
  ['（是否接收点赞消息通知）', '（Config notifications of likes）'],
  ['始终提醒', 'Always notify'],
  ['永不提醒', 'Never notify'],
  ['回复我的消息提醒', 'Replies'],
  ['（接受谁的评论消息提醒）', '（Config notifications of replies）'],
  ['所有人', 'From all people'],
  ['关注的人', 'Only from people that you follow'],
  ['不接受任何消息提醒', 'Never notify'],
  ['@我的消息提醒', '@Mentions'],
  ['（接受谁的@消息提醒）', '（Config notifications of @mentions）'],
  ['红点', 'Dot'],
  ['不提醒', "Don't show"],
  ['推荐位申请', 'Apply for recommendation'],
  ['直播看板娘', 'Live showgirl'],
  ['收到的赞', 'Likes'],
  ['漫画', 'Manga'],
  ['投影', 'Drop shadow'],
  ['加载中...', 'Loading...'],
  ['模糊层不透明度', 'Opacity'],
  ['签到', 'Check-in'],
  [
    '新版',
    [
      'New version',
      {
        selector: '.gui-settings-dropdown-container *',
        text: 'New',
      },
    ],
  ],
  [
    '旧版',
    [
      'Old version',
      {
        selector: '.gui-settings-dropdown-container *',
        text: 'Old',
      },
    ],
  ],
  ['文件命名格式', 'Filename format'],
  ['发布动态', 'Post'],
  ['了解更多', 'Learn more'],
  ['编辑', 'Edit'],
  ['新闻公告', 'Notice'],
  ['全部直播', 'All'],
  ['游戏直播', 'Games'],
  ['网游直播', 'Online'],
  ['网络游戏', 'Online'],
  ['手游直播', 'Mobile'],
  ['手机游戏', 'Mobile'],
  ['单机游戏', 'Console'],
  ['娱乐直播', 'Entertainment'],
  ['电台直播', 'Radio'],
  ['绘画直播', 'Drawing'],
  ['哔考', 'Study'],
  ['进入直播间', 'Enter'],
  ['直播持续时间', 'Duration'],
  ['Ta还没有应援的友爱社喔 (ಥ_ಥ)', 'No fans club yet (ಥ_ಥ)'],
  ['参与创作了', 'Participated'],
  ['未经作者授权 禁止转载', 'Please do not reproduce without prior permission'],
  ['稿件投诉', 'Report'],
  ['充电', 'Charge'],
  ['为TA', ''],
  ['为TA充电', 'Charge'],
  ['充电设置', 'Charge settings'],
  ['移动', 'Move'],
  ['保护', 'Reserve'],
  ['忽略', 'Ignore'],
  ['该视频弹幕为空', 'No danmakus yet'],
  ['屏蔽设置', 'Block settings'],
  ['屏蔽用户', 'Block user'],
  ['屏蔽该弹幕的发送者', 'Block sender of this danmaku'],
  ['设为置顶', 'Stick on top'],
  ['取消置顶', 'Cancel sticking'],
  ['没有更多信息', 'No more messages available'],
  ['取消静音', 'Cancel mute'],
  ['展开更多', 'More'],
  ['搜索视频', 'Search for videos'],
  ['搜索音频', 'Search for audios'],
  ['搜索稿件', 'Search for works'],
  ['立即播放', 'Play now'],
  ['我的友爱社', 'My fans club'],
  ['新闻', 'News'],
  ['视频截图', 'Video screenshots'],
  ['截图', 'Take screenshot'],
  ['老爷图标', 'Live VIP Icon'],
  ['粉丝勋章', 'Fans Badge'],
  ['活动头衔', 'Event Title'],
  ['用户等级', 'User Level'],
  ['舰长图标', 'Captain Icon'],
  ['全区广播', 'Global Messages'],
  ['欢迎信息', 'Welcome Messages'],
  ['抽奖提示', 'Lucky Draw Popups'],
  ['房间皮肤', 'Room Skin'],
  ['复制链接', 'Copy Link'],
  ['投稿时间排序', 'Sort by time'],
  ['点击数排序', 'Sort by views'],
  ['评论数排序', 'Sort by comments'],
  ['收藏数排序', 'Sort by favorites'],
  ['弹幕数排序', 'Sort by danmakus'],
  ['首页管理', 'Home'],
  ['内容管理', 'Posts'],
  ['视频管理', 'Videos'],
  ['专栏管理', 'Columns'],
  ['音频管理', 'Audios'],
  ['相簿管理', 'Photos'],
  ['你还没有投过一个稿件("▔□▔)', 'You didn\'t post anything ("▔□▔)'],
  ['数据', 'Stat'],
  ['编辑稿件', 'Edit'],
  [
    '（单次最多允许上传100p视频，推荐采用mp4、flv格式，可有效缩短审核转码耗时）',
    '(Up to 100 episodes per video, using mp4 or flv format can reduce encoding time)',
  ],
  ['上传完成', 'Upload complete'],
  ['添加视频', 'Add video'],
  ['视频封面设置', 'Video cover'],
  [
    '（格式jpeg、png，文件大小≤5MB，建议尺寸≥1146*717，最低尺寸≥960*600）',
    '(Format: jpeg / png, Size: ≤ 5MB, Recommended Resolution: ≥ 1146px*717px, Minimum Resolution: ≥ 960px*600px)',
  ],
  ['类型', 'Type'],
  ['分区', 'Category'],
  ['全部分区', 'All categories'],
  ['热门分区', 'Trending categories'],
  ['标题', 'Title'],
  ['更多选项', 'Advanced'],
  ['定时发布', 'Schedule'],
  ['立即投稿', 'Post immediately'],
  ['分享投稿', 'Share post'],
  ['编辑记录', 'Edit history'],
  ['删除稿件', 'Delete'],
  ['数据中心', 'Stats'],
  ['粉丝管理', 'Followers'],
  ['互动管理', 'Interactions'],
  ['评论管理', 'Comments'],
  ['弹幕管理', 'Danmakus'],
  ['字幕管理', 'Subtitles'],
  ['收益管理', 'Earnings'],
  ['创作激励', 'Creative Rewards'],
  ['充电计划', 'Charge'],
  ['悬赏计划', 'Bounties'],
  ['任务成就', 'Achievements'],
  ['创作学院', 'Learn'],
  ['个人设置', 'Settings'],
  ['申诉管理', 'Appeal'],
  ['你的手机号/邮箱', 'Phone Number / Email'],
  ['密码', 'Password'],
  ['禁止直播首页自动播放', 'Disable live autoplay'],
  ['隐藏首页推荐直播', 'Hide recommended live rooms'],
  ['侧栏垂直偏移量', 'Side bar vertical offset'],
  ['合作视频', 'Collaboration'],
  ['礼物弹幕', 'Gift danmaku'],
  ['上舰提示', 'New captains'],
  ['隐藏分区栏', 'Hide category bar'],
  ['显示失效视频信息', 'Retrieve dead video info'],
  ['失效视频重定向', 'Redirect dead video'],
  ['信息来源', 'Info provider'],
  ['快速收起动态评论区', 'Quick fold comments'],
  ['收起评论', 'Close comments'],
  ['我的直播间地址', 'My live room address'],
  ['选择分类', 'Category'],
  ['必须选择分类才能开播', "You can't start live broadcasting before select a category."],
  ['使用默认播放速度', 'Default playback rate'],
  ['默认播放速度', 'Playback rate'],
  ['标记为 想看', 'Mark as "Want to watch"'],
  ['想看', 'Want to watch'],
  ['标记为 在看', 'Mark as "Watching"'],
  ['在看', 'Watching'],
  ['标记为 已看', 'Mark as "Watched"'],
  ['标记为 看过', 'Mark as "Watched"'],
  ['看过', 'Watched'],
  ['显示占位文本', 'Show placeholder text'],
  ['瓜子换硬币', 'Seeds to coins'],
  ['每天最多能兑换 1 个', 'You can only exchange up to 1 coin per day.'],
  ['单个视频', 'Single video'],
  ['获取大小中', 'Fetching size'],
  ['获取大小失败', 'Failed to fetch size'],
  ['预计大小:', 'Estimated size: '],
  [
    '警告: 过大的视频大小会在直接下载时占用大量内存, 并可能导致浏览器标签页崩溃. 请考虑降低清晰度或使用导出选项.',
    'Warning: Videos in large size will cost a large number of RAM during Direct Download, even crash the browser tab. Please use lower quality or use Export.',
  ],
  ['清晰度', 'Quality'],
  ['无', 'None'],
  ['直接下载', 'Direct Download'],
  ['开始', 'Start'],
  ['导出', 'Export'],
  ['导出aria2', 'Export to aria2'],
  ['复制vld数据', 'Copy vld data'],
  ['导出vld数据', 'Export vld data'],
  ['导出aria2 RPC', 'Export to aria2 RPC'],
  ['无法连接到RPC主机.', 'Could not connect to RPC host.'],
  ['aria2 RPC 配置', 'aria2 RPC config'],
  ['主机', 'Host'],
  ['端口', 'Port'],
  ['密钥', 'Secret Key'],
  ['路径', 'Path'],
  ['批量导出', 'Batch Export'],
  ['请至少选择1集或以上的数量!', 'Please select at least 1 episode!'],
  ['选集', 'Episodes'],
  ['全选', 'Select All'],
  ['全不选', 'Deselect All'],
  ['反选', 'Inverse Selection'],
  ['错误', 'Error'],
  ['请求遭到拒绝, 请检查您的密钥相关设置.', 'Connection refused, please check your Secret Key.'],
  ['明日方舟', 'Arknights'],
  [
    '直播歌曲内容不适宜请立即调整',
    'Your songs in live have conflicted our policy, please use other songs.',
  ],
  ['快捷键扩展', 'Extended Keymap'],
  ['限速', 'Speed Limit'],
  ['双击全屏', 'Quick fullscreen'],
  ['启用 Ajax Hook API', 'Enable Ajax Hook API'],
  ['加载模式', 'Loading Mode'],
  ['同时', 'Simultaneous'],
  ['延后', 'Delay'],
  ['同时(自动)', 'Simultaneous (Auto)'],
  ['延后(自动)', 'Delay (Auto)'],
  ['设置面板停靠位置', 'Settings panel dock side'],
  ['左侧', 'Left'],
  ['右侧', 'Right'],
  ['直播间自动领奖', 'Auto perform drawing in live room'],
  ['专栏文字选择', 'Selectable texts in column'],
  ['稍后再看期限提醒', 'Watchlater expire time warnings'],
  ['解除动态存图限制', 'Unlock image-saving in feeds'],
  ['展开动态内容', 'Expand feeds content'],
  ['使用季节Logo', 'Use seasonal logo'],
  ['格式', 'Format'],
  ['预设', 'Presets'],
  ['配置', 'Config'],
  ['未命名', 'Unnamed'],
  ['重命名', 'Rename'],
  ['新增预设', 'New preset'],
  ['删除预设', 'Delete preset'],
  ['默认路径', 'Default Path'],
  ['方法', 'Method'],
  ['开始下载', 'Start Download'],
  ['保存配置', 'Save Config'],
  ['已保存', 'Saved!'],
  ['全部动态', 'View all'],
  ['已添加', 'Added'],
  ['迷你播放器触摸拖动', 'Touch move for mini player'],
  ['显示链接', 'Show link'],
  ['复制全部', 'Copy All'],
  ['简化首页', 'Simplify home'],
  ['首页风格', 'Style'],
  ['清爽', 'Simple'],
  ['极简', 'Minimal'],
  ['隐藏番剧承包', 'Hide bangumi sponsors'],
  ['隐藏推荐直播', 'Hide recommended live'],
  ['隐藏视频推荐', 'Hide related videos'],
  ['动态过滤器', 'Feeds filter'],
  ['动态过滤', 'Feeds filter'],
  ['首选编码', 'Preferred Codec'],
  ['ffmpeg - 分段列表', 'ffmpeg - Segments List'],
  ['ffmpeg - 分P列表', 'ffmpeg - Episodes List'],
  ['视频动态', 'My Feeds'],
  ['热门视频', 'Trending'],
  ['返回顶部', 'Back to top'],
  ['今日', 'Today'],
  ['三日', '3 days'],
  ['一周', 'Weekly'],
  ['栏目', 'Sites'],
  ['自动选择当前直播间勋章', 'Auto wear medal of current live room'],
  ['付费礼物', 'Paid gifts'],
  ['看板娘', 'Showgirl'],
  ['活动横幅', 'Event banner'],
  ['网址参数清理', 'URL clean up'],
  ['收起直播间侧栏', 'Collapse live room side bar'],
  ['导入设置', 'Import settings'],
  ['导出设置', 'Export settings'],
  [
    '已成功导入设置, 部分设置需要刷新后生效.',
    'Import settings successful, refresh to take effect.',
  ],
  ['选择的设置文件无效.', 'Invalid settings file.'],
  ['上一个', 'Previous'],
  ['下一个', 'Next'],
  ['刷新', 'Refresh'],
  ['有新动态', 'Trends'],
  ['最新发布', 'Newest'],
  ['时间表', 'Timetable'],
  ['批量命名格式', 'Batch format'],
  ['删除电竞赛事', 'Remove e-sports'],
  ['透明填充', 'Transparent Fill'],
  ['下载字幕', 'Download subtitles'],
  ['当前视频没有字幕.', 'There is no subtitle for this video.'],
  ['入场特效', 'Entrance Effects'],
  ['图文', 'Image'],
  ['文字', 'Text'],
  ['侧边栏', 'Sidebar'],
  ['关键词', 'Keyword'],
  ['个人资料', 'Profile'],
  ['关注的话题', 'Following #Tags#'],
  ['没有更多了～', 'No more ～'],
  ['直播弹幕记录器', 'Live danmaku recorder'],
  ['默认收藏夹', 'Default'],
  ['本周', 'This week'],
  ['最近观看', 'Recently viewed'],
  ['记录弹幕', 'Record danmaku'],
  ['记录中', 'Stop'],
  ['开始记录', 'Start'],
  ['导出XML', 'Export XML'],
  ['成就值', 'Achievements'],
  ['正在连接...', 'Connecting...'],
  ['使用默认直播画质', 'Use default live quality'],
  ['默认直播画质', 'Default live quality'],
  ['原画', 'Original'],
  ['蓝光', 'BD'],
  ['超清', 'UHD'],
  ['高清', 'HD'],
  ['清晰', 'Normal'],
  ['流畅', 'Smooth'],
  ['保留活动横幅', 'Preserve event banners'],
  ['动态翻译', 'Feeds translate'],
  ['翻译器', 'Translator'],
  ['文本颜色', 'Text color'],
  ['追番追剧', 'Subscriptions'],
  ['黑色', 'Black'],
  ['白色', 'White'],
  ['领取B币', 'Collect Bili coins'],
  ['已领取B币', 'Collected Bili coins'],
  ['领取优惠券', 'Collect coupon'],
  ['已领取优惠券', 'Collected Bili coins'],
  ['我的课程', 'My courses'],
  ['更新源', 'Hot update mirror'],
  ['强制固定顶栏与侧栏', 'Fix positions of sidebars and navbar'],
  ['画中画', 'Picture in picture'],
  ['全部播放', 'Play all'],
  ['手动输入', 'Manual input'],
  ['链接列表', 'Video links'],
  ['短片·手书·配音', 'Short·Script·Voice'],
  ['连载动画', 'Serials'],
  ['完结动画', 'Ended'],
  ['资讯', 'News'],
  ['官方延伸', 'Official extensions'],
  ['番剧索引', 'Indexes'],
  ['国产动画', 'Chinese Anime'],
  ['国产原创相关', 'Original Creations'],
  ['布袋戏', 'Puppetry'],
  ['动态漫·广播剧', 'Motion Comics'],
  ['国产动画索引', 'Indexes'],
  ['原创音乐', 'Original'],
  ['翻唱', 'Cover'],
  ['电音', 'Electronic Music'],
  ['演奏', 'Instruments'],
  ['音乐现场', 'Music Live'],
  ['音乐综合', 'General'],
  ['宅舞', 'Otaku'],
  ['街舞', 'Street Dance'],
  ['三次元舞蹈', 'General'],
  ['明星舞蹈', 'Stars'],
  ['中国舞', 'Chinese Dance'],
  ['舞蹈综合', 'General'],
  ['舞蹈教程', 'Tutorials'],
  ['电子竞技', 'E-sports'],
  ['桌游棋牌', 'Board'],
  ['音游', 'Music Games'],
  ['游戏赛事', 'Events'],
  ['趣味科普人文', 'Popular Science'],
  ['野生技术协会', 'Crafting'],
  ['演讲·公开课', 'Speech·Courses'],
  ['星海', 'Military'],
  ['机械', 'Mechanical'],
  ['汽车', 'Automobile'],
  ['手机平板', 'Mobile'],
  ['电脑装机', 'PC'],
  ['摄影摄像', 'Photography'],
  ['影音智能', 'Audio & Video'],
  ['搞笑', 'Fun'],
  ['日常', 'Daily'],
  ['美食圈', 'Food'],
  ['动物圈', 'Animal'],
  ['手工', 'Handmade'],
  ['运动', 'Sports'],
  ['鬼畜调教', 'General'],
  ['音MAD', 'OtoMAD'],
  ['人力VOCALOID', 'Manual VOCALOID'],
  ['教程演示', 'Tutorials'],
  ['美妆', 'Make up'],
  ['服饰', 'Clothing'],
  ['健身', 'Workout'],
  ['T台', 'Catwalk'],
  ['风尚标', 'Trends'],
  ['综艺', 'Variety'],
  ['明星', 'Star'],
  ['Korea相关', 'Korea'],
  ['影视杂谈', 'Cinecism'],
  ['影视剪辑', 'Montage'],
  ['短片', 'Short Film'],
  ['预告·资讯', 'Trailer'],
  ['点赞成功', 'Liked'],
  ['自动隐藏侧栏', 'Auto hide Side bar'],
  ['直播信息扩充', 'Extend live information'],
  ['播放器置顶', 'Player on top'],
  ['已从稍后再看移除', 'Removed from watchlater'],
  ['已添加至稍后再看', 'Added to watchlater'],
  ['赛事', 'Events'],
  [
    '*',
    [
      {
        selector: '.gui-settings-widgets-box .widgets-container .empty-tip',
        text: 'Nothing here =￣ω￣=',
      },
      {
        selector: '.custom-navbar-settings .paddings-desc',
        text: "Edge padding: Set padding for left and right edge of navbar. It's measured as percent (total width is 100%) with 0% ~ 40% valid range.",
      },
      {
        selector: '.custom-navbar-settings .orders-desc',
        text: 'Orders & Display: Drag the hamburger icon to reorder them, or press on the name for some time to start a drag. Click the eye icon on the right to toggle their visibility.',
      },
      /* CSS translation here */
    ],
  ],
])
export const regex: RegexTranslation = [
  [/^浏览：([0-9\.a-z]+)$/, 'Views：$1'],
  [/^收藏：([0-9\.a-z]+)$/, 'Favorites：$1'],
  [/^支持：([0-9\.a-z]+)$/, 'Likes：$1'],
  [/^共([\d]+)页$/, '$1 pages in total'],
  [/^小视频 ([\d]+)$/, 'Mini videos $1'],
  [/^相簿 ([\d]+)$/, 'Photos $1'],
  [/^在线人数：([\d]+)$/, 'Online: $1'],
  [/^([0-1])[ ]?分钟前$/, '$1 minute ago'],
  [/^([\d]+)[ ]?分钟前$/, '$1 minutes ago'],
  [/^([0-1])[ ]?小时前$/, '$1 hour ago'],
  [/^([\d]+)[ ]?小时前$/, '$1 hours ago'],
  [/^([0-1])播放/, '$1 View'],
  [/^([\d]+)播放/, '$1 Views'],
  [/^([\d]+)\.([\d])万播放/, '$1$2k Views'],
  [/^([0-1])弹幕$/, '$1 Danmaku'],
  [/^([\d]+)弹幕$/, '$1 Danmakus'],
  [/^([\d]+)\.([\d])万弹幕$/, '$1$2k Danmakus'],
  [/^([\+]?[ ]?)关注([：]?[:]?[ ]?)([\d]+)?$/, '$1Follow$2$3'],
  [/^上传时间：([\d])/, 'Upload time: $1'],
  [/^粉丝([：]?[:]?[ ]?)$/, 'Follower$1'],
  [/^@([ ]?)我的$/, '@Mentions'],
  [/^TA([ ]?)的相簿$/, 'Photos'],
  [/^1硬币$/, '1 Coin'],
  [/^([\d]+)硬币$/, '$1 Coins'],
  [/^阅读([：]?[:]?[ ]?)$/, '$1 Reads'],
  [/^弹性空白([\d])/, 'Flexible blank $1'],
  [/^金仓鼠([ ]?[:]?)$/, 'Golden hamster$1'],
  [/^贝壳([ ]?[:]?)$/, 'Shell$1'],
  [/^创作团队（([\d]+)）$/, 'Team（$1）'],
  [/^([\d]+)\.(\d)万$/, '$1$2k'],
  [/^([\d]+)万$/, '$10k'],
  [/^在线人数: ([\d]+)$/, '$1 people online'],
  [/^关注([ ])([\d]+)\.([\d])万$/, 'Follow$1$2$3k'],
  [/^点赞数([\d]+)$/, '$1 Likes'],
  [/^投硬币枚数([\d]+)$/, '$1 Coins'],
  [/^收藏人数([\d]+)$/, '$1 Favorites'],
  [/^热门直播([:]?)$/, 'Trending live$1'],
  [/^热门活动([:]?)$/, 'Trending events$1'],
  [/^全部稿件 \(([\d]+)\)$/, 'All works ($1)'],
  [/^进行中 \(([\d]+)\)$/, 'Processing ($1)'],
  [/^已通过 \(([\d]+)\)$/, 'Accepted ($1)'],
  [/^未通过 \(([\d]+)\)$/, 'Rejected ($1)'],
  [/^共([\d]+)P$/, '$1 Episodes'],
  [/^超清 ([\d]+)K$/, 'Ultra $1K'],
  [/^高清 ([\d]+)P([60\+]*)$/, 'HD $1P$2'],
  [/^清晰 ([\d]+)P$/, '$1P'],
  [/^流畅 ([\d]+)P$/, '$1P'],
  [/^兑换成功\n剩余银瓜子:([\d]+)$/, 'Exchanged successfully.\nYou have $1 silver seeds left.'],
  [/^预计大小: (.+)$/, 'Estimated size: $1'],
  [/^最终路径: (.+)$/, 'Final path: $1'],
  [/^最高全站日排行(.+)名$/, 'Daily Ranking Record: $1'],
  [/^已记录([0-1])条弹幕$/, '$1 danmaku recorded'],
  [/^已记录([\d]+)条弹幕$/, '$1 danmakus recorded'],
  [/^共([0-1])个视频$/, '$1 video'],
  [/^共([\d]+)个视频$/, '$1 videos'],
]
