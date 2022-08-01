import { observer } from 'mobx-react-lite'
import { NextSeo } from 'next-seo'
import { useEffect } from 'react'
import type { FC } from 'react'

import { useCheckOldBrowser } from '~/hooks/use-check-old-browser'
import { useInitialData } from '~/hooks/use-initial-data'
import { useResizeScrollEvent } from '~/hooks/use-resize-scroll-event'
import { useScreenMedia } from '~/hooks/use-screen-media'
import { AggregateRoot } from '~/models/aggregate'
import { useStore } from '~/store'
import { printToConsole } from '~/utils/console'
import { loadStyleSheet } from '~/utils/load-script'

export const Content: FC = observer((props) => {
  const { userStore } = useStore()
  const initialData: AggregateRoot | null = useInitialData()
  useScreenMedia()
  const { check: checkBrowser } = useCheckOldBrowser()
  useResizeScrollEvent()
  const { user } = initialData
  useEffect(() => {
    userStore.setUser(user)
    loadStyleSheet(
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css',
    )
    import('../../socket/index').then(({ socketClient }) => {
      socketClient.initIO()
    })
    checkBrowser()
    printToConsole()
  }, [])

  return (
    <>
      <NextSeo
        title={`${userStore.username} 引导页`}
        description={`${userStore.introduce}`}
      />
      <div id="next">{props.children}</div>
    </>
  )
})
