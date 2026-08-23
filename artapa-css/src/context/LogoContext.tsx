import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LogoContextType {
  logoUrl: string | null;
}

const LogoContext = createContext<LogoContextType>({
  logoUrl: null,
});

export const LogoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  // Automatically check if favicon.ico or logo.png exists in the project root/public
  useEffect(() => {
    const candidates = ['/favicon.ico', '/logo.png', '/favicon.svg', '/favicon.png'];
    let isMounted = true;

    const checkNextCandidate = (index: number) => {
      if (index >= candidates.length || !isMounted) return;
      const testSrc = candidates[index];
      const img = new Image();
      img.onload = () => {
        if (isMounted) {
          setLogoUrl(testSrc);
          
          // Also dynamically ensure head favicon link is synced
          if (typeof document !== 'undefined') {
            let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
            if (!link) {
              link = document.createElement('link');
              link.rel = 'shortcut icon';
              document.getElementsByTagName('head')[0].appendChild(link);
            }
            link.href = testSrc;
          }
        }
      };
      img.onerror = () => {
        checkNextCandidate(index + 1);
      };
      img.src = testSrc;
    };

    checkNextCandidate(0);

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <LogoContext.Provider value={{ logoUrl }}>
      {children}
    </LogoContext.Provider>
  );
};

export const useLogo = (): LogoContextType => {
  return useContext(LogoContext);
};
