"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import MainLoader from './main-loader';

export default function LoaderHandler() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Show loader when route changes
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [pathname]); // Trigger when route changes

  return isLoading ? <MainLoader /> : null;
}