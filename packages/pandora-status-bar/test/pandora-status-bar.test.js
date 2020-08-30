import { html, fixture, expect } from '@open-wc/testing';

import '../pandora-status-bar.js';

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
const COMPLETEDSTATES = [
  {
    title: 'Solicitud recibida',
    text: 'hemos recibido correctamente su solicitud y tardaremos unos dias es procesarla',
    completed: true,
  },
  { title: 'Pedido procesado', text: 'su paquete ya está listo para ser enviado', completed: true },
  {
    title: 'Paquete enviado',
    text: 'su paquete has sido enviado a la dirección proporcionada',
    completed: true,
  },
];

describe('status-bar', () => {
  it('has a default colors and values', async () => {
    const statusbar = await fixture(html`
      <pandora-status-bar .status=${STATES}></pandora-status-bar>
    `);
    expect(statusbar.title).to.equal('');
    expect(statusbar.vertical).to.equal(false);
    expect(statusbar.halfway).to.equal(true);
    expect(statusbar.completedstatecolor).to.equal('orange');
    expect(statusbar.barcolor).to.equal('#bd0');
    expect(statusbar.focusedstatecolor).to.equal('#880');
    expect(statusbar.arrow).to.equal(true);
    expect(statusbar.textcolor).to.equal('black');
    expect(statusbar.bubblescolor).to.equal('#bd0');
  });
  it('fullfills the bar if all states are completed', async () => {
    const statusbar = await fixture(html`
      <pandora-status-bar .status=${COMPLETEDSTATES} .halfway=${false}></pandora-status-bar>
    `);
    expect(statusbar.shadowRoot.querySelector('.filled').offsetWidth).to.equal(
      statusbar.shadowRoot.querySelector('.container').offsetWidth,
    );
  });
  it('changes width to height if the vertical mode is active', async () => {
    const statusbar = await fixture(html`
      <pandora-status-bar
        .status=${COMPLETEDSTATES}
        .halfway=${false}
        .vertical=${true}
      ></pandora-status-bar>
    `);
    expect(statusbar.shadowRoot.querySelector('.filled').offsetHeight).to.equal(
      statusbar.shadowRoot.querySelector('.bar').offsetHeight - 4,
    );
  });
});
