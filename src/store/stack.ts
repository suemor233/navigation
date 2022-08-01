import { makeAutoObservable } from 'mobx';
import { StackType } from '@/models/StackType';
import { stackInfo } from '@/api/modules/stack';
import { socketClient } from '~/socket'
import { SocketKey } from '~/constants/socketKey'

export default class StackStore {

  stack: StackType[]  | null = null

  constructor() {
    makeAutoObservable(this)
    this.connectStackSocket()
  }

  async updateStack() {
    const res = await stackInfo() as Record<'data', StackType[]>
    this.stack = res.data
  }

  connectStackSocket() {
    socketClient.on(SocketKey.USER_STACK,'技术栈已更新', res => {
      this.stack = res
    })
  }
}

