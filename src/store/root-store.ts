import BasicStore from './about/basic'
import DetailStore from './about/detail'
import AppUIStore from './app'
import ProjectStore from './project'
import StackStore from './stack'
import UserStore from './user'


export interface RootStore {
  appUIStore: AppUIStore
  userStore: UserStore
  basicStore: BasicStore
  detailStore: DetailStore
  projectStore: ProjectStore
  stackStore: StackStore
}
export class RootStore {
  constructor() {
    this.appUIStore = new AppUIStore()
    this.userStore = new UserStore()
    this.basicStore = new BasicStore()
    this.detailStore = new DetailStore()
    this.projectStore = new ProjectStore()
    this.stackStore = new StackStore()
  }

  get appStore() {
    return this.appUIStore
  }
}
