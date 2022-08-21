import { Avatar, Button } from '@nextui-org/react'
import styles from './index.module.scss'
import { useStore } from '@/store'
import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import Icon from '~/components/universal/Icon'

const Left: FC = () => {
  const { userStore } = useStore()
  return (
    <>
      <div className="relative h-full phone:h-auto flex phone:w-full">
        <div className={styles['card'] + ' p-14 flex justify-center items-center h-full phone:w-full'}>
          <div className="mb-4">
            <Avatar src={userStore.master?.avatar} bordered css={{ size: '10em', margin: 'auto' }} alt={userStore.master?.username}/>
            <div className="text-center">
              <p className="text-3xl m-0 my-2">{userStore.master?.username}</p>
              <p className="text-md m-0 mb-5 phone:mb-1 w-44">{userStore.master?.introduce}</p>
            </div>
            <div className="flex justify-between">
              {userStore.master?.socialIds?.middle.map(item => {
                if (!item.value) {
                  return
                }
                return (
                  <a key={item.key} target={'_blank'}  href={item.value} aria-label={item.key}>
                    <Icon id={item.icon} />
                  </a>
                )
              })}
            </div>
            <div className={styles['card-button']}>
              {userStore.master?.socialIds?.bottom.map(item => {
                if (!item.value) {
                  return
                }
                return (
                  <a target={'_blank'} href={item.value} key={item.key}>
                    <i className={item.icon}></i>
                    <span className="ml-0.5">{item.key}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
        <div className={styles['fg'] + ' phone:hidden'} />
      </div>
    </>
  )
}

export default observer(Left)
