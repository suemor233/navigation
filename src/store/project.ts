import { makeAutoObservable } from 'mobx';

import { projectInfo } from '@/api/modules/project';
import { ProjectDataType } from '@/models/projectType';
import { socketClient } from '~/socket'
import { SocketKey } from '~/constants/socketKey'

export default class ProjectStore {
  project: ProjectDataType[] | null = null

  constructor() {
    makeAutoObservable(this)
    this.connectProjectSocket()
  }

  async updateProject() {
    const res = (await projectInfo()) as Record<'data', ProjectDataType[]>
    if (res) {
      this.project = res.data
    }
  }


  connectProjectSocket() {
    socketClient.on(SocketKey.USER_PROJECT,'项目已更新', res => {
      this.project = res
    })
  }
}

