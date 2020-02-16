import { html, css, LitElement, unsafeCSS } from 'lit-element';
import { weekdays } from 'moment';

export class PandoraCalendar extends LitElement {
  static get styles() {
    return  css`
      .container{
        width: 100%;
        box-sizing: border-box;
      }

      .text:hover .bubble {
        display: block;
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
          font-size: .75em;
          color: black;
          min-width: 6vw;
          min-height: 6vw;
          max-width: 35vw;
          width: max-content;
          opacity: 1;

      }

      .bubble-text{
        line-height: initial;
        padding: 2vw;

      }

      .bubble:before{

        content: ' ';
        position: absolute;
        display: block;
        border-style: solid;
        border-width: 16px 5vw 16px 1vw;
        top: -16px;
      }

      .bubble:after{
        content: ' ';
        position: absolute;
        display: block;
        z-index: 1;
        border-style: solid;
        border-color: transparent;
        border-width: 2.5vw;
        top: -60px;
      }

      .highlighted{
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

      .arrow{
        padding: 5px;
        cursor: pointer;
        font-size: 1.3em;
        width: 100%;8
        height: 100%;
        margin-left: 10%;
        margin-right: 10%;
        border-radius: 50%;
        border: 1px solid transparent;
      }

      .year-block{
        margin: 0 2% 0 2%;
      }

      .year{
        font-size: 1.3em;
      }

      .month{
        font-size: 1.1em;
      }

      .weekday-container{
        display: flex;
        flex-wrap: nowrap;
        width: 98%;
        border-right: 1px solid black;
        border-left: 1px solid black;
        padding-left: 2%;
        font-size: 2vw;
      }

      .weekday{
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

      .day{
        margin: auto;
        height: 2vw;
        font-size: 2vw;
        padding-bottom: 1vw;
        padding-top: 1vw;
      }


      .transparency{
        opacity: 0.5;
      }

      .text{
        padding-bottom: 3px;
        margin: auto;
      }

      .mobile{
        display: none;
      }

      @media (max-width: 480px){
            .arrow{
              width: fit-content;
              margin: 0;
              padding:0;
              padding-left: 5%;
              text-align: left;
            }

          .rotated{
              display:none;
            }

          .mobile{
              display: block;
              text-align: right;
              padding:0;
              padding-right: 5%;
            }

          .header{
              flex-wrap: wrap;
            }
            .year-block{
              width:100%;
            }
          }
    `;
  }



  static get properties() {
    return {
      defaultdate: {type: String},
      currentDate: {type: Date},
      weekstart:  { type: Number},
      weekdaysvalues: { type: String },
      weekdaystextcolor: { type: String },
      weekdaysbackgroundcolor: { type: String },
      headertextcolor: { type: String },
      headerbackgroundcolor: { type: String },
      dayscolor: { type: String },
      daysbackgroundcolor : { type: String },
      arrowRight : { type: String },
      arrowLeft : { type: String },
      bubblecolor: {type: String},
      bubblesecondarycolor: {type: String},
      bubbletextcolor: {type: String},
      highlighteddaycolor: {type: String},
      _st: {type: String},
      dates : { type: Array }
    };
  }


  constructor() {
    super();
    this.weekdaysvalues = 'narrow'; //'long', 'short', 'letter', 'narrow'
    this.weekstart = 1; //0 sunday, 1 monday, 2 tuesday...
    this.currentDate = new Date();
    this.arrowRight = '\u{1f844}';
    this.arrowLeft = '\u{1f846}';
    this.defaultdate = '';
    this.weekdaystextcolor = '#000';
    this.weekdaysbackgroundcolor = '#ccc';
    this.headertextcolor = 'white';
    this.headerbackgroundcolor = '#333';
    this.dayscolor = '#000';
    this.daysbackgroundcolor  = 'white';
    this.bubblecolor = '#333';
    this.bubbletextcolor = '#fff';
    this.highlighteddaycolor = '#ccc'
    this.dates = [];
  }

