import { html, css, LitElement } from 'lit-element';

export class PandoraRadioButton extends LitElement {
  static get styles() {
    return css`
      .container {
        width: 100%;
      }
      legend {
        float: left;
        width: 100%;
        text-align: center;
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
      textsize: { type: String },
      fontweight: { type: String },
      borderradius: { type: String },
      border: { type: String },
      textalign: { type: String },
      labelText: { type: String },
      name: { type: String },
      disabled: { type: Boolean },
      required: { type: Boolean },
      readonly: { type: Boolean },

      _data: { type: Array },
    };
  }

  constructor() {
    super();
    this.endpointURL = '';
    this.text = 'select an option';

    this.textcolor = 'black';
    this.backgroundcolor = '#ccc';
    this.textsize = '18px';
    this.fontweight = '200';
    this.borderradius = '3px';
    this.border = '3px solid #333';
    this.textalign = 'left';
    this.labelText = 'Checkbox Label';
    this.name = 'pandoraInput';
    this.disabled = false;
    this.required = true;
    this.readonly = false;

    this._data = [];
    this._error = null;
  }

  render() {
    return html`
      ${this._error
        ? html`
            ${this.error}
          `
        : html`
            <fieldset
              class="container"
              style="
          color:${this.textcolor};
          background:${this.backgroundcolor};
          text-align:${this.textalign};
          font-size:${this.textsize};
          border-radius:${this.borderradius};
          border:${this.border};
          font-weight:${this.fontweight};"
            >
              <legend>${this.text}</legend>
              ${this._data.map(
                (dato, index) => html`
                  <br /><label aria-label=${this.name} for=${this.name + index} name=${this.name}
                    >${dato}</label
                  >
                  <input type="radio" aria-label=${this.name} name=${this.name} />
                `,
              )}
            </fieldset>
          `}
    `;
  }

  updated(changedProperties) {
    changedProperties.forEach((_, propName) => {
      if (['options', 'endpointURL'].includes(propName)) {
        this.updatedResponse();
      }
    });
  }

  updatedResponse() {
    this._error = null;
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
