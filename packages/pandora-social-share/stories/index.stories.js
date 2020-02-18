import { storiesOf, html } from '@open-wc/demoing-storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs } from '@storybook/addon-knobs';
import '../pandora-social-share.js';
import readme from '../README.md';

storiesOf('ÁTOMOS|pandora-social-share', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add(
    'Social share',
    () => html`
      <pandora-social-share></pandora-social-share>
    `,
  );
