import { storiesOf, html } from '@open-wc/demoing-storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, text, color, select } from '@storybook/addon-knobs';
import '../pandora-header.js';
import readme from '../README.md';

const imagePostionOptions = {
  left: 'left',
  right: 'right',
  background: 'background',
};

const textPostionOptions = {
  left: 'left',
  right: 'right',
  center: 'center',
};

storiesOf('CORE|pandora-Header', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add('Default header', () => {
    const TEXT = text('text', 'Texto principal');
    const SECONDARYTEXT = text('secondary text', 'Texto secundario');
    const IMAGEURL = text(
      'imageURL',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_J64H9TeNc_w3Oo8fZ9vWpn8jLVG9bO9toQ&usqp=CAU',
    );
    return html`
      <pandora-header .text=${TEXT} .secondaryText=${SECONDARYTEXT} .imageURL=${IMAGEURL}>
      </pandora-header>
    `;
  })
  .add('Background Header', () => {
    const TEXT = text('text', 'Texto principal');
    const SECONDARYTEXT = text('secondary text', 'Texto secundario');
    const IMAGEURL = text('imageURL', 'https://wallpaperaccess.com/full/1282257.jpg');
    const IMAGEPOSITION = select('image position', imagePostionOptions, 'background');
    const TEXTPOSITION = select('text position', textPostionOptions, 'center');
    const TEXTCOLOR = color('text color', 'white');
    const TEXTSIZE = text('text size', '38px');
    const SECONDARYTEXTCOLOR = color('secondary text color', 'white');
    const SECONDARYTEXTSIZE = text('secondary text size', '22px');
    return html`
      <pandora-header
        .text=${TEXT}
        .secondaryText=${SECONDARYTEXT}
        .imageURL=${IMAGEURL}
        .imagePosition=${IMAGEPOSITION}
        .textColor=${TEXTCOLOR}
        .textSize=${TEXTSIZE}
        .secondaryTextColor=${SECONDARYTEXTCOLOR}
        .secondaryTextSize=${SECONDARYTEXTSIZE}
        .textPosition=${TEXTPOSITION}
      >
      </pandora-header>
    `;
  })
  .add('US Header', () => {
    const TEXT = text('text', 'Texto principal');
    const SECONDARYTEXT = text('secondary text', 'Texto secundario');
    const IMAGEURL = text(
      'imageURL',
      'https://www.uco.es/investigacion/proyectos/SEBASENet/images/Logo_US.png',
    );
    const IMAGEPOSITION = select('image position', imagePostionOptions, 'right');
    const TEXTPOSITION = select('text position', textPostionOptions, 'center');
    const TEXTCOLOR = color('text color', 'white');
    const TEXTSIZE = text('text size', '1.7em');
    const SECONDARYTEXTCOLOR = color('secondary text color', 'white');
    const SECONDARYTEXTSIZE = text('secondary text size', '1em');
    const IMAGEWIDTH = text('image width', '10em');
    const BACKGROUNDCOLOR = color(
      'background color',
      'linear-gradient(90deg, #202, darkgreen, #dfd)',
    );
    return html`
      <pandora-header
        .text=${TEXT}
        .secondaryText=${SECONDARYTEXT}
        .imageURL=${IMAGEURL}
        .imagePosition=${IMAGEPOSITION}
        .imageWidth=${IMAGEWIDTH}
        .textColor=${TEXTCOLOR}
        .textSize=${TEXTSIZE}
        .backgroundColor=${BACKGROUNDCOLOR}
        .secondaryTextColor=${SECONDARYTEXTCOLOR}
        .secondaryTextSize=${SECONDARYTEXTSIZE}
        .textPosition=${TEXTPOSITION}
      >
      </pandora-header>
    `;
  })
  .add('Custom Header', () => {
    const TEXT = text('text', 'Texto principal');
    const SECONDARYTEXT = text('secondary text', 'Texto secundario');
    const IMAGEURL = text(
      'imageURL',
      'https://www.informatica.us.es/docs/imagen-etsii/logo-ETSII-US-Vertical-Negro.png',
    );
    const IMAGEPOSITION = select('image position', imagePostionOptions, 'left');
    const TEXTPOSITION = select('text position', textPostionOptions, 'center');
    const TEXTCOLOR = color('text color', 'white');
    const TEXTSIZE = text('text size', '38px');
    const SECONDARYTEXTCOLOR = color('secondary text color', 'white');
    const SECONDARYTEXTSIZE = text('secondary text size', '22px');
    const IMAGEWIDTH = text('image width', '210px');
    const BACKGROUNDCOLOR = color(
      'background color',
      'linear-gradient(135deg, cyan, cyan, cyan, blue, darkblue, darkblue, black)',
    );
    const IMAGEBORDERCOLOR = color('border color', 'black');
    const IMAGEBORDERRADIUS = text('image border radius', '10%');
    const IMAGEBORDERWIDTH = text('image border width', '7px');
    return html`
      <pandora-header
        .text=${TEXT}
        .secondaryText=${SECONDARYTEXT}
        .imageURL=${IMAGEURL}
        .imagePosition=${IMAGEPOSITION}
        .imageWidth=${IMAGEWIDTH}
        .imageBorderColor=${IMAGEBORDERCOLOR}
        .imageBorderRadius=${IMAGEBORDERRADIUS}
        .imageBorderWidth=${IMAGEBORDERWIDTH}
        .textColor=${TEXTCOLOR}
        .textSize=${TEXTSIZE}
        .backgroundColor=${BACKGROUNDCOLOR}
        .secondaryTextColor=${SECONDARYTEXTCOLOR}
        .secondaryTextSize=${SECONDARYTEXTSIZE}
        .textPosition=${TEXTPOSITION}
      >
      </pandora-header>
    `;
  });
