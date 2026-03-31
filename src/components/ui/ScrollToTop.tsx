'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    __INITIAL_LOAD_DONE__?: boolean;
  }
}

export default function ScrollToTop() {
  useEffect(() => {
    // Si ya estamos navegando dentro de la página (soft navigation),
    // no interrumpimos el comportamiento de los botones
    if (window.__INITIAL_LOAD_DONE__) {
      if (window.location.hash) {
        const targetId = window.location.hash.substring(1); // Quitamos el '#'
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100); 
      }
      return;
    }

    // Marcamos que ya cargamos inicialmente para no volver a correr esto al navegar con botones
    window.__INITIAL_LOAD_DONE__ = true;

    // Detecta el tipo de navegación para saber si fue una recarga manual o abrir en nueva página
    const entries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
    const isReload = entries.length > 0 && entries[0].type === 'reload';

    if (isReload) {
      // SOLO en caso de Recargar la página explícitamente:
      // Restauración manual del scroll para evitar que el navegador recuerde la posición
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }

      // Llevar al usuario al tope de la página
      window.scrollTo(0, 0);

      // Si la URL tiene un "hash" (ej. #contacto), lo limpiamos al recargar
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    } else {
      // Si la carga fue normal (ej. abrir una nueva ventana en un enlace con hash #servicios)
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto'; // Permitimos al navegador fluir naturalmente
      }
      
      // Forzamos llegar a la sección elegida por si Next.js tarda un segundo en renderizar
      if (window.location.hash) {
        const targetId = window.location.hash.substring(1); // Quitamos el '#'
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'auto' });
          }
        }, 100); 
      }
    }
  }, []);

  return null;
}