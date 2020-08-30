import { html, css, LitElement } from 'lit-element';
import '../../pandora-social-share/pandora-social-share.js';

export class PandoraCard extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        font-family: 'Open Sans', sans-serif;
      }

      .divider {
        border-bottom: 1px solid #d8d8d8;
        margin: 15px 0;
      }

      .card {
        box-shadow: 0 0px 4px 0 rgba(202, 202, 202, 0.5);
        transition: 0.3s;
        width: 100%;
        border-radius: 2px;
      }

      .card .image {
        position: relative;
        text-align: center;
        color: white;
      }

      .card .image img {
        width: 100%;
        height: auto;
        max-height: 150px;
      }

      .card .image .tag {
        position: absolute;
        top: 0;
        left: 0;
        padding: 5px 15px;

        background: #087021;
        font-weight: 300;
      }

      .card .container {
        padding: 2px 15px 10px;
      }

      .card .tag {
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 600;
      }

      .container p {
        font-size: 14px;
        font-weight: 400;
        display: block;
        margin: 4px 0 0;
      }

      .container p.title {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        word-wrap: break-word;
        line-height: 1.2;
      }

      .container p.date {
        opacity: 0.7;
      }

      .container p.body {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
      }

      .container p.share {
        font-size: 13px;
        opacity: 0.85;
      }

      .container a {
        display: block;
        margin-top: 20px;

        color: #087021;
        text-decoration: none;
        font-size: 14px;
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        word-wrap: break-word;
      }

      .container a::before {
        content: '\u{23F5}';
        padding-right: 3px;
      }

      .container .subcontainer {
        display: flex;
        margin-bottom: 10px;

        line-height: 20px;
      }

      .container .subcontainer p {
        flex: 30%;
        margin: 0;
      }

      .container .subcontainer a {
        margin: 0;
      }

      :host([size='md']) .card {
        width: 278px;
      }

      :host([size='lg']),
      :host([size='xs']) .card {
        width: 375px;
      }

      :host([size='xs']) .card {
        display: flex;
      }

      :host([size='xs']) .container {
        margin-top: 5px;
        padding: 10px;
        margin-bottom: 0px;
        padding-bottom: 0px;
        width: 50%;
      }

      :host([size='xs']) .container .subcontainer {
        margin-bottom: 5px;
      }

      :host([size='xs']) .container .subcontainer .date {
        font-size: 12px;
      }

      :host([size='xs']) .image {
        flex: 20%;
        padding: 0px;
        margin: 7px;
        height: 100px;
      }

      :host([size='xs']) .image .tag {
        display: none;
      }

      :host([size='xs']) p.title {
        margin-top: -5px;

        font-size: 15px;
        -webkit-line-clamp: 1;
      }

      :host([size='xs']) p.tag {
        margin: 5px 0 5px;
        font-size: 12px;
        -webkit-line-clamp: 1;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      date: { type: String },
      body: { type: String },
      tag: { type: String },
      img: { type: String },
      alt: { type: String },
      link: { type: String },
      size: { type: String, reflect: true },

      socialShareBackgroundColor: { type: String },
      socialShareIconColor: { type: String },
      facebook: { type: Boolean },
      twitter: { type: Boolean },
      linkedin: { type: Boolean },

      backgroundColor: { type: String },
      tagBackgroundColor: { type: String },
      tagColor: { type: String },
      titleColor: { type: String },
      bodyColor: { type: String },
      linkColor: { type: String },
      linkText: { type: String },
    };
  }

  constructor() {
    super();
    this.title = '';
    this.date = '';
    this.body = '';
    this.tag = '';
    this.img = '';
    this.alt = '';
    this.link = '';
    this.size = 'md'; // xs, md, lg

    this.socialShareBackgroundColor = 'transparent';
    this.socialShareIconColor = '';
    this.facebook = true;
    this.twitter = true;
    this.linkedin = true;

    this.backgroundColor = 'white';
    this.tagBackgroundColor = 'green';
    this.tagColor = 'white';
    this.titleColor = 'black';
    this.bodyColor = 'black';
    this.linkColor = 'green';
    this.linkText = 'Seguir leyendo';
  }

  render() {
    const small = this.size === 'xs';

    return html`
      <div class="card" style="background: ${this.backgroundColor};">
        <div class="image">
          <img .src=${this.img} .alt=${this.alt} sizing="cover" position="center" />
          <div class="tag" style="background: ${this.tagBackgroundColor}; color:${this.tagColor};">
            ${this.tag}
          </div>
        </div>
        <div class="container">
          <p class="title" style="color: ${this.titleColor};">${this.title}</p>

          ${small
            ? html`
                <p class="tag">${this.tag}</p>
              `
            : html`
                <p class="date" style="color: ${this.bodyColor};">${this.date}</p>
                <p class="body" style="color: ${this.bodyColor};">${this.body}</p>
                <a href=${this.link} style="color: ${this.linkColor};">${this.linkText}</a>
                <div class="divider"></div>
              `}
          ${small
            ? html`
                <div class="subcontainer">
                  <p class="date" style="color: ${this.bodyColor};">${this.date}</p>
                  <a href=${this.link} style="color: ${this.linkColor};">${this.linkText}</a>
                </div>
                <div style="width: 40%;font-size: 12px; margin-left:auto; margin-top: 12px;">
                  <pandora-social-share
                    .backgroundcolor="${this.socialShareBackgroundColor}"
                    .facebook="${this.facebook}"
                    .twitter="${this.twitter}"
                    .linkedin="${this.linkedin}"
                    .iconcolor="${this.socialShareIconColor}"
                    .title="${this.title}"
                    .url="${this.link}"
                  >
                  </pandora-social-share>
                </div>
              `
            : html`
                <div class="subcontainer">
                  <p class="share" style="color:${this.socialShareIconColor}">Compartir</p>
                  <pandora-social-share
                    style="width:50%; max-width: 150px;"
                    .backgroundcolor="${this.socialShareBackgroundColor}"
                    .facebook="${this.facebook}"
                    .twitter="${this.twitter}"
                    .linkedin="${this.linkedin}"
                    .iconcolor="${this.socialShareIconColor}"
                    .title="${this.title}"
                    .url="${this.link}"
                  >
                  </pandora-social-share>
                </div>
              `}
        </div>
      </div>
    `;
  }
}
