import React from 'react';

/**
 * MOLÉCULA: Tarjeta de texto para la sección de Galería/Social Proof.
 */
export default function GalleryInfoCard() {
  return (
    <div className="flex h-full flex-col justify-between rounded-xl bg-gradient-to-br from-teal-50/90 to-white p-6 md:p-8 shadow-md">
      <div>
        <h3 className="mb-3 text-2xl font-semibold text-teal-800 leading-snug">
          Galería de Instagram
        </h3>
        <p className="mb-4 text-sm text-gray-700">Fotos de clientes usando nuestros productos — Inspírate con looks reales.</p>

        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-md bg-white/90 px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm hover:bg-white"
        >
          Mira la galería
          <span className="text-gray-400">→</span>
        </a>
      </div>

      <div className="flex items-center gap-3 mt-6">
        <button aria-label="previous" className="h-3 w-3 rounded-full bg-gray-300 hover:bg-teal-500 transition-colors" />
        <button aria-label="current" className="h-3 w-3 rounded-full bg-teal-600 shadow-md" />
        <button aria-label="next" className="h-3 w-3 rounded-full bg-gray-300 hover:bg-teal-500 transition-colors" />
      </div>
    </div>
  );
}