import { html, fixture, expect } from '@open-wc/testing';

import '../pandora-footer.js';

describe('Footer', () => {
  it('has a default colors and values', async () => {
    const el = await fixture(html`
      <pandora-footer></padora-footer>
    `);
    expect(el.textSize).to.equal('18px');
    expect(el.topBorder).to.equal(true);
    expect(el.linksColor).to.equal('#087021');
    expect(el.backgroundColor).to.equal('#ddd');
    expect(el.textColor).to.equal('fff');
    expect(el.textSize).to.equal('18px');
  });

  it('shows initially the empty columns', async () => {
    const el = await fixture(html`
      <pandora-footer></<pandora-footer>
    `);

    expect(el).shadowDom.to.equal(`
    <div 
      class="container"
      style="background: rgb(221, 221, 221);"
    >
      <div class="columns"> 
      </div>
    </div>
    `);
  });

  it('can override the text via attribute', async () => {
    const el = await fixture(html`
      <pandora-footer linksColor="red"></pandora-footer>
    `);

    expect(el.linksColor).to.equal('red');
  });
});
