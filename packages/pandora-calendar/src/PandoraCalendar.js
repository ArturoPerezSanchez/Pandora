import { html, css, LitElement } from 'lit-element';

export class PandoraCalendar extends LitElement {
  static get styles() {
    return css`
      .container {
        width: 100%;
        box-sizing: border-box;
      }

      .button:focus + .bubble {
        display: block;
      }

      .bubble:hover {
        display: block;
      }

      .button {
        background-color: transparent;
        border: 0px;
        position: absolute;
        width: 4vw;
        height: 4vw;
        margin-left: -3vw;
        margin-top: -1vw;
        border-radius: 50%;
        cursor: pointer;
      }

      .bubble {
        position: relative;
        color: #ffffff;
        font-family: Arial;
        font-size: 17px;
        line-height: 100px;
        box-shadow: 5px 5px 10px 1px #333;
        text-align: center;
        cursor: default;
        border-radius: 0px 23px 23px 23px;
        padding: 0px;
        z-index: 1;
        margin-left: 2vw;
        margin-top: 24px;
        display: none;
        margin-top: 1.2vw;
        font-size: 0.75em;
        color: black;
        min-width: 6vw;
        min-height: 6vw;
        max-width: 35vw;
        width: max-content;
        opacity: 1;
      }

      .bubble-text {
        line-height: initial;
        padding: 2vw;
      }

      .bubble:before {
        content: ' ';
        position: absolute;
        display: block;
        border-style: solid;
        border-width: 16px 5vw 16px 1vw;
        top: -16px;
      }

      .bubble:after {
        content: ' ';
        position: absolute;
        display: block;
        z-index: 1;
        border-style: solid;
        border-color: transparent;
        border-width: 2.5vw;
        top: -60px;
      }

      .highlighted {
        border: 2px solid #333;
        border-radius: 50%;
        cursor: pointer;
      }

      .header {
        width: 100%;
        padding: 2% 0 2% 0;
        background-color: #333;
        display: flex;
        flex-wrap: nowrap;
        text-align: center;
        align-items: center;
        justify-content: center;
        border-top: 1px solid black;
        border-left: 1px solid black;
        border-right: 1px solid black;
        font-size: 2.5vw;
      }

      .arrow {
        padding: 5px;
        cursor: pointer;
        font-size: 1.3em;
        width: 100%;
        height: 100%;
        margin-left: 10%;
        margin-right: 10%;
        border-radius: 50%;
        border: 1px solid transparent;
      }

      .year-block {
        margin: 0 2% 0 2%;
      }

      .year {
        font-size: 1.3em;
      }

      .month {
        font-size: 1.1em;
      }

      .weekday-container {
        display: flex;
        flex-wrap: nowrap;
        width: 98%;
        border-right: 1px solid black;
        border-left: 1px solid black;
        padding-left: 2%;
        font-size: 2vw;
      }

      .weekday {
        width: 14%;
        text-align: center;
        padding-top: 1.5%;
        padding-bottom: 1.5%;
      }

      .body {
        display: flex;
        flex-wrap: wrap;
        margin: auto;
        width: 98%;
        border: 1px solid black;
        border-top: 0px;
        padding-left: 2%;
        padding-bottom: 1%;
        padding-top: 1%;
      }

      .daybox {
        width: 10%;
        text-align: center;
        padding-left: 2%;
        padding-right: 2%;
        padding-bottom: 1%;
      }

      .day {
        margin: auto;
        height: 2vw;
        font-size: 2vw;
        padding-bottom: 1vw;
        padding-top: 1vw;
      }

      .transparency {
        opacity: 0.5;
      }

      .text {
        padding-bottom: 3px;
        margin: auto;
      }

      .mobile {
        display: none;
      }

      @media (max-width: 480px) {
        .arrow {
          width: fit-content;
          margin: 0;
          padding: 0;
          padding-left: 5%;
          text-align: left;
        }

        .rotated {
          display: none;
        }

        .mobile {
          display: block;
          text-align: right;
          padding: 0;
          padding-right: 5%;
        }

        .header {
          flex-wrap: wrap;
        }
        .year-block {
          width: 100%;
        }
      }
    `;
  }

  static get properties() {
    return {
      arrowLeft: { type: String },
      arrowRight: { type: String },
      bubblecolor: { type: String },
      bubblesecondarycolor: { type: String },
      bubbletextcolor: { type: String },
      _currentDate: { type: Date },
      dates: { type: Array },
      daysbackgroundcolor: { type: String },
      dayscolor: { type: String },
      defaultDate: { type: String },
      headerbackgroundcolor: { type: String },
      headertextcolor: { type: String },
      highlighteddaycolor: { type: String },
      weekdaysbackgroundcolor: { type: String },
      weekdaystextcolor: { type: String },
      weekdaysvalues: { type: String },
      weekstart: { type: Number },
      _st: { type: String },
    };
  }

