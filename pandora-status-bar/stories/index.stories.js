import { storiesOf, html } from '@open-wc/demoing-storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs } from '@storybook/addon-knobs';
import '../src/pandora-status-bar.js';
import readme from '../README.md';

storiesOf('ÁTOMOS|pandora-status-bar', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add(
    'Barra de estado',
    () =>
      html`
        <br />
        <pandora-status-bar></pandora-status-bar>
      `,
  );
