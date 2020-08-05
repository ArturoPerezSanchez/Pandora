import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs } from '@storybook/addon-knobs';
import '../pandora-icons.js';
import readme from '../README.md';

storiesOf('DISPLAY|pandora-icons', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add(
    'Default icon',
    () => html`
      <pandora-icons></pandora-icons>
    `,
  );
