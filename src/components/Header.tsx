import { HiOutlineTranslate } from "react-icons/hi";
import Navbar from "./navbar/Navbar";
import BtnIcons from "./btn/BtnIcons";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

type Props = {
  className?: string
  active?: string
}

/**
 * The `Header` function in TypeScript React renders a header component with navigation links that
 * scroll to corresponding sections on the page.
 * @param {Props}  - The `Header` component is a functional component that displays a header section
 * with a navigation bar, a language translation selector, and a button for scrolling down the page.
 * @returns The `Header` component is returning a JSX structure that includes a header element with a
 * class name passed as a prop, a `Navbar` component with links from the `sections` array and an active
 * section based on the `sect` state, a `Translation` component, and a `BtnDown` component with an
 * `onClick` event handler `handleClick`.
 */
export default function Header({ className }: Props) {
  const { t } = useTranslation("nav");

  const sections = [
    { id: "inicio", label: t("inicio") },
    { id: "sobre_mi", label: t("sobre_mi") },
    { id: "proyectos", label: t("proyectos") },
  ];

  const [sect, setSect] = useState<string>(sections[0].id);

  const handleClick = () => {
    const currentIndex = sections.findIndex((s) => s.id === sect);
    const nextIndex = (currentIndex + 1) % sections.length;
    handleSelect(sections[nextIndex].id);
  };

  const handleSelect = (value: string) => {
    setSect(value);
    document.getElementById(value)?.scrollIntoView({ behavior: "smooth" });
  };

  return (<>
    <header className={`p-4 min-w-full ${className}`}>
      <Navbar links={sections} active={sect} />
    </header>
    <Translation />
    <BtnDown onClick={handleClick} />
  </>
  )
}

/* The `Translation` function in the provided code is a React functional component responsible for
handling language translation functionality. Here's a breakdown of what it does: */
const Translation = () => {
  const { i18n } = useTranslation("profile");
  const [lang, setLang] = useState(i18n.language || "es");

  const handleLanguageToggle = () => {
    const nextLang = lang === "es" ? "en" : "es";
    i18n.changeLanguage(nextLang);
    setLang(nextLang);
  };

  return (
    <BtnIcons className="fixed z-10 top-5 right-2 sm:right-1 lg:right-5 bg-gray-100 rounded-xl" onClick={handleLanguageToggle}>
      <HiOutlineTranslate size={32} color="black" />
    </BtnIcons>
  )
}

/**
 * The `BtnDown` function is a React component that renders a button with a down arrow icon and
 * triggers a specified onClick function when clicked.
 * @param  - The `BtnDown` component is a functional component that renders a button with a down arrow
 * icon (`FaAngleDown`) inside it. The component takes a single prop `onClick`, which is a function
 * that will be called when the button is clicked.
 * @returns A functional component named `BtnDown` is being returned. It renders a `<div>` element with
 * a specific class name and positioning. Inside this `<div>`, there is a `BtnIcons` component with
 * specific styling and an `onClick` event handler that triggers the function passed as a prop. The
 * `BtnIcons` component contains an icon from the `react-icons` library, specifically the `
 */
const BtnDown = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className='fixed bottom-7 right-2 sm:right-1 lg:right-5 z-50'>
      <BtnIcons
        className='transition duration-250 ease-in-out hover:scale-130 bg-white hover:bg-sky-300'
        onClick={onClick}
      >
        <FaAngleDown size={20} />
      </BtnIcons>
    </div>
  )
}
