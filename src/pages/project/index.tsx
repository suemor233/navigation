import { observer } from 'mobx-react-lite'
import { ReactElement } from 'react'

import { CardContent } from '~/components/layouts/BasicLayout/CardContent'
import { Sidebar } from '~/components/layouts/SideBar'

export const Project = () => {
  return (
    <>
      <h1>Project</h1>
    </>
  )
}

Project.getLayout = function getLayout(page: ReactElement) {
  return (
    <CardContent>
      <Sidebar />
      {page}
    </CardContent>
  )
}

export default Project
