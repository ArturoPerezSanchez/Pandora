import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, text, select, object, boolean } from '@storybook/addon-knobs';
import '../pandora-chart.js';
import readme from '../README.md';

const ENDPOINTURL = 'https://www.mocky.io/v2/5e5cf9f9320000770043c4ff';
const TYPE_OPTIONS = {
  line: 'line',
  spline: 'spline',
  step: 'step',
  area: 'area',
  'area-spline': 'area-spline',
  bar: 'bar',
  scatter: 'scatter',
  pie: 'pie',
  donut: 'donut',
  gauge: 'gauge',
};
const DATA = {
  data: [
    ['Educación', 25, 34, 12, 15],
    ['Deuda pública', 21, 46, 12, 32],
    ['Seguridad y protección social', 10, 9, 6, 14],
    ['Agricultura y ganadería', 19, 24, 3, 32],
    ['Sanidad', 25, 23, 33, 8],
  ],
  colors: ['#77B5C3', '#4863A3', '#9371AC', '#D87D7D', '#D9A46C', '#E3CD66'],
  axis: ['Enero', 'Marzo', 'Junio', 'Septiembre'],
};

storiesOf('DISPLAY|pandora-chart', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add('Line chart', () => {
    const TYPE = select('Type', TYPE_OPTIONS, 'line');
    const UNITS = text('units', '');
    const ZOOMABLE = boolean('zoomable', true);
    const DATA_ARRAY = object('data', DATA);
    return html`
      <pandora-chart
        .type=${TYPE}
        .units=${UNITS}
        .zoomable=${ZOOMABLE}
        .data=${DATA_ARRAY}
      ></pandora-chart>
    `;
  })
  .add('Spline Chart', () => {
    const TYPE = select('Type', TYPE_OPTIONS, 'spline');
    const UNITS = text('units', '');
    const ZOOMABLE = boolean('zoomable', true);
    const ENDPOINT = text('data', ENDPOINTURL);
    return html`
      <pandora-chart
        .type=${TYPE}
        .units=${UNITS}
        .zoomable=${ZOOMABLE}
        .endpointurl=${ENDPOINT}
      ></pandora-chart>
    `;
  })
  .add('Step Chart', () => {
    const TYPE = select('Type', TYPE_OPTIONS, 'step');
    const UNITS = text('units', '');
    const ZOOMABLE = boolean('zoomable', false);
    const ENDPOINT = text('data', ENDPOINTURL);
    return html`
      <pandora-chart
        .type=${TYPE}
        .units=${UNITS}
        .zoomable=${ZOOMABLE}
        .endpointurl=${ENDPOINT}
      ></pandora-chart>
    `;
  })
  .add('Area Chart', () => {
    const TYPE = select('Type', TYPE_OPTIONS, 'area');
    const UNITS = text('units', '');
    const ZOOMABLE = boolean('zoomable', true);
    const ENDPOINT = text('data', ENDPOINTURL);
    return html`
      <pandora-chart
        .type=${TYPE}
        .units=${UNITS}
        .zoomable=${ZOOMABLE}
        .endpointurl=${ENDPOINT}
      ></pandora-chart>
    `;
  })
  .add('Area-spline Chart', () => {
    const TYPE = select('Type', TYPE_OPTIONS, 'area-spline');
    const UNITS = text('units', '');
    const ZOOMABLE = boolean('zoomable', true);
    const ENDPOINT = text('data', ENDPOINTURL);
    return html`
      <pandora-chart
        .type=${TYPE}
        .units=${UNITS}
        .zoomable=${ZOOMABLE}
        .endpointurl=${ENDPOINT}
      ></pandora-chart>
    `;
  })
  .add('Bar Chart', () => {
    const TYPE = select('Type', TYPE_OPTIONS, 'bar');
    const UNITS = text('units', '');
    const ZOOMABLE = boolean('zoomable', true);
    const ENDPOINT = text('data', ENDPOINTURL);
    return html`
      <pandora-chart
        .type=${TYPE}
        .units=${UNITS}
        .zoomable=${ZOOMABLE}
        .endpointurl=${ENDPOINT}
      ></pandora-chart>
    `;
  })

  .add('Scatter Chart', () => {
    const TYPE = select('Type', TYPE_OPTIONS, 'scatter');
    const UNITS = text('units', '');
    const ZOOMABLE = boolean('zoomable', false);
    const ENDPOINT = text('data', ENDPOINTURL);
    return html`
      <pandora-chart
        .type=${TYPE}
        .units=${UNITS}
        .zoomable=${ZOOMABLE}
        .endpointurl=${ENDPOINT}
      ></pandora-chart>
    `;
  })
  .add('Pie Chart', () => {
    const TYPE = select('Type', TYPE_OPTIONS, 'pie');
    const UNITS = text('units', '');
    const ZOOMABLE = boolean('zoomable', false);
    const ENDPOINT = text('data', ENDPOINTURL);
    return html`
      <pandora-chart
        .type=${TYPE}
        .units=${UNITS}
        .zoomable=${ZOOMABLE}
        .endpointurl=${ENDPOINT}
      ></pandora-chart>
    `;
  })
  .add('Donut Chart', () => {
    const TYPE = select('Type', TYPE_OPTIONS, 'donut');
    const UNITS = text('units', '');
    const ZOOMABLE = boolean('zoomable', false);
    const ENDPOINT = text('data', ENDPOINTURL);
    return html`
      <pandora-chart
        .type=${TYPE}
        .units=${UNITS}
        .zoomable=${ZOOMABLE}
        .endpointurl=${ENDPOINT}
      ></pandora-chart>
    `;
  })
  .add('Gauge Chart', () => {
    const TYPE = select('Type', TYPE_OPTIONS, 'gauge');
    const UNITS = text('units', '');
    const ZOOMABLE = boolean('zoomable', false);
    const ENDPOINT = text('data', ENDPOINTURL);
    return html`
      <pandora-chart
        .type=${TYPE}
        .units=${UNITS}
        .zoomable=${ZOOMABLE}
        .endpointurl=${ENDPOINT}
      ></pandora-chart>
    `;
  });
