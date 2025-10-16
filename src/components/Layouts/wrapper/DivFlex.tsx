import type { ReactNode } from "react";
import DivWrapper from "./DivWrapper";

type DivFlexProps = {
  children: ReactNode;
  className?: string;
  styleBase?: boolean
}

const DivFlex = ({ children, className, styleBase = false }: DivFlexProps) => {
  const base = styleBase ? styleBase : "flex flex-col items-center justify-center";
  return <DivWrapper className={`${base} ${className ?? ""}`}>{children}</DivWrapper>;
};

export default DivFlex;
