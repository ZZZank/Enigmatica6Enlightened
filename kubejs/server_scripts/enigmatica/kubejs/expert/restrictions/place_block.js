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
    if (global.isNormalMode) {
        return;
    }
    const /** @type {Internal.BlockContainerJS} */ block = event.getBlock();
    const /** @type {Internal.EntityJS} */ entity = event.getEntity();

    let isValid = (restriction) => {
        if (restriction.stageUnlock && entity.stages.has(restriction.stageUnlock)) {
            return true;
        }
        if (restriction.dimension && restriction.dimension != block.dimension) {
            return false;
        }
        if (restriction.additional && !restriction.additional(event)) {
            return false;
        }
        return true;
    };

    for (let r of restrictions.block_place) {
        if (r.blocks.indexOf(block.id) == -1) {
            continue;
        }
        // Restricted blocks must be placed by player
        if (!entity || !entity.player || entity.fake) {
            event.cancel();
            return;
        }
        if (!isValid(r)) {
            entity.tell(Text.translate(r.errorMessage).red());
            event.cancel();
            return;
        }
    }
});
