import React from 'react';
import { useContext } from 'react';
import { TranslateContext } from './constants';
import { TranslateProvider } from './TranslateProvider';
import { TranslateContextType } from './types';

interface Props {
  children: (args: TranslateContextType) => JSX.Element;
}

const Translate = ({ children }: Props) => {
  const { t, setTranslations } = useContext(TranslateContext);
  return <>{children({ t, setTranslations })}</>;
};

export const TranslateWithProvider = ({ children }: Props) => {
  return (
    <TranslateProvider>
      <Translate>{children}</Translate>
    </TranslateProvider>
  );
};
