import { aggregateInfo } from '~/api/modules/aggregate'
import type { AggregateRoot } from '~/models/aggregate'

export async function fetchInitialData(): Promise<AggregateRoot> {
  const [aggregateDataState] = await Promise.allSettled([aggregateInfo()])
  let aggregateData: AggregateRoot | null = null
  let reason = null as null | string
  if (aggregateDataState.status === 'fulfilled') {
    aggregateData = aggregateDataState.value
  } else {
    reason = aggregateDataState?.reason
    console.error(`Fetch aggregate data error: ${aggregateDataState.reason}`)
  }

  // @ts-ignore
  return { aggregateData, reason }
}
