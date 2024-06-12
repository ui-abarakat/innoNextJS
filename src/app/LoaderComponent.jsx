"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Preloader from '../components/MainLayouts/Preloader/Preloader';

const LoaderComponent = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!router) return; // Ensure router is available

    const handleStart = (url) => (url !== router.asPath) && setLoading(true);
    const handleComplete = (url) => (url === router.asPath) && setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return loading ? <Preloader /> : null;
};

export default LoaderComponent;