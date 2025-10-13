import useFetchData from "@hooks/useFetchData";
import { fetchRepoReadme } from "@services/fetchRepoReadme";
import Markdown from "react-markdown";

interface Props {
  repoUrl: string;
  onClose: () => void;
}

const ReadmePopup = ({ repoUrl, onClose }: Props) => {
  const [owner, repo] = repoUrl.replace("https://github.com/", "").split("/");
  const { resState, error } = useFetchData(() => fetchRepoReadme(owner, repo))

  return (
    <div className="text-black fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-3xl w-full overflow-y-auto max-h-[80vh]">
        <button onClick={onClose} className="float-right text-xl font-bold">✕</button>
        <h2 className="text-2xl font-semibold mb-4">README</h2>
        {error && <p className="text-red-500">{error}</p>}
        {resState ? (
          <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
            <Markdown>{resState}</Markdown>
          </div>
        ) : (
          <p>Cargando README...</p>
        )}
      </div>
    </div>
  );
};

export default ReadmePopup;
