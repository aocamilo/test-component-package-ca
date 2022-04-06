import { useContext } from 'react';
import { TranslateContext } from './constants';

export const useTranslate = () => {
  const { t, setTranslations } = useContext(TranslateContext);

  return { t, setTranslations };
};
