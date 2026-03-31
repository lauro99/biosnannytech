'use client';

import { useEffect } from 'react';

export default function ScrollToTop() {
  useEffect(() => {
    // Restauración manual del scroll para evitar que el navegador recuerde la posición
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Llevar al usuario al tope de la página
    window.scrollTo(0, 0);

    // Si la URL tiene un "hash" (ej. #contacto), lo limpiamos para no saltar hacia esa sección al recargar
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  return null;
}