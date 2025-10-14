const GITHUB_API = "https://api.github.com";

export const fetchRepoReadme = async (owner: string, repo: string): Promise<string> => {
  try {
    const response = await fetch(`${GITHUB_API}/repos/${owner}/${repo}/readme`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error al obtener README: ${response.status}`);
    }

    const data = await response.json();

    const decoded = new TextDecoder("utf-8").decode(
      Uint8Array.from(atob(data.content), c => c.charCodeAt(0))
    );

    return decoded;
  } catch (error) {
    console.error("Error en fetchRepoReadme:", error);
    throw error;
  }
};
