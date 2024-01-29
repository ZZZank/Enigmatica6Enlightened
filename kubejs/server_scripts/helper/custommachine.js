// priority: 1005
'use strict';

/**
 *
 * @param {number} column Number of slots per row
 * @param {number} row Number of slots per column
 * @param {string} prefix Prefix of slot ID
 * @param {string} type Type of slots, like `item`. Actual slot type will be `custommachinery:{type}`
 */
function CMGrid(column, row, prefix, type) {
    this._ = {
        column: column,
        row: row,
        prefix: prefix,
        dx: 0,
        dy: 0,
        mode: '',
        type: type,
        width: 18,
        height: 18
    };
    let preset = this.SIZE_PRESET[type];
    if (preset) {
        this._.width = preset.width;
        this._.height = preset.height;
    }
}

CMGrid.prototype = {
    // prettier-ignore
    SIZE_PRESET: {
        slot            : { width: 18,  height: 18 },
        progress        : { width: 24,  height: 16 },
        fuel            : { width: 14,  height: 14 },
        fluid           : { width: 18,  height: 44 },
        energy          : { width: 18,  height: 44 },
        player_inventory: { width: 162, height: 76 },
        dump            : { width: 29,  height: 13 },
        reset           : { width: 33,  height: 13 },
        status          : { width: 16,  height: 16 },
    },
    /**
     * Set the offset of grid. Will be applied to all slots in this grid
     * @param {number} dx
     * @param {number} dy
     */
    offset: function (dx, dy) {
        this._.dx = dx;
        this._.dy = dy;
        return this;
    },
    /**
     * Define the IO mode of the slot.
     * Hoppers and pipes can only insert in an input slot and extract from an output slot.
     * In GUI you can both insert and extract items in an input slot but only extract items
     * from an output slot. While crafting the machine will search for items to consume in
     * input slots and put the recipe results in the output slots.
     * @param {string} mode Available modes: `input` / `output` / `both` / `none`. Default
     * is `both` .
     */
    setMode: function (mode) {
        this._.mode = mode;
        return this;
    },
    build: function () {
        let grid = [];
        const { dx, dy, prefix, column, row, type, width, height } = this._;
        for (let i = 0; i < column; i++) {
            for (let j = 0; j < row; j++) {
                let target = {
                    type: 'custommachinery:' + type,
                    x: dx + i * width,
                    y: dy + j * height,
                    id: `${prefix}_${i + j * row}`
                };
                if (this._.mode.length != 0) {
                    //@ts-ignore
                    target.mode = this._.mode;
                }
                grid.push(target);
            }
        }
        return grid;
    }
};