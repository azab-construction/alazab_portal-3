import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export const useLanguage = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set initial direction based on current language
    document.documentElement.setAttribute('dir', i18n.language === 'ar' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
  };

  const isRTL = i18n.language === 'ar';

  return {
    currentLanguage: i18n.language,
    toggleLanguage,
    isRTL
  };
};