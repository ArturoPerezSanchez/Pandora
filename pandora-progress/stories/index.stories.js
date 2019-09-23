import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { PandoraProgress } from '../src/PandoraProgress.js';
import '../pandora-progress.js';

storiesOf('pandora-progress', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(PandoraProgress))
  .add(
    'Alternative Title',
    () => html`
      <pandora-progress .title=${'Something else'}></pandora-progress>
    `,
  );
