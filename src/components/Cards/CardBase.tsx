import type { ReactElement } from "react"

type CardBaseProps = {
  title: string,
  id: number,
  children?: ReactElement
}

const CardBase = ({ title, id, children }: CardBaseProps) => {

  return (
    <div className="flex flex-col min-w-36 mx-auto p-4 border-2 border-emerald-300 rounded-2xl transition-transform hover:scale-110 justify-between" key={id}>
      <span className="text-2xl justify-center my-2.5">{title}</span>

      <p className="font-semibold line-clamp-2 my-1.5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit amet vero doloribus iste cupiditate tenetur, quasi enim at earum nostrum praesentium assumenda eveniet deserunt unde fuga voluptatum excepturi possimus quam?
        Nemo in incidunt ad saepe quaerat voluptatibus nisi quasi velit dolorum eum. Delectus soluta repellendus commodi deserunt molestias odio, pariatur, praesentium quasi tempore laborum a distinctio eius quos aut ab?</p>
      {children}
    </div>
  )
}

export default CardBase

