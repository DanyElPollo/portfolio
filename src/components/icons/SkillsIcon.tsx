import CardBase from '@components/Cards/CardBase';
import DivWrapper from '@components/Layouts/wrapper/DivWrapper';
import { useTranslation } from 'react-i18next';
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

const SkillsIcon = ({ className }: { className: string }) => {
  const { t } = useTranslation('skills')
  const base = `text-3xl transition ${className}`;

  const styleCard = "flex flex-col text-center min-w-60 w-64 sm:w-68 md:w-72 lg:max-h-48 lg:w-96 max-w-96 h-56 mx-auto p-4 border-2 border-gray-300 bg-sky-900 rounded-2xl transition-transform hover:scale-110 justify-start"


  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-around mt-5 md:py-4 xl:px-24 2xl:px-48  ">
      {/* Lenguajes */}
      <CardBase title={t('language')} id={1} className={styleCard}>
        <DivWrapper>
          <FaJs title="JavaScript" className={`text-yellow-400 ${base}`} />
          <SiTypescript title="TypeScript" className={`text-blue-500 ${base}`} />
          <FaJava title="Java" className={`text-red-600 ${base}`} />
          <FaPython title="Python" className={`text-blue-400 ${base}`} />
        </DivWrapper>
      </CardBase>

      {/* Frameworks y Librerías */}
      <CardBase title={t('f_and_l')} id={2} className={styleCard}>
        <DivWrapper>
          <FaReact title="React" className={`text-cyan-400 ${base}`} />
          <SiNestjs title="NestJS" className={`text-red-500 ${base}`} />
          <SiFastapi title="FastAPI" className={`text-green-500 ${base}`} />
          <FaHardHat title="Hardhat" className={`text-yellow-500 ${base}`} />
          <SiTailwindcss title="TailwindCSS" className={`text-teal-400 ${base}`} />
        </DivWrapper>
      </CardBase>

      {/* Bases de datos */}
      <CardBase title={t('db')} id={3} className={styleCard}>
        <DivWrapper>
          <SiPostgresql title="PostgreSQL" className={`text-grey-800 ${base}`} />
          <SiMysql title="MySQL" className={`text-amber-500 ${base}`} />
        </DivWrapper>
      </CardBase>

      {/* Herramientas */}
      <CardBase title={t('tools')} id={4} className={styleCard}>
        <DivWrapper>
          <FaGitAlt title="Git" className={`text-orange-500 ${base}`} />
          <FaDocker title="Docker" className={`text-blue-400 ${base}`} />
          <FaLinux title="Linux" className={`text-yellow-300 ${base}`} />
          <SiRabbitmq title="RabbitMQ" className={`text-orange-500 ${base}`} />
        </DivWrapper>
      </CardBase>
    </section>
  );
}


export default SkillsIcon