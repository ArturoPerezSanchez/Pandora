import { storiesOf, html } from '@open-wc/demoing-storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
import '../pandora-footer.js';
import readme from '../README.md';

const DATA_LINKS = [
  { title: 'Accesibilidad', href: '#' },
  { title: 'Aviso legal', href: '#' },
  { title: 'Contacto', href: '#' },
];

const DATA_FOUR_COLUMNS = [
  {
    title: 'Conócenos',
    links: [
      { title: 'Conoce la comunidad', href: '#' },
      { title: 'Trabajar con nosotros', href: '#' },
      { title: 'Sobre el colegio', href: '#' },
    ],
  },
  {
    title: 'Gana dinero con nosotros',
    links: [
      { title: 'Vender productos', href: '#' },
      { title: 'Comprar seminuevos', href: '#' },
      { title: 'Calidad de los artículos', href: '#' },
    ],
  },
  {
    title: 'Métodos de pago',
    links: [
      { title: 'Métodos de pago', href: '#' },
      { title: 'Conversor de divisas', href: '#' },
      { title: 'Cheques regalo', href: '#' },
      { title: 'Recarga online', href: '#' },
      { title: 'Recarga en tienda', href: '#' },
    ],
  },
  {
    title: '¿Necesitas ayuda?',
    links: [
      { title: 'Encuentra tu pedido', href: '#' },
      { title: 'Tarifas y políticas de envio', href: '#' },
      { title: 'Garantía de calidad', href: '#' },
      { title: 'Devolver productos', href: '#' },
      { title: 'Atención al cliente', href: '#' },
    ],
  },
];

const DATA_THREE_COLUMNS = [
  {
    title: 'Conócenos',
    links: [
      { title: 'Conoce la comunidad', href: '#' },
      { title: 'Trabajar con nosotros', href: '#' },
      { title: 'Sobre el colegio', href: '#' },
    ],
  },
  {
    title: 'Métodos de pago',
    links: [
      { title: 'Métodos de pago', href: '#' },
      { title: 'Conversor de divisas', href: '#' },
      { title: 'Cheques regalo', href: '#' },
      { title: 'Recarga online', href: '#' },
      { title: 'Recarga en tienda', href: '#' },
    ],
  },
  {
    title: '¿Necesitas ayuda?',
    links: [
      { title: 'Encuentra tu pedido', href: '#' },
      { title: 'Tarifas y políticas de envio', href: '#' },
      { title: 'Garantía de calidad', href: '#' },
      { title: 'Devolver productos', href: '#' },
      { title: 'Atención al cliente', href: '#' },
    ],
  },
];

storiesOf('ÁTOMOS|pandora-footer', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add('Footer formal', () => {
    const columns = object('columns', DATA_FOUR_COLUMNS);
    const LINKS = object('links', DATA_LINKS);
    const TOPBORDER = boolean('topBorder', true);
    const TEXT = text('text', 'Compra venta y restauración de todo tipo de artículos');
    const TEXTSIZE = text('text', '33px');
    const TEXTCOLOR = text('text', '#333');
    return html`
      <pandora-footer
        .columns=${columns}
        .links=${LINKS}
        .topBorder=${TOPBORDER}
        .text=${TEXT}
        .textColor=${TEXTCOLOR}
        .textSize=${TEXTSIZE}
      ></pandora-footer>
    `;
  })
  .add('Footer casual', () => {
    const columns = object('columns', DATA_THREE_COLUMNS);
    const LINKS = object('links', DATA_LINKS);
    const TOPBORDER = boolean('topBorder', false);
    const LINKSCOLOR = text('text', 'white');
    const BACKGROUNDCOLOR = text('text', 'linear-gradient(135deg, darkblue, #f000f0, darkred)');
    const LINKSTITLECOLOR = text('text', '#f7f');
    return html`
      <pandora-footer
        .columns=${columns}
        .links=${LINKS}
        .topBorder=${TOPBORDER}
        .linksColor=${LINKSCOLOR}
        .backgroundColor=${BACKGROUNDCOLOR}
        .linksTitleColor=${LINKSTITLECOLOR}
      ></pandora-footer>
    `;
  });
