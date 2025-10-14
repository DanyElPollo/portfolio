type HrefProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
  _target?: string;
}

export default function Href({ children, href, className, _target }: HrefProps) {
  const classNameStyle = className ? className : "px-4 py-2 rounded hover:bg-gray-100 transition";
  const target = _target ? _target : "_self";

  return (
    <a href={href} className={`${classNameStyle} cursor-pointer select-none`}
      target={target}>
      {children}
    </a>
  )
}
