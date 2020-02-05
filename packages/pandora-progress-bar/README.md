# \<pandora-progress>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

It's a customizable and responsive progress bar, the title is optional and the default color and percentage its green and 0 
respectivel.

## Variables
    title(String): The titled displayed over the bar
    percentage(Number): How complete is the bar
    color(String): Color of the filled part of the bar (can be chosen by name, hex, rgb, gradient...)

## Installation
```bash
npm i pandora-progress
```

## Usage
```html
<script type="module">
  import 'pandora-progress/pandora-progress.js';
</script>

<pandora-progress></pandora-progress>
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
