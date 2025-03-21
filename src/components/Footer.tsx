
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-auto pt-8 pb-4 text-xs text-center text-muted-foreground animate-in-delay-5">
      <p>© {new Date().getFullYear()} • Your Custom Link Tree</p>
    </footer>
  );
};

export default Footer;
