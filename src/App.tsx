import BtnIcons from '@components/btn/BtnIcons'
import Principal from '@pages/Principal';
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const sections: string[] = ["inicio", "sobre_mi", "proyectos"];

function App() {
  const [sect, setSect] = useState(sections[0]);

  const handleClick = () => {
    const currentIndex = sections.indexOf(sect);
    const nextIndex = (currentIndex + 1) % sections.length;
    setSect(sections[nextIndex]);
    console.log(sect)
  };

  return (
    <div className="scroll-smooth">
      <div className='container fixed mx-auto bottom-0 min-w-full flex justify-center pb-4'>
        <BtnIcons
          icon={<FaAngleDown />}
          className='transition duration-250 ease-in-out hover:scale-130 bg-white hover:bg-sky-300'
          onClick={handleClick}
        />
      </div>

      <Principal sections={sections} sect={sect} />
    </div>
  );
}

export default App;
