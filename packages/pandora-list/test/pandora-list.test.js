import { html, fixture, expect } from '@open-wc/testing';

import '../pandora-list.js';

const ELEMENTSDATA = [
  {
    title: 'elemento 1',
    childs: [
      { title: 'elemento 1.1' },
      { title: 'elemento 1.2' },
      { title: 'elemento 1.3', childs: [{ title: 'elemento 1.3.1' }, { title: 'elemento 1.3.2' }] },
      { title: 'elemento 1.4' },
    ],
  },
  { title: 'elemento 2' },
  { title: 'elemento 3' },
];

describe('List', () => {
  it('has a default colors and values', async () => {
    const el = await fixture(html`
      <pandora-list></pandora-list>
    `);
    expect(el.listStyle).to.equal('decimal');
    expect(el.textColor).to.equal('white');
    expect(el.backgroundColor).to.equal('#333');
    expect(el.blockBorder).to.equal('2px solid black');
    expect(el.customIcon).to.equal('');
  });

  it('it can read the data from an endpoint', async () => {
    const el = await fixture(html`
      <pandora-list endpointurl="https://"></pandora-list>
    `);

    expect(el._error).to.not.equal(null);
  });

  it('it can read the data from an array', async () => {
    const el = await fixture(html`
      <pandora-list .elements=${ELEMENTSDATA} customIcon="🏹"></pandora-list>
    `);
    expect(el._response).to.equal(ELEMENTSDATA);
    expect(el.customIcon).to.equal('\u{1F3F9}');
  });
});
