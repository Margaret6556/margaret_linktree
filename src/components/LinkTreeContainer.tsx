
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface LinkTreeContainerProps {
  children: React.ReactNode;
  backgroundStyle: string;
  className?: string;
}

const backgroundStyles = {
  'gradient-blue': 'bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50',
  'gradient-purple': 'bg-gradient-to-br from-purple-50 via-purple-100 to-purple-50',
  'gradient-rose': 'bg-gradient-to-br from-rose-50 via-rose-100 to-rose-50',
  'gradient-teal': 'bg-gradient-to-br from-teal-50 via-teal-100 to-teal-50',
  'mesh-blue': 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-blue-50 to-white',
  'mesh-purple': 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-100 via-purple-50 to-white',
  'mesh-rose': 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-100 via-rose-50 to-white',
  'soft-white': 'bg-white',
  'subtle-pattern': 'bg-white bg-[url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23f0f0ff\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")]',
};

export const LinkTreeContainer: React.FC<LinkTreeContainerProps> = ({ 
  children, 
  backgroundStyle,
  className,
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const bgClass = backgroundStyles[backgroundStyle as keyof typeof backgroundStyles] || backgroundStyles['soft-white'];

  return (
    <div className={cn(
      "min-h-screen w-full transition-all duration-700 ease-out", 
      bgClass,
      className
    )}>
      <div className={cn(
        "max-w-lg mx-auto p-6 min-h-screen flex flex-col items-center justify-start",
        loaded ? "opacity-100" : "opacity-0"
      )}>
        {children}
      </div>
    </div>
  );
};

export default LinkTreeContainer;
