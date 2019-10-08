import { storiesOf, html } from '@open-wc/demoing-storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, text, number } from '@storybook/addon-knobs';
import '../src/pandora-progress-bar.js';
import readme from '../README.md';

storiesOf('ÁTOMOS|pandora-progress-bar', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add('Barra amarilla dos colores', () => {
    const TITLE = text('title', 'Título');
    const PORCENTAGE = number('percentage', 90);
    const COLOR = text(
      'color',
      'repeating-linear-gradient(-45deg,  black,  black 20px,   yellow 20px, yellow 40px);',
    );
    return html`
      <br />
      <pandora-progress-bar
        title="${TITLE}"
        percentage="${PORCENTAGE}"
        color="${COLOR}"
      ></pandora-progress-bar>
    `;
  })
  .add(' Barra roja dos colores', () => {
    const TITLE = text('title', 'Título');
    const PORCENTAGE = number('percentage', 90);
    const COLOR = text(
      'color',
      'repeating-linear-gradient(-45deg,  red,  red 20px,   #ffddff 20px, #ffddff 40px);',
    );
    return html`
      <br />
      <pandora-progress-bar
        title="${TITLE}"
        percentage="${PORCENTAGE}"
        color="${COLOR}"
      ></pandora-progress-bar>
    `;
  });
