import { useEffect } from 'react';

export function useWindowListener<T extends Event>(eventType: string, listener: (e: T) => void) {
  useEffect(() => {
    window.addEventListener(eventType, listener as EventListener);
    return () => {
      window.removeEventListener(eventType, listener as EventListener);
    };
  }, [eventType, listener]);
}
