import { storiesOf, html } from '@open-wc/demoing-storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, text, number, color, boolean } from '@storybook/addon-knobs';
import '../pandora-checkbox.js';
import readme from '../README.md';

const weightOptions = { range: true, min: 100, max: 900, step: 50 };

storiesOf('FORM|pandora-checkbox', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add(
    'Default Checkbox',
    () => html`
      <div style="width: 200px; margin:auto;">
        <pandora-checkbox></pandora-checkbox>
      </div>
    `,
  )
  .add('Custom Checkbox', () => {
    const TEXTCOLOR = color('text color', 'white');
    const BACKGROUNDCOLOR = color(
      'background color',
      'radial-gradient(circle, rgba(180,157,255,1) 0%, rgba(0,61,255,1) 47%, rgba(86,0,101,1) 100%);',
    );
    const TEXTSIZE = text('text size', '20px');
    const FONTWEIGHT = number('font weight', '100', weightOptions);
    const BORDERRADIUS = text('border radius', '5px');
    const BORDER = text('border', '3px solid darkblue');
    const TEXTALIGN = text('text align', 'center');
    const LABELTEXT = text('label Text', 'Marque la siguiente casilla');
    const NAME = text('name', 'Custom Checkbox');
    const DISABLED = boolean('disabled', false);
    const REQUIRED = boolean('required', true);
    const READONLY = boolean('readonly', false);
    return html`
      <div style="width: 300px; margin:auto; font-family: cursive;">
        <pandora-checkbox
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
        ></pandora-checkbox>
      </div>
    `;
  });
