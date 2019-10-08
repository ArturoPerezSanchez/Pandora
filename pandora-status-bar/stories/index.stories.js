import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { PandoraStatusBar } from '../src/PandoraStatusBar.js';
import '../pandora-status-bar.js';

storiesOf('pandora-status-bar', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(PandoraStatusBar))
  .add(
    'Alternative Title',
    () => html`
      <pandora-status-bar .title=${'Something else'}></pandora-status-bar>
    `,
  );
