import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, text } from '@storybook/addon-knobs';
import '../pandora-checkbox.js';
import readme from '../README.md';

storiesOf('FORM|pandora-checkbox', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add('Default checkbox', () => {
    const TEXT = text('text', 'Default checkbox');

    return html`
      <pandora-checkbox .text=${TEXT}></pandora-checkbox>
    `;
  });
