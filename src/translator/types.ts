export interface TranslateContextType {
  t: (text: string) => string;
  setTranslations: (myTranslations: Record<string, string>) => void;
}

export interface WithTranslateProps extends TranslateContextType {
  text: string;
}
