import type { ReactNode } from "react";

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

export default IconWrapper