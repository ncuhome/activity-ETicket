import { useEffect, useState } from 'react'
import { useAppReady } from './useAppReady'
import { dataModule } from 'mincu-react'

export const useLogin = () => {
  const isReady = useAppReady()
  const [id, setId] = useState('')

  useEffect(() => {
    if (isReady) {
      const data = dataModule.userInfo

      if (!data) return

      setId(data?.profile?.entireProfile?.base_info?.xh)
    }
  }, [isReady])

  return { isReady, id }
}
