import { observer } from 'mobx-react-lite'
import { FC, useEffect } from 'react'
import { useStore } from '~/store'
import Left from '../Left'
import styles from './index.module.scss'

export const CardContent: FC = observer(({ children }) => {
  const { appStore } = useStore()
  useEffect(()=>{
      console.log('start');
  },[])
  return (
    <>
      <div
        className={
          styles['card'] +
          ' flex h-[40em] w-[70em] phone:h-auto phone:flex-col flex-row bg-white rounded-2xl transition-all duration-400 transform' +
          (!appStore.viewport.mobile
            ? ' animate__animated animate__rollIn'
            : '')
        }
      >
        <Left/>
        {children}
      </div>
    </>
  )
})
