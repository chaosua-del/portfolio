import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useSearchParams } from 'react-router-dom';
import type { Language } from '@/lib/i18n/i18n';
import { supportedLngs } from '@/lib/i18n/i18n';

export default function RootLayout() {
  const [searchParams, setSearchParams] = useSearchParams();

  const { i18n } = useTranslation();

  const redirectLang = searchParams.get('redirectLang');

  useEffect(() => {
    if (
      redirectLang &&
      supportedLngs.includes(redirectLang.toLowerCase() as Language)
    ) {
      i18n.changeLanguage(redirectLang);

      const updatedSearchParams = new URLSearchParams(searchParams);
      updatedSearchParams.delete('redirectLang');
      setSearchParams(updatedSearchParams); // Set the updated instance
    }
  }, [i18n, redirectLang, searchParams, setSearchParams]);

  return <Outlet />;
}
