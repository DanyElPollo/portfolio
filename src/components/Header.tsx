import Navbar from "./navbar/Navbar";

type Props = {
  className?: string;
  sections?: string[]
  handleSection?: (value: string) => void
  active?: string
}

export default function Header({ className, sections, active, handleSection }: Props) {
  return (
    <header className={`p-4 min-w-full ${className}`}>
      <Navbar links={sections} onSelect={handleSection} active={active} />
    </header>
  )
}
