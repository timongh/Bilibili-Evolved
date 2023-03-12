import { reactive } from 'vue'
import { registerAndGetData } from '@/plugins/data'

const defaultEmptyContent = '空空如也哦 =￣ω￣='
export const [emptyContent] = registerAndGetData(
  'vEmpty',
  reactive({
    content: defaultEmptyContent,
  }),
)
