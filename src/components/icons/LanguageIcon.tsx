import { FaJs, FaPython, FaJava } from "react-icons/fa";
import { SiTypescript, SiPhp } from "react-icons/si";

export const LanguageIcon = ({ language }: { language: string }) => {
  switch (language.toLowerCase()) {
    case "javascript":
      return <FaJs size={20} className="text-yellow-500" />;
    case "typescript":
      return <SiTypescript size={20} className="text-blue-500" />;
    case "python":
      return <FaPython size={20} className="text-blue-400" />;
    case "java":
      return <FaJava size={20} className="text-red-600" />;
    case "php":
      return <SiPhp size={20} className="text-indigo-500" />;
    default:
      return <span className="text-xs font-mono">{language}</span>;
  }
};
