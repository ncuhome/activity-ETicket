import { useEffect, useState } from 'react'
import { useAppReady } from './useAppReady'
import { dataModule } from 'mincu-react'

export const useLogin = () => {
  const isReady = useAppReady()
  const [id, setId] = useState('')

  useEffect(() => {
    if (isReady) {
      const data = dataModule.appData

      if (!data) return

      setId(data.user?.profile?.entireProfile?.base_info?.xh)
    }
  }, [isReady])

  return { isReady, id }
}
