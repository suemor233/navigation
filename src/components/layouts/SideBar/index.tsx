import { useRouter } from 'next/router'
import { useEffect , useState } from 'react'

import styles from './index.module.scss'

type tabsType = Array<[string, string, boolean]>

const Sidebar: React.FC = () => {
  const [tabs, setTabs] = useState<tabsType>([
    ['关于', '/about', false],
    ['项目', '/project', false],
    ['技术栈', '/stack', false],
  ])
  const location = useRouter()
  useEffect(() => {
    setTabs(
      tabs.map((item, index) => {
        if (!index && location.pathname === '/') {
          return [item[0], item[1], true]
        } else if (item[1] === location.pathname) {
          return [item[0], item[1], true]
        }
        return [item[0], item[1], false]
      }),
    )
  }, [location])

  const handleSelecated = (
    e: React.MouseEvent,
    tab: [string, string, boolean],
  ) => {
    if (location.pathname !== tab[1]) {
      location.push(tab[1])
      setTabs(
        tabs.map((item) => {
          if (item[0] === tab[0]) {
            return [item[0], item[1], true]
          }
          return [item[0], item[1], false]
        }),
      )
    }
  }
  return (
    <>
      <div className="flex justify-around w-full text-xl px-12 ">
        {tabs.map((key) => {
          return (
            <button
              onClick={(e) => handleSelecated(e, key)}
              className={`${styles.btn} ${key[2] ? styles.selected : ''}`}
              key={key[0]}
              aria-required="true"
              aria-label={'sefwe'}
            >
              {key[0]}
            </button>
          )
        })}
      </div>

      <div className={styles.fg} />
    </>
  )
}

export default Sidebar
