import Section from "@components/section/Section";
import profile_photo from '@assets/profile_photo.png'
import SocialLinks from "@components/social/SocialLinks";
import { useEffect } from "react";
import Href from "@components/href/Href";
import ProyectLayout from "./ProyectLayout";
import SkillsIcon from "@components/icons/SkillsIcon";

interface PrincipalProps {
  sect?: string;
}

export default function Principal({ sect }: PrincipalProps) {

  useEffect(() => {
    const element = sect ? document.getElementById(sect) : "";
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [sect])

  return (
    <>
      <main className='flex flex-col gap-20 py-10 min-h-screen  w-9/12 lg:w-4xl mx-auto'>
        <Section id="inicio" className='text-white items-center justify-center' >
          <div className="container mx-auto flex flex-col md:flex-row gap-10 justify-center items-center">
            <img src={profile_photo} alt="Foto de perfil" className="h-1/2 w-72 md:w-80 md:h-1/2 rounded-4xl object-cover border-2 border-gray-300 shadow-lg transition duration-300 hover:scale-105" />
            <div className="max-w-lg gap-5 flex flex-col font-sans justify-center items-center">
              <h1 className="text-3xl md:text-4xl">Daniel Andres Arenas Morales</h1>
              <p className="">Ingeniero de Sistemas | Desarrollador Full Stack</p>
              <SocialLinks />
            </div>

          </div>
        </Section>
        <Section id="sobre_mi" className='text-white pt-20'>
          <div className='w-auto mx-auto px-4'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>Sobre mí</h2>
            <div className=" ">
              <p className="text-justify"> Profesional en Ingeniería de Sistemas con sólidos conocimientos en desarrollo de software, programación,
                administración de bases de datos, computación en la nube y metodologías ágiles. Experiencia en
                mantenimiento de equipos de cómputo y en proyectos académicos e independientes que integran lenguajes
                como Python, JavaScript y PHP, además de contar con conocimientos en herramientas CMS como
                wordpress. Destaco por mi capacidad de aprendizaje autónomo, pensamiento analítico y orientación a
                resultados, así como por mi disposición para el trabajo en equipo y la resolución de problemas
                tecnológicos.</p>
            </div>
            <SkillsIcon className="hover:scale-125 md:size-8 m-1.5" />
          </div>
        </Section>
        <div className="border-2 border-gray-500 mx-3 select-none" />
        <Section id="proyectos" className='text-white items-center justify-center' >
          <div className='w-auto mx-auto px-4 flex flex-col gap-4 '>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>Proyectos</h2>
            <div className=" ">
              <p className="text-justify">He desarrollados varios proyectos en los cuales se pone a prueba el ingenio y la resolucion de problemas ademas de mi forma instintiva de modularizar, comparto con ustedes una descripcion y enlaces directos a mi repositorio en <Href href="https://github.com/DanyElPollo?tab=repositories" _target="_blank" className="p-0 m-0 text-sky-300 hover:text-white hover:underline">GitHub.co</Href></p>
            </div>
            <div className="md:border-l-2 md:pl-4">
              <ProyectLayout />
            </div>
          </div>
        </Section>
        {/* 
        <section id="proyectos" className='select-none'>
          <h2>Proyectos</h2>
        </section>
        <section id="skills" className='select-none'>
          <h2>Skills</h2>
        </section>
        <section id="knowledge" className='select-none'>
          <h2>Conocimientos</h2>
        </section> */}
      </main >
      <footer>
        {/* contenido del footer */}
      </footer>
    </>
  )
}
