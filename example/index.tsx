import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Translate } from '../src/translator/Translate';
import { withTranslation } from '../src/translator/withTranslation';

const Test: React.FC<{ text: string; t: (text: string) => string }> = ({
  text = 'Hello mom',
  t,
}) => {
  return <div>{t(text)}</div>;
};

const TextWithTranslation = withTranslation()(Test);

const App = () => {
  return (
    <div>
      <Translate>{({ t }) => <p>{t('subscribe frequently')}</p>}</Translate>
      <TextWithTranslation text="allow notifications" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
