import { storiesOf, html } from '@open-wc/demoing-storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, number, color, object, select, date } from '@storybook/addon-knobs';
import '../pandora-calendar.js';
import readme from '../README.md';

const DATES = [
  { text: 'Reserva de cita médica', date: '05/25/2020' },
  { text: 'Olimpiadas de matemáticas', date: '04/30/2020' },
  { text: 'Reunion con clientes', date: '05/21/2020' },
];
const arrowRightOptions = {
  '\u{1f846}': '\u{1f846}',
  '\u{27f6}': '\u{27f6}',
  '\u{21d2}': '\u{21d2}',
  '\u{2192}': '\u{2192}',
  '\u{2b9e}': '\u{2b9e}',
  '\u{2b9a}': '\u{2b9a}',
  '\u{2b8a}': '\u{2b8a}',
  '\u{1f80a}': '\u{1f80a}',
};
const arrowLeftOptions = {
  '\u{1f844}': '\u{1f844}',
  '\u{27f5}': '\u{27f5}',
  '\u{21d0}': '\u{21d0}',
  '\u{2190}': '\u{2190}',
  '\u{2b9c}': '\u{2b9c}',
  '\u{2b98}': '\u{2b98}',
  '\u{2b88}': '\u{2b88}',
  '\u{1f808}': '\u{1f808}',
};
const weekdaysvaluesoptions = { narrow: 'narrow', short: 'short', long: 'long' };
const weekOptions = { range: true, min: 0, max: 7, step: 1 };

storiesOf('ÁTOMOS|pandora-calendar', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add(
    'Default Calendar',
    () => html`
      <div style="width: 50%; margin: auto;">
        <pandora-calendar></pandora-calendar>
      </div>
    `,
  )
  .add('Red Calendar', () => {
    const bubblecolor = color('Bubbles color', 'red', 'Events');
    const bubblesecondarycolor = color('Bubbles secondary color', 'black', 'Events');
    const bubbletextcolor = color('Bubbles text color', 'white', 'Events');
    const highlighteddaycolor = color('Highlighted days color', '#aa0000', 'Events');
    const dates = object('Dates', DATES, 'Events');

    const arrowLeft = select('Arrow Left', arrowLeftOptions, '\u{2b98}', 'Structure');
    const arrowRight = select('Arrow Right', arrowRightOptions, '\u{2b9a}', 'Structure');
    const weekstart = number('Week start day', '1', weekOptions, 'Structure');
    const weekdaysvalues = select('Weekdays values', weekdaysvaluesoptions, 'narrow', 'Structure');
    const defaultdate = date('Default date', new Date('May 05 2020'), 'Structure');

    const daysbackgroundcolor = color('Days background color', '#444', 'Style');
    const dayscolor = color('Days color', 'white', 'Style');
    const headerbackgroundcolor = color('Header background color', '#aa0000', 'Style');
    const headertextcolor = color('Header text color', 'white', 'Style');
    const weekdaysbackgroundcolor = color('Weekdays background color', 'black', 'Style');
    const weekdaystextcolor = color('Weekdays text color', 'yellow', 'Style');

    return html`
      <div style="width: 50%; margin: auto;">
        <pandora-calendar
          .arrowLeft=${arrowLeft}
          .arrowRight=${arrowRight}
          .bubblecolor=${bubblecolor}
          .bubblesecondarycolor=${bubblesecondarycolor}
          .bubbletextcolor=${bubbletextcolor}
          .highlighteddaycolor=${highlighteddaycolor}
          .dates="${dates}"
          .weekstart="${weekstart}"
          defaultdate="${defaultdate}"
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
  });
