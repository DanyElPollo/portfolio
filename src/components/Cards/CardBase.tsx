import DivWrapper from "@components/Layouts/wrapper/DivWrapper"
import type { ReactElement } from "react"

type CardBaseProps = {
  title: string,
  id: number,
  children?: ReactElement,
  description?: string | null,
  className?: string
}

const CardBase = ({ title, id, description, children, className }: CardBaseProps) => {

  const base = className ?? "flex flex-col min-w-56 w-60 lg:w-60 xl:w-68 max-w-72 h-56 mx-auto p-4 border-2 border-emerald-300 rounded-2xl transition-transform hover:scale-110 justify-between"

  return (
    <DivWrapper key={id} className={base}>
      <span className="text-2xl my-2.5">{title}</span>
      {description && <p className="font-semibold line-clamp-2 my-1.5">{description}</p>}
      {children}
    </DivWrapper>
  )
}

export default CardBase

