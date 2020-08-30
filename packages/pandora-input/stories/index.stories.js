import { storiesOf, html } from '@open-wc/demoing-storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, color, select, text, boolean, number } from '@storybook/addon-knobs';
import '../pandora-input.js';
import readme from '../README.md';

const types = {
  url: 'url',
  text: 'text',
  search: 'search',
  email: 'email',
  password: 'password',
  tel: 'tel',
};

const weightOptions = { range: true, min: 100, max: 900, step: 50 };
const lengthOptions = { range: true, min: 1, max: 100, step: 1 };

storiesOf('FORM|pandora-text-input', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add('Default Text Input', () => {
    const TYPE = select('type', types, types.text);
    return html`
      <div style="width:200px; margin:auto;">
        <pandora-input .type=${TYPE}></pandora-input>
      </div>
    `;
  })
  .add('Custom Text Input', () => {
    const TYPE = select('type', types, types.email);
    const PLACEHOLDER = text('placeholder', 'escriba aquí');
    const VALUE = text('value', '');
    const LABELTEXT = text('labelText', 'Etiqueta');
    const NAME = text('name', 'Custom Input');
    const PATTERN = text('pattern', '');

    const BORDERRADIUS = text('borderradius', '10px');
    const BORDER = text('border', '3px solid orange');
    const TEXTALIGN = text('textalign', 'center');
    const PADDING = text('padding', '20px');
    const TEXTSIZE = text('textsize', '20px');

    const TEXTCOLOR = color('textcolor', 'white');
    const BACKGROUNDCOLOR = color('backgroundcolor', 'linear-gradient(90deg, darkblue,darkred)');

    const FONTWEIGHT = number('fontweight', '300', weightOptions);
    const MAXLENGTH = number('Max length', '25', lengthOptions);

    const REQUIRED = boolean('required', true);
    const READONLY = boolean('readonly', false);
    const DISABLED = boolean('disabled', false);
    return html`
      <div style="width:200px; margin:auto;">
        <pandora-input
          .type=${TYPE}
          .placeholder=${PLACEHOLDER}
          .textcolor=${TEXTCOLOR}
          .backgroundcolor=${BACKGROUNDCOLOR}
          .textalign=${TEXTALIGN}
          .padding=${PADDING}
          .textsize=${TEXTSIZE}
          .fontweight=${FONTWEIGHT}
          .borderradius=${BORDERRADIUS}
          .border=${BORDER}
          .value=${VALUE}
          .labelText=${LABELTEXT}
          .name=${NAME}
          .pattern=${PATTERN}
          .maxlength=${MAXLENGTH}
          ?required=${REQUIRED}
          ?readonly=${READONLY}
          ?disabled=${DISABLED}
        ></pandora-input>
      </div>
    `;
  });
