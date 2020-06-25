import { storiesOf, html } from '@open-wc/demoing-storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, text } from '@storybook/addon-knobs';
import '../pandora-list.js';
import readme from '../README.md';

storiesOf('ÁTOMOS|pandora-list', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add('Default list', () => {
    const ENDPOINTURL = text('endpointurl', '');
    const ELEMENTS = text('elements', '');
    const LISTSTYLE = text('liststyle', '');
    const COLOR = text('color', '');
    const BACKGROUNDCOLOR = text('backgroundcolor', '');
    const BLOCKBORDER = text('blockborder', '');
    const CUSTOMICON = text('customicon', '');
    const HOVERCOLOR = text('hovercolor', '');
    return html`
      <pandora-list
        endpointurl="${ENDPOINTURL};"
        elements="${ELEMENTS};"
        listStyle="${LISTSTYLE};"
        color="${COLOR};"
        backgroundColor="${BACKGROUNDCOLOR};"
        blockborder="${BLOCKBORDER};"
        customIcon="${CUSTOMICON};"
        hoverColor="${HOVERCOLOR};"
      ></pandora-list>
    `;
  });
