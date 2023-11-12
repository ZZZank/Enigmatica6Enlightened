'use strict';
onEvent('item.tags', (event) => {
    colors.forEach((color) => {
        event
            .get(`forge:glass_panes/${color}`)
<<<<<<< HEAD
            .add([`#chipped:${color}_stained_glass_pane`, `quark:${color}_framed_glass_pane`]);
=======
            .add([
                `#chipped:${color}_stained_glass_pane`,
                `quark:${color}_framed_glass_pane`
            ]);
>>>>>>> e9aead4ac (update scripts for connected-glass removal)
    });

    event
        .get('forge:glass_panes/colorless')
        .add([
            'create:tiled_glass_pane',
            'create:framed_glass_pane',
            'create:horizontal_framed_glass_pane',
            'create:vertical_framed_glass_pane'
        ]);
});
