import QProgress from 'qier-progress'
import { extend } from 'umi-request'

import { API_URL } from '~/constants/env'
import { isClientSide } from '~/utils/env'

import { notice } from '../utils/notice'

let qprogress
if (isClientSide()) {
  qprogress = new QProgress()
}
/**
 * 配置request请求时的默认参数
 */
const client = extend({
  prefix: API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})

// request拦截器, 改变url 或 options
client.interceptors.request.use(
  (url: string, options: any) => {
    if (isClientSide()) {
      qprogress.start()
    }

    return {
      url,
      options: { ...options },
    }
  },
  { global: false },
)

client.interceptors.response.use(async (response: any) => {
  const res = await response.clone().json()

  if (isClientSide()) {
    qprogress.finish()
  }
  if (res.ok === 0 && isClientSide()) {
    if (Array.isArray(res.message)) {
      notice.error(res.message[0])
    } else {
      notice.error(res.message)
    }
    return undefined
  }

  return response
})

export default client
