import BtnIcons from '@components/btn/BtnIcons'
import Header from '@components/Header';
import Puntero from '@components/pointer/Puntero';
import Principal from '@pages/Principal';
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const sections: string[] = ["inicio", "sobre_mi", "proyectos"];

function App() {
  const [sect, setSect] = useState(sections[0]);

  const handleClick = () => {
    const currentIndex = sections.indexOf(sect);
    const nextIndex = (currentIndex + 1) % sections.length;
    handleSelect(sections[nextIndex]);
  };

  const handleSelect = (value: string) => {
    setSect(value);
    document.getElementById(value)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scroll-smooth">
      <Puntero />

      <div className='container fixed mx-auto bottom-0 min-w-full flex justify-center pb-4'>
        <BtnIcons
          icon={<FaAngleDown />}
          className='transition duration-250 ease-in-out hover:scale-130 bg-white hover:bg-sky-300'
          onClick={handleClick}
        />
      </div>

      <Header className="bg-transparent fixed z-10 hidden md:flex" sections={sections} handleSection={handleSelect} active={sect} />
      <Principal sect={sect} />
    </div>
  );
}

export default App;
