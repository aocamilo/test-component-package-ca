import { TranslateContext } from './constants';
import { TranslateProvider } from './TranslateProvider';
import { WithTranslateProps } from './types';
import React from 'react';

export const withTranslation = (Wrapped: React.FC<WithTranslateProps>) => {
  return (props: { text: string }) => {
    return (
      <TranslateProvider>
        <TranslateContext.Consumer>
          {({ t, setTranslations }) => {
            const newProps = { ...props, t, setTranslations };
            return <Wrapped {...newProps} />;
          }}
        </TranslateContext.Consumer>
      </TranslateProvider>
    );
  };
};
