import type { ReactNode } from "react";
import Href from "./Href";
import IconWrapper from "@components/icons/IconWrapper";

interface LinkProps {
  href: string;
  renderIcon: (props: { className?: string }) => ReactNode;
}

const HrefIcon = ({ href, renderIcon }: LinkProps) => (
  <Href href={href} _target="_blank" className="p-1">
    <IconWrapper renderIcon={renderIcon} />
  </Href>
);

export default HrefIcon