  constructor() {
    super();
    this.arrowLeft = '\u{1f844}';
    this.arrowRight = '\u{1f846}';
    this.bubblecolor = '#333';
    this.bubbletextcolor = '#fff';
    this._currentDate = new Date();
    this.dates = [];
    this.daysbackgroundcolor = 'white';
    this.dayscolor = '#000';
    this.headerbackgroundcolor = '#333';
    this.headertextcolor = 'white';
    this.highlighteddaycolor = '#ccc';
    this.weekdaysbackgroundcolor = '#ccc';
    this.weekdaysvalues = 'narrow'; // 'long', 'short', 'letter', 'narrow'
    this.weekdaystextcolor = '#000';
    this.weekstart = 1; // 0 sunday, 1 monday, 2 tuesday...
  }

  render() {
    return html`
      ${this._st}
      <div class="container">
        <div class="header">
          <div data-slide=${-1} @click=${this.changeMonth} class="arrow rotated desktop"></div>
          <div class="year-block">
            <div class="year">${this._currentDate.getFullYear()}</div>
            <div class="month">${this.getMonth()}</div>
          </div>
          <div data-slide=${1} @click=${this.changeMonth} class="arrow rotated mobile"></div>
          <div data-slide=${1} @click=${this.changeMonth} class="arrow"></div>
        </div>
        <div class="weekday-container">
          ${this.getWeekdays().map(
            wd => html`
              <div class="weekday">${wd}</div>
            `,
          )}
        </div>
        <div class="body">
          ${this.getBody()}
        </div>
      </div>
    `;
  }

  firstUpdated() {
    this.updateDefaultDate();
  }

  updateDefaultDate() {
    if (this.defaultDate) {
      this._currentDate = new Date(parseInt(this.defaultDate, 10));
    } else {
      this._currentDate = new Date();
    }
  }

  updated(changedProperties) {
    changedProperties.forEach((_, propName) => {
      if (['_currentDate'].includes(propName)) {
        this._currentDate.setDate(1);
        this.updateBubbles();
      } else if (['defaultDate'].includes(propName)) {
        this.updateDefaultDate();
      } else if (['headerbackgroundcolor'].includes(propName)) {
        this.shadowRoot.querySelector('.header').style.background = this.headerbackgroundcolor;
      } else if (['headertextcolor'].includes(propName)) {
        this.shadowRoot.querySelector('.header').style.color = this.headertextcolor;
      } else if (['weekdaystextcolor'].includes(propName)) {
        this.shadowRoot.querySelector('.weekday-container').style.color = this.weekdaystextcolor;
      } else if (['weekdaysbackgroundcolor'].includes(propName)) {
        this.shadowRoot.querySelector(
          '.weekday-container',
        ).style.background = this.weekdaysbackgroundcolor;
      } else if (['dayscolor'].includes(propName)) {
        this.shadowRoot.querySelector('.body').style.color = this.dayscolor;
      } else if (['daysbackgroundcolor'].includes(propName)) {
        this.shadowRoot.querySelector('.body').style.background = this.daysbackgroundcolor;
      } else if (
        [
          'bubblecolor',
          'bubblesecondarycolor',
          'bubbletextcolor',
          'highlighteddaycolor',
          'currentDate',
          'arrowLeft',
          'arrowRight',
        ].includes(propName)
      ) {
        this.updateBubbles();
        this.getst();
      }
    });
  }

  /* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["bubble"] }] */
  updateBubbles() {
    const bubbles = this.shadowRoot.querySelectorAll('.bubble');
    if (this.bubblesecondarycolor) {
      bubbles.forEach(bubble => {
        bubble.style.background = `linear-gradient(135deg, ${this.bubblecolor} 10%, ${this.bubblesecondarycolor} 100%)`;
      });
    } else {
      bubbles.forEach(bubble => {
        bubble.style.background = this.bubblecolor;
      });
    }
    bubbles.forEach(bubble => {
      bubble.style.color = this.bubbletextcolor;
    });
  }

  getst() {
    this._st = html`
      <style>
        .arrow:after {
          content: '${this.arrowRight}';
        }

        .rotated:after {
          content: '${this.arrowLeft}';
        }

        .bubble:before {
          border-color: transparent;
          border-left-color: ${this.bubblecolor};
        }

        .highlighted {
          background: ${this.highlighteddaycolor};
        }
      </style>
    `;
    return this._st;
  }

