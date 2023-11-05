'use strict';

const restrictions_prefix = 'gamestage.enigmatica.restrictions.';
const restrictions_block_place = [
    {
        blocks: ['occultism:sacrificial_bowl'],
        dimension: 'atum:atum',
        additionalRequiremant: (event) => {
            return event.getEntity().stages.has('red_chalk');
        },
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
        additionalRequiremant: (event) => {
            return event.getEntity().stages.has('master_blood_orb');
        },
        errorMessage: `${restrictions_prefix}master_blood_orb`
    }
];

onEvent('block.place', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const block = event.getBlock();
    /** @type {Internal.EntityJS} */
    const entity = event.getEntity();
    if (!entity || !entity.player || entity.fake) {
        event.cancel();
        return;
    }

    for (let i = 0; i < restrictions_block_place.length; i++) {
        let restriction = restrictions_block_place[i];
        if (!restriction.blocks.includes(`${block}`)) {
            continue;
        }
        if (
            (restriction.dimension && restriction.dimension != block.dimension) ||
            !restriction.additionalRequiremant(event)
        ) {
            entity.setStatusMessage(Text.translate(restriction.errorMessage).red());
            event.cancel();
            break;
        }
    }
});
