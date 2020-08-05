import { html, css, LitElement } from 'lit-element';

export class PandoraSlider extends LitElement {
  static get styles() {
    return css`
      .container {
        width: 100%;
      }
    `;
  }

  static get properties() {
    return {
      minvalue: { type: Number },
      maxvalue: { type: Number },
      double: { type: Boolean },

      text: { type: String },
      textcolor: { type: String },
      outsidebackgroundcolor: { type: String },
      insidebackgroundcolor: { type: String },
      textsize: { type: String },
      borderradious: { type: String },
      bordercolor: { type: String },
      pointColor: { type: String },

      minselected: { type: Number },
      maxselected: { type: Number },
    };
  }

  constructor() {
    super();
    this.minvalue = 0;
    this.maxvalue = 10;
    this.double = false;

    this.text = '';
    this.textcolor = 'green';
    this.outsidebackgroundcolor = 'white';
    this.insidebackgroundcolor = 'white';
    this.textsize = '12px';
    this.borderradious = '0%';
    this.bordercolor = 'black';
    this.pointColor = 'green';

    this._minselected = 0;
    this._maxselected = 10;
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
