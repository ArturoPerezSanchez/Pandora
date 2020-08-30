import { storiesOf, html } from '@open-wc/demoing-storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, text, number, select, color, boolean } from '@storybook/addon-knobs';
import '../pandora-input-number.js';
import readme from '../README.md';

const types = {
  number: 'number',
  range: 'range',
};

const weightOptions = { range: true, min: 100, max: 900, step: 50 };

storiesOf('FORM|pandora-input-number', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add(
    'Default Number Input',
    () => html`
      <div style="width: 200px; margin:auto;">
        <pandora-input-number></pandora-input-number>
      </div>
    `,
  )
  .add('Custom Number Input', () => {
    const TYPE = select('type', types, types.number);
    const MIN = number('min', 0);
    const MAX = number('max', 100);
    const STEP = number('step', 5);

    const TEXTCOLOR = color('text color', 'white');
    const BACKGROUNDCOLOR = color('background color', 'linear-gradient(90deg, darkblue,darkred)');
    const TEXTSIZE = text('text size', '20px');
    const FONTWEIGHT = number('font weight', '300', weightOptions);
    const BORDERRADIUS = text('border radius', '25px');
    const BORDER = text('border', '2px solid orange');
    const TEXTALIGN = text('text align', 'center');
    const LABELTEXT = text('label Text', 'Number Input label');
    const NAME = text('name', 'Custom Number Input');
    const VALUE = number('value', 15);
    const DISABLED = boolean('disabled', false);
    const REQUIRED = boolean('required', true);
    const READONLY = boolean('readonly', false);
    return html`
      <div style="width: 200px; margin:auto;">
        <pandora-input-number
          type=${TYPE}
          min=${MIN}
          max=${MAX}
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
          value=${VALUE}
          .disabled=${DISABLED}
          .required=${REQUIRED}
          .readonly=${READONLY}
        ></pandora-input-number>
      </div>
    `;
  })
  .add('Custom Range Input', () => {
    const TYPE = select('type', types, types.range);
    const MIN = number('min', 0);
    const MAX = number('max', 100);
    const STEP = number('step', 5);

    const TEXTCOLOR = color('text color', 'white');
    const BACKGROUNDCOLOR = color('background color', 'linear-gradient(90deg, darkblue,darkred)');
    const TEXTSIZE = text('text size', '20px');
    const FONTWEIGHT = number('font weight', '300', weightOptions);
    const BORDERRADIUS = text('border radius', '25px');
    const BORDER = text('border', '2px solid orange');
    const TEXTALIGN = text('text align', 'center');
    const LABELTEXT = text('label Text', 'Number Input label');
    const NAME = text('name', 'Custom Number Input');
    const VALUE = number('value', 15);
    const DISABLED = boolean('disabled', false);
    const REQUIRED = boolean('required', true);
    const READONLY = boolean('readonly', false);
    return html`
      <div style="width: 200px; margin:auto;">
        <pandora-input-number
          type=${TYPE}
          min=${MIN}
          max=${MAX}
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
          value=${VALUE}
          .disabled=${DISABLED}
          .required=${REQUIRED}
          .readonly=${READONLY}
        ></pandora-input-number>
      </div>
    `;
  });
