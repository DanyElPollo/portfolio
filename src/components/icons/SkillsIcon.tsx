import CardBase from '@components/Cards/CardBase';
import {
  FaJs,
  FaReact,
  FaGitAlt,
  FaDocker,
  FaLinux,
  FaJava,
  FaPython,
  FaHardHat
} from 'react-icons/fa';
import {
  SiFastapi,
  SiNestjs,
  SiPostgresql,
  SiRabbitmq,
  SiTailwindcss,
  SiTypescript,
  SiMysql,
} from 'react-icons/si';

export default function SkillsIcon({ className }: { className: string }) {
  const base = `text-3xl transition ${className}`;

  const styleCard = "flex flex-col text-center min-w-60 w-64 lg:w-72 max-w-80 h-56 mx-auto p-4 border-2 border-gray-300 bg-sky-900 rounded-2xl transition-transform hover:scale-110 justify-around"


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 mt-5 md:p-4">
      {/* Lenguajes */}
      <CardBase title='Lenguajes' id={1} className={styleCard}>
        <div className="flex flex-wrap justify-center gap-4">
          <FaJs title="JavaScript" className={`text-yellow-400 ${base}`} />
          <SiTypescript title="TypeScript" className={`text-blue-500 ${base}`} />
          <FaJava title="Java" className={`text-red-600 ${base}`} />
          <FaPython title="Python" className={`text-blue-400 ${base}`} />
        </div>
      </CardBase>

      {/* Frameworks y Librerías */}
      <CardBase title='Frameworks y Librerías' id={2} className={styleCard}>
        <div className="flex flex-wrap justify-center gap-4">
          <FaReact title="React" className={`text-cyan-400 ${base}`} />
          <SiNestjs title="NestJS" className={`text-red-500 ${base}`} />
          <SiFastapi title="FastAPI" className={`text-green-500 ${base}`} />
          <FaHardHat title="Hardhat" className={`text-yellow-500 ${base}`} />
          <SiTailwindcss title="TailwindCSS" className={`text-teal-400 ${base}`} />
        </div>
      </CardBase>

      {/* Bases de datos */}
      <CardBase title='Bases de Datos' id={3} className={styleCard}>
        <div className="flex flex-wrap justify-center gap-4">
          <SiPostgresql title="PostgreSQL" className={`text-grey-800 ${base}`} />
          <SiMysql title="MySQL" className={`text-amber-500 ${base}`} />
        </div>
      </CardBase>

      {/* Herramientas */}
      <CardBase title='Herramientas' id={4} className={styleCard}>
        <div className="flex flex-wrap justify-center gap-4">
          <FaGitAlt title="Git" className={`text-orange-500 ${base}`} />
          <FaDocker title="Docker" className={`text-blue-400 ${base}`} />
          <FaLinux title="Linux" className={`text-yellow-300 ${base}`} />
          <SiRabbitmq title="RabbitMQ" className={`text-orange-500 ${base}`} />
        </div>
      </CardBase>
    </div>
  );
}
