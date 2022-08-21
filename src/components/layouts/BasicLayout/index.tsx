import { observer } from 'mobx-react-lite'
import type { FC } from 'react'
import { ToastContainer } from 'react-toastify'

import { useStore } from '~/store'

import { useInitialData } from '../../../hooks/use-initial-data'

export const BasicLayout: FC = observer(({ children }) => {
  const { appStore } = useStore()
  const initData = useInitialData()
  return (
    <>
      <div
        className="h-screen w-full flex justify-center phone:justify-start items-center phone:items-start
        bg absolute overflow-hidden phone:overflow-visible bg-cover bg-no-repeat bg-center"
        style={
          !appStore.viewport.mobile
            ? {
                backgroundImage: `url(${initData.user.backgroundImage ?? ''})`,
              }
            : undefined
        }
      >
        {children}
      </div>
      <ToastContainer/>
    </>
  )
})
