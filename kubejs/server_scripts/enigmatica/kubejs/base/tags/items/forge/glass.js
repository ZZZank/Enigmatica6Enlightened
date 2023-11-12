'use strict';
onEvent('item.tags', (event) => {
    colors.forEach((color) => {
<<<<<<< HEAD
        event.get(`forge:glass/${color}`).add([`quark:${color}_framed_glass`]);
=======
        event
            .get(`forge:glass/${color}`)
            .add([
                `quark:${color}_framed_glass`
            ]);
>>>>>>> e9aead4ac (update scripts for connected-glass removal)

        event.get('forge:glass').remove([`#chipped:${color}_stained_glass_pane`]);
    });
});
