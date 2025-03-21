
import React from 'react';
import { cn } from "@/lib/utils";
import { ExternalLink } from 'lucide-react';

interface LinkItemProps {
  href: string;
  title: string;
  icon?: React.ReactNode;
  className?: string;
  index?: number;
}

export const LinkItem: React.FC<LinkItemProps> = ({ 
  href, 
  title, 
  icon,
  className,
  index = 0
}) => {
  const animationDelay = `animate-in-delay-${Math.min(index + 2, 5)}`;

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={cn(
        "w-full flex items-center justify-between link-card rounded-xl px-4 py-3 mb-3",
        animationDelay,
        className
      )}
    >
      <div className="flex items-center">
        {icon && <div className="mr-3">{icon}</div>}
        <span className="font-medium">{title}</span>
      </div>
      <ExternalLink size={16} className="text-muted-foreground" />
    </a>
  );
};

export default LinkItem;
