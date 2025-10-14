import type { CSSProperties } from "react"

type Props = {
  children?: React.ReactNode,
  className?: string,
  id?: string,
  ref?: string
  style?: CSSProperties
}

export default function Section({ children, className, id, style }: Props) {
  return (
    <section id={id} className={`container flex flex-col gap-5 select-none min-h-screen min-w-full ${className}`} style={style}>
      {children}
    </section>
  )
}
