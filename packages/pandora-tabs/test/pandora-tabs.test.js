import { html, fixture, expect } from '@open-wc/testing';

import '../pandora-tabs.js';

const DATA = [
  { label: 'Novedades', href: '#news' },
  { label: 'En oferta', href: '#offers' },
  { label: 'Seminuevos', href: '#secondhanded' },
];

describe('Tabs', () => {
  it('has a default colors and values', async () => {
    const el = await fixture(html`
      <pandora-tabs></pandora-tabs>
    `);
    expect(el.selected).to.equal(0);
    expect(el.textcolor).to.equal('green');
    expect(el.backgroundcolor).to.equal('white');
    expect(el.activebackgroundcolor).to.equal('white');
    expect(el.activetextcolor).to.equal('black');
  });

  it('can read the data from and array', async () => {
    const el = await fixture(html`
      <pandora-tabs .content=${DATA}></pandora-tabs>
    `);
    expect(el._data).to.equal(DATA);
  });

  it('can switch the selected tab by click', async () => {
    const el = await fixture(html`
      <pandora-tabs .content=${DATA}></pandora-tabs>
    `);
    expect(el._data).to.equal(DATA);
    expect(el.selected).to.equal(0);
    el.shadowRoot.querySelectorAll('li')[1].click();
    expect(el.selected).to.equal(1);
    el.shadowRoot.querySelectorAll('li')[2].click();
    expect(el.selected).to.equal(2);
    el.shadowRoot.querySelectorAll('li')[2].click();
    expect(el.selected).to.equal(2);
    el.shadowRoot.querySelectorAll('li')[0].click();
    expect(el.selected).to.equal(0);
  });
});
