import { html, css, LitElement } from 'lit-element';

export class PandoraDatepicker extends LitElement {
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
      backgroundcolor: { type: String },
      activebackgroundcolor: { type: String },
      activetextcolor: { type: String },
      textsize: { type: String },
      borderradious: { type: String },
      bordercolor: { type: String },
    };
  }

  constructor() {
    super();
    this.text = '';
    this.textcolor = 'green';
    this.backgroundcolor = 'white';
    this.activebackgroundcolor = 'white';
    this.activetextcolor = 'black';
    this.textsize = '12px';
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
