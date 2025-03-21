
import React from 'react';
import { cn } from "@/lib/utils";

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
  return (
    <div className={cn("w-full flex flex-col items-center my-8 animate-in-delay-1", className)}>
      <div className="relative mb-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full blur-xl opacity-70 animate-pulse-soft"></div>
        <img 
          src={avatarSrc} 
          alt={name} 
          className="w-24 h-24 rounded-full object-cover border-2 border-white shadow-lg relative z-10 animate-scale-in"
        />
      </div>
      <h1 className="text-2xl font-medium mb-1 animate-fade-up">{name}</h1>
      {description && (
        <p className="text-muted-foreground text-sm max-w-xs text-center mb-6 animate-fade-up">
          {description}
        </p>
      )}
    </div>
  );
};

export default Profile;
