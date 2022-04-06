import { FC } from 'react';
import { useState } from 'react';
import { basicTranslations, TranslateContext } from './constants';
import React from 'react';

export const TranslateProvider: FC = ({ children }) => {
  const [translations, setTranslations] = useState(basicTranslations);

  const t = (text: string) => translations[text];

  return (
    <TranslateContext.Provider
      value={{
        t,
        setTranslations: (myTranslations: Record<string, string>) => {
          setTranslations(myTranslations);
        },
      }}
    >
      {children}
    </TranslateContext.Provider>
  );
};
