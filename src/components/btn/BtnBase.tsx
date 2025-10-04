import type { BtnBaseProps } from "./BtnBase.type";
import "./BtnBase.style.css"

export default function BtnBase({ label, iconLeft,
  iconRight, className, disabled, onClick }: BtnBaseProps) {
  return (
    <button className={`btn-base ${className ?? ''}`.trim()} disabled={disabled} onClick={onClick}>
      {iconLeft && <span className="icon-left">{iconLeft}</span>}
      <span className="btn-label">{label}</span>
      {iconRight && <span className="icon-right">{iconRight}</span>}
    </button>
  )
}
