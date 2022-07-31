import { ReactElement } from 'react'
import { observer } from 'mobx-react-lite'
import { CardContent } from '~/components/layouts/BasicLayout/CardContent'
import { useStore } from '~/store'
import AboutBasic from '~/components/in-page/About/about-basic'
import AboutDetail from '~/components/in-page/About/about-detail'
import { useEffect } from 'react';

export const About = () => {
  const { appStore,basicStore,detailStore } = useStore()
  useEffect(()=>{
    basicStore.updateabout()
    detailStore.updateabout()
  },[])
  return (
    <>
      <div
        className="pt-5 px-10 phone:px-1 animate__animated animate__fadeIn h-full"
        style={!appStore.viewport.mobile ? { overflow: 'overlay' } : undefined}
      >
        {basicStore.basic && <AboutBasic aboutData={basicStore.basic} />}
        {detailStore.detail && <AboutDetail detail={detailStore.detail} />}
      </div>
    </>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return <CardContent>{page}</CardContent>
}

export default observer(About)
