import { html, css, LitElement } from 'lit-element';

export class PandoraCarousel extends LitElement {
  static get styles() {
    return css`
      .container {
        width: 100%;
      }
    `;
  }

  static get properties() {
    return {
      endpointURL: { type: String },
      content: { type: String },

      _data: { type: Array },
      _error: { type: String },
    };
  }

  constructor() {
    super();
    this.endpointURL = '';
    this.content = '';
    this._data = [];
    this._error = '';
  }

  render() {
    return html`
      <div class="container"></div>
    `;
  }

  updated(changedProperties) {
    changedProperties.forEach((_, propName) => {
      if (['endpointURL', 'content'].includes(propName)) {
        this.updatedResponse();
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
}
