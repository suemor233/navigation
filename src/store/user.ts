import { makeAutoObservable, runInAction } from 'mobx'

import { socialBottomKeyMap, socialKeyMap } from '~/constants/social'
import {
  InformationConfigType,
  SocialDetailType,
} from '~/models/InformationConfigType'
import { SocialType, UserModel } from '~/models/User'

export interface UserResType
  extends Pick<
    InformationConfigType,
    'username' | 'introduce' | 'avatar' | 'backgroundImage'
  > {
  socialIds: SocialDetailType[]
}

export default class UserStore {
  constructor() {
    makeAutoObservable(this)
  }
  master: Partial<UserModel> | null = null
  setUser(model: (Omit<UserModel,'socialIds'> & {socialIds:SocialType[]}) | any) {
    const _master = model
    runInAction(() => {
      const socialIds: Record<string, SocialDetailType[]> = {
        middle: [],
        bottom: [],
      }
      _master.socialIds.map((item, index) => {
        if (socialKeyMap[item.key]) {
          item.icon = socialKeyMap[item.key]
          socialIds.middle.push(item)
        } else {
          item.key = item.key.replace(/^\S/, (s) => s.toUpperCase())
          item.icon = socialBottomKeyMap[item.key]
          socialIds.bottom.push(item)
        }
      })
      this.master = model as any
      //@ts-ignore
      this.master.socialIds = socialIds as any
    })
  }

  get username() {
    return this.master?.username || ''
  }

  get introduce() {
    return this.master?.introduce || null
  }
}
