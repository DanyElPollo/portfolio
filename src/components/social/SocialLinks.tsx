import Href from "@components/href/Href";
import type { ReactNode } from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface IconWrapperProps {
  renderIcon: (props: { className?: string }) => ReactNode;
}

const IconWrapper = ({ renderIcon }: IconWrapperProps) => {
  return (
    <div className="text-white hover:scale-150 hover:text-sky-300 transition">
      {renderIcon({ className: "size-9" })}
    </div>
  );
};

interface LinkProps {
  href: string;
  renderIcon: (props: { className?: string }) => ReactNode;
}

const Link = ({ href, renderIcon }: LinkProps) => (
  <Href href={href} _target="_blank" className="p-1">
    <IconWrapper renderIcon={renderIcon} />
  </Href>
);

export default function SocialLinks() {
  return (
    <div className="flex gap-5">
      <Link
        href="https://github.com/DanyElPollo"
        renderIcon={({ className }) => <FaGithub className={className} />}
      />
      <Link
        href="https://linkedin.com/in/daniel-arenas-morales"
        renderIcon={({ className }) => <FaLinkedin className={className} />}
      />
    </div>
  );
}
