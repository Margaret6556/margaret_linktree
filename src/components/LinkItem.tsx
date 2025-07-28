
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { ExternalLink } from 'lucide-react';
import { gsap } from 'gsap';

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
  const linkRef = useRef<HTMLAnchorElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const externalIconRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Staggered entrance animation
    gsap.fromTo(linkRef.current,
      {
        opacity: 0,
        y: 30,
        scale: 0.95,
        rotationX: -15
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: 0.8,
        delay: 0.5 + (index * 0.1),
        ease: "back.out(1.7)"
      }
    );
  }, [index]);

  const handleMouseEnter = () => {
    const tl = gsap.timeline();
    
    tl.to(linkRef.current, {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out"
    })
    .to(iconRef.current, {
      rotation: 360,
      duration: 0.6,
      ease: "back.out(1.7)"
    }, "-=0.2")
    .to(externalIconRef.current, {
      x: 3,
      duration: 0.3,
      ease: "power2.out"
    }, "-=0.4");
  };

  const handleMouseLeave = () => {
    const tl = gsap.timeline();
    
    tl.to(linkRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    })
    .to(externalIconRef.current, {
      x: 0,
      duration: 0.3,
      ease: "power2.out"
    }, "-=0.3");
  };

  return (
    <a 
      ref={linkRef}
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "w-full flex items-center justify-between link-card rounded-2xl px-6 py-4 mb-4 cursor-pointer group relative overflow-hidden",
        className
      )}
    >
      {/* Enhanced background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 via-green-100/30 to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="flex items-center relative z-10">
        {icon && (
          <div 
            ref={iconRef}
            className="mr-4 text-green-600 group-hover:text-green-700 transition-colors duration-300"
          >
            {icon}
          </div>
        )}
        <span className="font-semibold text-green-800 group-hover:text-green-900 transition-colors duration-300">
          {title}
        </span>
      </div>
      
      <ExternalLink 
        ref={externalIconRef}
        size={18} 
        className="text-green-500 group-hover:text-green-600 transition-colors duration-300 relative z-10" 
      />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
    </a>
  );
};

export default LinkItem;
