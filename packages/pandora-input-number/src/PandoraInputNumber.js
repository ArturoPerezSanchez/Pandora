import { html, css, LitElement } from 'lit-element';

export class PandoraInputNumber extends LitElement {
  static get styles() {
    return css`
      .container {
        width: 100%;
      }
    `;
  }

  static get properties() {
    return {
      min: { type: Number },
      max: { type: Number },
      step: { type: Number },

      textcolor: { type: String },
      backgroundcolor: { type: String },
      textsize: { type: String },
      fontweight: { type: String },
      borderradius: { type: String },
      border: { type: String },
      textalign: { type: String },
      labelText: { type: String },
      name: { type: String },

      value: { type: Number },
      disabled: { type: Boolean },
      required: { type: Boolean },
      readonly: { type: Boolean },
      type: { type: String }, // range, number
    };
  }

  constructor() {
    super();
    this.min = 0;
    this.max = 10;
    this.step = 1;

    this.textcolor = 'black';
    this.backgroundcolor = '#ccc';
    this.textsize = '18px';
    this.fontweight = '200';
    this.borderradius = '3px';
    this.border = '3px solid #333';
    this.textalign = 'center';
    this.labelText = '';
    this.name = 'pandoraInput';

    this.value = 5;
    this.disabled = false;
    this.required = true;
    this.readonly = false;
    this.type = 'number'; // range, number
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
          max=${this.max}
          min=${this.min}
          step=${this.step}
          ?disabled=${this.disabled}
          ?required=${this.required}
          ?readonly=${this.readonly}
          style="
            color:${this.textcolor};
            background:${this.backgroundcolor};
            text-align:${this.textalign};
            font-size:${this.textsize};
            border-radius:${this.borderradius};
            border:${this.border};
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
