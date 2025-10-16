import HrefIcon from "@components/href/HrefIcon";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="flex gap-5">
      <HrefIcon
        href="https://github.com/DanyElPollo"
        renderIcon={({ className }) => <FaGithub className={className} />}
      />
      <HrefIcon
        href="https://linkedin.com/in/daniel-arenas-morales"
        renderIcon={({ className }) => <FaLinkedin className={className} />}
      />
    </div>
  );
}
