import { makeAutoObservable } from 'mobx'

import type { BasicDataType } from '@/models/About'

import { SocketKey } from '~/constants/socketKey'
import { socketClient } from '~/socket'
import { isClientSide } from '~/utils/env'

export default class BasicStore {
  basic: BasicDataType[] | null = null

  constructor() {
    makeAutoObservable(this)
    if (isClientSide()) {
      this.connectaboutSocket()
    }
  }

  async updateabout(basic: BasicDataType[]) {
    this.basic = basic
  }

  connectaboutSocket() {
    socketClient.on(SocketKey.ABOUT_BASIC, '关于已更新', (res) => {
      this.basic = res
    })
  }
}
