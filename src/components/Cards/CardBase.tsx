import type { ReactElement } from "react"

type CardBaseProps = {
  title: string,
  id: number,
  children?: ReactElement,
  description?: string | null,
  className?: string
}

const CardBase = ({ title, id, description, children, className }: CardBaseProps) => {

  const base = className ?? "flex flex-col  min-w-60 w-64 max-w-72 h-56 mx-auto p-4 border-2 border-emerald-300 rounded-2xl transition-transform hover:scale-110 justify-between"

  return (
    <div key={id} className={base}>
      <span className="text-2xl justify-center my-2.5 ">{title}</span>
      {description && <p className="font-semibold line-clamp-2 my-1.5">{description}</p>}
      {children}
    </div>
  )
}

export default CardBase

