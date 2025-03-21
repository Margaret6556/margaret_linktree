
import React, { useState, useEffect } from 'react';
import { LinkTreeContainer } from '@/components/LinkTreeContainer';
import { Profile } from '@/components/Profile';
import { LinkItem } from '@/components/LinkItem';
import { BackgroundPicker } from '@/components/BackgroundPicker';
import { Footer } from '@/components/Footer';
import { 
  Github, 
  Instagram, 
  Twitter, 
  Youtube, 
  Linkedin, 
  Globe, 
  Mail
} from 'lucide-react';

// Sample data - this could be fetched from a backend or CMS
const links = [
  {
    title: 'Personal Website',
    href: 'https://example.com',
    icon: <Globe size={18} />
  },
  {
    title: 'GitHub',
    href: 'https://github.com',
    icon: <Github size={18} />
  },
  {
    title: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: <Linkedin size={18} />
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com',
    icon: <Twitter size={18} />
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com',
    icon: <Instagram size={18} />
  },
  {
    title: 'YouTube Channel',
    href: 'https://youtube.com',
    icon: <Youtube size={18} />
  },
  {
    title: 'Contact Me',
    href: 'mailto:hello@example.com',
    icon: <Mail size={18} />
  }
];

const Index = () => {
  const [backgroundStyle, setBackgroundStyle] = useState('gradient-blue');
  const [avatarSrc, setAvatarSrc] = useState('/placeholder.svg');
  
  // Get background preference from localStorage on mount
  useEffect(() => {
    const savedBg = localStorage.getItem('backgroundStyle');
    if (savedBg) {
      setBackgroundStyle(savedBg);
    }
  }, []);
  
  // Save background preference to localStorage
  useEffect(() => {
    localStorage.setItem('backgroundStyle', backgroundStyle);
  }, [backgroundStyle]);

  return (
    <LinkTreeContainer backgroundStyle={backgroundStyle}>
      <Profile 
        avatarSrc={avatarSrc}
        name="Your Name"
        description="Frontend Developer & UI Designer • Building beautiful web experiences"
      />
      
      <div className="w-full max-w-md">
        {links.map((link, index) => (
          <LinkItem 
            key={link.title}
            href={link.href}
            title={link.title}
            icon={link.icon}
            index={index}
          />
        ))}
      </div>
      
      <Footer />
      
      <BackgroundPicker 
        currentBackground={backgroundStyle}
        onChange={setBackgroundStyle}
      />
    </LinkTreeContainer>
  );
};

export default Index;
