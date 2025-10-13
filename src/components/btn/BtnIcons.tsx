import React from "react";

interface BtnIconsProps {
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const BtnIcons: React.FC<BtnIconsProps> = ({ icon, className = "", onClick }) => {
  return (
    <button
      type="button"
      className={`mx-2 inline-flex items-center justify-center p-2 rounded-full transition focus:outline-none ${className}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default BtnIcons;
