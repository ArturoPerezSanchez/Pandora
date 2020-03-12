# \<pandora-status>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

It's a customizable and responsive status bar, the title is optional and the default color and percentage its green and 0 
respectivel.

## Variables
    title(String): The titled displayed over the bar
    percentage(Number): How complete is the bar
    color(String): Color of the filled part of the bar (can be chosen by name, hex, rgb, gradient...)

## Installation
```bash
npm i pandora-status
```

## Usage
```html
<script type="module">
  import 'pandora-status/pandora-status.js';
</script>

<pandora-status></pandora-status>
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
