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

Allowed translations

```JSON
{
  hello: "hola",
  mom: "mama",
  login: "login",
  home: "casa",
  start: "inicio",
  follow: "seguir",
  explore: "explorar",
  subscribe: "suscribirse",
  buy: "comprar",
  next: "siguiente",
  last: "ultimo",
  back: "atras",
  search: "buscar",
  sell: "vender",
  description: "descripcion",
  about: "acerca",
  live: "en vivo",
  direct: "directo",
  profile: "perfil",
  messages: "mensajes",
  send: "enviar",
  more: "mas",
  notifications: "notificaciones",
  trending: "tendencia",
  show: "mostrar",
  see: "ver",
  image: "imagen",
  like: "me gusta",
  comment: "comentar",
  views: "vistas",
  process: "proceso",
  loading: "cargando",
  question: "pregunta",
  questions: "preguntas",
  frequently: "frecuentemente",
  ask: "preguntar",
  asked: "preguntado",
  after: "despues",
  before: "antes",
  dislike: "no me gusta",
  arrives: "llega",
  arrive: "llegar",
  end: "fin",
  better: "mejor",
  worse: "peor",
  return: "volver",
  build: "construir",
  enter: "entrar",
  account: "cuenta",
  dark: "oscuro",
  light: "luz",
  mode: "modo",
  empty: "vaciar",
  table: "tabla",
  button: "boton",
  element: "elemento",
  my: "mi",
  text: "texto",
  translated: "traducido",
  allow: "permitir",
}
```
