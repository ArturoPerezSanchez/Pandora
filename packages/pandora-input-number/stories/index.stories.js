import { storiesOf, html } from '@open-wc/demoing-storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs } from '@storybook/addon-knobs';
import '../pandora-input-number.js';
import readme from '../README.md';

// const types = {
//   number: 'number',
//   range: 'range',
// };

// const weightOptions = { range: true, min: 100, max: 900, step: 50 };
// const lengthOptions = { range: true, min: 1, max: 100, step: 1 };

storiesOf('FORM|pandora-input-number', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add(
    'Default Input Number',
    () => html`
      <pandora-input-number></pandora-input-number>
    `,
  );
