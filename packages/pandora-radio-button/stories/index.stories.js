import { storiesOf, html } from '@open-wc/demoing-storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, object, text, number, color, boolean } from '@storybook/addon-knobs';
import '../pandora-radio-button.js';
import readme from '../README.md';

const options = ['opción 1', 'opción 2', 'opción 3', 'opción 4'];
const weightOptions = { range: true, min: 100, max: 900, step: 50 };

storiesOf('FORM|pandora-radio-button', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add('Default Radio Button', () => {
    const ENDPOINTURL = text(
      'enpoint url',
      'https://run.mocky.io/v3/9cf123f9-a63d-4de9-9cf8-74193f4cf6fe',
    );
    return html`
      <div style="width: 250px; margin:auto; font-family: cursive;">
        <pandora-radio-button endpointURL=${ENDPOINTURL}></pandora-radio-button>
      </div>
    `;
  })
  .add('Custom Radio Button', () => {
    const OPTIONS = object('options', options);
    const TEXT = text('text', 'Seleccione una opción');
    const TEXTCOLOR = color('text color', 'white');
    const BACKGROUNDCOLOR = color(
      'background color',
      'radial-gradient(at 80% bottom, rgba(170,147,255,1) 0%, rgba(0,61,255,1) 50%, rgba(86,0,101,1) 100%);',
    );
    const TEXTSIZE = text('text size', '20px');
    const FONTWEIGHT = number('font   ight', '100', weightOptions);
    const BORDERRADIUS = text('border radius', '5px');
    const BORDER = text('border', '3px solid darkblue');
    const TEXTALIGN = text('text align', 'center');
    const NAME = text('name', 'Custom Checkbox');
    const DISABLED = boolean('disabled', false);
    const REQUIRED = boolean('required', true);
    const READONLY = boolean('readonly', false);
    return html`
      <div style="width: 250px; margin:auto; font-family: cursive;">
        <pandora-radio-button
          .options=${OPTIONS}
          text=${TEXT}
          textcolor=${TEXTCOLOR}
          backgroundcolor=${BACKGROUNDCOLOR}
          textsize=${TEXTSIZE}
          fontweight=${FONTWEIGHT}
          borderradius=${BORDERRADIUS}
          border=${BORDER}
          textalign=${TEXTALIGN}
          name=${NAME}
          .disabled=${DISABLED}
          .required=${REQUIRED}
          .readonly=${READONLY}
        ></pandora-radio-button>
      </div>
    `;
  });
