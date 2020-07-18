import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, boolean, object, color, text } from '@storybook/addon-knobs';
import '../pandora-status-bar.js';
import readme from '../README.md';

const STATES = [
  {
    title: 'Solicitud recibida',
    text: 'hemos recibido correctamente su solicitud y tardaremos unos dias es procesarla',
    completed: true,
  },
  { title: 'Pedido procesado', text: 'su paquete ya está listo para ser enviado', completed: true },
  {
    title: 'Paquete enviado',
    text: 'su paquete has sido enviado a la dirección proporcionada',
    completed: false,
  },
];

storiesOf('DISPLAY|pandora-status-bar', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add('Default status bar', () => {
    const STATUS = object('estados ', STATES);
    const TITLE = text('Título ', 'Estado de su orden');
    return html`
      <br />
      <div style="font-family: Arial, Helvetica, sans-serif;">
        <pandora-status-bar .status=${STATUS} .title=${TITLE}></pandora-status-bar>
      </div>
    `;
  })
  .add('Colorful status bar', () => {
    const VERTICAL = boolean('vertical ', false);
    const STATUS = object('estados ', STATES);
    const COMPLETEDSTATECOLOR = color('estados completados', 'darkorange');
    const BARCOLOR = color(
      'color de la barra',
      'linear-gradient(90deg, #000, red, orange, lightgreen, #dfd)',
    );
    const FOCUSEDSTATECOLOR = color('color del estado seleccionado ', 'red');
    const BUBBLESCOLOR = color(
      'color de los cuadros de texto ',
      'linear-gradient(135deg, white, lightgreen, orange, darkred, black )',
    );
    const HALFWAY = boolean('medio camino ', true);
    const ARROW = boolean('flecha', false);
    const TITLE = text('Título ', 'Estado de su orden');
    const TEXTCOLOR = color('Color del texto ', 'white ');
    return html`
      <br />
      <div style="font-family: Arial, Helvetica, sans-serif;">
        <pandora-status-bar
          .halfway=${HALFWAY}
          .textcolor=${TEXTCOLOR}
          .bubblescolor=${BUBBLESCOLOR}
          .focusedstatecolor=${FOCUSEDSTATECOLOR}
          .arrow=${ARROW}
          .barcolor=${BARCOLOR}
          .completedstatecolor=${COMPLETEDSTATECOLOR}
          .vertical=${VERTICAL}
          .status=${STATUS}
          .title=${TITLE}
        ></pandora-status-bar>
      </div>
    `;
  });
