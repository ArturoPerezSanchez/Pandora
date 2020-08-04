import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs } from '@storybook/addon-knobs';
import '../pandora-input.js';
import readme from '../README.md';

storiesOf('FORM|pandora-input', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add(
    'Default input',
    () => html`
      <pandora-input></pandora-input>
    `,
  );
