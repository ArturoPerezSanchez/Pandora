import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import '../pandora-chart.js';
import readme from '../README.md';

const DATA_DOBLE = 'http://www.mocky.io/v2/5e5cf9f9320000770043c4ff';
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

storiesOf('ÁTOMOS|pandora-chart', module)
  .addParameters({
    notes: { markdown: readme },
  })
  .addDecorator(withKnobs)
  .add('Line chart', () => {
    const TYPE = select('Type', TYPE_OPTIONS, 'line');
    const UNITS = text('units', '');
    const DATA = text('data', DATA_DOBLE);
    return html`
      <pandora-chart .type=${TYPE} .units=${UNITS} .endpointurl=${DATA}></pandora-chart>
    `;
  })
  .add('Spline Chart', () => {
    const TYPE = select('Type', TYPE_OPTIONS, 'spline');
    const UNITS = text('units', '');
    const DATA = text('data', DATA_DOBLE);
    return html`
      <pandora-chart .type=${TYPE} .units=${UNITS} .endpointurl=${DATA}></pandora-chart>
    `;
  })
  .add('Step Chart', () => {
    const TYPE = select('Type', TYPE_OPTIONS, 'step');
    const UNITS = text('units', '');
    const DATA = text('data', DATA_DOBLE);
    return html`
      <pandora-chart .type=${TYPE} .units=${UNITS} .endpointurl=${DATA}></pandora-chart>
    `;
  })
  .add('Area Chart', () => {
    const TYPE = select('Type', TYPE_OPTIONS, 'area');
    const UNITS = text('units', '');
    const DATA = text('data', DATA_DOBLE);
    return html`
      <pandora-chart .type=${TYPE} .units=${UNITS} .endpointurl=${DATA}></pandora-chart>
    `;
  })
  .add('Area-spline Chart', () => {
    const TYPE = select('Type', TYPE_OPTIONS, 'area-spline');
    const UNITS = text('units', '');
    const DATA = text('data', DATA_DOBLE);
    return html`
      <pandora-chart .type=${TYPE} .units=${UNITS} .endpointurl=${DATA}></pandora-chart>
    `;
  })
  .add('Bar Chart', () => {
    const TYPE = select('Type', TYPE_OPTIONS, 'bar');
    const UNITS = text('units', '');
    const DATA = text('data', DATA_DOBLE);
    return html`
      <pandora-chart .type=${TYPE} .units=${UNITS} .endpointurl=${DATA}></pandora-chart>
    `;
  })

  .add('Scatter Chart', () => {
    const TYPE = select('Type', TYPE_OPTIONS, 'scatter');
    const UNITS = text('units', '');
    const DATA = text('data', DATA_DOBLE);
    return html`
      <pandora-chart .type=${TYPE} .units=${UNITS} .endpointurl=${DATA}></pandora-chart>
    `;
  })
  .add('Pie Chart', () => {
    const TYPE = select('Type', TYPE_OPTIONS, 'pie');
    const UNITS = text('units', '');
    const DATA = text('data', DATA_DOBLE);
    return html`
      <pandora-chart .type=${TYPE} .units=${UNITS} .endpointurl=${DATA}></pandora-chart>
    `;
  })
  .add('Donut Chart', () => {
    const TYPE = select('Type', TYPE_OPTIONS, 'donut');
    const UNITS = text('units', '');
    const DATA = text('data', DATA_DOBLE);
    return html`
      <pandora-chart .type=${TYPE} .units=${UNITS} .endpointurl=${DATA}></pandora-chart>
    `;
  })
  .add('Gauge Chart', () => {
    const TYPE = select('Type', TYPE_OPTIONS, 'gauge');
    const UNITS = text('units', '');
    const DATA = text('data', DATA_DOBLE);
    return html`
      <pandora-chart .type=${TYPE} .units=${UNITS} .endpointurl=${DATA}></pandora-chart>
    `;
  });
