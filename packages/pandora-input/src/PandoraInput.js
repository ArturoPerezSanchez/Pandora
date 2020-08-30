import { html, css, LitElement } from 'lit-element';

export class PandoraInput extends LitElement {
  static get styles() {
    return css`
      .container {
        width: 100%;
      }
      input {
        width: 100%;
        border: solid;
      }
      input:focus {
        outline: none;
      }
    `;
  }

  static get properties() {
    return {
      type: { type: String },
      placeholder: { type: String },
      textcolor: { type: String },
      backgroundcolor: { type: String },
      textalign: { type: String },
      padding: { typer: String },
      textsize: { type: String },
      fontweight: { type: String },
      borderradius: { type: String },
      border: { type: String },
      value: { type: String },
      labelText: { type: String },
      name: { type: String },

      pattern: { type: String },
      maxlength: { type: Number },
      required: { type: Boolean },
      readonly: { type: Boolean },
      disabled: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.placeholder = '';
    this.textcolor = 'black';
    this.backgroundcolor = '#ccc';
    this.textsize = '18px';
    this.fontweight = '200';
    this.borderradius = '9px';
    this.border = '3px solid #333';
    this.textalign = 'center';
    this.labelText = '';
    this.name = 'pandoraInput';
    this.padding = '5px';
    this.value = '';
    this.pattern = '';
    this.maxlength = 25;
    this.disabled = false;
    this.required = true;
    this.readonly = false;
    this.type = 'text'; // url, text, search, email, password, tel
  }

  render() {
    return html`
      <div class="container">
        <label for=${this.name}>${this.labelText}</label>
        <input
          aria-label=${this.name}
          name=${this.name}
          type=${this.type}
          value=${this.value}
          pattern=${this.pattern}
          maxlength=${this.maxlength}
          ?disabled=${this.disabled}
          ?required=${this.required}
          ?readonly=${this.readonly}
          placeholder=${this.placeholder}
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
