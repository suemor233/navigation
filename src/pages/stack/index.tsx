import { observer } from 'mobx-react-lite'
import { ReactElement, useEffect } from 'react'

import { CardContent } from '~/components/layouts/BasicLayout/CardContent'
import { useStore } from '@/store'
import StackProgress from '~/components/in-page/Stack/stack-progress'

export const Stack = () => {
  const {stackStore} = useStore()
  useEffect(() => {
    stackStore.updateStack()
  }, [])
  return (
    <div className="flex flex-col overflow-y-auto p-2 animate__animated animate__fadeIn phone:pb-10 mt-5">
      {
        stackStore.stack && <StackProgress stack={stackStore.stack} />
      }
    </div>
  )
}

Stack.getLayout = function getLayout(page: ReactElement) {
  return <CardContent>{page}</CardContent>
}

export default observer(Stack)
