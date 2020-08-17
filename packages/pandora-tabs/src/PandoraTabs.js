import { html, css, LitElement } from 'lit-element';

export class PandoraTabs extends LitElement {
  static get styles() {
    return css`
      .container {
        width: 100%;
      }

      a {
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        line-height: 1.1875rem;
        text-decoration: none;
        text-align: center;
        color: unset;
      }

      ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        flex-wrap: wrap;
      }

      .list {
        margin-bottom: 7px;
        cursor: pointer;
        padding: 1% 2%;
        border: 1px solid transparent;
        border-bottom: 1px solid #333333;
      }

      .list.active {
        border: 1px solid;
        border-color: #333333 #333333 transparent #333333;
        border-bottom: none;
        border-radius: 1%;
      }

      .list:hover {
        border-color: #d8d8d8;
        border-bottom: transparent;
        border-radius: 1%;
      }

      .list.active:hover {
        border-color: #333;
      }
    `;
  }

  static get properties() {
    return {
      selected: { type: Number },
      content: { type: String },
      textcolor: { type: String },
      backgroundcolor: { type: String },
      activebackgroundcolor: { type: String },
      activetextcolor: { type: String },

      _data: { type: Array },
      _error: { type: String },
    };
  }

  constructor() {
    super();
    this.selected = 0;
    this.content = '';
    this._data = [];
    this._error = '';
    this.textcolor = 'green';
    this.backgroundcolor = 'white';
    this.activebackgroundcolor = 'white';
    this.activetextcolor = 'black';
  }

  render() {
    return html`
      <style>
        .list.active {
          background-color: ${this.activebackgroundcolor};
          background-color: var(--activebackgroundcolor);
        }
      </style>
      <div class="container">
        <ul>
          ${this._data.map(
            (dato, index) => html`
              <li
                class="list ${index === this.selected ? 'active' : ''}"
                data-slide=${index}
                @click=${this.changeSelection}
              >
                <a href="${dato.href}">
                  ${dato.label}
                </a>
              </li>
            `,
          )}
        </ul>
      </div>
    `;
  }

  updated(changedProperties) {
    changedProperties.forEach((_, propName) => {
      if (['content', 'data'].includes(propName)) {
        this.updatedResponse();
      } else if (['textcolor', 'backgroundcolor'].includes(propName)) {
        this.updateElements();
        this.updateActive();
      } else if (['activetextcolor', 'activebackgroundcolor', 'selected'].includes(propName)) {
        this.updateActive();
      } else {
        this.updateElements();
        this.updateActive();
      }
    });
  }

  /* eslint no-param-reassign: ["error", { "props": false }] */
  changeSelection(e) {
    const clicked = parseInt(e.currentTarget.getAttribute('data-slide'), 10);
    if (this.selected !== clicked) {
      this.selected = clicked;
      this.updateElements();
    }
  }

  /* eslint no-param-reassign: ["error", { "props": false }] */
  updateElements() {
    const items = this.shadowRoot.querySelectorAll('.list');
    items.forEach(item => {
      item.style.color = this.textcolor;
      item.style.backgroundColor = this.backgroundcolor;
    });
  }

  /* eslint no-param-reassign: ["error", { "props": false }] */
  updateActive() {
    const items = this.shadowRoot.querySelectorAll('.active');
    items.forEach(item => {
      item.style.color = this.activetextcolor;
      item.style.backgroundColor = this.activebackgroundcolor;
    });
  }

  updatedResponse() {
    if (this.data) {
      this._data = this.data;
    } else {
      fetch(this.content)
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
}
