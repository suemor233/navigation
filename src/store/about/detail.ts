import { makeAutoObservable } from 'mobx'

import { DetailDataType } from '@/models/About'

import { SocketKey } from '~/constants/socketKey'
import { socketClient } from '~/socket'
import { isClientSide } from '~/utils/env'

export default class DetailStore {
  detail: DetailDataType[] | null = null

  constructor() {
    makeAutoObservable(this)
    if (isClientSide()) {
      this.connectaboutSocket()
    }
  }

  async updateabout(detail: DetailDataType[]) {
    this.detail = detail
  }

  connectaboutSocket() {
    socketClient.on(SocketKey.ABOUT_DETAIL, '关于已更新', (res) => {
      this.detail = res
    })
  }
}
