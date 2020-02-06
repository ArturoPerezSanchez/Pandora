import { storiesOf, html } from '@open-wc/demoing-storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs } from '@storybook/addon-knobs';
import '../pandora-calendar.js';
import readme from '../README.md';

storiesOf('ÁTOMOS|pandora-calendar', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add('Calendar', () => {
    html`
      <pandora-calendar></pandora-calendar>
    `;
  });
