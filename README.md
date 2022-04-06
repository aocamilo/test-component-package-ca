How to use?

with HOC:

```JSX
  import { withTranslation } from 'test-component-package-ca';

  const myTranslations = {
  schedule: "calendario",
  tags: "etiquetas",
  "log out": "cerrar sesion",
  "sign up": "crear cuenta",
  "log in": "loguearse",
  connected: "conectado",
  "share my activity": "compartir mi actividad",
  channel: "canal",
  security: "seguridad",
  friends: "amigos",
  subscriptions: "suscripciones",
  wallet: "cartera",
  configuration: "configuracion",
  language: "idioma",
  "dark theme": "tema oscuro",
};

  const TranslatorTest = ({
  text,
  t,
  setTranslations,
}: WithTranslateProps) => {
  useEffect(() => {
    setTranslations(myTranslations);
  }, []);

  return <div>{t(text)}</div>;
};

export default withTranslation(TranslatorTestTwo);
```

with Render Props:

```JSX
  import { Translate } from 'test-component-package-ca';

  export const TranslatorTest = ({ text }: { text: string }) => {
  return (
    <Translate>
      {({ t, setTranslations }) => {
        setTranslations(myTranslations);
        return <p>{t(text)}</p>;
      }}
    </Translate>
  );
};
```

with Hooks:
wrap the code with:

```TSX
  import { TranslateProvider } from 'test-component-package-ca'
  <TranslateProvider>
   <Component />
  </TranslateProvider>

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


```

and then you can use inside your component

```TSX
import { useTranslate } from 'test-component-package-ca'
  const {t, addTranslations} = useTranslate();
```

or you can simply use the default component:

```TSX
  import { TranslateText } from 'test-component-package-ca'

  <TranslateText translations={myTranslations} text="log out" />
```

Base translations

```JSON
{
  "hello": "hola",
  "mom": "mama",
  "login": "login",
  "home": "casa",
  "start": "inicio",
  "follow": "seguir",
  "explore": "explorar",
  "subscribe": "suscribirse",
  "buy": "comprar",
  "next": "siguiente",
  "last": "ultimo",
  "back": "atras",
  "search": "buscar",
  "sell": "vender",
  "description": "descripcion",
  "about": "acerca",
  "live": "en vivo",
  "direct": "directo",
  "profile": "perfil",
  "messages": "mensajes",
  "send": "enviar",
  "more": "mas",
  "notifications": "notificaciones",
  "trending": "tendencia",
  "show": "mostrar",
  "see": "ver",
  "image": "imagen",
  "like": "me gusta",
  "comment": "comentar",
  "views": "vistas",
  "process": "proceso",
  "loading": "cargando",
  "question": "pregunta",
  "questions": "preguntas",
  "frequently": "frecuentemente",
  "ask": "preguntar",
  "asked": "preguntado",
  "after": "despues",
  "before": "antes",
  "dislike": "no me gusta",
  "arrives": "llega",
  "arrive": "llegar",
  "end": "fin",
  "better": "mejor",
  "worse": "peor",
  "return": "volver",
  "build": "construir",
  "enter": "entrar",
  "account": "cuenta",
  "dark": "oscuro",
  "light": "luz",
  "mode": "modo",
  "empty": "vaciar",
  "table": "tabla",
  "button": "boton",
  "element": "elemento",
  "my": "mi",
  "text": "texto",
  "translated": "traducido",
  "allow": "permitir",
}
```

or you can use the addTranslations function to add your own translations in the format shown above
