import 'windi.css'
import 'assets/styles/main.scss'

import { memo, useMemo } from 'react'
import type { FC } from 'react'

import { Content } from '~/components/layouts/AppLayout'
import { NoDataErrorView } from '~/components/universal/Error/no-data'
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
  const Inner = useMemo(() => {
    // 兜底页
    return initData.aggregateData ? (
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    ) : (
      <NoDataErrorView />
    )
  }, [Component, initData, pageProps])

  return <RootStoreProvider>{Inner}</RootStoreProvider>
}

const Wrapper = memo((props) => {
  return <Content>{props.children}</Content>
})

// @ts-ignore
App.getInitialProps = async (props: AppContext) => {

  const data: AggregateRoot & { reason?: any } = await fetchInitialData()

  return {
    initData: data,
  }
}

export default App
