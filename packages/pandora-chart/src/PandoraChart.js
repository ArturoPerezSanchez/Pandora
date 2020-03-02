import { html, css, LitElement } from 'lit-element';
import * as c3 from 'c3';
import c3css from './c3.css';

export class PandoraChart extends LitElement {
  static get styles() {
    return [
      c3css,
      css`
        :host {
          display: block;
        }

        .legend {
          width: 100%;
          font-size: 0.75em;
          color: #555555;
          font-family: 'Open Sans', sans-serif;
        }

        .legend div {
          cursor: pointer;
          margin: 8px 0;
        }

        .legend span {
          float: left;
          display: inline-block;
          height: 10px;
          width: 15px;
          border-radius: 2px;
          margin-right: 10px;
        }
      `,
    ];
  }

  static get properties() {
    return {
      type: { type: String },
      units: { type: String },
      endpointurl: { type: String },

      _axis: { type: Array },
      _colors: { type: Array },
      _response: { type: Array },
      _error: { type: String },
    };
  }

  constructor() {
    super();
    this.type = 'bar';
    this.units = '';
    this.endpointurl = '';

    this._error = '';
    this._response = [];
    this._axis = [];
    this._colors = [];
  }

  render() {
    return html`
      ${this._error
        ? this._error
        : html`
            <div id="chart"></div>
          `}
    `;
  }

  updated(changedProperties) {
    changedProperties.forEach((_, propName) => {
      if (['_response', 'type', 'units'].includes(propName)) {
        c3.generate(this.generateChart());
      }
      if (['endpointurl'].includes(propName)) {
        this.updatedResponse();
      }
    });
  }

  updatedResponse() {
    fetch(this.endpointurl)
      .then(response => {
        if (response.ok) {
          response
            .json()
            .then(json => {
              this._response = json.data;
              this._axis = json.axis;
              this._colors = json.colors;
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

  generateChart() {
    const base = {
      bindto: this.shadowRoot.querySelector('#chart'),
      data: {
        columns: this._response,
        type: this.type,
        empty: { label: { text: 'No hay datos disponibles' } },
      },

      color: {
        pattern: this._colors
          ? this._colors
          : ['#77B5C3', '#4863A3', '#9371AC', '#D87D7D', '#D9A46C', '#E3CD66'],
      },
      zoom: {
        enabled: true,
      },
      axis: {
        x: {
          type: 'category',
          categories: this._axis ? this._axis : [],
        },
        y: {
          label: {
            position: 'outer-middle',
            text: this.units,
          },
        },
      },
    };

    return base;
  }
}
