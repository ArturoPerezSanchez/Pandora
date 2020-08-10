import { html, css, LitElement } from 'lit-element';

export class PandoraFooter extends LitElement {
  static get styles() {
    return css`
      * {
        display: block;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        outline: 0;
      }

      :host([topBorder]) .columncontent {
        border-top: 1px solid black;
        margin-top: 15px;
      }

      a {
        text-decoration: none;
        font-size: 14px;
      }

      h4 {
        margin: 0;
        padding-top: 10px;

        color: var(--gray);
        font-size: 20px;
        font-weight: bold;
      }

      ul {
        padding: 0;
        margin: 10px 0;
      }

      li {
        margin-bottom: 10px;
        list-style-type: none;
      }

      .container {
        position: relative;
        width: 100%;
        background: #eeeeee;
        margin-right: auto;
        margin-left: auto;
      }

      .columns {
        display: flex;
        flex-direction: row;
        align-items: top;
        padding-right: 20px;
      }

      .text {
        text-align: center;
        margin: 30px;
        margin-bottom: 15px;
        padding-top: 30px;
        font-size: 16px;
      }

      .columncontent {
        margin-left: auto;
        margin-right: auto;
        padding-right: 20px;
      }

      .column {
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
        width: 100%;
      }

      .links {
        margin-left: auto;
      }

      .links a:not(:last-child) {
        margin-right: 45px;
      }

      @media (max-width: 1023px) {
        .text {
          margin: 0 5% 0 5%;
          padding: 10px;
          font-size: 10px;
        }
        h4 {
          display: flex;
          justify-content: space-between;
          font-size: 18px;
          cursor: pointer;
        }

        h4::after {
          display: inline-block;
          content: '\u{23F7}';
          font-size: 16px;
          margin-right: 5px;

          transition: transform 0.5s;
          -webkit-transition: transform 0.5s;
          -moz-transition: transform 0.5s;
          -ms-transition: transform 0.5s;
          -o-transition: transform 0.5s;
        }

        .rotated::after {
          transform: rotate3d(1, 0, 0, 180deg);
        }

        .container .columns {
          flex-direction: column;
          padding-right: 0px;
        }

        .container .columns .column .columncontent {
          width: 100%;
        }

        .container .columns .column .media-hidden {
          display: none;
        }

        .container .columns .column {
          width: 90%;
          margin: 5%;
          margin-top: 15px;
          margin-bottom: 15px;
        }
        .container .columns .column:last-child {
          margin-bottom: 45px;
        }
      }
    `;
  }

  static get properties() {
    return {
      content: { type: Array },
      endpointURL: { type: String },

      links: { type: Array },
      topBorder: { type: Boolean, reflect: true },
      text: { type: String },
      textColor: { type: String },
      textSize: { type: String },
      linksTitleColor: { type: String },
      linksColor: { type: String },
      backgroundColor: { type: String },

      _active: { type: Number },
      _columns: { type: Array },
      _error: { type: String },
    };
  }

  constructor() {
    super();
    this.content = null;
    this.endpointURL = '';

    this.links = [];
    this.text = '';
    this.topBorder = true;
    this.linksColor = '#087021';
    this.linksTitleColor = '#087021';
    this.backgroundColor = '#ddd';
    this.textColor = '#333';
    this.textSize = '33px';

    this._active = -1;
    this._columns = [];
    this._error = '';
  }

  render() {
    let res;
    if (this._error) {
      res = html`
        ${this._error}
      `;
    } else {
      res = html`
        <div class="container">
          ${this.text
            ? html`
                <p class="text" style="color: ${this.textColor}; font-size:${this.textSize}">
                  ${this.text}
                </p>
              `
            : html``}
          <div class="columns">
            ${this._columns.map(
              columna => html`
                <div
                  class="column"
                  column-index=${this._columns.indexOf(columna)}
                  @click="${this.displayList})"
                >
                  <div class="columncontent">
                    <h4 style="color:${this.linksTitleColor}">${columna.title}</h4>
                    <ul class="media-hidden">
                      ${columna.links
                        ? html`
                            ${columna.links.map(
                              link =>
                                html`
                                  <li>
                                    <a
                                      href=${link.href}
                                      title=${link.title}
                                      style="color: ${this.linksColor}"
                                      >${link.title}</a
                                    >
                                  </li>
                                `,
                            )}
                          `
                        : html``}
                    </ul>
                  </div>
                </div>
              `,
            )}
          </div>
        </div>
      `;
    }
    return res;
  }

  firstUpdated() {
    const opensans = document.createElement('link');
    opensans.href =
      'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap';
    opensans.rel = 'stylesheet';
    document.head.append(opensans);
    this.updatedResponse();
  }

  updated(changedProperties) {
    changedProperties.forEach((_, propName) => {
      if (['backgroundColor'].includes(propName)) {
        this.updateColor(this.backgroundColor);
      } else if (['endpointURL', 'content', '_columns'].includes(propName)) {
        this.updatedResponse();
      }
    });
  }

  updatedResponse() {
    this._error = null;
    if (this.content) {
      this._columns = this.content;
    } else {
      fetch(this.endpointURL)
        .then(response => {
          if (response.ok) {
            response
              .json()
              .then(json => {
                this._columns = json;
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

  updateColor(backgroundColor) {
    this.shadowRoot.querySelector('.container').style.background = backgroundColor;
  }

  displayList(e) {
    const index = e.currentTarget.getAttribute('column-index');
    const lists = this.shadowRoot.querySelectorAll('ul');

    if (this._active === index) {
      if (lists[index].classList.contains('media-hidden')) {
        lists[index].classList.remove('media-hidden');
        lists[index].parentElement.getElementsByTagName('h4')[0].classList.add('rotated');
      } else {
        lists[index].classList.add('media-hidden');
        lists[index].parentElement.getElementsByTagName('h4')[0].classList.remove('rotated');
      }
    } else {
      lists[index].classList.remove('media-hidden');
      lists[index].parentElement.getElementsByTagName('h4')[0].classList.add('rotated');
      if (this.active >= 0) {
        lists[this.active].classList.add('media-hidden');
        lists[this.active].parentElement.getElementsByTagName('h4')[0].classList.remove('rotated');
      }
    }
    this.active = index;
  }
}
