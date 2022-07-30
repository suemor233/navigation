import { observer } from 'mobx-react-lite'
import { FC } from 'react'

import { useStore } from '~/store'

import { CardContent } from './CardContent'

export const BasicLayout: FC = observer(({ children }) => {
  const { appStore, userStore } = useStore()

  return (
    <>
      <div
        className="h-screen w-full flex justify-center phone:justify-start items-center phone:items-start
        bg absolute overflow-hidden phone:overflow-visible bg-cover bg-no-repeat bg-center"
        style={
          !appStore.viewport.mobile
            ? {
                backgroundImage: `url(${
                  userStore.master?.backgroundImage ?? ''
                })`,
              }
            : undefined
        }
      >
        {children}
      </div>
    </>
  )
})
