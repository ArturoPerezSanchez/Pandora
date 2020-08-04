import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs } from '@storybook/addon-knobs';
import '../pandora-cards.js';
import readme from '../README.md';

storiesOf('DISPLAY|pandora-cards', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add(
    'Default cards',
    () => html`
      <pandora-cards> </pandora-cards>
    `,
  );
