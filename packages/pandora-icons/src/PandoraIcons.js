import { html, css, LitElement } from 'lit-element';
import { library, dom, icon } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fac } from './custom-icons.js';

// Add all icons to the library so you can use it in your page
library.add(fas, far, fab, fac);

export class PandoraIcons extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
      }
    `;
  }

  static get properties() {
    return {
      // Icons
      family: { type: String },
      icon: { type: String },
      color: { type: String },

      // Classes
      spin: { type: Boolean },
      pulse: { type: Boolean },
      flip: { type: String },
      size: { type: String },
      rotation: { type: String },
    };
  }

  constructor() {
    super();
    this.family = 'fas';
    this.icon = '';

    this.color = '#333';
    this.spin = false;
    this.pulse = false;
    this.flip = '';
    this.size = 'lg';
    this.rotation = '';
  }

  get classes() {
    const { spin, pulse, flip, size, rotation } = this;

    const classes = {
      'fa-spin': spin,
      'fa-pulse': pulse,
      'fa-flip-horizontal': flip === 'horizontal' || flip === 'both',
      'fa-flip-vertical': flip === 'vertical' || flip === 'both',
      [`fa-${size}`]: size !== null,
      [`fa-rotate-${rotation}`]: rotation !== null,
    };

    return Object.keys(classes)
      .map(key => (classes[key] ? key : null))
      .filter(key => key);
  }

  fontawesome() {
    const { family: prefix, icon: iconName, classes } = this;

    const faIcon = icon(
      { prefix, iconName },
      {
        classes: [...classes],
      },
    );
    return html(faIcon.html);
  }

  render() {
    return html`
      <style>
        ${dom.css()}
      </style>
      <div style="color:${this.color}">
        ${this.fontawesome()}
      </div>
    `;
  }
}
