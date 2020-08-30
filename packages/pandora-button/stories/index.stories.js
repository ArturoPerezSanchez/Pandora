import { storiesOf, html } from '@open-wc/demoing-storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, color, text, boolean, number } from '@storybook/addon-knobs';
import '../pandora-button.js';
import readme from '../README.md';

const weightOptions = { range: true, min: 100, max: 900, step: 50 };

storiesOf('FORM|pandora-button', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add('Default Button', () => {
    const VALUE = text('value', 'Click me!');
    return html`
      <div style="width:200px; margin:auto;">
        <pandora-button value=${VALUE}></pandora-button>
      </div>
    `;
  })
  .add('Custom Button', () => {
    const VALUE = text('value', 'Click Me!');
    const NAME = text('name', 'Custom Button');

    const BORDERRADIUS = text('borderradius', '10px');
    const BORDER = text('border', '3px solid orange');
    const TEXTALIGN = text('textalign', 'center');
    const PADDING = text('padding', '20px');
    const TEXTSIZE = text('textsize', '20px');
    const ONCLICK = 'alert("¡Has hecho click sobre el botón personalizado!")';
    const TEXTCOLOR = color('textcolor', 'white');
    const BACKGROUNDCOLOR = color('backgroundcolor', 'linear-gradient(90deg, darkblue,darkred)');

    const FONTWEIGHT = number('fontweight', '300', weightOptions);

    const DISABLED = boolean('disabled', false);
    return html`
      <div style="width:250px; margin:auto;">
        <pandora-button
          .textcolor=${TEXTCOLOR}
          .backgroundcolor=${BACKGROUNDCOLOR}
          .textalign=${TEXTALIGN}
          .padding=${PADDING}
          .textsize=${TEXTSIZE}
          .fontweight=${FONTWEIGHT}
          .borderradius=${BORDERRADIUS}
          .border=${BORDER}
          .value=${VALUE}
          .name=${NAME}
          .onclick=${ONCLICK}
          ?disabled=${DISABLED}
        ></pandora-button>
      </div>
    `;
  });
