import Section from "@components/section/Section";
import profile_photo from '@assets/profile_photo.png'
import SocialLinks from "@components/social/SocialLinks";
import Href from "@components/href/Href";
import SkillsIcon from "@components/icons/SkillsIcon";
import { useTranslation } from "react-i18next";
import SectionProjects from "./SectionProjects";

export default function Principal() {
  const { t } = useTranslation('profile')

  return (
    <>
      <main className='flex flex-col gap-20 py-10 min-h-screen w-10/12 mx-auto'>
        <Section id="inicio" className='text-white items-center justify-center' >
          <div className="container mx-auto flex flex-col md:flex-row gap-5 justify-center items-center">
            <img src={profile_photo} alt="Foto de perfil" className="h-1/2 max-w-72 w-52 md:w-60 lg:w-68 md:h-1/2 rounded-4xl object-cover border-2 border-gray-300 shadow-lg transition duration-300 hover:scale-105" />
            <div className="flex flex-col items-center justify-center text-center gap-3">
              <h1 className="text-3xl md:text-4xl ">Daniel Andres Arenas Morales</h1>
              <p className="flex flex-col sm:flex-row">
                <span>{t('profession')}</span>
                <span className="hidden sm:flex mx-1.5"> |</span>
                <span>{t('area')}</span>
              </p>
              <SocialLinks />
            </div>

          </div>
        </Section>
        <Section id="sobre_mi" className='text-white pt-20'>
          <div className='w-auto mx-auto flex flex-col gap-4 '>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>{t('aboutme')}</h2>
            <div className=" ">
              <p className="text-justify">{t('aboutme_text')}</p>
            </div>
            <SkillsIcon className="hover:scale-125 md:size-8 m-1.5" />
          </div>
        </Section>
        <div className="border-2 border-gray-500 mx-3 select-none" />
        <Section id="proyectos" className='text-white items-center justify-center pt-20' >
          <div className='w-auto mx-auto px-4 flex flex-col gap-4 '>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>{t('projects')}</h2>
            <div className=" ">
              <p className="text-justify">{t('projects_text')} <Href href="https://github.com/DanyElPollo?tab=repositories" _target="_blank" className="p-0 m-0 text-sky-300 hover:text-white hover:underline">GitHub.co</Href></p>
            </div>
            {/* proyectos */}
            <div className="md:border-l-2 md:pl-4">
              <SectionProjects />
            </div>
            {/*  */}
          </div>
        </Section>
      </main >
      <footer className="flex w-full bg-gray-400 justify-center items-center py-3 select-none">
        <span className="text-white text-center font-mono">{t('footer')}&copy;</span>
      </footer>
    </>
  )
}
