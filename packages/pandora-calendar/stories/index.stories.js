import { storiesOf, html } from '@open-wc/demoing-storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, text, number } from '@storybook/addon-knobs';
import '../pandora-calendar.js';
import readme from '../README.md';

const DATES = [
  { text: 'Comunion de Antonio', date: '02/25/2020' },
  { text: '', date: '02/20/2020' },
  { text: 'Reunion con clientes', date: '03/21/2020' },
];

storiesOf('ÁTOMOS|pandora-calendar', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add('Calendar', () => {
    const bubblecolor = text('bubblecolor', 'red');
    const bubblesecondarycolor = text('bubblesecondarycolor', 'black');
    const bubbletextcolor = text('bubbletextcolor', 'white');
    const highlighteddaycolor = text('highlighteddaycolor', '#aa0000');
    const weekstart = number('weekstart', '1');
    const defaultdate = text('defaultdate', '');
    const weekdaysvalues = text('weekdaysvalues', 'narrow');
    const weekdaystextcolor = text('weekdaystextcolor', 'yellow');
    const weekdaysbackgroundcolor = text('weekdaysbackgroundcolor', 'black');
    const headertextcolor = text('headertextcolor', 'white');
    const headerbackgroundcolor = text('headerbackgroundcolor', '#aa0000');
    const dayscolor = text('dayscolor', 'white');
    const daysbackgroundcolor = text('daysbackgroundcolor', '#444');
    return html`
      <div style="width: 50%; margin: auto;">
        <pandora-calendar
          .bubblecolor=${bubblecolor}
          .bubblesecondarycolor=${bubblesecondarycolor}
          .bubbletextcolor=${bubbletextcolor}
          .highlighteddaycolor=${highlighteddaycolor}
          .dates="${DATES}"
          .weekstart="${weekstart}"
          .defaultdate="${defaultdate}"
          .weekdaysvalues="${weekdaysvalues}"
          .weekdaystextcolor="${weekdaystextcolor}"
          .weekdaysbackgroundcolor="${weekdaysbackgroundcolor}"
          .headertextcolor="${headertextcolor}"
          .headerbackgroundcolor="${headerbackgroundcolor}"
          .dayscolor="${dayscolor}"
          .daysbackgroundcolor="${daysbackgroundcolor}"
        ></pandora-calendar>
      </div>
    `;
  })
  .add(
    'Calendar2',
    () => html`
      <div style="width: 50%; margin: auto;">
        <pandora-calendar></pandora-calendar>
      </div>
    `,
  );