  getWeekdays() {
    const _auxweekdays = [];
    const res = [];
    for (let i = 0; i < 7; i += 1) {
      _auxweekdays.push({
        index: this._currentDate.getDay(),
        day: this._currentDate.toLocaleString(window.navigator.language, {
          weekday: this.weekdaysvalues,
        }),
      });
      this._currentDate.setDate(this._currentDate.getDate() + 1);
    }
    this._currentDate.setDate(this._currentDate.getDate() - 7);
    _auxweekdays.sort((a, b) => (a.index > b.index ? 1 : -1));
    _auxweekdays.forEach(wd => res.push(wd.day));

    for (let j = 0; j < this.weekstart; j += 1) {
      res.push(res.shift());
    }
    return res;
  }

  getMonth() {
    const month = this._currentDate.toLocaleString(window.navigator.language, { month: 'long' });
    return month.charAt(0).toUpperCase() + month.slice(1);
  }

  getMonthFirstWeekDay() {
    return new Date(this._currentDate.getFullYear(), this._currentDate.getMonth(), 1).getDay();
  }

  getMonthLastDay() {
    return new Date(this._currentDate.getFullYear(), this._currentDate.getMonth() + 1, 0).getDate();
  }

  getPreviousMonthLastDay() {
    return new Date(this._currentDate.getFullYear(), this._currentDate.getMonth(), 0).getDate();
  }

  getBody() {
    const res = [];
    const prevmonth = this.getPreviousMonthLastDay();
    const lastDay = this.getMonthLastDay();
    const daysbefore = (this.getMonthFirstWeekDay() - this.weekstart + 7) % 7;
    let hl;
    for (let i = 0; i < daysbefore; i += 1) {
      const day = prevmonth + i - daysbefore + 1;
      hl = this.highlightedDayBefore(day);
      res.push(
        html`
          <div class="daybox">
            <div class="day transparency ${hl ? 'highlighted' : ''}">
              <div class="text">
                ${day}${hl
                  ? html`
                      <input type="button" class="button" />
                      <div class="bubble"><div class="bubble-text">${hl.text}</div></div>
                    `
                  : html``}
              </div>
            </div>
          </div>
        `,
      );
    }
    let aux = (lastDay + daysbefore) % 7;
    if (aux === 0) {
      aux = 7;
    }
    for (let i = 1; i <= lastDay; i += 1) {
      hl = this.highlightedDay(i);
      res.push(
        html`
          <div class="daybox">
            <div class="day ${hl ? 'highlighted' : ''}">
              <div class="text">
                ${i}
                ${hl
                  ? html`
                      <input type="button" class="button" />
                      <div class="bubble"><div class="bubble-text">${hl.text}</div></div>
                    `
                  : html``}
              </div>
            </div>
          </div>
        `,
      );
    }
    const _huecos = 7 - (res.length % 7);
    if (_huecos !== 7) {
      for (let i = 1; i <= _huecos; i += 1) {
        hl = this.highlightedDayAfter(i);
        res.push(
          html`
            <div class="daybox">
              <div class="day transparency ${hl ? 'highlighted' : ''}">
                <div class="text">
                  ${i}${hl
                    ? html`
                        <input type="button" class="button" />
                        <div class="bubble"><div class="bubble-text">${hl.text}</div></div>
                      `
                    : html``}
                </div>
              </div>
            </div>
          `,
        );
      }
    }
    return res;
  }

  changeMonth(e) {
    this._currentDate = new Date(
      this._currentDate.setMonth(
        this._currentDate.getMonth() + parseInt(e.currentTarget.getAttribute('data-slide'), 10),
      ),
    );
  }

  highlightedDay(day) {
    const d = new Date(this._currentDate);
    d.setDate(day);
    d.setHours(0, 0, 0, 0);
    const res = this.dates.find(event => new Date(event.date).valueOf() === d.valueOf());
    return res;
  }

  highlightedDayBefore(day) {
    const d = new Date(this._currentDate);
    d.setMonth(this._currentDate.getMonth() - 1);
    d.setDate(day);

    d.setHours(0, 0, 0, 0);
    const res = this.dates.find(event => new Date(event.date).valueOf() === d.valueOf());
    return res;
  }

  highlightedDayAfter(day) {
    const d = new Date(this._currentDate);
    d.setMonth(this._currentDate.getMonth() + 1);
    d.setDate(day);

    d.setHours(0, 0, 0, 0);
    const res = this.dates.find(event => new Date(event.date).valueOf() === d.valueOf());
    return res;
  }
}
