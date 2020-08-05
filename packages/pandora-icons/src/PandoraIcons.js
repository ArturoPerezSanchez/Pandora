import { html, css, LitElement } from 'lit-element';

export class PandoraIcons extends LitElement {
  static get styles() {
    return css`
      .container {
        width: 100%;
      }
    `;
  }

  static get properties() {
    return {
      icon: { type: String },
    };
  }

  constructor() {
    super();
    this.icon = '';
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
