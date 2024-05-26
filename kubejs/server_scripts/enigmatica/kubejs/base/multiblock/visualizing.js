'use strict';

global.atum = new PatchouliMultiblock(
    "kubejs:atum_portal",
    [
        ["S   S", "     ", "     ", "     ", "S   S"],
        ["S   S", "     ", "  0  ", "     ", "S   S"],
        ["SSSSS", "SPPPS", "SPPPS", "SPPPS", "SSSSS"],
        ["SSSSS", "SSSSS", "SSSSS", "SSSSS", "SSSSS"],
    ],
    {
        S: Block.getBlock("minecraft:sandstone"),
        P: Block.getBlock("atum:portal"),
        // 0: Block.getBlock("mekanism:block_steel"),
    }
);

// onEvent("init", (event) => {
//     global.tMulti.register(event)
// });

onEvent("block.right_click", (event) => {
    const { block, player, item } = event;
    if (item.id != "atum:scarab" 
    //TODO: remove server check when using server_script
        || !event.server) {
        return;
    }
    player.addItemCooldown(item.item, 10)
    const key = "kjs$multiblock"
    if (event.hand == OFF_HAND) {
        $PatchouliAPI.instance.clearMultiblock();
        if (item.nbt != null) {
            item.nbt.remove(key)
        }
        return;
    }
    const nbt = item.nbt
    if (nbt == null || nbt.getBoolean(key) != true) {
        $PatchouliAPI.instance.showMultiblock(
            global.atum.makePatchouliMultiblock(),
            Text.of("Atum Protal"),
            block.pos.up().up(),
            $Rotation.NONE
        );
        if (nbt == null) {
            item.nbt = {key: true}
        }else {
            item.nbt.putBoolean(key, true)
        }
    } else {
        player.tell("todo" + event.hand)
        item.nbt.remove(key)
    }
});
