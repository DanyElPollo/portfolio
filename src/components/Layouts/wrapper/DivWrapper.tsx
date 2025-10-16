import type { ReactNode } from "react";

type DivWrapperType = {
  children: ReactNode
  className?: string
}

const DivWrapper = ({ children, className }: DivWrapperType) => {

  const base = className ?? 'flex flex-wrap justify-center gap-4 p-5'

  return (
    <div className={base}>
      {children}
    </div>
  )
}

export default DivWrapper