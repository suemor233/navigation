import { makeAutoObservable, runInAction } from 'mobx'

import { detailInfo } from '@/api/modules/about'
import { DetailDataType } from '@/models/About'
import { socketClient } from '~/socket'
import { SocketKey } from '~/constants/socketKey'
export default class DetailStore {
  detail: DetailDataType[] | null = null

  constructor() {
    makeAutoObservable(this)
    this.connectaboutSocket()
  }

  async updateabout() {
    const res = (await detailInfo()) as Record<'data', DetailDataType[]>
    runInAction(() => {
      this.detail = res.data
    })
  }

  connectaboutSocket() {
    socketClient.on(SocketKey.ABOUT_DETAIL,'关于已更新', res => {
      this.detail = res
    })
  }
}
