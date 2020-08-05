import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs } from '@storybook/addon-knobs';
import '../pandora-slider.js';
import readme from '../README.md';

storiesOf('FORM|pandora-slider', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add(
    'Default slider',
    () => html`
      <pandora-slider></pandora-slider>
    `,
  );
