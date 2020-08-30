import { html, css, LitElement } from 'lit-element';

export class PandoraStatusBar extends LitElement {
  static get styles() {
    return css`
      .container {
        width: 80%;
        height: 80%;
        margin: auto;
        text-align: center;
      }

      .bar {
        border: 2px solid black;
        background-color: transparent;
        margin: auto;
        position: relative;
      }

      .bar .filled {
        z-index: -1;
        position: absolute;
        background-color: orange;
      }

      .states {
        display: flex;
        justify-content: space-around;
        position: absolute;
      }

      .state {
        border: 3px solid black;
        background-color: white;
        width: 23px;
        height: 23px;
        border-radius: 50%;
        z-index: 1;
        box-sizing: border-box;
        position: relative;
      }

      .state:focus {
        outline: none;
        outline-offset: 4px;
      }

      .completed {
        background-color: darkorange;
      }
      .invisible {
        border: 0px;
        background-color: transparent;
        position: absolute;
        margin-left: -11.5px;
        border-radius: 50%;
        margin-top: -3px;
        height: 23px;
        width: 23px;
        cursor: pointer;
      }

      .invisible:focus + .bubble {
        display: block;
      }

      .invisible:focus {
        border: 3px solid black;
        outline: none;
        z-index: 2;
        transition: background-color ease 0.5s;
      }

      .bubble:hover {
        display: block;
      }

      .bubble {
        border-radius: 1em;
        display: none;

        width: max-content;
        position: relative;
        padding: 5px 30px 10px 30px;
        max-width: 20em;
        min-width: 3em;
        cursor: auto;
        text-align: left;
        box-shadow: 10px 10px 15px grey;

        top: 50%;
        left: 30px;
        transform: translateY(-50%);
      }

      .bubble h3 {
        text-align: center;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      vertical: { type: Boolean },
      arrow: { type: Boolean },
      halfway: { type: Boolean },
      status: { type: Object },
      completedstatecolor: { type: String },
      barcolor: { type: String },
      focusedstatecolor: { type: String },
      textcolor: { type: String },
    };
  }

  constructor() {
    super();
    this.title = '';
    this.vertical = false;
    this.halfway = true;
    this.completedstatecolor = 'orange';
    this.barcolor = '#bd0';
    this.focusedstatecolor = '#880';
    this.arrow = true;
    this.textcolor = 'black';
    this.bubblescolor = '#bd0';
  }

  render() {
    return html`
      <style>
        .body {
          max-height: ${this.maxheight};
          overflow: auto;
        }

        .invisible:focus {
          background-color: ${this.focusedstatecolor};
        }

        .right:after {
          content: '';
          position: absolute;
          border: solid;
          border-color: transparent transparent transparent ${this.barcolor};
          border-width: 5px 0px 5px 9px;
          left: 100%;
          top: 0px;
        }

        .down::after {
          content: '';
          position: relative;
          border: solid;
          border-width: 9px 5px 0px 5px;
          border-color: ${this.barcolor} transparent transparent transparent;
          left: 0px;
          top: calc(100% + 8px);
        }

        .bubble {
          background: ${this.bubblescolor};
          color: ${this.textcolor};
        }

        .bubble:before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          width: 0;
          height: 0;
          border: 10px solid transparent;
          margin-left: -10px;
          margin-top: -10px;
        }

        .triangle-top::before {
          left: calc(50% + 5px);
          top: 0%;
          border-width: 0px 5px 10px 5px;
          border-color: transparent transparent ${this.bubblescolor} transparent;
        }

        .triangle-left::before {
          top: calc(50% + 5px);
          left: 0%;
          border-width: 5px 10px 5px 0;
          border-color: transparent ${this.bubblescolor} transparent transparent;
        }
      </style>
      <div class="container">
        <h2>${this.title}</h2>
        <div class="bar">
          ${this.getFilled()}
          <div class="states">
            ${this.status.map(
              state => html` 
          <div class="state ${state.completed ? 'completed' : ''}">
              <input type="button" class="invisible"></input>
              <div class="bubble ${this.vertical ? 'triangle-left' : 'triangle-top'}" style="${
                this.vertical ? '' : 'top: 30px; left: 50%; transform: translateX(-50%);'
              }">
                <h3>
                  ${state.title}
                </h3>
                <p>
                  ${state.text}
                </p>
              </div>
          </div> 
        `,
            )}
          </div>
        </div>
      </div>
    `;
  }

  getFilled() {
    let res = html``;

    if (this.arrow) {
      if (this.vertical) {
        res = html`
          <div class="filled down"></div>
        `;
      } else {
        res = html`
          <div class="filled right"></div>
        `;
      }
    } else {
      res = html`
        <div class="filled"></div>
      `;
    }

    return res;
  }

  updated() {
    this.updateBar();
    this.updateStates();
  }

  updateBar() {
    const bar = this.shadowRoot.querySelector('.bar');
    const filled = this.shadowRoot.querySelector('.filled');
    if (this.vertical) {
      bar.style.height = `${(this.status.length + 1) * 50}px`;
      bar.style.width = '9px';
      filled.style.width = '9px';
      filled.style.height = this.getFilledWidth();
      filled.style.transition = 'height 2s ease';
    } else {
      bar.style.height = '9px';
      bar.style.width = '100%';
      filled.style.width = this.getFilledWidth();
      filled.style.height = '9px';
      filled.style.transition = 'width 2s ease';
    }
    filled.style.background = this.barcolor;

    this.getFilledWidth();
  }

  getFilledWidth() {
    let res;
    const com = this.status.filter(state => state.completed === true).length;
    if (com === 0) {
      res = `${100 / (this.status.length * 2) / 2}%`;
    } else if (com === this.status.length) {
      res = '100%';
      this.arrow = false;
    } else {
      const a = 100 / (this.status.length * 2);
      let width = a + a * 2 * (com - 1);
      if (this.halfway) {
        width += a;
      }
      res = `calc(${width}% - 10px)`;
    }
    return res;
  }

  /* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */
  updateStates() {
    const states = this.shadowRoot.querySelector('.states');
    this.shadowRoot.querySelectorAll('.completed').forEach(state => {
      state.style.background = this.completedstatecolor;
    });
    if (this.vertical) {
      states.style.flexDirection = 'column';
      states.style.height = '100%';
      states.style.left = '-7px';
    } else {
      states.style.flexDirection = 'row';
      states.style.width = '100%';
      states.style.top = '-7px';
    }
  }
}
