'use strict';

global.onReload = {
    powah_config: java('owmii.powah.config.Configs'),
    packmenu_config: java('shadows.menu.PackMenuClient'),
    randompatches_config: java('com.therandomlabs.randompatches.RandomPatches'),
    reload: () => {
        //reload powah configs
        this.powah_config.ALL.forEach((config) => config.reload());

        //reload packmenu config
        this.packmenu_config.loadConfig();

        //reload randompatches config
        this.randompatches_config.reloadConfig();
    }
}

onEvent('postinit', (event) => {
    global.onReload.reload().reload();
});
