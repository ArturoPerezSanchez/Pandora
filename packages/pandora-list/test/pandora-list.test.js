import { html, fixture, expect } from '@open-wc/testing';

import '../pandora-list.js';

describe('List', () => {
  it('has a default colors and values', async () => {
    const el = await fixture(html`
      <pandora-list></pandora-list>
    `);
    expect(el.color).to.equal('green');
  });
});
