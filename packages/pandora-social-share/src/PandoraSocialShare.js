import { html, css, LitElement } from 'lit-element';
import eot from '../public/social-share-kit.eot';
import svg from '../public/social-share-kit.svg';
import ttf from '../public/social-share-kit.ttf';
import woff from '../public/social-share-kit.woff';

export class PandoraSocialShare extends LitElement {
  static get styles() {
    return css`
      :host {
        --border-color: transparent;
        --background-color: transparent;
        --text-color: transparent;
        --font-size: 1.25em;
        --facebook: #3b5998;
        --twitter: #1da1f2;
        --linkedin: #1c87bd;
        --hover: #0b4c1a;
      }

      .container {
        text-align: center;
        justify-content: space-between;
        width: 100%;
        display: flex;
        border-radius: 3px;
        overflow: auto;
      }

      .sb {
        padding: 3px;
        background-color: var(--background-color);
        color: var(--text-color);
        border: 1px solid;
        border-radius: 3px;
        cursor: pointer;
        transition: background-color 0.1s;
        -webkit-transition: background-color 0.1s;
        -moz-transition: background-color 0.1s;
        -ms-transition: background-color 0.1s;
        -o-transition: background-color 0.1s;
        transition: width 0.5s, height 4s;
        width: 2em;
      }

      .sb::before {
        font-size: var(--font-size);
        font-family: 'social-share-kit';
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        vertical-align: middle;
      }

      .sb:hover {
        --text-color: white;
        width: 100%;
      }

      .sb-facebook {
        --border-color: var(--facebook);
        --text-color: var(--facebook);
      }

      .sb-facebook:before {
        content: 'a';
      }

      .sb-facebook:hover {
        --background-color: var(--facebook);
        --border-color: var(--facebook);
      }

      .sb-twitter {
        --border-color: var(--twitter);
        --text-color: var(--twitter);
      }

      .sb-twitter:hover {
        --background-color: var(--twitter);
      }

      .sb-twitter:before {
        content: 'b';
      }

      .sb-linkedin {
        --border-color: var(--linkedin);
        --text-color: var(--linkedin);
      }

      .sb-linkedin:before {
        content: 'g';
      }

      .sb-linkedin:hover {
        --background-color: var(--linkedin);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      url: { type: String },
      facebook: { type: Boolean },
      twitter: { type: Boolean },
      linkedin: { type: Boolean },
      backgroundcolor: { type: String },

      border: { type: String },
      iconcolor: { type: String },
    };
  }

  constructor() {
    super();
    this.title = '';
    this.url = '';
    this.facebook = true;
    this.twitter = true;
    this.linkedin = true;
    this.backgroundcolor = 'transparent';
    this.border = 0;
  }

  render() {
    return html`
      <div class="container">
        ${this.facebook
          ? html`
              <a class="sb sb-facebook" title="Facebook" @click=${this.getLink}></a>
            `
          : ''}
        ${this.twitter
          ? html`
              <a class="sb sb-twitter" title="Twitter" @click=${this.getLink}></a>
            `
          : ''}
        ${this.linkedin
          ? html`
              <a class="sb sb-linkedin" title="LinkedIn" @click=${this.getLink}></a>
            `
          : ''}
      </div>
    `;
  }

  firstUpdated() {
    const newStyle = document.createElement('style');
    newStyle.appendChild(
      document.createTextNode(
        `@font-face {font-family:'social-share-kit';src:url('${eot}');src:url('${eot}?#iefix') format('embedded-opentype'),url('${woff}') format('woff'),url('${ttf}') format('truetype'),url('${svg}#social-share-kit') format('svg')}`,
      ),
    );
    document.head.appendChild(newStyle);
  }

  getLink(e) {
    const title = this.title || encodeURIComponent(document.title);
    const url = this.url || encodeURIComponent(document.URL);

    let link = '';

    switch (e.currentTarget.title) {
      case 'Facebook':
        link = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`;
        break;
      case 'Twitter':
        link = `https://twitter.com/intent/tweet?text=${title}:%20${url}`;
        break;
      case 'LinkedIn':
        link = `http://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
        break;
      default:
        link = '';
    }

    window.open(link, 'Share', 'width=750,height=500');
  }

  /* eslint no-param-reassign: ["error", { "props": false }] */
  updated(changedProperties) {
    changedProperties.forEach((_, propName) => {
      if (['backgroundcolor'].includes(propName)) {
        this.shadowRoot.querySelector('.container').style.background = this.backgroundcolor;
      } else if (['border', 'iconcolor', 'facebook', 'twitter', 'linkedin'].includes(propName)) {
        this.shadowRoot.querySelectorAll('.sb').forEach(but => {
          but.style.border = `${this.border.toString()}px solid var(--border-color)`;
          but.style.color = this.iconcolor;
        });
      }
    });
  }
}
