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

storiesOf('ÁTOMOS|pandora-tabs', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add('Default tabs', () => {
    const SELECTED = number('SELECTED', 0);
    const TEXTCOLOR = color('text color', 'black');
    const BACKGROUNDCOLOR = color('background color', 'white');
    const ACTIVEBACKGROUNDCOLOR = color('active background color', 'green');
    const ACTIVETEXTCOLOR = color('active text color', 'green');
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
