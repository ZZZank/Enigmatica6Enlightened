'use strict';

const restrictions_prefix = 'gamestage.enigmatica.restrictions.';
const restrictions_block_place = [
    /*
    {
        blocks: [],
        dimension: '', // the restricted block must be placed in specific dimension
        stage: '', // the restricted block can be placed anywhere by player who has this stage
        additional: (event) => {return true},
        errorMessage: ''
    },
    */
    {
        blocks: ['occultism:sacrificial_bowl'],
        dimension: 'atum:atum',
        stageUnlock: 'red_chalk',
        // additional: (event) => {return true},
        errorMessage: `${restrictions_prefix}red_chalk`
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
        errorMessage: `${restrictions_prefix}master_blood_orb`
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

    for (let i = 0; i < restrictions_block_place.length; i++) {
        let r = restrictions_block_place[i];
        if (!r.blocks.includes(`${block}`)) {
            continue;
        }
        let isValid = () => {
            // If player has such stage, the block can be placed anywhere
            if (r.stageUnlock && entity.stage.has(r.stageUnlock)) {
                return true;
            }
            // If player doesn't has such stage, block placement will be forbidden
            // unless all requirements are met
            if ((r.dimension && r.dimension != block.dimension) || (r.additional && !r.additional(event))) {
                return false;
            }
            // return 'valid' when all requirements are met, or when there's no requirement
            return true;
        };
        if (!isValid()) {
            entity.tell(Text.translate(r.errorMessage).red());
            event.cancel();
            break;
        }
    }
});
