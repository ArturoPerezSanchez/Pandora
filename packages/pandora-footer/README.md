# \<pandora-footer>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

It's a customizable and responsive footer with a column design, each column contains links obtained from the same array, it is designed to cover the total width of the page, but it does not necessarily have to be that way.

## Variables
  columns(Array)*: Array with the title and links of each column
  links(Array): Array with the links that are going to be displayed at the bottom
  topBorder(Boolean): Display the top border of each column
  text(String): Title to the whole footer
  textColor(String): Color of the title of the footer (not the columns color)
  textSize(String): Size of the title of the footer (not the columns size)
  linksTitleColor(String): Color the title of the columns
  linksColor(String): Color the links of the columns
  backgroundColor(String): Background color of the whole footer (can be chosen by name, hex, rgb, gradient...)

## Installation
```bash
npm i pandora-footer
```

## Usage
```html
<script type="module">
  import 'pandora-footer/pandora-footer.js';
</script>

<pandora-footer></pandora-footer>
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
