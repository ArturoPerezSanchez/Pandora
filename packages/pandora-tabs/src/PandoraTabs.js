import { html, css, LitElement } from 'lit-element';

export class PandoraTabs extends LitElement {
  static get styles() {
    return css`
      .container {
        width: 100%;
      }

      a {
        color: #087021;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        line-height: 1.1875rem;
        text-decoration: none;
        text-align: center;
      }

      ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        flex-wrap: wrap;
      }

      .list {
        margin-bottom: 7px;
        cursor: pointer;
        padding: 1% 2%;
        border: 1px solid transparent;
        border-bottom: 1px solid #333333;
      }

      .list.active {
        border: 1px solid;
        border-color: #333333 #333333 transparent #333333;
        border-bottom: none;
        border-radius: 1%;
      }

      .list.active a {
        color: #333;
      }

      .list:hover {
        border-color: #d8d8d8;
        border-bottom: transparent;
        border-radius: 1%;
      }

      .list.active:hover {
        border-color: #333;
      }
    `;
  }

  static get properties() {
    return {
      selected: { type: Number },
      content: { type: String },
      textcolor: { type: String },
      backgroundcolor: { type: String },
      activebackgroundcolor: { type: String },
      activetextcolor: { type: String },

      _data: { type: Array },
      _error: { type: String },
    };
  }

  constructor() {
    super();
    this.selected = 0;
    this.content = '';
    this._data = [];
    this._error = '';
    this.textcolor = 'green';
    this.backgroundcolor = 'white';
    this.activebackgroundcolor = 'white';
    this.activetextcolor = 'black';
  }

  render() {
    return html`
      <style>
        .list.active {
          background-color: ${this.activebackgroundcolor};
          background-color: var(--activebackgroundcolor);
        }
      </style>
      <div class="container">
        <ul>
          ${this.getList()}
        </ul>
      </div>
    `;
  }

  getList() {
    const res = [];
    const { selected } = this;

    this._data.forEach((dato, index) => {
      res.push(html`
        <li class="list ${index === selected ? 'active' : ''}">${dato.label}</li>
      `);
    });
    return res;
  }

  changeActive(e) {
    const elements = Array.from(this.shadowRoot.querySelectorAll('li.active'));
    elements.forEach(node => {
      node.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
  }

  updated(changedProperties) {
    changedProperties.forEach((_, propName) => {
      if (['content', 'data'].includes(propName)) {
        this.updatedResponse();
      } else if (['textcolor', 'backgroundcolor'].includes(propName)) {
        this.updateElements();
      } else if (['activetextcolor', 'activebackgroundcolor'].includes(propName)) {
        this.updateActive();
      }
    });
  }

  // updateElements(){
  //   const items = this.shadowRoot.querySelectorAll('.list');
  //   items.forEach(item => {
  //      item.style.color = this.textcolor;
  //      item.style.backgroundColor = this.backgroundcolor;
  //   });

  // }

  updatedResponse() {
    if (this.data) {
      this._data = this.data;
    } else {
      fetch(this.content)
        .then(response => {
          if (response.ok) {
            response
              .json()
              .then(json => {
                this._data = json;
              })
              .catch(error => {
                this._error = `ERROR_Json:${error.message}`;
              });
          } else {
            this._error = 'Respuesta de red KO';
          }
        })
        .catch(error => {
          this._error = `ERROR_Fetch: ${error.message}`;
        });
    }
  }
}
