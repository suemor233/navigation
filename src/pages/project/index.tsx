import { observer } from 'mobx-react-lite'
import { NextPage } from 'next'
import { ReactElement, useEffect } from 'react'

import { store } from '@/store'

import { projectInfo } from '~/api/modules/project'
import ProjectImageCard from '~/components/in-page/Project/project-card'
import { CardContent } from '~/components/layouts/BasicLayout/CardContent'
import { ProjectDataType } from '~/models/projectType'
import { useStore } from '~/store'

import styles from './index.module.scss'

type IProps = Record<'project', ProjectDataType[]>

export const Project: NextPage<IProps> = (props) => {
  const { projectStore } = useStore()
  useEffect(() => {
    projectStore.updateProject(props.project)
  }, [])
  return (
    <>
      <div
        className={
          styles.project +
          ' transition-all items-center overflow-y-auto animate__animated animate__fadeIn'
        }
      >
        {store.projectStore.project && (
          <ProjectImageCard project={store.projectStore.project} />
        )}
      </div>
    </>
  )
}

//@ts-ignore
Project.getLayout = function getLayout(page: ReactElement) {
  return <CardContent>{page}</CardContent>
}
export async function getServerSideProps() {
  const { data } = (await projectInfo()) as Record<'data', ProjectDataType[]>
  return {
    props: {
      project:data,
    },
  }
}

export default observer(Project)
