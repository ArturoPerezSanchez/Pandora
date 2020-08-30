import { html, css, LitElement } from 'lit-element';
import '../../pandora-card/pandora-card.js';

const ro = new ResizeObserver(entries => {
  entries.forEach(entry => entry.target.resizedCallback(entry.contentRect));
});

export class PandoraCarousel extends LitElement {
  static get styles() {
    return css`
      :host {
        width: 100%;
        display: block;
      }

      .container {
        display: flex;
        align-items: center;
      }

      .container.hidden {
        display: none;
      }

      a {
        font-size: 30px;
        cursor: pointer;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      a.inactive {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .wrapper {
        width: 100%;
        overflow: hidden;
        margin: 0 15px;
      }

      .carousel {
        width: 100%;
        margin: 0;
        padding: 5px;
        list-style: none;
        display: flex;
        transition: all 1s ease;
      }

      .carousel pandora-card:not(:last-child) {
        margin-right: 15px;
      }

      @media (max-width: 661px) {
        a {
          display: none;
        }

        .wrapper {
          margin: 0;
        }

        .carousel {
          display: flex;
          flex-wrap: nowrap;
          overflow-x: auto;
        }

        .carousel pandora-card {
          flex: 0 0 auto;
        }
      }
    `;
  }

  static get properties() {
    return {
      endpointURL: { type: String },
      data: { type: Array },
      size: { type: String },
      arrowLeft: { type: String },
      arrowRight: { type: String },
      arrowColor: { type: String },

      socialShareBackgroundColor: { type: String },
      socialShareIconColor: { type: String },
      facebook: { type: Boolean },
      twitter: { type: Boolean },
      linkedin: { type: Boolean },
      backgroundColor: { type: String },
      tagBackgroundColor: { type: String },
      tagColor: { type: String },
      titleColor: { type: String },
      bodyColor: { type: String },
      linkColor: { type: String },
      linkText: { type: String },

      _offset: { type: Number },
      _error: { type: String },
      _response: { type: Array },
    };
  }

  constructor() {
    super();
    this.endpointURL = '';
    this.data = null;
    this.size = 'sm';
    this.arrowLeft = '\u{2b9c}';
    this.arrowRight = '\u{2b9e}';
    this.arrowColor = '#333';

    // Social share properties
    this.socialShareBackgroundColor = 'transparent';
    this.socialShareIconColor = '';
    this.facebook = true;
    this.twitter = true;
    this.linkedin = true;

    // Card properties
    this.backgroundColor = 'white';
    this.tagBackgroundColor = 'green';
    this.tagColor = 'white';
    this.titleColor = 'black';
    this.bodyColor = 'black';
    this.linkColor = 'green';
    this.linkText = 'Seguir leyendo';

    this._offset = 0;
    this._error = '';
    this._response = [];
  }

  render() {
    return html`
      <div class="container ${!this._response.length ? 'hidden' : ''}">
        <a
          style="color:${this.arrowColor};"
          class="${this.first() ? 'inactive' : ''}"
          data-attribute="left"
          @click=${this.slice}
          >${this.arrowLeft}</a
        >
        <div class="wrapper">
          <ul class="carousel">
            ${this._response.map(
              ele => html`
                <li>
                  <pandora-card
                    .title=${ele.title}
                    .date=${ele.date}
                    .body=${ele.body}
                    .tag=${ele.tag}
                    .img=${ele.img}
                    .alt=${ele.alt}
                    .link=${ele.link}
                    .size=${this.size}
                    .socialShareBackgroundColor=${this.socialShareBackgroundColor}
                    .socialShareIconColor=${this.socialShareIconColor}
                    .facebook=${this.facebook}
                    .twitter=${this.twitter}
                    .linkedin=${this.linkedin}
                    .backgroundColor=${this.backgroundColor}
                    .tagBackgroundColor=${this.tagBackgroundColor}
                    .tagColor=${this.tagColor}
                    .titleColor=${this.titleColor}
                    .bodyColor=${this.bodyColor}
                    .linkColor=${this.linkColor}
                    .linkText=${this.linkText}
                  ></pandora-card>
                </li>
              `,
            )}
          </ul>
        </div>
        <a
          style="color:${this.arrowColor};"
          class="${this.last() ? 'inactive' : ''}"
          data-attribute="right"
          @click=${this.slice}
          >${this.arrowRight}</a
        >
      </div>
    `;
  }

  updated(changedProperties) {
    changedProperties.forEach((_, propName) => {
      if (['endpointURL'].includes(propName)) {
        this.updatedResponse();
      }
      if (['size'].includes(propName)) {
        this.resizedCallback();
      }
      if (['_offset'].includes(propName)) {
        this.carousel().style.transform = `translateX(${this._offset}px)`;
      }
    });
  }

  updatedResponse() {
    if (this.data) {
      this._response = this.data;
      console.log('aaaa');
    } else {
      fetch(this.endpointURL)
        .then(response => {
          if (response.ok) {
            response
              .json()
              .then(json => {
                this._response = json;
              })
              .catch(error => {
                this._error = `ERROR_Json: ${error.message}`;
              });
          } else {
            this._error = `Respuesta de red KO`;
          }
        })
        .catch(error => {
          this._error = `ERROR_Fetch: ${error.message}`;
        });
    }
  }

  carousel() {
    return this.shadowRoot.querySelector('.carousel');
  }

  carouselWidth() {
    return this.carousel().offsetWidth;
  }

  items() {
    return this.carousel().querySelectorAll('pandora-card');
  }

  cardWidth(realSize = true) {
    const card = this.items()[0];

    const style = card.currentStyle || window.getComputedStyle(card);

    const margin = stl => Number(stl.match(/\d+/g)[0]);
    const margins = margin(style.marginRight) + margin(style.marginLeft);

    let width = 0;
    switch (this.size) {
      case 'md':
        width = 278;
        break;
      case 'lg':
        width = 375;
        break;
      default:
        width = card.offsetWidth;
        break;
    }

    return width + (realSize ? margins : 15);
  }

  slice(e) {
    const right = e.currentTarget.getAttribute('data-attribute') === 'right';
    if ((right && !this.last()) || (!right && !this.first())) {
      this._offset += (right ? -1 : 1) * this.cardWidth();
    }
  }

  first() {
    return this._offset >= 0;
  }

  last() {
    let maxim = 0;

    try {
      maxim = this.carouselWidth() - this.cardWidth() * this.items().length;
    } catch (error) {
      return false;
    }

    return this._offset <= maxim;
  }

  connectedCallback() {
    super.connectedCallback();
    ro.observe(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    ro.unobserve(this);
  }

  resizedCallback(rect) {
    let mobile;

    try {
      mobile = rect.width <= 661 - 16;
    } catch (error) {
      mobile = false;
    }

    if (this._response.length) {
      const cards = Math.floor(this.carouselWidth() / this.cardWidth(false));
      const width = this.carouselWidth() - cards * this.cardWidth(false);
      const margin = cards && !mobile ? Math.floor(width / cards / 2) : 0;
      const init = cards ? 15 : 0;

      this.items().forEach(node => {
        // eslint-disable-next-line no-param-reassign
        node.style.marginLeft = `${margin}px`;
        // eslint-disable-next-line no-param-reassign
        node.style.marginRight = `${init + margin}px`;
      });
    }
  }
}
