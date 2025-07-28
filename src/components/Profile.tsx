
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { gsap } from 'gsap';

interface ProfileProps {
  avatarSrc: string;
  name: string;
  description?: string;
  className?: string;
}

export const Profile: React.FC<ProfileProps> = ({ 
  avatarSrc, 
  name, 
  description,
  className
}) => {
  const profileRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    
    // Animate avatar with floating effect
    tl.fromTo(avatarRef.current, 
      { 
        opacity: 0, 
        scale: 0.8, 
        y: 30,
        rotation: -5
      },
      { 
        opacity: 1, 
        scale: 1, 
        y: 0,
        rotation: 0,
        duration: 1,
        ease: "back.out(1.7)"
      }
    )
    .fromTo(nameRef.current,
      { 
        opacity: 0, 
        y: 20,
        scale: 0.95
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out"
      },
      "-=0.5"
    )
    .fromTo(descRef.current,
      { 
        opacity: 0, 
        y: 15,
        scale: 0.98
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power3.out"
      },
      "-=0.3"
    );

    // Add floating animation to avatar
    gsap.to(avatarRef.current, {
      y: -8,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });

  }, []);

  return (
    <div ref={profileRef} className={cn("w-full flex flex-col items-center my-8", className)}>
      <div ref={avatarRef} className="relative mb-6 group">
        {/* Enhanced glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 via-green-300/20 to-green-500/30 rounded-full blur-xl opacity-70 animate-pulse-soft scale-110"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-300/20 to-green-400/20 rounded-full blur-lg opacity-50 scale-105"></div>
        
        {/* Avatar image */}
        <img 
          src={avatarSrc} 
          alt={name} 
          className="w-28 h-28 rounded-full object-cover border-4 border-white/80 shadow-2xl relative z-10 transition-all duration-300 group-hover:border-green-200/60 group-hover:shadow-green-200/30"
        />
        
        {/* Hover effect ring */}
        <div className="absolute inset-0 rounded-full border-2 border-green-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
      </div>
      
      <h1 
        ref={nameRef}
        className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent"
      >
        {name}
      </h1>
      
      {description && (
        <p 
          ref={descRef}
          className="text-green-700/80 text-base max-w-xs text-center mb-6 leading-relaxed font-medium"
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default Profile;
