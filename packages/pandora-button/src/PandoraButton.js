import { html, css, LitElement } from 'lit-element';

export class PandoraButton extends LitElement {
  static get styles() {
    return css`
      .container {
        width: 100%;
      }
      button {
        width: 100%;
      }
    `;
  }

  static get properties() {
    return {
      textcolor: { type: String },
      backgroundcolor: { type: String },
      textalign: { type: String },
      padding: { typer: String },
      textsize: { type: String },
      fontweight: { type: String },
      borderradius: { type: String },
      border: { type: String },
      value: { type: String },
      name: { type: String },
      disabled: { type: Boolean },
      onclick: { type: String },
    };
  }

  constructor() {
    super();
    this.textcolor = 'black';
    this.backgroundcolor = '#ccc';
    this.textsize = '18px';
    this.fontweight = '200';
    this.borderradius = '9px';
    this.border = '3px solid #333';
    this.textalign = 'center';
    this.name = 'pandoraInput';
    this.padding = '5px';
    this.value = 'Click Me!';
    this.disabled = false;
    this.onclick = "alert('you cclicked me!')";
  }

  render() {
    return html`
      <div class="container">
      
      <button
          aria-label=${this.name}
          name=${this.name}
          type=button
          onclick=${this.onclick}
          ?disabled=${this.disabled}
          style="
            color:${this.textcolor};
            background:${this.backgroundcolor};
            text-align:${this.textalign};
            font-size:${this.textsize};
            border-radius:${this.borderradius};
            border:${this.border};
            padding:${this.padding};
            font-weight:${this.fontweight};
          "
        />
  ${this.value} </button>
      </div>
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
