import { useEffect, useState } from 'react'
import { mincuCore } from 'mincu-react'
import Router from 'next/router'

export const useAppReady = (): boolean => {
  const [isReady, setIsReady] = useState(mincuCore.isApp)

  useEffect(() => {
    mincuCore.initial(
      () => setIsReady(true),
      () => Router.push('/outside')
    )
    return
  }, [isReady])

  return isReady
}
