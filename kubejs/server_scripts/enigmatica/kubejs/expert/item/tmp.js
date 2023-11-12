'use strict';
onEvent('item.right_click', (e) => {
    const player = e.player;
    if (player.fake || player.mainHandItem.id != 'minecraft:stick') {
        return;
    }

    player.give(
        Item.of(
            'astralsorcery:knowledge_share',
            '{astralsorcery:{knowledgeOwnerName:\'{"insertion":"En6E","clickEvent":{"action":"suggest_command","value":"/tell En6E "},"hoverEvent":{"action":"show_entity","contents":{"type":"minecraft:player","id":"2382db9b-a1dd-46d0-90b1-d62a137a7553","name":{"text":"En6E"}}},"extra":[{"text":"En6E"}],"text":""}\',knowledgeOwnerUUID:[I;595778459,-1579333936,-1867393494,326792531],knowledgeTag:{seenConstellations:[],tierReached:4,constellations:[],wasAttuned:0b,research:[I;0,3,2,1]}}}'
        )
    );
});
