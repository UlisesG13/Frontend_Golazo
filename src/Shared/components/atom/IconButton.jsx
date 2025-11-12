const IconButton = ({ icon: Icon, onClick }) => (
  <button 
    onClick={onClick}
    className="text-white hover:text-gray-200 transition-colors p-2"
  >
    <Icon size={20} />
  </button>
);

const Button = ({ children, variant = 'primary', onClick }) => {
  const baseClasses = "px-6 py-3 rounded font-semibold transition-all duration-300";
  const variants = {
    primary: "bg-white text-black hover:bg-gray-100 hover:shadow-lg",
    secondary: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
  };
  
  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default IconButton;
export { Button };