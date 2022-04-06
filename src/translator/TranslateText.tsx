import React from 'react';
import { Translate } from '.';

interface Props {
  translations: Record<string, string>;
  text: string;
}

export const TranslateText = ({ translations, text }: Props) => {
  return (
    <Translate>
      {({ t, setTranslations }) => {
        setTranslations(translations);
        return <p>{t(text)}</p>;
      }}
    </Translate>
  );
};