  getDate(){
    return new Date();
  } 

  render() {
    return html`
    ${this._st}
    <div class="container">
    <div class="header">
      <div data-slide=${ - 1} @click=${this.changeMonth} class="arrow rotated desktop"></div>
      <div class="year-block">
        <div class="year">${this.currentDate.getFullYear()}</div>
        <div class="month">${this.getMonth()}</div>
      </div>
      <div data-slide=${1} @click=${this.changeMonth} class="arrow rotated mobile"></div>
      <div data-slide=${1} @click=${this.changeMonth} class="arrow"></div>
    </div>
    <div class="weekday-container">
      ${this.getWeekdays().map( wd => html`
        <div class="weekday">${wd}</div>
      `, )}

    </div>
    <div class="body">
      ${this.getBody()}
    
    </div>
  </div>

    `;
  }

  firstUpdated(){
    if(this.defaultdate){
      this.currentDate = new Date(this.defaultdate);
    } else {
      this.currentDate = new Date();
    }
    this.currentDate.setDate(1);
  }

  

  updated(changedProperties){
    this.currentDate.setDate(1);
      changedProperties.forEach((_, propName) => {
        if (['headerbackgroundcolor'].includes(propName)) {
            this.shadowRoot.querySelector('.header').style.background = this.headerbackgroundcolor;
        } else if (['headertextcolor'].includes(propName)) {
            this.shadowRoot.querySelector('.header').style.color = this.headertextcolor;
        } else if (['weekdaystextcolor'].includes(propName)) {
            this.shadowRoot.querySelector('.weekday-container').style.color = this.weekdaystextcolor;
        } else if (['weekdaysbackgroundcolor'].includes(propName)) {
            this.shadowRoot.querySelector('.weekday-container').style.background = this.weekdaysbackgroundcolor;
        } else if (['dayscolor'].includes(propName)) {
            this.shadowRoot.querySelector('.body').style.color = this.dayscolor;
        } else if (['daysbackgroundcolor'].includes(propName)) {
          this.shadowRoot.querySelector('.body').style.background = this.daysbackgroundcolor;
        } else if (['bubblecolor', 'bubblesecondarycolor'].includes(propName)) {
          this.updateBubbles();
          this.getst();
        } else if (['bubbletextcolor'].includes(propName)) {
          this.shadowRoot.querySelectorAll('.bubble').forEach(bubble => bubble.style.color = this.bubbletextcolor);
        } else if (['highlighteddaycolor'].includes(propName)){
          this.getst();
        }  else if (['currentDate'].includes(propName)){

          this.getst();
          this.updateBubbles();
          this.shadowRoot.querySelectorAll('.bubble').forEach(bubble => bubble.style.color = this.bubbletextcolor);
        }
      });
    }

  updateBubbles(){
    var bubbles = this.shadowRoot.querySelectorAll('.bubble');
    if(this.bubblesecondarycolor){
      bubbles.forEach(bubble => bubble.style.background = 'linear-gradient(135deg, ' + this.bubblecolor + ' 10%, ' + this.bubblesecondarycolor + ' 100%)')
    } else {
      bubbles.forEach(bubble => bubble.style.background = this.bubblecolor);
    }
    console.log('aaa')
  }

  getst(){
    this._st = html`<style>
    .arrow:after{
      content: '${this.arrowLeft}';
    }

    .rotated:after{
      content: '${this.arrowRight}';
    }

    .bubble:before{
      border-color: transparent;
      border-left-color: ${this.bubblecolor};
    }

    .highlighted{
      background: ${this.highlighteddaycolor};
    }
    </style>`
  }

