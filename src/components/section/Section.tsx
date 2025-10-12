type Props = {
  children?: React.ReactNode,
  className?: string,
  id?: string,
  ref?: string
}

export default function Section({ children, className, id }: Props) {
  return (
    <section id={id} className={`flex flex-col gap-5 select-none min-h-screen min-w-full ${className}`}>
      {children}
    </section>
  )
}
