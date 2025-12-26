// src/components/Button.jsx
const Button = ({ children, variant = 'primary', size = 'md', ...props }) => {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0';
  
  const variants = {
    primary: 'bg-gradient-primary hover:bg-gradient-hover text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-cleanpro-blue border-2 border-cleanpro-blue hover:bg-blue-50',
    outline: 'bg-transparent text-gray-700 border border-gray-300 hover:border-gray-400',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;