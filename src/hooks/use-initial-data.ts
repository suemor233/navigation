import { useContext } from 'react'

import { InitialContext } from '~/context/initial-data'

export const useInitialData = () => {
  return useContext(InitialContext).aggregateData
}

