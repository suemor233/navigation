import { observer } from 'mobx-react-lite'
import { ReactElement, useEffect } from 'react'

import { useStore } from '@/store'

import ProjectImageCard from '~/components/in-page/Project/project-card'
import { CardContent } from '~/components/layouts/BasicLayout/CardContent'

import styles from './index.module.scss'

export const Project = () => {
  const { projectStore } = useStore()
  useEffect(() => {
    projectStore.updateProject()
  }, [])
  return (
    <>
      <div
        className={
          styles.project +
          ' transition-all items-center  overflow-y-auto animate__animated animate__fadeIn'
        }
      >
        {projectStore.project && (
          <ProjectImageCard project={projectStore.project} />
        )}
      </div>
    </>
  )
}

Project.getLayout = function getLayout(page: ReactElement) {
  return <CardContent>{page}</CardContent>
}

export default observer(Project)
