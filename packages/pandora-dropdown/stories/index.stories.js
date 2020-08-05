import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, text } from '@storybook/addon-knobs';
import '../pandora-dropdown.js';
import readme from '../README.md';

storiesOf('FORM|pandora-dropdown', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add('Default dropdown', () => {
    const TEXT = text('text', 'Default dropdown');

    return html`
      <pandora-dropdown .text=${TEXT}></pandora-dropdown>
    `;
  });
