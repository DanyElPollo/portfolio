import type { ReactNode } from "react"

export interface BtnBaseProps {
  label: string
  iconLeft?: ReactNode
  iconRight?: ReactNode
  className?: string
  disabled?: boolean
  onClick?: () => void
}