import { observer } from 'mobx-react-lite'
import { ReactElement } from 'react'

import AboutBasic from '~/components/in-page/About/about-basic'
import AboutDetail from '~/components/in-page/About/about-detail'
import { CardContent } from '~/components/layouts/BasicLayout/CardContent'
import { store } from '~/context/root-store'
import { useStore } from '~/store'

export const About = () => {
  const { appStore, basicStore, detailStore } = useStore()

  return (
    <>
      <div
        className="px-10 phone:px-1 animate__animated animate__fadeIn h-full"
        style={!appStore.viewport.mobile ? { overflow: 'overlay' } : undefined}
      >
        {basicStore.basic && <AboutBasic aboutData={basicStore.basic} />}
        {detailStore.detail && <AboutDetail detail={detailStore.detail} />}
      </div>
    </>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  store.basicStore.updateabout()
  store.detailStore.updateabout()
  return <CardContent>{page}</CardContent>
}

export default observer(About)
