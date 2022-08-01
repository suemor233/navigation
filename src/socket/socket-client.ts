import type { Socket } from 'socket.io-client'
import { io } from 'socket.io-client'

import { GATEWAY_URL } from '~/constants/env'
import { SocketKey } from '~/constants/socketKey'
import { notice } from '~/utils/notice'

export class SocketClient {
  public socket!: Socket

  constructor() {
    this.socket = io(GATEWAY_URL, {
      timeout: 10000,
      reconnectionDelay: 3000,
      autoConnect: false,
      reconnectionAttempts: 3,
      transports: ['websocket'],
    })
  }
  initIO() {
    if (!this.socket) {
      return
    }
    this.socket.close()
    this.socket.open()
  }

  on(event: SocketKey, msg: string, fn: Function) {
    this.socket.on(event, (res) => {
      fn(res)
      notice.toast(msg)
    })
  }
}
