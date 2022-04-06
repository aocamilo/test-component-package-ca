import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { withTranslation } from '../src/translator/withTranslation';
import { TranslateProvider } from '../src/translator/TranslateProvider';
import { TranslateWithProvider } from '../src/translator/Translate';
import { useTranslate } from '../src/translator/useTranslate';
import { WithTranslateProps } from '../src/translator/types';

const myTranslations = {
  schedule: 'calendario',
  tags: 'etiquetas',
  'log out': 'cerrar sesion',
  'sign up': 'crear cuenta',
  'log in': 'loguearse',
  connected: 'conectado',
  'share my activity': 'compartir mi actividad',
  channel: 'canal',
  security: 'seguridad',
  friends: 'amigos',
  subscriptions: 'suscripciones',
  wallet: 'cartera',
  configuration: 'configuracion',
  language: 'idioma',
  'dark theme': 'tema oscuro',
};

const TranslatorTest = ({ text }: { text: string }) => {
  const { t, setTranslations } = useTranslate();

  React.useEffect(() => {
    setTranslations(myTranslations);
  }, []);

  return <div>{t(text)}</div>;
};

const TranslatorTestWithProvider = ({ text }: { text: string }) => {
  return (
    <TranslateProvider>
      <TranslatorTest text={text} />
    </TranslateProvider>
  );
};

const TranslatorTestTwo = ({
  text,
  t,
  setTranslations,
}: WithTranslateProps) => {
  React.useEffect(() => {
    setTranslations(myTranslations);
  }, []);

  return <div>{t(text)}</div>;
};

const TranslatorTestThree = ({ text }: { text: string }) => {
  return (
    <TranslateWithProvider>
      {({ t, setTranslations }) => {
        setTranslations(myTranslations);
        return <p>{t(text)}</p>;
      }}
    </TranslateWithProvider>
  );
};

const TextWithTranslation = withTranslation(TranslatorTestTwo);

const App = () => {
  return (
    <>
      <TextWithTranslation text="dark theme" />
      <TranslatorTestThree text="share my activity" />
      <TranslatorTestWithProvider text="log out" />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
