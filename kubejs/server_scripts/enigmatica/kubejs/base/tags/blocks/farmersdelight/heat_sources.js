'use strict';
onEvent('block.tags', (event) => {
    event.add('farmersdelight:heat_sources', heatSources);
});
