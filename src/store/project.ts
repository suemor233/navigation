import { makeAutoObservable } from 'mobx'

import type { ProjectDataType } from '@/models/projectType'

import { SocketKey } from '~/constants/socketKey'
import { socketClient } from '~/socket'
import { isClientSide } from '~/utils/env'

export default class ProjectStore {
  project: ProjectDataType[] | null = null

  constructor() {
    makeAutoObservable(this)
    if (isClientSide()) {
      this.connectProjectSocket()
    }
  }

  async updateProject(project:ProjectDataType[]) {
    this.project = project
  }

  connectProjectSocket() {
    socketClient.on(SocketKey.USER_PROJECT, '项目已更新', (res) => {
      this.project = res
    })
  }
}
