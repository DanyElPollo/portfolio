import { HiOutlineTranslate } from "react-icons/hi";
import Navbar from "./navbar/Navbar";
import BtnIcons from "./btn/BtnIcons";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";

type Props = {
  className?: string
  active?: string
}

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

  useEffect(() => { console.log(sect) }, [sect])

  return (<>
    <header className={`p-4 min-w-full ${className}`}>
      <Navbar links={sections} active={sect} />
      <Translation />
    </header>
    <BtnDown onClick={handleClick} />
  </>
  )
}

const Translation = () => {
  const { i18n } = useTranslation("profile");
  const [lang, setLang] = useState(i18n.language || "es");

  const handleLanguageToggle = () => {
    const nextLang = lang === "es" ? "en" : "es";
    i18n.changeLanguage(nextLang);
    setLang(nextLang);
  };

  return (
    <BtnIcons className="absolute right-4 bg-gray-100 rounded-xl" onClick={handleLanguageToggle}>
      <HiOutlineTranslate size={32} color="black" />
    </BtnIcons>
  )
}

const BtnDown = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className='fixed bottom-7 right-4 z-50'>
      <BtnIcons
        className=' hidden md:flex transition duration-250 ease-in-out hover:scale-130 bg-white hover:bg-sky-300'
        onClick={onClick}
      >
        <FaAngleDown size={20} />
      </BtnIcons>
    </div>
  )
}