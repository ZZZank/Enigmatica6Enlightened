<<<<<<< HEAD
'use strict';

/* 'use strict';
onEvent('item.tags', (event) => {
=======
/* onEvent('item.tags', (event) => {
>>>>>>> 4c2146360 (update scripts for chisel removal)
    const chiselNamespace = 'chisel';
    event.add(`${chiselNamespace}:glowstone`, ['#chipped:glowstone']);

    woodVariantsToConstruct
        .filter((woodVariant) => woodVariant.split(':')[0] === 'minecraft')
        .forEach((woodVariant) => {
            let plankType = woodVariant.split(':')[1];
            event.add(`${chiselNamespace}:planks/${plankType}`, [`#${chiselNamespace}:${plankType}`]);
        });
});
<<<<<<< HEAD
 */
=======
 */
>>>>>>> 4c2146360 (update scripts for chisel removal)
