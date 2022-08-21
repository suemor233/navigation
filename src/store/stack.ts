import { makeAutoObservable } from 'mobx'

import { stackInfo } from '@/api/modules/stack'
import { StackType } from '@/models/StackType'

import { SocketKey } from '~/constants/socketKey'
import { socketClient } from '~/socket'
import { isClientSide } from '~/utils/env'


export default class StackStore {
  stack: StackType[] | null = null

  constructor() {
    makeAutoObservable(this)
    if (isClientSide()) {
      this.connectStackSocket()
    }
  }

  async updateStack(stack: StackType[]) {
    this.stack = stack
  }

  connectStackSocket() {
    socketClient.on(SocketKey.USER_STACK, '技术栈已更新', (res) => {
      this.stack = res
    })
  }
}
