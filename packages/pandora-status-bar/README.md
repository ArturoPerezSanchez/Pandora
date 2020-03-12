# \<pandora-status>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

It's a custom status bar, where each state and his corresponding info is provided in a JSON and its fully customizable

## Variables
    title(String): The title displayed over the bar
    vertical(Boolean): The bar its displayed horizontally by default
    halfway(Boolean): the filled part can end when it reaches the point or in the way to the next one 
    arrow(Boolean): the end of the bar can be flat or pointed
    completedstatecolor(String): Color of the completed states, uncompleted states are always white
    barcolor(String): color of the filled bar, the empty part is always white
    focusedstatecolor(String): color of the state when is clicked
    textcolor(String): color of the text inside the bubbles
    bubblescolor(String): background color of the bubbles with the information about the states

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
