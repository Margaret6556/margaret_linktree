
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
  Mail,
  Code,
  Zap,
  Palette,
  Database,
  Smartphone,
  Heart
} from 'lucide-react';

// Modern web3 developer links
const links = [
  {
    title: 'Margaret Portfolio Website',
    href: 'https://margaretcezar.com/startups',
    icon: <Globe size={20} />
  },
  {
    title: 'GitHub',
    href: 'https://github.com/margaret6556',
    icon: <Github size={20} />
  },
  {
    title: 'LinkedIn',
    href: 'https://linkedin.com/in/margaretcezar',
    icon: <Linkedin size={20} />
  },
  {
    title: 'X.com',
    href: 'https://x.com/lofelle',
    icon: <Twitter size={20} />
  },
  {
    title: 'Online Resume',
    href: 'https://exquisite-kitten-f89ea9.netlify.app/',
    icon: <Code size={20} />
  },
  {
    title: 'Cybersecurity Blog',
    href: 'https://margaretcezar.github.io/cybersecurity-blog/',
    icon: <Zap size={20} />
  },
  {
    title: 'YouTube Channel',
    href: 'https://youtube.com/@margaretcezar',
    status: 'coming soon',
    icon: <Youtube size={18} />
  },
  {
    title: 'Contact Me',
    href: 'mailto:cezarlofellem@gmail.com',
    icon: <Mail size={20} />
  }
];

const Index = () => {
  const [backgroundStyle, setBackgroundStyle] = useState('green-gradient');
  const [avatarSrc, setAvatarSrc] = useState('/myghpic.png');
  
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
        name="Margaret"
        description="Web3 Front-End Developer & UI/UX Designer • Building the future of decentralized applications with beautiful, accessible interfaces"
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
