import { useWindowListener } from "@hooks/useWindowListener";
import { useCallback, useState } from "react";

const Puntero = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const move = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, [])

  const leave = useCallback((e: MouseEvent) => {
    if (!e.relatedTarget || !(e.relatedTarget as HTMLElement).ownerDocument.contains(e.relatedTarget as Node)) {
      setPosition({ x: -100, y: -100 });
    }
  }, []);

  useWindowListener<MouseEvent>('pointermove', move);

  useWindowListener<MouseEvent>('mouseout', leave);

  return (
    <div className="hidden select-none md:flex z-10" style={{
      position: 'fixed',
      backgroundColor: 'pink',
      borderRadius: '50%',
      opacity: 0.6,
      transform: `translate(${position.x}px, ${position.y}px)`,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
    }}
    />
  );
}

export default Puntero