  getWeekdays (){
    var _auxweekdays = []
    var res = []
    for(var i = 0; i<7; i++){
      _auxweekdays.push({
        index: this.currentDate.getDay(),
        day: this.currentDate.toLocaleString(window.navigator.language, {weekday: this.weekdaysvalues})
      });
      this.currentDate.setDate(this.currentDate.getDate() + 1);
    }
    _auxweekdays.sort(this.compare);
    _auxweekdays.forEach(wd => res.push(wd.day));

    for (var j = 0; j < this.weekstart; j++) {
      res.push(res.shift());
      
    }
    return res;
  }

  compare(a, b) {
    const A = a.index;
    const B = b.index;

    let comparison = 0;
    if (A > B) {
      comparison = 1;
    } else {
      comparison = -1;
    }
    return comparison;
  }

  getMonth(){
    var month = this.currentDate.toLocaleString(window.navigator.language, {month: 'long'})
    return month.charAt(0).toUpperCase() + month.slice(1)
  }

  getMonthFirstWeekDay(){
      
    return new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1).getDay();
  }

  getMonthLastDay(){
    return (new Date(this.currentDate.getFullYear(), this.currentDate.getMonth()+1, 0)).getDate();
  }

  getPreviousMonthLastDay(){
    return (new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 0)).getDate();
  }

  getBody(){

    var res = []
    var prevmonth = this.getPreviousMonthLastDay();
    var lastDay = this.getMonthLastDay();
    var daysbefore = ((this.getMonthFirstWeekDay() - this.weekstart)+7)%7;
    for (var i= 0; i< daysbefore; i++){
      var day = prevmonth + i - daysbefore + 1;
      var hl = this.highlightedDayBefore(day)
      res.push(html`<div class="daybox"><div class="day transparency ${ hl ? 'highlighted' : ''}"><div class="text">${(day)}${ hl ? html`<div class="bubble"><div class="bubble-text">${hl.text}</div></div>` : html``}</div></div></div>`)
    }
    var aux = (lastDay+ daysbefore)%7;
    if (aux == 0){
      aux = 7;
    }
    for (var i = 1; i<= lastDay; i++){
      var hl = this.highlightedDay(i)
      res.push(html`<div class="daybox"><div class="day ${ hl ? 'highlighted' : ''}"><div class="text"> ${i} ${ hl ? html`<div class="bubble"><div class="bubble-text">${hl.text}</div></div>` : html``}</div></div> </div>`)
    }
    var _huecos = (7-((res.length)%7));
    if (_huecos != 7){
    for (i = 1; i<= _huecos; i++){
        var hl = this.highlightedDayAfter(i)
        res.push(html`<div class="daybox"><div class="day transparency ${hl ? 'highlighted' : ''}"><div class="text">${i}${ hl ? html`<div class="bubble"><div class="bubble-text">${hl.text}</div></div>` : html``} </div></div></div>`)
      }
    }
    return res
  }

  changeMonth(e){

     this.currentDate = new Date(this.currentDate.setMonth(this.currentDate.getMonth() + parseInt(e.currentTarget.getAttribute('data-slide'))));
     this.currentDate.setDate(1);
    }

  highlightedDay(day){
    var d = new Date(this.currentDate);
    d.setDate(day);
    d.setHours(0,0,0,0);
    const res = this.dates.find(event => new Date(event.date).valueOf() === d.valueOf());
    return res
  }

  highlightedDayBefore(day){
    var d = new Date(this.currentDate);
    d.setMonth(this.currentDate.getMonth() - 1);
    d.setDate(day);
    
    d.setHours(0,0,0,0);
    const res = this.dates.find(event => new Date(event.date).valueOf() === d.valueOf());
    return res;
    
  }

  highlightedDayAfter(day){
    var d = new Date(this.currentDate);
    d.setMonth(this.currentDate.getMonth() + 1);
    d.setDate(day);
    
    d.setHours(0,0,0,0);
    const res = this.dates.find(event => new Date(event.date).valueOf() === d.valueOf());
    return res;
    
  }

}