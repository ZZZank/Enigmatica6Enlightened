'use strict';

const PatchouliAPI = java('vazkii.patchouli.api.PatchouliAPI');
// @ts-ignore
const Character = java('java.lang.Character');
const Rotation = java('net.minecraft.util.Rotation');

/**
 * @param {ResourceLocation_} id
 * @param {string[][]} pattern note that there shall be one (and only one) `0`, marking the center of multiblock
 * @param {{[x in string]: Internal.Block}} keymaps
 */
function PatchouliMultiblick(id, pattern, keymaps) {
    this.id = id;
    this.pattern = pattern;
    this.maps = keymaps;
}

PatchouliMultiblick.prototype = {
    makePatchouliMultiblock: function () {
        const keymaps = [];
        for (let key in this.maps) {
            let value = this.maps[key];
            keymaps.push(new Character(key), value);
        }
        return PatchouliAPI.instance.makeMultiblock(this.pattern, keymaps);
    },
    /**
     * the `event` param is only used for informing users that registering should only happens in such event
     * and the event will not be used
     *
     * note that `$PatchouliAPI.instance.showMultiblock(...)` does not need registering
     * @param {Internal.StartupEventJS} event
     */
    register: function (event) {
        PatchouliAPI.instance.registerMultiblock(this.id, this.makePatchouliMultiblock());
    }
};

global.tMulti = new PatchouliMultiblick(
    'kubejs:try_multiblock',
    [
        ['   ', '   ', '   '],
        ['   ', ' 0 ', '   '],
        ['GGG', 'GGG', 'GGG']
    ],
    {
        G: Block.getBlock('minecraft:obsidian'),
        O: Block.getBlock('minecraft:sculk_shrieker'),
        0: Block.getBlock('mekanism:block_steel')
    }
);

if (DEBUG) {
    onEvent('init', (event) => {
        //在游戏初始化时注册其结构
        global.tMulti.register(event);
    });
    
    onEvent('block.right_click', (event) => {
        const { block, player, item } = event;
        if (item.id.toString() != 'mekanism:energy_tablet' || !player.isCreativeMode()) {
            return;
        }
        if (event.hand == OFF_HAND) {
            PatchouliAPI.instance.clearMultiblock();
            return;
        }
        PatchouliAPI.instance.showMultiblock(
            global.tMulti.makePatchouliMultiblock(),
            Text.of('sure'),
            block.pos.up(),
            Rotation.NONE
        );
    });
}    
