import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs } from '@storybook/addon-knobs';
import '../pandora-carousel.js';
import readme from '../README.md';

storiesOf('DISPLAY|pandora-carousel', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add(
    'Default carousel',
    () => html`
      <pandora-carousel></pandora-carousel>
    `,
  );
