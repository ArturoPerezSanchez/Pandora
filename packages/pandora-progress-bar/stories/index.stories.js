import { storiesOf, html } from '@open-wc/demoing-storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, text, number } from '@storybook/addon-knobs';
import '../pandora-progress-bar.js';
import readme from '../README.md';

storiesOf('DISPLAY|pandora-progress-bar', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add('Barra amarilla dos colores', () => {
    const TITLE = text('title', 'Título');
    const PERCENTAGE = number('percentage', '90');
    const COLOR = text(
      'color',
      'repeating-linear-gradient(-45deg,  black,  black 20px,   yellow 20px, yellow 40px)',
    );
    return html`
      <br />
      <pandora-progress-bar
        title="${TITLE}"
        percentage="${PERCENTAGE}"
        color="${COLOR}"
      ></pandora-progress-bar>
    `;
  })
  .add(' Barra roja dos colores', () => {
    const TITLE = text('title', 'Título');
    const PERCENTAGE = number('percentage', 90);
    const COLOR = text(
      'color',
      'repeating-linear-gradient(-45deg,  red,  red 20px,   #ffffff 20px, #ffffff 40px)',
    );
    return html`
      <br />
      <pandora-progress-bar
        title="${TITLE}"
        percentage="${PERCENTAGE}"
        color="${COLOR}"
      ></pandora-progress-bar>
    `;
  })
  .add('Barra multicolor', () => {
    const TITLE = text('title', 'Título');
    const PERCENTAGE = number('percentage', 50);
    const COLOR = text(
      'color',
      '  linear-gradient(90deg, #000 ,darkblue, #ff00ff, red, green, yellow )',
    );
    return html`
      <br />
      <pandora-progress-bar
        title="${TITLE}"
        percentage="${PERCENTAGE}"
        color="${COLOR}"
      ></pandora-progress-bar>
    `;
  });
