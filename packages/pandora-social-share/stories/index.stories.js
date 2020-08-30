import { storiesOf, html } from '@open-wc/demoing-storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, text, boolean, number, color } from '@storybook/addon-knobs';
import '../pandora-social-share.js';
import readme from '../README.md';

const borderOptions = { range: true, min: 0, max: 25, step: 1 };

storiesOf('BRAND|pandora-social-share', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add('Default', () => {
    const TITLE = text('Tittle', 'El buscador más utilizado');
    const URL = text('URL', 'www.google.es');
    return html`
      <div style="width: 20%;">
        <pandora-social-share .title="${TITLE}" .url="${URL}"></pandora-social-share>
      </div>
    `;
  })
  .add('Colorful', () => {
    const TITLE = text('Tittle', 'El buscador más utilizado');
    const URL = text('URL', 'www.google.es');
    const BACKGROUNDCOLOR = color('Background Color', 'linear-gradient(90deg,  #f0f, #0f0)');
    const BORDER = number('Border', 0, borderOptions);
    const FACEBOOK = boolean('Facebook', true);
    const TWITTER = boolean('Twitter', true);
    const LINKEDIN = boolean('Linkedin', true);
    const ICONCOLOR = color('Icon color', 'white');
    return html`
      <div style="width: 20%;">
        <pandora-social-share
          .title="${TITLE}"
          .url="${URL}"
          .backgroundcolor="${BACKGROUNDCOLOR}"
          .border="${BORDER}"
          .facebook="${FACEBOOK}"
          .twitter="${TWITTER}"
          .linkedin="${LINKEDIN}"
          .iconcolor=${ICONCOLOR}
        ></pandora-social-share>
      </div>
    `;
  })
  .add('Black & White', () => {
    const TITLE = text('Tittle', 'El buscador más utilizado');
    const URL = text('URL', 'www.google.es');
    const BACKGROUNDCOLOR = color('Background Color', 'black');
    const BORDER = number('Border', 0, borderOptions);
    const FACEBOOK = boolean('Facebook', true);
    const TWITTER = boolean('Twitter', true);
    const LINKEDIN = boolean('Linkedin', true);
    const ICONCOLOR = color('Icon color', 'white');
    return html`
      <div style="width: 20%;">
        <pandora-social-share
          .title="${TITLE}"
          .url="${URL}"
          .backgroundcolor="${BACKGROUNDCOLOR}"
          .border="${BORDER}"
          .facebook="${FACEBOOK}"
          .twitter="${TWITTER}"
          .linkedin="${LINKEDIN}"
          .iconcolor=${ICONCOLOR}
        ></pandora-social-share>
      </div>
    `;
  });
