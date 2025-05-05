export interface User {
  id: string
  name: string
  email: string
}

export type ToastType = 'success' | 'error' | 'warning'

export interface Toast {
  id: number
  message: string
  type: ToastType
  duration?: number
}