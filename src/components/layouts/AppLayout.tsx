import { observer } from 'mobx-react-lite'
import { NextSeo } from 'next-seo'
import { useEffect } from 'react'
import type { FC } from 'react'

import { useCheckOldBrowser } from '~/hooks/use-check-old-browser'
import { useResizeScrollEvent } from '~/hooks/use-resize-scroll-event'
import { useScreenMedia } from '~/hooks/use-screen-media'
import { printToConsole } from '~/utils/console'
import { loadStyleSheet } from '~/utils/load-script'

export const Content: FC = observer((props) => {
  useScreenMedia()
  const { check: checkBrowser } = useCheckOldBrowser()
  useResizeScrollEvent()

  useEffect(() => {
    loadStyleSheet(
      'https://fonts.loli.net/css2?family=Noto+Sans+SC:wght@100;300;400;500&display=swap',
    )
    try {
    } finally {
      document.body.classList.remove('loading')
    }

    checkBrowser()
    printToConsole()
  }, [])

  return (
    <>
      <NextSeo title={`suemor 引导页`} description={`suemor 引导页`} />
      <div id="next">{props.children}</div>
    </>
  )
})
