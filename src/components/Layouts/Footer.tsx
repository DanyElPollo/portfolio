
const Footer = ({ translate }: { translate: (value: string) => string }) => {
  return (
    <footer className="flex w-full bg-gray-400 justify-center items-center py-3 select-none">
      <span className="text-white text-center font-mono">{translate('footer')}&copy;</span>
    </footer>
  )
}

export default Footer