type HrefProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
  _target?: string;
  onClick?: (value: string) => void
}

export default function Href({ children, href, className, onClick, _target }: HrefProps) {
  const classNameStyle = className ? className : "px-4 py-2 rounded hover:bg-gray-100 transition";
  const target = _target ? _target : "_self";

  return (
    <a href={href} className={`${classNameStyle} cursor-pointer select-none`}
      target={target}
      onClick={() => {
        if (onClick) onClick(href.replace("#", ""));
      }}
    >
      {children}
    </a>
  )
}
