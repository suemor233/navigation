import { observer } from 'mobx-react-lite'
import type { FC} from 'react';

import { useStore } from '~/store'

import Left from '../Left'
import Sidebar from '../SideBar'
import styles from './index.module.scss'

export const CardContent: FC = observer(({ children }) => {
  const { appStore } = useStore()
  return (
    <>
      <div
        className={
          `${styles['card'] 
          } flex h-[40em] w-[70em] tablet:w-[60em] phone:h-auto phone:w-screen phone:flex-col flex-row bg-white rounded-2xl transition-all duration-400 transform${ 
          !appStore.viewport.mobile
            ? ' animate__animated animate__rollIn'
            : ''}`
        }
      >
        <Left />
        <div className="flex-1 flex flex-col px-5 h-full">
          <div className="flex flex-col my-6">
            <Sidebar />
          </div>
          {children}
        </div>
      </div>
    </>
  )
})
