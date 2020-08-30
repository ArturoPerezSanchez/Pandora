import { html, css, LitElement } from 'lit-element';
import * as c3 from 'c3';

export class PandoraChart extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }

      .legend {
        width: 100%;
        font-size: 0.75em;
        color: #555555;
        font-family: 'Open Sans', sans-serif;
      }

      .legend div {
        cursor: pointer;
        margin: 8px 0;
      }

      .legend span {
        float: left;
        display: inline-block;
        height: 10px;
        width: 15px;
        border-radius: 2px;
        margin-right: 10px;
      }

      .c3 svg {
        font: 10px sans-serif;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }

      .c3 path,
      .c3 line {
        fill: none;
        stroke: #000;
      }

      .c3 text {
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      .c3-legend-item-tile,
      .c3-xgrid-focus,
      .c3-ygrid,
      .c3-event-rect,
      .c3-bars path {
        shape-rendering: crispEdges;
      }

      .c3-chart-arc path {
        stroke: #fff;
      }

      .c3-chart-arc rect {
        stroke: white;
        stroke-width: 1;
      }

      .c3-chart-arc text {
        fill: #fff;
        font-size: 13px;
      }

      .c3-grid line {
        stroke: #aaa;
      }

      .c3-grid text {
        fill: #aaa;
      }

      .c3-xgrid,
      .c3-ygrid {
        stroke-dasharray: 3 3;
      }

      .c3-text.c3-empty {
        fill: #808080;
        font-size: 2em;
      }

      .c3-line {
        stroke-width: 1px;
      }

      .c3-circle._expanded_ {
        stroke-width: 1px;
        stroke: white;
      }

      .c3-selected-circle {
        fill: white;
        stroke-width: 2px;
      }

      .c3-bar {
        stroke-width: 0;
      }

      .c3-bar._expanded_ {
        fill-opacity: 1;
        fill-opacity: 0.75;
      }

      .c3-target.c3-focused {
        opacity: 1;
      }

      .c3-target.c3-focused path.c3-line,
      .c3-target.c3-focused path.c3-step {
        stroke-width: 2px;
      }

      .c3-target.c3-defocused {
        opacity: 0.3 !important;
      }

      .c3-region {
        fill: steelblue;
        fill-opacity: 0.1;
      }

      .c3-brush .extent {
        fill-opacity: 0.1;
      }

      .c3-legend-item {
        font-size: 12px;
      }

      .c3-legend-item-hidden {
        opacity: 0.15;
      }

      .c3-legend-background {
        opacity: 0.75;
        fill: white;
        stroke: lightgray;
        stroke-width: 1;
      }

      .c3-title {
        font: 14px sans-serif;
      }

      .c3-tooltip-container {
        z-index: 10;
      }

      .c3-tooltip {
        border-collapse: collapse;
        border-spacing: 0;
        background-color: #fff;
        empty-cells: show;
        -webkit-box-shadow: 7px 7px 12px -9px #777777;
        -moz-box-shadow: 7px 7px 12px -9px #777777;
        box-shadow: 7px 7px 12px -9px #777777;
        opacity: 0.9;
      }

      .c3-tooltip tr {
        border: 1px solid #ccc;
      }

      .c3-tooltip th {
        background-color: #aaa;
        font-size: 14px;
        padding: 2px 5px;
        text-align: left;
        color: #fff;
      }

      .c3-tooltip td {
        font-size: 13px;
        padding: 3px 6px;
        background-color: #fff;
        border-left: 1px dotted #999;
      }

      .c3-tooltip td > span {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin-right: 6px;
      }

      .c3-tooltip .value {
        text-align: right;
      }

      .c3-area {
        stroke-width: 0;
        opacity: 0.2;
      }

      .c3-chart-arcs-title {
        dominant-baseline: middle;
        font-size: 1.3em;
      }

      .c3-chart-arcs .c3-chart-arcs-background {
        fill: #e0e0e0;
        stroke: #fff;
      }

      .c3-chart-arcs .c3-chart-arcs-gauge-unit {
        fill: #000;
        font-size: 16px;
      }

      .c3-chart-arcs .c3-chart-arcs-gauge-max {
        fill: #777;
      }

      .c3-chart-arcs .c3-chart-arcs-gauge-min {
        fill: #777;
      }

      .c3-chart-arc .c3-gauge-value {
        fill: #000;
      }

      .c3-chart-arc.c3-target g path {
        opacity: 1;
      }

      .c3-chart-arc.c3-target.c3-focused g path {
        opacity: 1;
      }

      .c3-drag-zoom.enabled {
        pointer-events: all !important;
        visibility: visible;
      }

      .c3-drag-zoom.disabled {
        pointer-events: none !important;
        visibility: hidden;
      }

      .c3-drag-zoom .extent {
        fill-opacity: 0.1;
      }
    `;
  }

  static get properties() {
    return {
      type: { type: String },
      units: { type: String },
      endpointurl: { type: String },
      data: { type: Array },
      zoomable: { type: Boolean },

      _axis: { type: Array },
      _colors: { type: Array },
      _response: { type: Array },
      _error: { type: String },
    };
  }

  constructor() {
    super();
    this.type = 'bar';
    this.units = '';
    this.endpointurl = '';
    this.zoomable = false;

    this._error = '';
    this._response = [];
    this._axis = [];
    this._colors = [];
  }

  render() {
    return html`
      ${this._error
        ? this._error
        : html`
            <div id="chart"></div>
          `}
    `;
  }

  updated(changedProperties) {
    changedProperties.forEach((_, propName) => {
      if (['_response', 'type', 'units', 'zoomable', '_axis', '_colors'].includes(propName)) {
        c3.generate(this.generateChart());
      }
      if (['endpointurl', 'data'].includes(propName)) {
        this.updatedResponse();
      }
    });
  }

  updatedResponse() {
    if (this.data) {
      this._response = this.data.data;
      this._axis = this.data.axis;
      this._colors = this.data.colors;
    } else {
      fetch(this.endpointurl)
        .then(response => {
          if (response.ok) {
            response
              .json()
              .then(json => {
                this._response = json.data;
                this._axis = json.axis;
                this._colors = json.colors;
              })
              .catch(error => {
                this._error = `ERROR_Json: ${error.message}`;
              });
          } else {
            this._error = `Respuesta de red KO`;
          }
        })
        .catch(error => {
          this._error = `ERROR_Fetch: ${error.message}`;
        });
    }
  }

  generateChart() {
    const base = {
      bindto: this.shadowRoot.querySelector('#chart'),
      data: {
        columns: this._response,
        type: this.type,
        empty: { label: { text: 'No hay datos disponibles' } },
      },

      color: {
        pattern: this._colors
          ? this._colors
          : ['#77B5C3', '#4863A3', '#9371AC', '#D87D7D', '#D9A46C', '#E3CD66'],
      },
      zoom: {
        enabled: this.zoomable,
      },
      axis: {
        x: {
          type: 'category',
          categories: this._axis ? this._axis : [],
        },
        y: {
          label: {
            position: 'outer-middle',
            text: this.units,
          },
        },
      },
    };

    return base;
  }
}
