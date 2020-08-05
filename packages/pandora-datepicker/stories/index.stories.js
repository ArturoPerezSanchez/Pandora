import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, text } from '@storybook/addon-knobs';
import '../pandora-datepicker.js';
import readme from '../README.md';

storiesOf('FORM|pandora-datepicker', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add('Default datepicker', () => {
    const TEXT = text('text', 'Default datepicker');

    return html`
      <pandora-datepicker .text=${TEXT}></pandora-datepicker>
    `;
  });
