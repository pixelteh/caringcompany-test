export type ColorsType =
  | "White"
  | 'twilightBlue'
  | 'black'
  | 'veryLightPink'
  | 'brownishGrey'
  | 'brownGrey'
  | 'dullOrange'
  | 'reddish'
  | 'lightblue'
  | 'greenBlue'
  | 'white90'
  | 'niceBlue'
  | 'blackOne'
  | 'blackTwo'
  | 'blackThree';

export type ColorProps = { [key in ColorsType]: string };

export const Colors = {
  twilightBlue: '#094e87',
  black: '#000',
  veryLightPink: '#e6e6e6',
  brownishGrey: '#666',
  brownGrey: '#999',
  dullOrange: '#df7833',
  reddish: '#c24040',
  lightblue: '#69cdff',
  greenBlue: '#03ae73',
  white60: 'rgba(255, 255, 255, 0.6)',
  white90: 'rgba(255, 255, 255, 0.9)',
  white06: 'rgba(255, 255, 255, 0.06)',
  niceBlue: '#0f6ebe',
  black60: '#080808',
  blackOne: '#080808',
  blackTwo: '#121212',
  blackThree: '#202020',
};
