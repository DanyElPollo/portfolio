import Navbar from "./navbar/Navbar";

export default function Header({ className, sections }: { className?: string, sections?: string[] }) {
  return (
    <header className={`p-4 min-w-full ${className}`}>
      <Navbar links={sections} />
    </header>
  )
}
