import BtnIcons from "@components/btn/BtnIcons";
import Href from "@components/href/Href";
import { HiOutlineTranslate } from "react-icons/hi";

type Section = {
  id: string;
  label: string;
};

type NavbarProps = {
  links?: Section[],
  active?: string,
}

const capitalize = (link: string): string => {
  return link.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

export default function Navbar({ links, active }: NavbarProps) {

  let navLinks = links;

  if (!navLinks) {
    navLinks = [
      { id: "inicio", label: "Inicio" },
      { id: "sobre_mi", label: "Sobre me" },
      { id: "proyectos", label: "Proyectos" },
    ];
  }

  return (
    <nav className="container mx-auto flex justify-center items-end">
      <ul className="w-auto sm:w-automd:w-[300px] md:w-[500px] flex gap-5 justify-center bg-white border border-gray-300 rounded-full px-8 py-3 shadow-sm">
        {
          navLinks.map((link) => (
            <li key={link.id}>
              <Href href={`#${link.id}`} className={active === link.id ? "text-sky-500 font-bold" : ""}>
                {
                  capitalize(link.label)
                }
              </Href>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}
