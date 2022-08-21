import { observer } from 'mobx-react-lite'
import type { NextPage } from 'next'
import type { ReactElement} from 'react';
import { useEffect } from 'react'

import { useStore } from '@/store'

import { stackInfo } from '~/api/modules/stack'
import StackProgress from '~/components/in-page/Stack/stack-progress'
import { CardContent } from '~/components/layouts/BasicLayout/CardContent'
import type { StackType } from '~/models/StackType'

export const Stack: NextPage<Record<'stack', StackType[]>> = (props) => {
  const { stackStore } = useStore()
  useEffect(() => {
    stackStore.updateStack(props.stack)
  }, [])
  return (
    <div className="flex flex-col overflow-y-auto p-2 animate__animated animate__fadeIn phone:pb-10">
      {stackStore.stack && <StackProgress stack={stackStore.stack} />}
    </div>
  )
}

// @ts-ignore
Stack.getLayout = function getLayout(page: ReactElement) {
  return <CardContent>{page}</CardContent>
}

export async function getServerSideProps() {
  const { data } = await stackInfo()
  return {
    props: {
      stack:data,
    },
  }
}

export default observer(Stack)
