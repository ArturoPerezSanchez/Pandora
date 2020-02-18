import { html, css, LitElement } from 'lit-element';

export class PandoraSocialShare extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        font-size: 14px;
        font-family: 'Open Sans', sans-serif;
      }

      .container {
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 3px;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      percentage: { type: Number },
      color: { type: String },
    };
  }

  constructor() {
    super();
    this.percentage = 0;
    this.color = 'green';
  }

  render() {
    return html`
      <div class="container"></div>
    `;
  }

  updated() {}
}
