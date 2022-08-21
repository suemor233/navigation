import type { DetailDataType } from '@/models/About'
import ReactMarkdown from 'react-markdown'
import { Collapse } from '@nextui-org/react'
import { Fragment } from 'react'
import remarkGfm from 'remark-gfm'
import { useStore } from '~/store'
import { observer } from 'mobx-react-lite'

const AboutDetail: React.FC<{ detail: DetailDataType[] }> = ({ detail }) => {

  const { appStore } = useStore()
  return (
    <>
      <Collapse.Group css={{ paddingLeft: '0px', marginTop: '2em' }}>
        {detail.map((item, index) => {
          return (
            <Fragment key={index}>
              {index === 0 || appStore.viewport.mobile ? (
                <Collapse title={item.title} expanded>
                  <ReactMarkdown children={item.content} remarkPlugins={[remarkGfm]} />
                </Collapse>
              ) : (
                <Collapse title={item.title}>
                  <ReactMarkdown children={item.content} remarkPlugins={[remarkGfm]} />
                </Collapse>
              )}
            </Fragment>
          )
        })}
      </Collapse.Group>
    </>
  )
}

export default observer(AboutDetail)
