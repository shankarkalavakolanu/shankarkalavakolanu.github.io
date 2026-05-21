export const ACCENTS = {
  home:            '#D4A24C',
  buckeyeVertical: '#BB0000',
  quantumLeap:     '#6B4F9E',
  dreamingFalcon:  '#BB0000',
} as const;

export type AccentKey = keyof typeof ACCENTS;
