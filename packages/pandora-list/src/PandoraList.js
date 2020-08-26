import { html, css, LitElement } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

export class PandoraList extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        font-family: 'Open Sans', sans-serif;
      }

      .container {
        width: 100%;
        margin: auto;
        text-align: center;
      }

      .list {
        list-style-type: none;
      }

      .element {
        background-color: transparent;
        border: 0px solid black;
      }

      li {
        padding: 8px;
        text-align: start;
      }
    `;
  }

  static get properties() {
    return {
      endpointurl: { type: String },
      elements: { type: Array },
      listStyle: { type: String },
      textColor: { type: String },
      backgroundColor: { type: String },
      blockBorder: { type: String },
      customIcon: { type: String },
      _response: { type: Array },
    };
  }

  constructor() {
    super();
    this.endpointurl = '';
    this.elements = null;

    this.listStyle = 'decimal';
    this.textColor = 'white';
    this.backgroundColor = '#333';
    this.blockBorder = '2px solid black';
    this.customIcon = '';

    this._response = [];
    this._error = '';
  }

  render() {
    return html`
      ${this.customIcon
        ? html`
            <style>
              li:before {
                margin-left: -27px;
                margin-right: 10px;
                content: '${this.customIcon}';
              }
            </style>
          `
        : html``}
      <div class="container" style="background:${this.backgroundColor};">
        ${this._error
          ? html`
              ${this._error}
            `
          : html`
              <ul
                class="list"
                style="color:${this.textColor}; list-style-type:${this.listStyle}; border:${this
                  .blockBorder}"
              >
                ${this._response.map(el => unsafeHTML(this.getElements(el)))}
              </ul>
            `}
      </div>
    `;
  }

  updated(changedProperties) {
    changedProperties.forEach((_, propName) => {
      if (['endpointurl', 'elements'].includes(propName)) {
        this.updatedResponse();
      }
      if (
        ['listStyle', 'color', 'backgroundColor', 'border', 'customIcon', 'hover'].includes(
          propName,
        )
      ) {
        this.updatedResponse();
      }
    });
  }

  updatedResponse() {
    if (this.elements) {
      this._response = this.elements;
    } else {
      fetch(this.endpointurl)
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

  getElements(el) {
    let res = `<li class="element">${el.title}`;
    if (el.childs) {
      res += `<ul class="list" style="color:${this.textColor}; list-style-type:${this.listStyle}; padding-left:25px;">`;
      el.childs.forEach(child => {
        res += this.getElements(child);
      });
      res += '</ul>';
    }
    res += '</li>';
    return res;
  }
}
