import { makeAutoObservable } from 'mobx';

import { projectInfo } from '@/api/modules/project';
import { ProjectDataType } from '@/models/projectType';

export default class ProjectStore {
  project: ProjectDataType[] | null = null

  constructor() {
    makeAutoObservable(this)
  }

  async updateProject() {
    const res = (await projectInfo()) as Record<'data', ProjectDataType[]>
    if (res) {
      this.project = res.data
    }
  }

}

