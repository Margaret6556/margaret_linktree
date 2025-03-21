
import React, { useState } from 'react';
import { Check, Paintbrush } from 'lucide-react';
import { cn } from "@/lib/utils";

interface BackgroundPickerProps {
  currentBackground: string;
  onChange: (style: string) => void;
}

const backgrounds = [
  { id: 'gradient-blue', label: 'Blue Gradient', color: 'bg-blue-200' },
  { id: 'gradient-purple', label: 'Purple Gradient', color: 'bg-purple-200' },
  { id: 'gradient-rose', label: 'Rose Gradient', color: 'bg-rose-200' },
  { id: 'gradient-teal', label: 'Teal Gradient', color: 'bg-teal-200' },
  { id: 'mesh-blue', label: 'Blue Mesh', color: 'bg-blue-100' },
  { id: 'mesh-purple', label: 'Purple Mesh', color: 'bg-purple-100' },
  { id: 'mesh-rose', label: 'Rose Mesh', color: 'bg-rose-100' },
  { id: 'soft-white', label: 'Soft White', color: 'bg-white' },
  { id: 'subtle-pattern', label: 'Subtle Pattern', color: 'bg-gray-50' },
];

export const BackgroundPicker: React.FC<BackgroundPickerProps> = ({ 
  currentBackground, 
  onChange 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 animate-fade-in">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="glass rounded-full p-3 transition-all duration-300 hover:shadow-md flex items-center justify-center"
          aria-label="Change background"
        >
          <Paintbrush size={20} className="text-primary" />
        </button>
        
        {isOpen && (
          <div className="absolute bottom-full right-0 mb-2 glass rounded-lg p-4 w-56 shadow-lg animate-fade-up">
            <div className="mb-2 text-sm font-medium">Background Style</div>
            <div className="grid grid-cols-3 gap-2">
              {backgrounds.map((bg) => (
                <button
                  key={bg.id}
                  onClick={() => {
                    onChange(bg.id);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full aspect-square rounded-md border transition-all hover:scale-105 flex items-center justify-center",
                    bg.color,
                    currentBackground === bg.id && "ring-2 ring-primary"
                  )}
                  title={bg.label}
                >
                  {currentBackground === bg.id && <Check size={14} className="text-primary" />}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BackgroundPicker;
