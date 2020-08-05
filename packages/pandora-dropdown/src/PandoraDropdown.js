import { html, css, LitElement } from 'lit-element';

export class PandoraDropdown extends LitElement {
  static get styles() {
    return css`
      .container {
        width: 100%;
      }
    `;
  }

  static get properties() {
    return {
      content: { type: Array },
      endpointURL: { type: String },

      text: { type: String },
      textcolor: { type: String },
      backgroundcolor: { type: String },
      activebackgroundcolor: { type: String },
      activetextcolor: { type: String },
      width: { type: String },
      textsize: { type: String },
      borderradious: { type: String },
      bordercolor: { type: String },

      _data: { type: Array },
      _error: { type: String },
    };
  }

  constructor() {
    super();
    this.content = [];
    this.endpointURL = '';
    this.text = '';
    this.textcolor = 'green';
    this.backgroundcolor = 'white';
    this.activebackgroundcolor = 'white';
    this.activetextcolor = 'black';
    this.width = '100px';
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
}
