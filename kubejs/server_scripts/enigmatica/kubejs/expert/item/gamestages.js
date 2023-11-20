'use strict';

const stageMap = {
    // item : stage ,
    'kubejs:medium_machinery_schematics': 'medium_machinery_schematics',
    'kubejs:heavy_machinery_schematics': 'heavy_machinery_schematics',
    'occultism:chalk_red': 'red_chalk',
    'bloodmagic:masterbloodorb': 'master_blood_orb',
    'bloodmagic:soulgemlesser': 'lesser_tartaric_gem'
};

onEvent('item.right_click', (event) => {
    const player = event.player;

    const stage_name = stageMap[player.mainHandItem];
    if (stage_name && !event.getEntity().stages.has(`${stage_name}`)) {
        event.player.tell(`Gamestage Granted: ${titleCase(stage_name.replace(/_+/g, ' '))}`);
        event.getEntity().stages.add(`${stage_name}`);
    }
});

function titleCase(str) {
    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}
