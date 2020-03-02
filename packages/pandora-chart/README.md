# \<pandora-chart>
This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

It's a customizable and responsive chart made with c3 library, it reads the data directly from a JSON or from an endpoint URL

## Variables
    type(String): The display mode of the chart (line, spline, step, area, area, area-spline, bar, scatter, pie, donut or gauge)
    units(String): The units will be displayed at the left part of the chart
    endpointurl(String): URL with the json that contains the data, axis and colors
    data(json): JSON with the json that contains the data, axis and colors
    zoomable(Boolean): Allows the user to zoom the chart scrolling with the mouse.

## Installation
```bash
npm i pandora-chart
```

## Usage
```html
<script type="module">
  import 'pandora-chart/pandora-chart.js';
</script>

<pandora-chart></pandora-chart>
```

## Testing using karma
```bash
npm run test
```

## Demoing using storybook
```bash
npm run storybook
```

## Linting
```bash
npm run lint
```
