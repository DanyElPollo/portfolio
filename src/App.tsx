import Footer from '@components/Layouts/Footer';
import Header from '@components/Layouts/Header';
import Main from '@components/Layouts/Main';
import Puntero from '@components/pointer/Puntero';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation('profile')


  return (
    <div className="scroll-smooth">
      <Puntero />

      {/* Header con traducciones dinámicas */}
      <Header
        className="bg-transparent fixed z-10 hidden md:flex"
      />

      <Main translate={t} />

      <Footer translate={t} ></Footer>
    </div>
  );
};

export default App;
