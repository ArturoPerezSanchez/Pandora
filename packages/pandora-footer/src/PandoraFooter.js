import { html, css, LitElement } from 'lit-element';

export class PandoraFooter extends LitElement {
  static get styles() {
    return css`
      * {
        display: block;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        outline: 0;
      }

      a {
        text-decoration: none;
        font-size: 14px;
      }

      h4 {
        margin: 0;
        padding-top: 10px;

        color: var(--gray);
        font-size: 20px;
        font-weight: bold;
      }

      ul {
        padding: 0;
        margin: 10px 0;
      }

      li {
        margin-bottom: 10px;
        list-style-type: none;
      }

      .container {
        position: relative;
        width: 100%;
        background: #eeeeee;
        margin-right: auto;
        margin-left: auto;
      }

      .columns {
        display: flex;
        flex-direction: row;
        align-items: top;
        padding: 0 20px;
      }

      .text {
        text-align: center;
        margin: 30px;
        padding-top: 30px;
        font-size: 16px;
      }

      .column {
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
        width: 100%;
      }

      :host([topBorder]) .column {
        border-top: 1px solid black;
      }

      .container .columns .column:not(:last-child) {
        margin-right: 3%;
      }

      .links {
        margin-left: auto;
      }

      .links a:not(:last-child) {
        margin-right: 45px;
      }

      @media (max-width: 1023px) {
        .container .columns .column {
          flex: 0 0 49%;
          padding: 30px 0;
        }

        .container .columns .column:nth-child(even) {
          margin-right: 0;
        }
      }

      @media (max-width: 480px) {
        h4 {
          display: flex;
          justify-content: space-between;
          font-size: 18px;
        }

        h4::after {
          display: inline-block;
          content: '\u{23F7}';
          font-size: 16px;
          margin-right: 5px;

          transition: transform 0.2s;
          -webkit-transition: transform 0.2s;
          -moz-transition: transform 0.2s;
          -ms-transition: transform 0.2s;
          -o-transition: transform 0.2s;
        }

        h4:focus::after {
          transform: rotate(180deg);
        }

        h4:focus ~ ul {
          display: block;
        }

        ul {
          display: none;
        }

        pandora-brand {
          position: absolute;
          top: 0;
          left: 20px;
        }

        .container:first-child {
          padding: 70px 0 0;
          border: none;
        }

        .container .columns .column {
          margin-right: 0 !important;
          flex-basis: 100%;
          padding-bottom: 10px;
        }

        .container .columns .column:last-child {
          border-bottom: 1px solid var(--gray);
        }
      }
    `;
  }

  static get properties() {
    return {
      columns: { type: Array },
      links: { type: Array },
      topBorder: { type: Boolean, reflect: true },
      text: { type: String },
      linksColor: { type: String },
      backgroundColor: { type: String },
      textColor: { type: String },
      textSize: { type: String },
    };
  }

  constructor() {
    super();
    this.columns = [];
    this.links = [];
    this.text = '';
    this.topBorder = true;
    this.linksColor = '#087021';
    this.backgroundColor = '#ddd';
    this.textColor = 'fff';
    this.textSize = '18px';
  }

  render() {
    return html`
      <div class="container">
        ${this.text
          ? html`
              <p class="text" style="color: ${this.textColor}; font-size:${this.textSize}">
                ${this.text}
              </p>
            `
          : html``}
        <div class="columns">
          ${this.columns.map(
            columna => html`
              <div class="column">
                <h4>${columna.title}</h4>
                <ul>
                  ${columna.links.map(
                    link => html`
                      <li>
                        <a href=${link.href} title=${link.title} style="color: ${this.linksColor}"
                          >${link.title}</a
                        >
                      </li>
                    `,
                  )}
                </ul>
              </div>
            </div>
          `,
          )}
        </div>
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
