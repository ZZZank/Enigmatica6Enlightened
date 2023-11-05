'use strict';

const restrictions_prefix = 'gamestage.enigmatica.restrictions.';
const restrictions_block_place = [
    {
        blocks: ['occultism:sacrificial_bowl'],
        dimension: 'atum:atum',
        additionalRequiremant: (event) => {
            let entity = event.getEntity();
            return entity && entity.isPlayer() && !entity.fake && entity.stages.has('red_chalk');
        },
        errorMessage: `${restrictions_prefix}master_blood_orb`
    },
    {
        blocks: [
            'bloodmagic:altar',
            'bloodmagic:alchemytable',
            'bloodmagic:demoncrucible',
            'bloodmagic:demoncrystallizer',
            'bloodmagic:alchemytable',
            'bloodmagic:soulforge',
            'bloodmagic:alchemicalreactionchamber',
            'bloodmagic:incensealtar'
        ],
        dimension: 'undergarden:undergarden',
        additionalRequiremant: (event) => {
            let entity = event.getEntity();
            return entity && entity.isPlayer() && !entity.fake && entity.stages.has('master_blood_orb');
        },
        errorMessage: `${restrictions_prefix}master_blood_orb`
    }
];

onEvent('block.place', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const block = event.getBlock();

    for (const restriction of restrictions_block_place) {
        if (!restriction.blocks.includes(block.id)) {
            continue;
        }
        if (
            (restriction.dimension && restriction.dimension != block.dimension) ||
            !restriction.additionalRequiremant(event)
        ) {
            event.entity.setStatusMessage(Text.translate(restriction.errorMessage));
            event.cancel();
            break;
        }
    }
});
