import { html, css, LitElement } from 'lit-element';

export class PandoraHeader extends LitElement {
  static get styles() {
    return css`
      * {
        display: block;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        outline: 0;
      }

      .container {
        position: relative;
        width: 100%;
        background: #eeeeee;
        margin-right: auto;
        margin-left: auto;
      }

      header {
        display: flex;
        height: 200px;
      }

      img {
        border-radius: 50px;
      }
    `;
  }

  static get properties() {
    return {
      image: { type: String },
      imagePosition: { type: String },
      text: { type: String },
      textColor: { type: String },
      textSize: { type: String },
      secondaryText: { type: String },
      secondaryTextColor: { type: String },
      secondaryTextSize: { type: String },
      backgroundColor: { type: String },
      bottomBorder: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.image = '';
    this.text = '';
    this.secondaryText = '';

    this.imagePosition = 'left';
    this.textColor = 'black';
    this.textSize = '20px';
    this.secondaryTextColor = 'black';
    this.secondaryTextSize = '14px';
    this.backgroundColor = 'CCC';
    this.bottomBorder = true;
  }

  render() {
    return html`
      <div class="container">
        <header>
          <img src="${this.image}" class="${this.imagePosition}" alt="image not found" />
          <h2>${this.text}</h2>
          <h4>${this.secondaryText}</h4>
        </header>
      </div>
    `;
  }

  firstUpdated() {
    const opensans = document.createElement('link');
    opensans.href =
      'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap';
    opensans.rel = 'stylesheet';
    document.head.append(opensans);
  }

  updated(changedProperties) {
    changedProperties.forEach((_, propName) => {
      if (['backgroundColor'].includes(propName)) {
        this.updateColor(this.backgroundColor);
      }
    });
  }

  updateColor(backgroundColor) {
    this.shadowRoot.querySelector('.container').style.background = backgroundColor;
  }
}
