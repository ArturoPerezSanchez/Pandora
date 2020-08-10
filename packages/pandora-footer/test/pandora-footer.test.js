import { html, fixture, expect } from '@open-wc/testing';

import '../pandora-footer.js';

describe('Footer', () => {
  it('has a default colors and values', async () => {
    const el = await fixture(html`
      <pandora-footer></padora-footer>
    `);
    expect(el.topBorder).to.equal(true);
    expect(el.linksColor).to.equal('#087021');
    expect(el.backgroundColor).to.equal('#ddd');
    expect(el.textColor).to.equal('#333');
    expect(el.textSize).to.equal('33px');
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

  it('can override the colors via attribute', async () => {
    const el = await fixture(html`
      <pandora-footer linksColor="red"></pandora-footer>
    `);

    expect(el.linksColor).to.equal('red');
  });

  it('can override the text via attribute', async () => {
    const el = await fixture(html`
      <pandora-footer text="hey there"></pandora-footer>
    `);
    expect(el.text).to.equal('hey there');
  });

  it('can override the columns via attribute', async () => {
    const DATA = [
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
    const el = await fixture(html`
      <pandora-footer .columns=${DATA}></pandora-footer>
    `);

    expect(el.columns).to.equal(DATA);
  });

  it('its responsive', async () => {
    const DATA = [
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
    const el = await fixture(html`
      <pandora-footer .content=${DATA}></pandora-footer>
    `);
    el.shadowRoot.querySelectorAll('h4')[0].click();
    expect(el.shadowRoot.querySelectorAll('h4')[0].classList[0]).to.equal('rotated');
    el.shadowRoot.querySelectorAll('h4')[1].click();
    expect(el.shadowRoot.querySelectorAll('h4')[0].classList[0]).to.equal(undefined);
    expect(el.shadowRoot.querySelectorAll('h4')[1].classList[0]).to.equal('rotated');
    el.shadowRoot.querySelectorAll('h4')[1].click();
    expect(el.shadowRoot.querySelectorAll('h4')[1].classList[0]).to.equal(undefined);
    el.shadowRoot.querySelectorAll('h4')[1].click();
    expect(el.shadowRoot.querySelectorAll('h4')[1].classList[0]).to.equal('rotated');
  });
});
