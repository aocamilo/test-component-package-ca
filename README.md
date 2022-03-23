How to use?

with HOC:

```JSX
  import { withTranslation } from '../src/translator/withTranslation';

  const Test: React.FC<{ text: string; t: (text: string) => string }> = ({
    text = 'Hello mom',
    t,
  }) => {
    return <div>{t(text)}</div>;
  };

  const TextWithTranslation = withTranslation()(Test);

  <TextWithTranslation text="allow notifications" />
```

with Render Props:

```JSX
  import { Translate } from '../src/translator/Translate';

  <Translate>{({ t }) => <p>{t("subscribe frequently")}</p>}</Translate>
```
