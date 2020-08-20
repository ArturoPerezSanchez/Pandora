import { storiesOf, html } from '@open-wc/demoing-storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, text, boolean, select, color } from '@storybook/addon-knobs';
import '../pandora-icons.js';
import readme from '../README.md';

const iconOptions = {
  angular: 'angular',
  'electronic arts': 'ea',
  git: 'git',
  heart: 'heart',
  nike: 'nike',
};

const flipOtions = {
  '': '',
  both: 'both',
  horizontal: 'horizontal',
  vertical: 'vertical',
};

const rotationOptions = {
  '': '',
  '90': '90',
  '180': '180',
  '270': '270',
};

const sizeOptions = {
  xs: 'xs',
  sm: 'sm',
  lg: 'lg',
  '2x': '2x',
  '3x': '3x',
  '4x': '4x',
  '5x': '5x',
  '6x': '6x',
  '7x': '7x',
  '8x': '8x',
  '9x': '9x',
  '10x': '10x',
};

storiesOf('BRAND|pandora-icons', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add('Default icon', () => {
    const FAMILY = text('family', 'fab');
    const ICON = text('icon', 'bluetooth');

    return html`
      <div style="margin: 30px;">
        <pandora-icons .family=${FAMILY} .icon=${ICON}></pandora-icons>
      </div>
    `;
  })
  .add('Custom icon font awesome', () => {
    const FAMILY = text('family', 'fas');
    const ICON = text('icon', 'american-sign-language-interpreting');
    const COLOR = color('color', '#f28');
    const SPIN = boolean('spin', false);
    const PULSE = boolean('pulse', false);
    const SIZE = select('size', sizeOptions, '5x');
    const ROTATION = select('rotation', rotationOptions, '');
    const FLIP = select('flip', flipOtions, '');

    return html`
      <div style="margin: 30px;">
        <pandora-icons
          .family=${FAMILY}
          .icon=${ICON}
          .color=${COLOR}
          .spin=${SPIN}
          .pulse=${PULSE}
          .flip=${FLIP}
          .size=${SIZE}
          .rotation=${ROTATION}
        ></pandora-icons>
      </div>
    `;
  })
  .add('Custom icon from scratch', () => {
    const FAMILY = text('family', 'fac');
    const ICON = select('icon', iconOptions, 'git');
    const COLOR = color('color', 'black');
    const SPIN = boolean('spin', false);
    const PULSE = boolean('pulse', false);
    const SIZE = select('size', sizeOptions, '5x');
    const ROTATION = select('rotation', rotationOptions, '');
    const FLIP = select('flip', flipOtions, '');

    return html`
      <div style="margin: 30px;">
        <pandora-icons
          .family=${FAMILY}
          .icon=${ICON}
          .color=${COLOR}
          .spin=${SPIN}
          .pulse=${PULSE}
          .flip=${FLIP}
          .size=${SIZE}
          .rotation=${ROTATION}
        ></pandora-icons>
      </div>
    `;
  });
