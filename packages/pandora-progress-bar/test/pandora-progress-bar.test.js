import { html, fixture, expect } from '@open-wc/testing';

import '../pandora-progress-bar.js';

describe('Progress Bar', () => {
  it('has a default colors and values', async () => {
    const el = await fixture(html`
      <pandora-progress-bar></pandora-progress-bar>
    `);
    expect(el.percentage).to.equal(0);
    expect(el.color).to.equal('green');
    expect(el.title).to.equal(undefined);
  });

  it('changes to "completado" if the percentage is bigger than 100', async () => {
    const el = await fixture(html`
      <pandora-progress-bar percentage="100"></pandora-progress-bar>
    `);

    expect(el).shadowDom.to.equal(`
    <div class="container">
      <div class="progress-text"> </div>
      <div class="progress">
        <div class="bar" style="width: 100%; background: green;" > </div>
      </div>
      <div class="bar-text" style="margin-right: 0%;" >
        Completado
      </div>
    </div>
    `);
  });

  it('can override the color via attribute', async () => {
    const el = await fixture(html`
      <pandora-progress-bar color="red"></pandora-progress-bar>
    `);
    expect(el.color).to.equal('red');
  });

  it('can override the title via attribute', async () => {
    const el = await fixture(html`
      <pandora-progress-bar title="hey there"></pandora-progress-bar>
    `);
    expect(el.title).to.equal('hey there');
  });

  it('can override the percentage via attribute', async () => {
    const el = await fixture(html`
      <pandora-progress-bar percentage="50"></pandora-progress-bar>
    `);
    expect(el.percentage).to.equal(50);
  });
});
