import { html, fixture, expect } from '@open-wc/testing';

import '../pandora-calendar.js';

let _auxDate = new Date(); // Used to compare dates
const TESTDATES = [
  // Used to test the bubbles functionality
  { text: 'Evento de prueba 1', date: '04/10/2020' },
  { text: 'Evento de Prueba 2', date: '03/31/2020' },
  { text: 'Evento de prueba 3', date: '04/16/2020' },
  { text: 'Evento de prueba 4', date: '05/01/2020' },
];
describe('calendar', () => {
  it('has a default colors and values', async () => {
    const calendar = await fixture(html`
      <pandora-calendar></padora-calendar>
    `);
    expect(calendar.weekdaysvalues).to.equal('narrow');
    expect(calendar.weekstart).to.equal(1);
    expect(calendar.arrowRight).to.equal('\u{1f844}');
    expect(calendar.arrowLeft).to.equal('\u{1f846}');
    expect(calendar.weekdaystextcolor).to.equal('#000');
    expect(calendar.weekdaysbackgroundcolor).to.equal('#ccc');
    expect(calendar.headertextcolor).to.equal('white');
    expect(calendar.headerbackgroundcolor).to.equal('#333');
    expect(calendar.dayscolor).to.equal('#000');
    expect(calendar.daysbackgroundcolor).to.equal('white');
    expect(calendar.bubblecolor).to.equal('#333');
    expect(calendar.bubbletextcolor).to.equal('#fff');
    expect(calendar.highlighteddaycolor).to.equal('#ccc');
  });
  it('Updates all bubbles whithout gradient', async () => {
    const calendar = await fixture(html`
      <pandora-calendar
        .dates="${TESTDATES}"
        bubblecolor="red"
        defaultDate='04-04-2020'
        bubbletextcolor="white"
      ></padora-calendar>
    `);
    expect(calendar.bubblecolor).to.equal('red');
    expect(calendar.bubbletextcolor).to.equal('white');
  });
  it('Updates all bubbles whith gradient', async () => {
    const calendar = await fixture(html`
      <pandora-calendar
        .dates="${TESTDATES}"
        bubblecolor="red"
        defaultDate='05-05-2020'
        bubblesecondarycolor="black"
        bubbletextcolor="white"
      ></padora-calendar>
    `);
    expect(calendar.bubblecolor).to.equal('red');
    expect(calendar.bubblesecondarycolor).to.equal('black');
    expect(calendar.bubbletextcolor).to.equal('white');
  });
  it('Adapts to default date if given', async () => {
    const calendar = await fixture(html`
      <pandora-calendar defaultDate="04-04-2020"></pandora-calendar>
    `);
    expect(calendar.defaultDate).to.equal('04-04-2020');
  });
  it('Changes the month when the arrows are clicked', async () => {
    const calendar = await fixture(html`
      <pandora-calendar></padora-calendar>
    `);
    calendar.shadowRoot.querySelectorAll('.arrow')[0].click();
    _auxDate.setMonth(_auxDate.getMonth() - 1);
    expect(calendar.currentDate.getMonth()).to.equal(_auxDate.getMonth());
    calendar.shadowRoot.querySelectorAll('.arrow')[2].click();
    calendar.shadowRoot.querySelectorAll('.arrow')[2].click();
    _auxDate.setMonth(_auxDate.getMonth() + 2);
    expect(calendar.currentDate.getMonth()).to.equal(_auxDate.getMonth());
    _auxDate = new Date();
  });
});
