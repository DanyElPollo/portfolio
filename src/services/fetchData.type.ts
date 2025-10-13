// fetchData.type.ts
export interface InterfaceFetchGithubProps {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  fork: boolean
}
