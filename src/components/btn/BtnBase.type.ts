import type { ReactNode } from "react"

export interface BtnBaseProps {
  label?: string,
  children?: ReactNode
  className?: string
  disabled?: boolean
  onClick?: () => void
}