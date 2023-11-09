'use strict';

restrictions.block_place = [
    /*
    {
        blocks: [],
        dimension: '', // the restricted block must be placed in specific dimension
        stageUnlock: '', // the restricted block can be placed anywhere by player who has this stage
        additional: (event) => {return true},
        errorMessage: ''
    },
    */
    {
        blocks: ['occultism:sacrificial_bowl'],
        dimension: 'atum:atum',
        stageUnlock: 'red_chalk',
        // additional: (event) => {return true},
        errorMessage: `${restrictions.prefix}red_chalk`
    },
    {
        blocks: [
            'bloodmagic:altar',
            'bloodmagic:alchemytable',
            'bloodmagic:demoncrucible',
            'bloodmagic:demoncrystallizer',
            'bloodmagic:soulforge',
            'bloodmagic:alchemicalreactionchamber',
            'bloodmagic:incensealtar'
        ],
        dimension: 'undergarden:undergarden',
        stageUnlock: 'master_blood_orb',
        errorMessage: `${restrictions.prefix}master_blood_orb`
    }
];

onEvent('block.place', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const /** @type {Internal.BlockContainerJS} */ block = event.getBlock();
    const /** @type {Internal.EntityJS} */ entity = event.getEntity();
    if (!entity || !entity.player || entity.fake) {
        event.cancel();
        return;
    }

    for (let r of restrictions.block_place) {
        if (r.blocks.indexOf(block.id) == -1) {
            continue;
        }
        let isValid =
            // If player has such stage, the block can be placed anywhere
            (r.stageUnlock && entity.stages.has(r.stageUnlock)) ||
            // If player doesn't has such stage, block placement will be forbidden
            // unless all requirements are met
            (r.dimension && r.dimension == block.dimension && r.additional && r.additional(event));
        if (!isValid) {
            entity.tell(Text.translate(r.errorMessage).red());
            event.cancel();
            break;
        }
    }
});
