import type { BtnBaseProps } from "./BtnBase.type";
import "./BtnBase.style.css"

export default function BtnBase({ label, children, className, disabled, onClick }: BtnBaseProps) {
  return (
    <button type="button" className={`btn-base ${className ?? ''}`.trim()} disabled={disabled} onClick={onClick}>
      {label && <span className="btn-label">{label}</span>}
      {children && <span className="btn-children">{children}</span>}
    </button>
  )
}
