'use strict';

global.tMulti = new PatchouliMultiblick(
    "kubejs:try_multiblock",
    [
        ["   ", "   ", "   "],
        ["   ", " 0 ", "   "],
        ["GGG", "GGG", "GGG"],
    ],
    {
        G: Block.getBlock("minecraft:obsidian"),
        O: Block.getBlock("minecraft:sculk_shrieker"),
        0: Block.getBlock("mekanism:block_steel"),
    }
);

// onEvent("init", (event) => {
//     global.tMulti.register(event)
// });

onEvent("block.right_click", (event) => {
    const { block, player, item } = event;
    if (item.id != "mekanism:energy_tablet" || !player.isCreativeMode()) {
        return;
    }
    if (event.hand == OFF_HAND) {
        $PatchouliAPI.instance.clearMultiblock();
        return;
    }
    $PatchouliAPI.instance.showMultiblock(
        global.tMulti.makePatchouliMultiblock(),
        Text.of("sure"),
        block.pos.up(),
        $Rotation.NONE
    );
});
