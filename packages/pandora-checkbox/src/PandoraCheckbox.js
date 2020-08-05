import { html, css, LitElement } from 'lit-element';

export class PandoraCheckbox extends LitElement {
  static get styles() {
    return css`
      .container {
        width: 100%;
      }
    `;
  }

  static get properties() {
    return {
      text: { type: String },
      textcolor: { type: String },
      textsize: { type: String },
      backgroundcolor: { type: String },
      borderradious: { type: String },
      bordercolor: { type: String },
    };
  }

  constructor() {
    super();
    this.text = '';
    this.textcolor = 'green';
    this.textsize = '12px';
    this.backgroundcolor = 'transparent';
    this.borderradious = '0%';
    this.bordercolor = 'black';
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
