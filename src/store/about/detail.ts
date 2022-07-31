import { makeAutoObservable, runInAction } from 'mobx'

import { detailInfo } from '@/api/modules/about'
import { DetailDataType } from '@/models/About'

export default class DetailStore {
  detail: DetailDataType[] | null = null

  constructor() {
    makeAutoObservable(this)
  }

  async updateabout() {
    const res = (await detailInfo()) as Record<'data', DetailDataType[]>
    runInAction(() => {
      this.detail = res.data
    })
  }
}
