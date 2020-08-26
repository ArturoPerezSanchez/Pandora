import { storiesOf, html } from '@open-wc/demoing-storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, text, select, color, boolean } from '@storybook/addon-knobs';
import '../pandora-card.js';
import readme from '../README.md';

const SIZES = {
  xs: 'xs',
  md: 'md',
  lg: 'lg',
  none: '',
};

storiesOf('BRAND|pandora-card', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add('Default card', () => {
    const TITLE = text('title', 'Card Title');
    const DATE = text('date', '22/08/2020');
    const BODY = text(
      'body',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    );
    const TAG = text('tag', 'TAG');
    const IMG = text(
      'img',
      'data:image/png;base64,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',
    );
    const ALT = text('alt', 'Imagen');
    const LINK = text('link', 'https://www.google.com');

    return html`
      <pandora-card
        .title=${TITLE}
        .date=${DATE}
        .body=${BODY}
        .tag=${TAG}
        .img=${IMG}
        .alt=${ALT}
        .link=${LINK}
      ></pandora-card>
    `;
  })
  .add('Custom card', () => {
    const TITLE = text('title', 'Abstract wolf');
    const DATE = text('date', '22/08/2020');
    const BODY = text(
      'body',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    );
    const TAG = text('tag', 'Wolf');
    const IMG = text(
      'img',
      'https://i.pinimg.com/originals/54/7a/9c/547a9cc6b93e10261f1dd8a8af474e03.jpg',
    );
    const ALT = text('alt', 'Imagen');
    const LINK = text('link', 'https://www.pinterest.es/pin/431149364312402690/');
    const SOCIALSHAREBACKGROUNDCOLOR = color(
      'social share background color',
      'linear-gradient(135deg, black, white, black)',
    );
    const SOCIALSHAREICONCOLOR = color('social share icon color', 'white');
    const FACEBOOK = boolean('facebook', true);
    const TWITTER = boolean('twitter', true);
    const LINKEDIN = boolean('linkedin', false);
    const BACKGROUNDCOLOR = color(
      'background color',
      'linear-gradient(0deg, black, gray, white, white)',
    );
    const TAGBACKGROUNDCOLOR = color('tag background color', 'black');
    const TAGCOLOR = color('tag color', 'white');
    const TITLECOLOR = color('title color', 'black');
    const BODYCOLOR = color('body color', 'white');
    const LINKCOLOR = color('link color', 'white');
    const LINKTEXT = text('link text', 'Mas información');

    const SIZE = select('size', SIZES, SIZES.md);

    return html`
      <pandora-card
        .socialShareBackgroundColor=${SOCIALSHAREBACKGROUNDCOLOR}
        .socialShareIconColor=${SOCIALSHAREICONCOLOR}
        .facebook=${FACEBOOK}
        .twitter=${TWITTER}
        .linkedin=${LINKEDIN}
        .backgroundColor=${BACKGROUNDCOLOR}
        .tagBackgroundColor=${TAGBACKGROUNDCOLOR}
        .tagColor=${TAGCOLOR}
        .titleColor=${TITLECOLOR}
        .bodyColor=${BODYCOLOR}
        .linkColor=${LINKCOLOR}
        .linkText=${LINKTEXT}
        .title=${TITLE}
        .date=${DATE}
        .body=${BODY}
        .tag=${TAG}
        .img=${IMG}
        .alt=${ALT}
        .link=${LINK}
        .size=${SIZE}
      ></pandora-card>
    `;
  });
