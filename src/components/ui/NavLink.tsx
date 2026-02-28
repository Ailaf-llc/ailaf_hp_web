import React from 'react';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, onClick }) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const element = document.querySelector(to);
    element?.scrollIntoView({ behavior: 'smooth' });
    if (onClick) {
      onClick();
    }
  };
  
  return (
    <a href={to} onClick={handleClick} className="text-gray-600 hover:text-sky-600 transition-colors duration-300">
      {children}
    </a>
  );
};

export default NavLink;
