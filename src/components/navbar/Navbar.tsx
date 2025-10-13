import Href from "@components/href/Href";


const capitalize = (link: string): string => {
  return link.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

export default function Navbar({ links, active, onSelect }: { links?: string[], active?: string, onSelect?: (value: string) => void }) {

  let navLinks = links;

  if (!navLinks) {
    navLinks = ["inicio", "sobre_mi", "proyectos"];
  }

  return (
    <nav className="container mx-auto flex justify-center items-end">
      <ul className="w-auto sm:w-automd:w-[300px] md:w-[500px] flex gap-5 justify-center bg-white border border-gray-300 rounded-full px-8 py-3 shadow-sm">
        {
          navLinks.map((link) => (
            <li key={link}>
              <Href href={`#${link}`} onClick={onSelect} className={active === link ? "text-sky-500 font-bold" : ""}>
                {
                  capitalize(link)
                }
              </Href>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}
