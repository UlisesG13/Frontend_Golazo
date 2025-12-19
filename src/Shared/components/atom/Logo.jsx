import React from 'react';
import LogoGolazo from '/src/assets/img/LogoGolazo1.png';

const Logo = () => (
  <a href="/" className="flex items-center gap-3">
    <img
      src={LogoGolazo}
      alt="Logo Golazo"
      className="h-10 w-auto object-contain"
    />
    <span className="text-white font-bold text-2xl tracking-wide">
      Golazo
    </span>
  </a>
);

export default Logo;
