import React from 'react';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, onClick }) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const element = document.querySelector(to);
    if (element) {
      event.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (to.startsWith('#')) {
      // If we are on a subpage, element won't be found. Go to home page with hash.
      window.location.href = `/${to}`;
      return;
    }
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
