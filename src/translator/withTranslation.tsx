import { translations } from './constants';
import React from 'react';

interface Props {
  t: (text: string) => string;
  text: string;
}

export const withTranslation = () => (Wrapped: React.ComponentType<Props>) => {
  const translate = (text: string) => {
    return text
      .trim()
      .toLowerCase()
      .split(' ')
      .map(word => translations[word] || word)
      .join(' ');
  };
  return (props: { text: string }) => {
    const newProps = { ...props, t: translate };
    return <Wrapped {...newProps} />;
  };
};
