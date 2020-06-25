import { html, css, LitElement } from 'lit-element';

export class PandoraList extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        font-size: 14px;
        font-family: 'Open Sans', sans-serif;
      }

      .container {
        width: 100%;
        margin: auto;
        text-align: center;
      }

      .list {
        list-style-type: none;
        border: 2px dashed black;
        background-color: aliceblue;
      }

      .element {
        background-color: red;
      }
    `;
  }

  static get properties() {
    return {
      endpointurl: { type: String },
      elements: { type: String },
      listStyle: { type: String },
      color: { type: String },
      backgroundColor: { type: String },
      border: { type: String },
      customIcon: { type: String },
      hoverColor: { type: String },
      _response: { type: Array },
    };
  }

  constructor() {
    super();
    this.endpointurl = '';
    this.elements = '';
    this.listStyle = '';
    this.color = '';
    this.backgroundColor = '';
    this.border = '';
    this.customIcon = '';
    this.hoverColor = '';

    this._response = [];
    this._error = '';
  }

  render() {
    return html`
      <div class="container">
        ${this._error
          ? html`
              ${this.error}
            `
          : html`
              <ul class="list">
                ${this._response.map(
                  el => html`
                    <li class="element">${el}</li>
                  `,
                )}
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
                this._response = json.data;
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
}
