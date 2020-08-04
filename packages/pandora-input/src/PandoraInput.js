import { html, css, LitElement } from 'lit-element';

export class PandoraInput extends LitElement {
  static get styles() {
    return css`
      .container {
        width: 100%;
      }
    `;
  }

  static get properties() {
    return {
      placeholder: { type: String },
      textcolor: { type: String },
      backgroundcolor: { type: String },
      activebackgroundcolor: { type: String },
      activetextcolor: { type: String },
      width: { type: String },
      textsize: { type: String },
      borderradious: { type: String },
      bordercolor: { type: String },
    };
  }

  constructor() {
    super();
    this.placeholder = '';
    this.textcolor = 'green';
    this.backgroundcolor = 'white';
    this.activebackgroundcolor = 'white';
    this.activetextcolor = 'black';
    this.width = '100px';
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
