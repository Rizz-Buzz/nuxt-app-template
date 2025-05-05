import { defineStore } from 'pinia'
import type { Toast, ToastType } from '~/src/types'

export const useToastStore = defineStore('toast', {
  state: () => ({
    toasts: [] as Toast[],
    counter: 0
  }),
  
  actions: {
    show(message: string, type: ToastType = 'success', duration: number = 3000) {
      const id = ++this.counter
      this.toasts.push({ id, message, type, duration })
      return id
    },
    
    remove(id: number) {
      this.toasts = this.toasts.filter(t => t.id !== id)
    }
  }
}) 