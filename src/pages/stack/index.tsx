import { observer } from 'mobx-react-lite'
import { ReactElement } from 'react'

import { CardContent } from '~/components/layouts/BasicLayout/CardContent'
import { Sidebar } from '~/components/layouts/SideBar'

export const Stack = () => {
  return (
    <>
      <h1>Stack</h1>
    </>
  )
}

Stack.getLayout = function getLayout(page: ReactElement) {
  return (
    <CardContent>
      <Sidebar />
      {page}
    </CardContent>
  )
}

export default Stack
