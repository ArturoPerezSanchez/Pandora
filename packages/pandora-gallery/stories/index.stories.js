import { storiesOf, html } from '@open-wc/demoing-storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, text, number, object, select, boolean, color } from '@storybook/addon-knobs';
import '../pandora-gallery.js';
import readme from '../README.md';

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

const heightOptions = { range: true, min: 100, max: 1000, step: 25 };
const IMAGES = [
  'https://piks-eldesmarqueporta.netdna-ssl.com/thumbs/680/bin/2020/04/01/universidad_de_sevilla_foto_efe_001.jpeg',
  'https://www.informatica.us.es/docs/imagen-etsii/logo-ETSII-US-Vertical-Color.png',
  'https://www.informatica.us.es/docs/imagen-etsii/logo-ETSII-Color.png',
  'https://upload.wikimedia.org/wikipedia/commons/a/af/ETSII_Sevilla_003.jpg',
  'https://sevillando.net/wp-content/uploads/2017/10/Plaza-Sevilla-1024x619.jpeg',
  'https://multimedia.andalucia.org/media/0BC700DB844F4EDFBE00C1FA9B493D71/img/1112772E6D5945A1B89C26E539DD0D99/SE_Catedral_01.jpg?responsive',
  'https://urbansevilla.es/wp-content/uploads/2019/03/urban-sevilla-foto-ciudad.jpg',
];

storiesOf('BRAND|pandora-gallery', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add('Default gallery', () => {
    const CONTENT = object('content', IMAGES);
    return html`
      <div style="width: 50%; margin:auto;">
        <pandora-gallery .content=${CONTENT}></pandora-gallery>
      </div>
    `;
  })
  .add('Custom gallery', () => {
    const endpointURL = text(
      'endpoint URL',
      'https://run.mocky.io/v3/8132a2cc-bf3e-43b1-9303-337a84d7deb9',
    );
    const GALLERYHEIGHT = number('Height', 540, heightOptions);
    const arrowLeft = select('Arrow Left', arrowLeftOptions, '\u{2b9c}');
    const arrowRight = select('Arrow Right', arrowRightOptions, '\u{2b9e}');
    const horizontalBar = boolean('horizontal bar', false);
    const arrowsBackgroundColor = color(
      'arrows background color',
      'linear-gradient(0deg, rgba(96,10,111,1) 0%, rgba(0,61,255,1) 30%,  #fff 100%)',
    );
    const carouselBackgroundColor = color(
      'carousel background color',
      'linear-gradient(0deg, rgba(96,10,111,1) 0%, rgba(0,61,255,1) 30%,  #fff 100%)',
    );
    const alt = text('alternative text', 'No se ha podido encontrar la imagen');
    return html`
      <div style="width: 50%; margin:auto;">
        <pandora-gallery
          .endpointURL=${endpointURL}
          .arrowsBackgroundColor=${arrowsBackgroundColor}
          .height=${GALLERYHEIGHT}
          .arrowLeft=${arrowLeft}
          .arrowRight=${arrowRight}
          .horizontalBar=${horizontalBar}
          .carouselBackgroundColor=${carouselBackgroundColor}
          .alt=${alt}
        ></pandora-gallery>
      </div>
    `;
  });
