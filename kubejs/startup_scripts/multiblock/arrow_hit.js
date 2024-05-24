'use strict';


onForgeEvent('net.minecraftforge.event.entity.ProjectileImpactEvent$Arrow', ((event) => {
    const arrow = event.arrow;
    const rayTraceResult = event.rayTraceResult;
    console.log(arrow.type.getRegistryName());
    if (arrow.type.getRegistryName().toString() != 'archers_paradox:challenge_arrow' ||
        rayTraceResult.type.name() != 'block') {
        return;
    }
    /**
     * @type {Internal.CompoundNBT}
     */
    // @ts-ignore
    const nbt = arrow.serializeNBT();
    console.log('hit info: ' + rayTraceResult.hitInfo);
    console.log('arrow: ' + arrow);
    console.log('hit type: ' + event.getRayTraceResult().getType());
    arrow.setVelocity(0, 1, 0);
    const kjsed = arrow.asKJS();
}));
