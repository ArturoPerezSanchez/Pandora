import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, number, color, text } from '@storybook/addon-knobs';
import '../pandora-tabs.js';
import readme from '../README.md';

const DATA = [
  { label: 'Novedades', href: '#news' },
  { label: 'En oferta', href: '#offers' },
  { label: 'Seminuevos', href: '#secondhanded' },
];
const CONTENT = text('content', 'http://www.mocky.io/v2/5e6a865f2d000093005fa42f');

storiesOf('CORE|pandora-tabs', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add(
    'Default tabs',
    () => html`
      <br /><br />
      <style>
        html {
        }
      </style>
      <pandora-tabs .data=${DATA}></pandora-tabs>
    `,
  )
  .add('Custom tabs', () => {
    const SELECTED = number('SELECTED', 1);
    const TEXTCOLOR = color('text color', 'black');
    const BACKGROUNDCOLOR = color('background color', 'lightblue');
    const ACTIVEBACKGROUNDCOLOR = color('active background color', 'darkblue');
    const ACTIVETEXTCOLOR = color('active text color', 'white');
    return html`
      <br /><br />
      <style>
        html {
          --activebackgroundcolor: ${ACTIVEBACKGROUNDCOLOR};
          --activetextcolor: ${ACTIVETEXTCOLOR};
        }
      </style>
      <pandora-tabs
        .selected=${SELECTED}
        .content=${CONTENT}
        .data=${DATA}
        .textcolor=${TEXTCOLOR}
        .backgroundcolor=${BACKGROUNDCOLOR}
        .activebackgroundcolor=${ACTIVEBACKGROUNDCOLOR}
        .activetextcolor=${ACTIVETEXTCOLOR}
      ></pandora-tabs>
    `;
  });
