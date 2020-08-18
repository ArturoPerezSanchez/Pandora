import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, text, color, object, select } from '@storybook/addon-knobs';
import '../pandora-list.js';
import readme from '../README.md';

const ICONOPTIONS = {
  '\u{1F3F9}': '\u{1F3F9}',
  '❤️': '❤️',
  '\u{2B50}': '\u{2B50}',
  '\u{2728}': '\u{2728}',
  '': '',
};

const ELEMENTSDATA = [
  {
    title: 'elemento 1',
    childs: [
      { title: 'elemento 1.1' },
      { title: 'elemento 1.2' },
      { title: 'elemento 1.3', childs: [{ title: 'elemento 1.3.1' }, { title: 'elemento 1.3.2' }] },
      { title: 'elemento 1.4' },
    ],
  },
  { title: 'elemento 2' },
  { title: 'elemento 3' },
];

storiesOf('DISPLAY|pandora-list', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add('Default list', () => {
    const ELEMENTS = object('elements', ELEMENTSDATA);
    return html`
      <div style="width: 300px;">
        <style></style>
        <pandora-list .elements="${ELEMENTS}"></pandora-list>
      </div>
    `;
  })
  .add('Custom list', () => {
    const ENDPOINTURL = text(
      'endpointurl',
      'https://run.mocky.io/v3/9413dcdf-4ebc-4dbb-b6cf-f028a3a58cd3',
    );
    const LISTSTYLE = text('list style', 'none');
    const TEXTCOLOR = color('text color', 'white');
    const BACKGROUNDCOLOR = color(
      'background color',
      'linear-gradient(135deg, darkblue, #f000f0, darkred)',
    );
    const BLOCKBORDER = text('block border', '2px solid black');

    const CUSTOMICON = select('custom icon', ICONOPTIONS, '\u{2B50}');
    return html`
      <div style="width: 300px;">
        <style></style>
        <pandora-list
          .endpointurl="${ENDPOINTURL}"
          .listStyle="${LISTSTYLE}"
          .textColor="${TEXTCOLOR}"
          .backgroundColor="${BACKGROUNDCOLOR}"
          .blockBorder="${BLOCKBORDER}"
          .customIcon="${CUSTOMICON}"
        ></pandora-list>
      </div>
    `;
  });
