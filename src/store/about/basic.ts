import { makeAutoObservable, runInAction } from 'mobx'

import { BasicDataType } from '@/models/About'
import { basicInfo } from '@/api/modules/about'

export default class BasicStore {
  basic: BasicDataType[] | null = null

  constructor() {
    makeAutoObservable(this)
  }

  async updateabout() {
    const res = (await basicInfo()) as Record<'data', BasicDataType[]>
    runInAction(async () => {
      this.basic = res.data
    })
  }


}
