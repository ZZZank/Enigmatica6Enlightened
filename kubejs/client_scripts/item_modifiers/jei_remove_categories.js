'use strict';

onEvent('kube_jei.deny.categories', (event) => {
    event.deny(
        'pneumaticcraft:compressed_iron_explosion',
        'portable_stonecutter:jei_anvil_flattening',
        'masterfulmachinery:machine_structure_auto_iridescent_altar',
        'masterfulmachinery:machine_structure_advanced_assembly_table',
        'masterfulmachinery:machine_structure_enigmatic_tree_of_life',
        'masterfulmachinery:machine_structure_wicked_altar',
        'masterfulmachinery:machine_structure_industrial_deuterium_plant',
        'masterfulmachinery:machine_structure_gaia_reactor',
        'masterfulmachinery:machine_structure_stellar_neutron_activator',
        'occultism:miner'
    );
});
