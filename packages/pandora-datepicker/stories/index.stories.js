import { storiesOf, html } from '@open-wc/demoing-storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, text, number, select, color, boolean } from '@storybook/addon-knobs';
import '../pandora-datepicker.js';
import readme from '../README.md';

const types = {
  date: 'date',
  time: 'time',
  datetimeLocal: 'datetime-local',
  week: 'week',
  month: 'month',
};

const weightOptions = { range: true, min: 100, max: 900, step: 50 };

storiesOf('FORM|pandora-datepicker', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add(
    'Default Datepicker',
    () => html`
      <div style="width: 200px; margin:auto;">
        <pandora-datepicker></pandora-datepicker>
      </div>
    `,
  )
  .add('Custom Datepicker', () => {
    const TYPE = select('type', types, types.time);
    const STEP = number('step', 5);

    const TEXTCOLOR = color('text color', 'orange');
    const BACKGROUNDCOLOR = color('background color', '#000');
    const TEXTSIZE = text('text size', '30px');
    const FONTWEIGHT = number('font weight', '300', weightOptions);
    const BORDERRADIUS = text('border radius', '5px');
    const BORDER = text('border', '2px solid orange');
    const TEXTALIGN = text('text align', 'center');
    const LABELTEXT = text('label Text', 'Seleccione una hora');
    const NAME = text('name', 'Custom Datepicker');
    const DISABLED = boolean('disabled', false);
    const REQUIRED = boolean('required', true);
    const READONLY = boolean('readonly', false);
    return html`
      <div style="width: 300px; margin:auto; font-family: cursive;">
        <pandora-datepicker
          type=${TYPE}
          step=${STEP}
          textcolor=${TEXTCOLOR}
          backgroundcolor=${BACKGROUNDCOLOR}
          textsize=${TEXTSIZE}
          fontweight=${FONTWEIGHT}
          borderradius=${BORDERRADIUS}
          border=${BORDER}
          textalign=${TEXTALIGN}
          labelText=${LABELTEXT}
          name=${NAME}
          .disabled=${DISABLED}
          .required=${REQUIRED}
          .readonly=${READONLY}
        ></pandora-datepicker>
      </div>
    `;
  });
