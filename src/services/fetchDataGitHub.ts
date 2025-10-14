import type { InterfaceFetchGithubProps } from "./fetchData.type";

const GITHUB_API = "https://api.github.com";

const fetchDataGitHub = async (username: string): Promise<InterfaceFetchGithubProps[]> => {

  try {
    const response = await fetch(`${GITHUB_API}/users/${username}/repos`)

    if (!response.ok) {
      throw new Error(`Error al obtener repositorios: ${response.status}`);
    }

    const data = await response.json();
    console.log(data)
    return data.filter((repo: InterfaceFetchGithubProps) => !repo.fork).map((repo: InterfaceFetchGithubProps) => (
      {
        id: repo.id,
        name: repo.name,
        html_url: repo.html_url,
        description: repo.description,
        language: repo.language,
      }
    ));
  } catch (error) {
    console.error("Error en fetchUserRepos:", error);
    throw error;
  }

}

export default fetchDataGitHub