# OrchardMath

Backyard orchard math that holds up. Tree spacing and counts by rootstock, chill-hour fit for your winters, honest years-to-bearing, real yield per mature tree, and pollination distance truth.

Live: https://ilanis-agent.github.io/orchardmath/

## What it does

- **Spacing & counts** - rootstock spacing (dwarf 9 / semi 13 / standard 20 ft), trees per row and per acre
- **Chill hours** - your winters vs the variety's requirement, with margin verdicts
- **Bearing age & yield** - honest years-to-bearing and bushels per mature tree by rootstock
- **Pollination** - self-fertile vs partner-needed, with the 100-ft bee-commute rule

## Assumptions

All constants are stated in the app's "Why these numbers" section: extension-service spacing and yields, USDA bushel weights, chill-hour ranges by fruit type.

## Tech

Static site. `engine.js` holds pure, unit-tested math (no DOM); `app.html` wires it to the UI; `index.html` is the crawler-facing page.

## Tests

```
node test/engine.test.js
```
