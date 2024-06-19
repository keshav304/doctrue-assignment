import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick }) => {
  const baseStyles = "px-6 py-3 rounded text-white font-semibold";
  const primaryStyles = "bg-blue-600 hover:bg-blue-700";
  const secondaryStyles = "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white";

  const styles = variant === 'primary' ? `${baseStyles} ${primaryStyles}` : `${baseStyles} ${secondaryStyles}`;

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
