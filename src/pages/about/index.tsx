import { observer } from 'mobx-react-lite'
import { ReactElement } from 'react'

import { CardContent } from '~/components/layouts/BasicLayout/CardContent'
import { Sidebar } from '~/components/layouts/SideBar'

export const About = () => {
  return (
    <>
      <h1>about</h1>
    </>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <CardContent>
      <Sidebar />
      {page}
    </CardContent>
  )
}

export default About
