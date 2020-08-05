import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs } from '@storybook/addon-knobs';
import '../pandora-radio-button.js';
import readme from '../README.md';

storiesOf('FORM|pandora-radio-button', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add(
    'Default radio-button',
    () => html`
      <pandora-radio-button></pandora-radio-button>
    `,
  );
