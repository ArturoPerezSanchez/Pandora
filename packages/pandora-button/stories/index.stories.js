import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, text } from '@storybook/addon-knobs';
import '../pandora-button.js';
import readme from '../README.md';

storiesOf('FORM|pandora-button', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add('Default button', () => {
    const TEXT = text('text', 'Default button');

    return html`
      <pandora-button .text=${TEXT}></pandora-button>
    `;
  });
