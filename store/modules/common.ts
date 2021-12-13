import { stateFactory } from "../factory"
import { EdgeInsets } from 'mincu-react'

type Common = {
  inset: EdgeInsets
}

export const useCommonState = stateFactory({
  inset: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  }
} as Common, set => ({
  handleValue: <T extends keyof Common>(key: T, value: Common[T]) => set((state) => {
    state[key] = value
    return state
  })
}))