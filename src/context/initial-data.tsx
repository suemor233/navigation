import type { FC } from 'react'
import { createContext, memo} from 'react'
import { AggregateRoot } from '~/models/aggregate';
import { useStore } from '../store/index';

export type InitialDataType = {
  aggregateData: AggregateRoot
}
export const InitialContext = createContext({} as InitialDataType)

export const InitialContextProvider: FC<{ value: InitialDataType }> = memo(
  (props) => {
    return (
      <InitialContext.Provider
        value={{ ...props.value }}
      >
        {props.children}
      </InitialContext.Provider>
    )
  },
)
