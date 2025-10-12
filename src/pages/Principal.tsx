import Header from "@components/Header";
import Section from "@components/section/Section";
import profile_photo from '@assets/profile_photo.png'
import SocialLinks from "@components/social/SocialLinks";
import { useEffect } from "react";

interface PrincipalProps {
  sections: string[];
  sect: string;
}

export default function Principal({ sect, sections }: PrincipalProps) {

  useEffect(() => {
    const element = document.getElementById(sect);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [sect])

  return (
    <>
      <Header className="bg-transparent fixed" sections={sections} />
      <main className='flex flex-col gap-20 py-10 min-h-screen md:w-4xl mx-auto'>
        <Section id="inicio" className='text-white items-center justify-center' >
          <div className="container mx-auto flex flex-col md:flex-row gap-10 justify-center ">
            <img src={profile_photo} alt="Foto de perfil" className="h-80 rounded-4xl object-cover border-2 border-gray-300 shadow-lg transition duration-300 hover:scale-105" />
            <div className="max-w-lg gap-5 flex flex-col font-sans justify-center items-center">
              <h1 className="text-4xl">Daniel Andres Arenas Morales</h1>
              <p className="">Ingeniero de Sistemas | Desarrollador Full Stack</p>
              <SocialLinks />
            </div>

          </div>
        </Section>
        <Section id="sobre_mi" className='text-white pt-20'>
          <div className='w-auto mx-auto px-4'>
            <h2 className='text-5xl font-bold mb-4'>Sobre mí</h2>
            <div className=" ">
              <p className="text-justify"> Profesional en Ingeniería de Sistemas con sólidos conocimientos en desarrollo de software, programación,
                administración de bases de datos, computación en la nube y metodologías ágiles. Experiencia en
                mantenimiento de equipos de cómputo y en proyectos académicos e independientes que integran lenguajes
                como Python, JavaScript y PHP, además de contar con conocimientos en herramientas CMS como
                wordpress. Destaco por mi capacidad de aprendizaje autónomo, pensamiento analítico y orientación a
                resultados, así como por mi disposición para el trabajo en equipo y la resolución de problemas
                tecnológicos.</p>
            </div>
          </div>
        </Section>
        <Section id="proyectos" className='text-white items-center justify-center' >
          <div className='w-auto mx-auto px-4'>
            <h2 className='text-5xl font-bold mb-4'>Sobre mí</h2>
            <div className=" ">
              <p className="text-justify"> Profesional en Ingeniería de Sistemas con sólidos conocimientos en desarrollo de software, programación,
                administración de bases de datos, computación en la nube y metodologías ágiles. Experiencia en
                mantenimiento de equipos de cómputo y en proyectos académicos e independientes que integran lenguajes
                como Python, JavaScript y PHP, además de contar con conocimientos en herramientas CMS como
                wordpress. Destaco por mi capacidad de aprendizaje autónomo, pensamiento analítico y orientación a
                resultados, así como por mi disposición para el trabajo en equipo y la resolución de problemas
                tecnológicos.</p>
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
