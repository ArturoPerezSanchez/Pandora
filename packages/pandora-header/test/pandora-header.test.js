import { html, fixture, expect } from '@open-wc/testing';

import '../pandora-header.js';

describe('Header', () => {
  it('has a default colors and values', async () => {
    const el = await fixture(html`
      <pandora-header></pandora-header>
    `);
    expect(el.imagePosition).to.equal('right');
    expect(el.imageBorderRadius).to.equal('0%');
    expect(el.imageBorderWidth).to.equal('0px');
    expect(el.imageBorderColor).to.equal('black');
    expect(el.textColor).to.equal('black');
    expect(el.textSize).to.equal('32px');
    expect(el.secondaryTextColor).to.equal('black');
    expect(el.secondaryTextSize).to.equal('18px');
    expect(el.backgroundColor).to.equal('#CCC');
    expect(el.textPosition).to.equal('center');
    expect(el.imageWidth).to.equal('25%');
  });

  it('can have an image as background', async () => {
    const TEXT = 'Texto principal';
    const SECONDARYTEXT = 'Texto secundario';
    const IMAGEURL = 'https://wallpaperaccess.com/full/1282257.jpg';
    const IMAGEPOSITION = 'background';
    const el = await fixture(html`
      <pandora-header
        .text=${TEXT}
        .secondaryText=${SECONDARYTEXT}
        .imageURL=${IMAGEURL}
        .imagePosition=${IMAGEPOSITION}
      >
      </pandora-header>
    `);
    expect(el.imagePosition).to.equal('background');
  });
});
