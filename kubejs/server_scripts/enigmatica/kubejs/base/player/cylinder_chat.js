'use strict';

onEvent('player.chat', (event) => {
    const player = event.player;
    const message = event.message;
    if (player.fake || !message.startsWith('cyl ')) {
        return;
    }

    event.cancel();

    const amount = Number(message.substr(4));
    if (!amount || amount <= 0) {
        player.tell(Text.of('Cylinder: Invalid amount per operation').red());
        return;
    }

    player.persistentData.cylinderAmount = amount;
    player.tell(
        Text.translate(
            'Cylinder: Amount per operation set to %s',
            Text.of(player.persistentData.cylinderAmount).green()
        ).blue()
    );
});
