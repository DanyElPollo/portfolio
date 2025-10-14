import Header from '@components/Header';
import Puntero from '@components/pointer/Puntero';
import Principal from '@pages/Principal';

const App = () => {

  return (
    <div className="scroll-smooth">
      <Puntero />

      {/* Header con traducciones dinámicas */}
      <Header
        className="bg-transparent fixed z-10 hidden md:flex"
      />

      <Principal />
    </div>
  );
};

export default App;
