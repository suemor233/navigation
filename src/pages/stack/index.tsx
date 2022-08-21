import { observer } from 'mobx-react-lite'
import { ReactElement, useEffect } from 'react'

import { CardContent } from '~/components/layouts/BasicLayout/CardContent'
import { store, useStore } from '@/store'
import StackProgress from '~/components/in-page/Stack/stack-progress'

export const Stack = () => {
  const {stackStore} = useStore()
  return (
    <div className="flex flex-col overflow-y-auto p-2 animate__animated animate__fadeIn phone:pb-10">
      {
        stackStore.stack && <StackProgress stack={stackStore.stack} />
      }
    </div>
  )
}

Stack.getLayout = function getLayout(page: ReactElement) {
  store.stackStore.updateStack()
  return <CardContent>{page}</CardContent>
}

export default observer(Stack)
