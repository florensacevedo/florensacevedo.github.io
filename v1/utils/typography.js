import ReactDOM from 'react-dom/server';
import React from 'react';
import Typography from 'typography';
import { GoogleFont } from 'react-typography';
import CodePlugin from 'typography-plugin-code';

const options = {
  googleFonts: [
    {
      name: 'Lato',
      styles: [
        '200',
        '300',
        '400',
        '700',
      ],
    },
    {
      name: 'Fira Sans',
      styles: [
        '200',
        '300',
        '400',
        '400i',
        '700',
      ],
    },
  ],
  headerFontFamily: ['Fira Sans', 'sans-serif'],
  bodyFontFamily: ['Lato', 'sans-serif'],
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  //scale: 2.25,
  plugins: [
    new CodePlugin(),
  ],
};

const typography = new Typography(options);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
  if (typeof document !== 'undefined') {
    const googleFonts = ReactDOM.renderToStaticMarkup(
      React.createFactory(GoogleFont)({ typography }),
    );
    const head = document.getElementsByTagName('head')[0];
    head.insertAdjacentHTML('beforeend', googleFonts);
  }
}

export default typography;
