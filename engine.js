/* OrchardMath engine - pure functions, no DOM. Honest backyard orchard math.
   Constants stated in the UI: rootstock spacing dwarf 9 / semi 13 / standard 20 ft,
   43560 sq ft per acre, chill-hour needs by fruit, bearing-age honesty by rootstock,
   bushel weights apples 42 / peaches 48 / pears 50 lb, yields per mature tree. */
var OrchardMath = (function () {
  var SPACING = { dwarf: 9, semidwarf: 13, standard: 20 };
  var BEARING = { dwarf: '2-3 years', semidwarf: '3-5 years', standard: '6-10 years' };
  var YIELD_BU = { dwarf: 0.75, semidwarf: 3, standard: 7.5 };
  var BUSHEL_LB = { apple: 42, peach: 48, pear: 50, plum: 50 };
  function spacingFt(rootstock) { return SPACING[rootstock]; }
  function treesPerAcre(rootstock) {
    var s = SPACING[rootstock];
    return 43560 / (s * s);
  }
  function treesInRow(rowLenFt, rootstock) {
    return Math.floor(rowLenFt / SPACING[rootstock]) + 1;
  }
  function spacingVerdict(rootstock) {
    if (rootstock === 'dwarf') return 'Dwarf: a ladder-free tree you prune from the ground - tight spacing, fruit fast, stake it.';
    if (rootstock === 'semidwarf') return 'Semi-dwarf: the backyard sweet spot - real canopy without the 20-foot ladder.';
    return 'Standard: a legacy tree for grandchildren - years to fruit, but it outlives the planter.';
  }
  function chillVerdict(climateHrs, varietyHrs) {
    var margin = climateHrs - varietyHrs;
    if (margin < 0) return 'Short by ' + (-margin) + ' chill hours - this variety fruits poorly here; pick a low-chill one.';
    if (margin < 150) return 'Only ' + margin + ' hours of margin - a warm winter breaks the crop.';
    return margin + ' chill hours of margin - the winter covers this variety comfortably.';
  }
  function bearingText(rootstock) { return BEARING[rootstock]; }
  function bearingVerdict(rootstock) {
    if (rootstock === 'standard') return 'Nursery tags sell speed; a standard tree is a 6-10 year wait. Plant dwarfs alongside if you want fruit this decade.';
    return 'Bearing in ' + BEARING[rootstock] + ' is honest for this rootstock - the first light crop is a promise, not a harvest.';
  }
  function yieldBushels(rootstock, trees) {
    return YIELD_BU[rootstock] * trees;
  }
  function bushelLb(crop, bushels) {
    return (BUSHEL_LB[crop] || 44) * bushels;
  }
  function yieldVerdict(rootstock, trees) {
    var bu = yieldBushels(rootstock, trees);
    if (bu < 3) return 'A taste, not a pantry - add trees or wait for maturity to compound.';
    if (bu < 15) return 'Real eating and some preserving - a working backyard orchard.';
    return 'Serious volume - plan the canning, drying and giving-away before August plans it for you.';
  }
  function pollinVerdict(selfFertile, distanceFt) {
    if (selfFertile) return 'Self-fertile - one tree sets fruit alone, though a partner still lifts the crop.';
    if (distanceFt <= 100) return 'Two compatible varieties within ' + distanceFt + ' ft - the bees can commute.';
    return 'Too far apart - cross-pollinating varieties want a partner within about 100 ft, or plant a crabapple.';
  }
  return {
    spacingFt: spacingFt, treesPerAcre: treesPerAcre, treesInRow: treesInRow, spacingVerdict: spacingVerdict,
    chillVerdict: chillVerdict, bearingText: bearingText, bearingVerdict: bearingVerdict,
    yieldBushels: yieldBushels, bushelLb: bushelLb, yieldVerdict: yieldVerdict, pollinVerdict: pollinVerdict
  };
})();
if (typeof module !== 'undefined') module.exports = OrchardMath;
