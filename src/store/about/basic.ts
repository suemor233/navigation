import { makeAutoObservable, runInAction } from 'mobx'

import { BasicDataType } from '@/models/About'
import { basicInfo } from '@/api/modules/about'
import { socketClient } from '~/socket'
import { SocketKey } from '~/constants/socketKey'
import { isClientSide } from '~/utils/env'
export default class BasicStore {
  basic: BasicDataType[] | null = null

  constructor() {
    makeAutoObservable(this)
    if (isClientSide()) {
    this.connectaboutSocket()
    }
  }

  async updateabout() {
    const res = (await basicInfo()) as Record<'data', BasicDataType[]>
    runInAction(async () => {
      this.basic = res.data
    })
  }


  connectaboutSocket() {
    socketClient.on(SocketKey.ABOUT_BASIC,'关于已更新', res => {
      this.basic = res
    })
  }

}
