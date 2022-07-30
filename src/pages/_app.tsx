import 'windi.css'
import 'assets/styles/main.scss'
import 'animate.css'

import { memo, useMemo } from 'react'
import type { FC } from 'react'

import { Content } from '~/components/layouts/AppLayout'
import { BasicLayout } from '~/components/layouts/BasicLayout'
import { NoDataErrorView } from '~/components/universal/Error/no-data'
import { InitialContextProvider } from '~/context/initial-data'
import { RootStoreProvider } from '~/context/root-store'
import { AggregateRoot } from '~/models/aggregate'
import { fetchInitialData } from '~/utils/app'

interface DataModel {
  initData: Record<'aggregateData', AggregateRoot>
}
const App: FC<DataModel & { Component: any; pageProps: any; err: any }> = (
  props,
) => {
  const { initData, Component, pageProps } = props
  const getLayout = Component.getLayout ?? ((page) => page)
  const Inner = useMemo(() => {
    return initData.aggregateData ? (
      <Wrapper>{getLayout(<Component {...pageProps} />)}</Wrapper>
    ) : (
      <NoDataErrorView />
    )
  }, [Component, initData, pageProps])
  return (
    <RootStoreProvider>
      <InitialContextProvider value={initData}>{Inner}</InitialContextProvider>
    </RootStoreProvider>
  )
}

const Wrapper = memo((props) => {
  return (
    <BasicLayout>
      <Content>{props.children}</Content>
    </BasicLayout>
  )
})

// @ts-ignore
App.getInitialProps = async (props: AppContext) => {
  const data: AggregateRoot & { reason?: any } = await fetchInitialData()

  return {
    initData: data,
  }
}

export default App
