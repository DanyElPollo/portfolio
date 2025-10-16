import CardBase from "@components/Cards/CardBase"
import Href from "@components/href/Href"
import { LanguageIcon } from "@components/icons/LanguageIcon"
import useFetchData from "@hooks/useFetchData"
import fetchDataGitHub from "@services/fetchDataGitHub"
import { FaGithubSquare } from 'react-icons/fa';

const SectionProjects = () => {

  const { resState: proyectos, error, isLoading } = useFetchData(() => fetchDataGitHub('DanyElPollo'))

  return (
    <>
      {isLoading && <span>
        Cargando</span>}

      {error &&
        <div className="flex justify-center items-center text-3xl p-5 border-2 border-red-200 bg-red-800 rounded-4xl">
          <span className="">{error}</span>
        </div>
      }
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-4">
        {proyectos && proyectos?.map((p) => (
          <CardBase key={p.id} id={p.id} title={p.name} description={p.description}>
            <div className="flex w-auto justify-between items-center" >
              {p.language && <LanguageIcon language={p.language} />}

              <Href href={p.html_url} className="mx-2 inline-flex items-center justify-center p-2 rounded-full transition-all duration-300 ease-in-out bg-white text-black hover:scale-125 hover:bg-black hover:text-white" _target="_blank"
              >
                <FaGithubSquare size={"20px"} />
              </Href>
            </div>
          </CardBase>
        ))}
      </section>
    </>
  )
}

export default SectionProjects