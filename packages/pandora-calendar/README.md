# \<pandora-calendar>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

pandora-calendar it's a customizable and responsive calendar that adapats the text to the user navigator language and allows you to highlight several dates with some text to display in bubbles

## Variables
    arrowLeft(String) = Unicode with the left arrow icon
    arrowRight(String) = Unicode with the right arrow icon
    bubblecolor(String) = Primary background color of the bubbles
    bubblesecondarycolor(String) = Secondary background color of the bubbles (if used, a gradient is created)
    bubbletextcolor(String) = Color of the text inside the bubbles
    dates(Array) = An array with all events dates (Dates) and description of them (Text) 
    daysbackgroundcolor(String) = Background color of all the month days
    dayscolor(String) = color of the text all the month days
    defaultDate(String) = The date that will be display at first (Today if its blank)
    headerbackgroundcolor(String) = Background color of the year and month container
    headertextcolor(String) = Text color of the year and month container
    highlighteddaycolor(String) = Background color of the days that have an asociated event (a bubble is displayed if its focused)
    weekdaysbackgroundcolor(String) = Background Color of the middle bar which contains the days of the week
    weekdaystextcolor(String) = Text color of the days of the week
    weekdaysvalues(String) = It can be narrow, short or long (narrow by default)
    weekstart(Number) = Day of the week in which the calendar starts (0-> Sunday; 1->Monday, 2->Tuesday...)

## Installation
```bash
npm i pandora-calendar
```

## Usage
```html
<script type="module">
  import 'pandora-calendar/pandora-calendar.js';
</script>

<pandora-calendar></pandora-calendar>
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
