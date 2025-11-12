const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/>
      </svg>
    </div>
    <span className="text-white font-bold text-xl">Golazo</span>
  </div>
);

export default Logo;