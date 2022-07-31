import { makeAutoObservable, runInAction } from 'mobx';
import { StackType } from '@/models/StackType';
import { stackInfo } from '@/api/modules/stack';
import { notice } from '@/utils/notice';

export default class StackStore {

  stack: StackType[]  | null = null

  constructor() {
    makeAutoObservable(this)
  }

  async updateStack() {
    const res = await stackInfo() as Record<'data', StackType[]>
    this.stack = res.data
  }
}

