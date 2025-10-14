import { useWindowListener } from "@hooks/useWindowListener";
import { useCallback, useState } from "react";

const Puntero = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const myEvent = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, [])

  useWindowListener<MouseEvent>('pointermove', myEvent);

  return (
    <div className="hidden md:flex select-none" style={{
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
    }} />
  );
}

export default Puntero