export interface ServerLanguage {
  code: string;
  name: string;
  targets: string[];
}

export interface Locale {
  settings: string;
  translate: string;
  select_native: string;
  select_learn: string;
}
