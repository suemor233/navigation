import { makeAutoObservable } from 'mobx'

import { projectInfo } from '@/api/modules/project'
import { ProjectDataType } from '@/models/projectType'

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

  async updateProject() {
    const res = (await projectInfo()) as Record<'data', ProjectDataType[]>
    if (res) {
      this.project = res.data
    }
  }

  connectProjectSocket() {
    socketClient.on(SocketKey.USER_PROJECT, '项目已更新', (res) => {
      this.project = res
    })
  }
}
