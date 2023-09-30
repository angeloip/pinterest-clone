import { create } from 'zustand'

interface State {
  value: string
  updateValue: (newValue: string) => void
}

export const usePhotoStore = create<State>((set) => ({
  value: 'dog',
  updateValue: (newValue: string) => {
    set({ value: newValue })
  }
}))
