import { html, css, LitElement } from 'lit-element';

export class PandoraGallery extends LitElement {
  static get styles() {
    return css`
      .container {
        padding: 5px;
      }

      .principal {
        text-align: center;
        margin: auto;
        margin-bottom: 10px;
        width: 100%;
        display: flex;
      }

      .principal .image {
        width: 100%;
        background-size: contain;
        background-repeat: no-repeat;
        background-position-y: center;
        background-position-x: center;
        transition: all 0.5s linear;
      }

      hr {
        margin: 0px;
      }

      .secondary {
        display: flex;
        width: 100%;
        overflow: hidden;
      }

      .secondary .images {
        display: flex;
        width: 100%;
        position: relative;
        overflow: visible;
        transition: all ease 0.6s;
      }

      .carousel {
        width: 100%;
        display: flex;
        overflow: hidden;
      }

      .secondary .images .image {
        min-width: -moz-calc(20%);
        min-width: -o-calc(20%);
        min-width: calc(20%);
        min-width: -webkit-calc(20%);
        display: flex;
      }
      .secondary .images .image img {
        max-width: 100%;
        height: auto;
        margin: auto;
        margin-left: 3%;
        margin-right: 3%;
        max-width: calc(94%);
      }

      .arrow {
        width: 9%;
        background-color: white;
        z-index: 1;
        display: flex;
        text-align: center;
        font-size: 22px;
      }

      .arrow .left {
        margin: auto;
        text-align: right;
      }

      .arrow .right {
        margin: auto;
        text-align: left;
      }

      a {
        cursor: pointer;
      }

      a.disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      @media (max-width: 900px) {
        .arrow {
          font-size: 18px;
        }
      }

      @media (max-width: 500px) {
        .arrow {
          font-size: 14px;
        }
      }
    `;
  }

  static get properties() {
    return {
      endpointURL: { type: String },
      content: { type: Array },

      arrowLeft: { type: String },
      arrowRight: { type: String },
      arrowsBackgroundColor: { type: String },
      height: { type: Number },
      horizontalBar: { type: Boolean },
      carouselBackgroundColor: { type: String },
      alt: { type: String },

      _data: { type: Array },
      _error: { type: String },
      _index: { type: Number },
      _st: { type: Object },
      _offset: { type: Number },
    };
  }

  constructor() {
    super();
    this.content = null;
    this.endpointURL = '';

    this.arrowLeft = '\u{2b98}';
    this.arrowRight = '\u{2b9a}';
    this.arrowsBackgroundColor = 'transparent';
    this.height = 500;
    this.horizontalBar = true;
    this.carouselBackgroundColor = 'transparent';
    this.alt = 'image not found';

    this._index = 0;
    this._data = [];
    this._error = '';
    this._st = '';
    this._offset = 0;
  }

  render() {
    return html`
      ${this._st}
      <div class="container" style="height: ${this.height}px;">
        <div class="principal" style="height: ${this.height * 0.75 - 10}px;">
          <div
            class="image"
            style="height:${this.height * 0.75 - 10}px; background-image:url(${this._data[
              this._index
            ]});"
          ></div>
        </div>
        ${this.horizontalBar
          ? html`
              <hr />
            `
          : html``}
        <div class="secondary" style="height: ${this.height * 0.25}px;">
          <div class="arrow left" style="background:${this.arrowsBackgroundColor};">
            <a
              class="left ${this._offset === 0 ? 'disabled' : ''}"
              direction=${1}
              @click=${this.move}
            ></a>
          </div>
          <div class="carousel" style="background:${this.carouselBackgroundColor};">
            <div class="images">
              ${this._data.map(
                (dato, index) => html`
                  <a index=${index} @click=${this.select} class="image">
                    <img src="${dato}" alt=${this.alt} />
                  </a>
                `,
              )}
            </div>
          </div>
          <div class="arrow" style="background:${this.arrowsBackgroundColor};">
            <a
              class=" right ${this._offset <=
              -(this._data.length - Math.min(5, this._data.length)) * 20
                ? 'disabled'
                : ''}"
              direction=${-1}
              @click=${this.move}
            ></a>
          </div>
        </div>
      </div>
    `;
  }

  updated(changedProperties) {
    changedProperties.forEach((_, propName) => {
      if (['content', 'endpointURL'].includes(propName)) {
        this.updatedResponse();
      } else if (['arrowLeft', 'arrowRight'].includes(propName)) {
        this.getst();
      }
    });
  }

  updatedResponse() {
    if (this.content) {
      this._data = this.content;
    } else {
      fetch(this.endpointURL)
        .then(response => {
          if (response.ok) {
            response
              .json()
              .then(json => {
                this._data = json;
              })
              .catch(error => {
                this._error = `ERROR_Json:${error.message}`;
              });
          } else {
            this._error = 'Respuesta de red KO';
          }
        })
        .catch(error => {
          this._error = `ERROR_Fetch: ${error.message}`;
        });
    }
  }

  getst() {
    this._st = html`
      <style>
        .arrow .left:after {
          content: '${this.arrowLeft}';
        }
        .arrow .right:after {
          content: '${this.arrowRight}';
        }
      </style>
    `;
  }

  move(e) {
    this._offset = Math.max(
      -(this._data.length - Math.min(5, this._data.length)) * 20,
      Math.min(0, this._offset + e.currentTarget.getAttribute('direction') * 20),
    );
    this.shadowRoot.querySelector('.images').style.transform = `translateX(${this._offset}%)`;
  }

  select(e) {
    this._index = e.currentTarget.getAttribute('index');
  }
}
