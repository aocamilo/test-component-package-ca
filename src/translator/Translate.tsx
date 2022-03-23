import { translations } from './constants';
import { TranslateArgs } from './interfaces';
import React from 'react';

interface Props {
  children: (args: TranslateArgs) => JSX.Element;
}

export const Translate = ({ children }: Props) => {
  const translate = (text: string) => {
    return text
      .trim()
      .toLowerCase()
      .split(' ')
      .map(word => translations[word] || word)
      .join(' ');
  };

  return <>{children({ t: translate })}</>;
};
