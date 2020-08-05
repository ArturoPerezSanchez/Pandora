import { html, css, LitElement } from 'lit-element';

export class PandoraRadioButton extends LitElement {
  static get styles() {
    return css`
      .container {
        width: 100%;
      }
    `;
  }

  static get properties() {
    return {
      options: { type: Array },
      endpointURL: { type: String },

      text: { type: String },
      textcolor: { type: String },
      backgroundcolor: { type: String },
      activebackgroundcolor: { type: String },
      textsize: { type: String },
      borderradious: { type: String },
      bordercolor: { type: String },

      _data: { type: Array },
      _error: { type: String },
    };
  }

  constructor() {
    super();
    this.options = [];
    this.endpointURL = '';

    this.text = '';
    this.textcolor = 'green';
    this.backgroundcolor = 'white';
    this.activebackgroundcolor = 'white';
    this.textsize = '12px';
    this.borderradious = '0%';
    this.bordercolor = 'black';

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
      if ([''].includes(propName)) {
        this.updatedResponse();
      }
    });
  }

  updatedResponse() {
    if (this.options) {
      this._data = this.options;
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
