'use strict';

const $VillagerEntity = java('net.minecraft.entity.merchant.villager.VillagerEntity');
const $MerchantOffers = java('net.minecraft.item.MerchantOffers');
const $MerchantOffer = java('net.minecraft.item.MerchantOffer');

/**
 * "Flip" trades of a villager if renamed to/from "Dinnerbone"
 */
onEvent('item.entity_interact', (event) => {
    //filtering: general
    const { item, hand, target } = event;
    if (
        item.id != 'minecraft:name_tag' ||
        hand != MAIN_HAND ||
        !(target.minecraftEntity instanceof $VillagerEntity)
    ) {
        return;
    }
    const mcEntity = target.minecraftEntity;

    //filtering: name
    const dinnerboneVillager = mcEntity.hasCustomName()
        ? mcEntity.getCustomName().getString() == 'Dinnerbone'
        : false;
    const dinnerboneNameTag = item.getName().string == 'Dinnerbone';
    if (
        //target name -> other name
        !(dinnerboneVillager && !dinnerboneNameTag) &&
        //other name -> target name
        !(!dinnerboneVillager && dinnerboneNameTag)
    ) {
        return;//skip if no condition matches
    }

    //flipping trades(sound like swearing)
    const flipped = new $MerchantOffers();
    mcEntity.offers.forEach((offer) => {
        // @ts-ignore
        flipped.add(
            //sellingStack <-> buyingStackFirst
            new $MerchantOffer(
                offer.sellingStack,
                offer.buyingStackSecond,
                offer.buyingStackFirst,
                Math.max(0, offer.uses - 3),
                offer.maxUses,
                offer.givenExp,
                offer.priceMultiplier,
                offer.demand
            )
        );
    });
    mcEntity.setOffers(flipped);
});
