"use strict";

const $PatchouliAPI = java("vazkii.patchouli.api.PatchouliAPI");
// @ts-ignore
const $Character = java("java.lang.Character");
const $Rotation = java("net.minecraft.util.Rotation");

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
            keymaps.push(new $Character(key), value);
        }
        return $PatchouliAPI.instance.makeMultiblock(this.pattern, keymaps);
    },
    /**
     * the `event` param is only used for informing users that registering should only happens in such event,
     * and the event will not be used
     * 
     * note that `$PatchouliAPI.instance.showMultiblock(...)` does not need registering
     * @param {Internal.StartupEventJS} event
     */
    register: function (event) {
        $PatchouliAPI.instance.registerMultiblock(this.id, this.makePatchouliMultiblock());
    },
};