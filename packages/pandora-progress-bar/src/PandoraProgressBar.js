import { html, css, LitElement } from 'lit-element';

export class PandoraProgressBar extends LitElement {
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

      .progress-text {
        font-weight: 300;
        width: 100%;
      }

      .progress {
        margin-top: 5px;
        width: 100%;
        background-color: #eeeeee;
        border-radius: 2px;

        -webkit-box-shadow: 0px 3px 2px 0px rgba(202, 202, 202, 0.9);
        -moz-box-shadow: 0px 3px 2px 0px rgba(202, 202, 202, 0.9);
        box-shadow: 0px 3px 2px 0px rgba(202, 202, 202, 0.9);
      }

      .bar {
        height: 10px;
        width: 50%;
        border-radius: 2px;
        text-align: right;
        background: green;
      }

      .bar-text {
        margin-left: auto;
        position: unset;
        margin-top: 10px;
        display: block;
        font-weight: 600;
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
      <div class="container">
        <div class="progress-text">${this.title}</div>
        <div class="progress">
          <div class="bar"></div>
        </div>
        <div class="bar-text">
          ${this.percentage !== 100
            ? html`
                ${this.percentage}%
              `
            : 'Completado'}
        </div>
      </div>
    `;
  }

  updated(changedProperties) {
    changedProperties.forEach((_, propName) => {
      if (['percentage'].includes(propName)) {
        this.updatePercentage(this.percentage);
      }
      if (['color'].includes(propName)) {
        this.updateColor(this.color);
      }
    });
  }

  updatePercentage(percentage) {
    this.percentage = Math.min(Math.max(percentage, 0), 100);
    this.shadowRoot.querySelector('.bar').style.width = `${this.percentage}%`;
    this.shadowRoot.querySelector('.bar-text').style.marginRight = `${100 - this.percentage}%`;
  }

  updateColor(color) {
    this.shadowRoot.querySelector('.bar').style.background = color;
  }
}
