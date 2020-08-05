import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs } from '@storybook/addon-knobs';
import '../pandora-gallery.js';
import readme from '../README.md';

storiesOf('DISPLAY|pandora-gallery', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add(
    'Default gallery',
    () => html`
      <pandora-gallery></pandora-gallery>
    `,
  );
