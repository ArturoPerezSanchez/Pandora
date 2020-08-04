import { storiesOf, html } from '@open-wc/demoing-storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, text, boolean, object, color } from '@storybook/addon-knobs';
import '../pandora-header.js';
import readme from '../README.md';

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

storiesOf('CORE|pandora-Header', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add('Default header', () => {
    const columns = object('columns', DATA_FOUR_COLUMNS);
    const TEXT = text('text', 'Compra venta y restauración de todo tipo de artículos');
    return html`
      <pandora-header .columns=${columns} .text=${TEXT}></pandora-header>
    `;
  })
  .add('Custom Header', () => {
    const columns = object('columns', DATA_THREE_COLUMNS);
    const TEXT = text('text', 'Compra venta y restauración de todo tipo de artículos');
    const TEXTCOLOR = color('text color', '#fff');
    const TEXTSIZE = text('text size', '2.5em');
    const TOPBORDER = boolean('top Border', false);
    const LINKSCOLOR = color('links color', 'white');
    const LINKSTITLECOLOR = color('links title color', '#f7f');
    const BACKGROUNDCOLOR = color(
      'background color',
      'linear-gradient(135deg, darkblue, #f000f0, darkred)',
    );

    return html`
      <pandora-header
        .columns="${columns}"
        .text=${TEXT}
        .topBorder=${TOPBORDER}
        .linksColor=${LINKSCOLOR}
        .backgroundColor=${BACKGROUNDCOLOR}
        .linksTitleColor=${LINKSTITLECOLOR}
        .textColor=${TEXTCOLOR}
        .textSize=${TEXTSIZE}
      ></pandora-header>
    `;
  });
