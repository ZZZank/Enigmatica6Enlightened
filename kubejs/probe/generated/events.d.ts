/// <reference path="./globals.d.ts" />
/**
 * @cancellable Yes
 * @at startup, server
 */
declare function onEvent(name: "block.break", handler: (event: Internal.BlockBreakEventJS) => void): void;
/**
 * @cancellable Yes
 * @at startup, server, client
 */
declare function onEvent(name: "block.left_click", handler: (event: Internal.BlockLeftClickEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "block.loot_tables", handler: (event: Internal.BlockLootEventJS) => void): void;
/**
 * @cancellable No
 * @at startup
 */
declare function onEvent(name: "block.modification", handler: (event: Internal.BlockModificationEventJS) => void): void;
/**
 * @cancellable Yes
 * @at startup, server
 */
declare function onEvent(name: "block.place", handler: (event: Internal.BlockPlaceEventJS) => void): void;
/**
 * @cancellable No
 * @at startup
 */
declare function onEvent(name: "block.registry", handler: (event: Internal.BlockRegistryEventJS) => void): void;
/**
 * @cancellable Yes
 * @at startup, server, client
 */
declare function onEvent(name: "block.right_click", handler: (event: Internal.BlockRightClickEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "block.tags", handler: (event: Internal.TagEventJS<Unresolved>) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "block_entity_type.tags", handler: (event: Internal.TagEventJS<Unresolved>) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "chest.loot_tables", handler: (event: Internal.ChestLootEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, client
 */
declare function onEvent(name: "client.init", handler: (event: Internal.ClientEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, client
 */
declare function onEvent(name: "client.item_tooltip", handler: (event: Internal.OldItemTooltipEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, client
 */
declare function onEvent(name: "client.logged_in", handler: (event: Internal.ClientLoggedInEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, client
 */
declare function onEvent(name: "client.paint_screen", handler: (event: Internal.ScreenPaintEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, client
 */
declare function onEvent(name: "client.painter_updated", handler: (event: Internal.PainterUpdatedEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, client
 */
declare function onEvent(name: "client.tick", handler: (event: Internal.ClientTickEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "cm_upgrades", handler: (event: Internal.CustomMachineJSUpgradeBuilder$UpgradeEvent) => void): void;
/**
 * @cancellable Yes
 * @at startup, server
 */
declare function onEvent(name: "command.run", handler: (event: Internal.CommandEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "enchantment.tags", handler: (event: Internal.TagEventJS<Unresolved>) => void): void;
/**
 * @cancellable Yes
 * @at startup, server
 */
declare function onEvent(name: "entity.attack", handler: (event: Internal.LivingEntityAttackEventJS) => void): void;
/**
 * @cancellable Yes
 * @at startup, server
 */
declare function onEvent(name: "entity.check_spawn", handler: (event: Internal.CheckLivingEntitySpawnEventJS) => void): void;
/**
 * @cancellable Yes
 * @at startup, server, client
 */
declare function onEvent(name: "entity.death", handler: (event: Internal.LivingEntityDeathEventJS) => void): void;
/**
 * @cancellable Yes
 * @at startup, server
 */
declare function onEvent(name: "entity.drops", handler: (event: Internal.LivingEntityDropsEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "entity.loot_tables", handler: (event: Internal.EntityLootEventJS) => void): void;
/**
 * @cancellable Yes
 * @at startup, server
 */
declare function onEvent(name: "entity.spawned", handler: (event: Internal.EntitySpawnedEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "entity_type.tags", handler: (event: Internal.TagEventJS<Unresolved>) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "fishing.loot_tables", handler: (event: Internal.FishingLootEventJS) => void): void;
/**
 * @cancellable No
 * @at startup
 */
declare function onEvent(name: "fluid.registry", handler: (event: Internal.FluidRegistryEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "fluid.tags", handler: (event: Internal.TagEventJS<Unresolved>) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "function.tags", handler: (event: Internal.TagEventJS<Unresolved>) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "gas.tags", handler: (event: Internal.TagEventJS<Unresolved>) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "generic.loot_tables", handler: (event: Internal.GenericLootEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "gift.loot_tables", handler: (event: Internal.GiftLootEventJS) => void): void;
/**
 * @cancellable Yes
 * @at startup
 */
declare function onEvent(name: "ie.multiblock.form", handler: (event: Internal.MultiblockFormEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "infuse_type.tags", handler: (event: Internal.TagEventJS<Unresolved>) => void): void;
/**
 * @cancellable No
 * @at startup
 */
declare function onEvent(name: "init", handler: (event: Internal.StartupEventJS) => void): void;
/**
 * @cancellable unknown
 * @at unknown, info of this event seems fetched from an older version of cache
 */
declare function onEvent(name: "item.crafted", handler: (event: Internal.ItemCraftedEventJS) => void): void;
/**
 * @cancellable Yes
 * @at startup, server
 */
declare function onEvent(name: "item.destroyed", handler: (event: Internal.ItemDestroyedEventJS) => void): void;
/**
 * @cancellable unknown
 * @at unknown, info of this event seems fetched from an older version of cache
 */
declare function onEvent(name: "item.entity_interact", handler: (event: Internal.ItemEntityInteractEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, client
 */
declare function onEvent(name: "item.left_click", handler: (event: Internal.ItemLeftClickEventJS) => void): void;
/**
 * @cancellable No
 * @at startup
 */
declare function onEvent(name: "item.modification", handler: (event: Internal.ItemModificationEventJS) => void): void;
/**
 * @cancellable Yes
 * @at startup, server
 */
declare function onEvent(name: "item.pickup", handler: (event: Internal.ItemPickupEventJS) => void): void;
/**
 * @cancellable No
 * @at startup
 */
declare function onEvent(name: "item.registry", handler: (event: Internal.ItemRegistryEventJS) => void): void;
/**
 * @cancellable No
 * @at startup
 */
declare function onEvent(name: "item.registry.armor_tiers", handler: (event: Internal.ItemArmorTierEventJS) => void): void;
/**
 * @cancellable No
 * @at startup
 */
declare function onEvent(name: "item.registry.tool_tiers", handler: (event: Internal.ItemToolTierEventJS) => void): void;
/**
 * @cancellable Yes
 * @at startup, server, client
 */
declare function onEvent(name: "item.right_click", handler: (event: Internal.ItemRightClickEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, client
 */
declare function onEvent(name: "item.right_click_empty", handler: (event: Internal.ItemRightClickEmptyEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "item.smelted", handler: (event: Internal.ItemSmeltedEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "item.tags", handler: (event: Internal.TagEventJS<Unresolved>) => void): void;
/**
 * @cancellable No
 * @at startup, client
 */
declare function onEvent(name: "item.tooltip", handler: (event: Internal.ItemTooltipEventJS) => void): void;
/**
 * @cancellable Yes
 * @at startup, server
 */
declare function onEvent(name: "item.toss", handler: (event: Internal.ItemTossEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, client
 */
declare function onEvent(name: "jei.add.fluids", handler: (event: Internal.AddJEIEventJS<Unresolved>) => void): void;
/**
 * @cancellable No
 * @at startup, client
 */
declare function onEvent(name: "jei.add.items", handler: (event: Internal.AddJEIEventJS<Unresolved>) => void): void;
/**
 * @cancellable No
 * @at startup, client
 */
declare function onEvent(name: "jei.hide.custom", handler: (event: Internal.HideCustomJEIEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, client
 */
declare function onEvent(name: "jei.hide.fluids", handler: (event: Internal.HideJEIEventJS<Unresolved>) => void): void;
/**
 * @cancellable No
 * @at startup, client
 */
declare function onEvent(name: "jei.hide.items", handler: (event: Internal.HideJEIEventJS<Unresolved>) => void): void;
/**
 * @cancellable No
 * @at startup, client
 */
declare function onEvent(name: "jei.information", handler: (event: Internal.InformationJEIEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, client
 */
declare function onEvent(name: "jei.remove.categories", handler: (event: Internal.RemoveJEICategoriesEvent) => void): void;
/**
 * @cancellable No
 * @at startup, client
 */
declare function onEvent(name: "jei.remove.recipes", handler: (event: Internal.RemoveJEIRecipesEvent) => void): void;
/**
 * @cancellable No
 * @at startup, client
 */
declare function onEvent(name: "jei.subtypes", handler: (event: Internal.JEISubtypesEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "pigment.tags", handler: (event: Internal.TagEventJS<Unresolved>) => void): void;
/**
 * @cancellable Yes
 * @at startup, server
 */
declare function onEvent(name: "player.advancement", handler: (event: Internal.PlayerAdvancementEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "player.chest.closed", handler: (event: Internal.ChestEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "player.chest.opened", handler: (event: Internal.ChestEventJS) => void): void;
/**
 * @cancellable Yes
 * @at client
 */
declare function onEvent(name: "player.data_from_server.reload", handler: (event: Internal.NetworkEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "player.inventory.changed", handler: (event: Internal.InventoryChangedEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "player.inventory.closed", handler: (event: Internal.InventoryEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "player.inventory.opened", handler: (event: Internal.InventoryEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "player.logged_in", handler: (event: Internal.SimplePlayerEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "player.tick", handler: (event: Internal.SimplePlayerEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, client
 */
declare function onEvent(name: "ponder.registry", handler: (event: Internal.PonderRegistryEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, client
 */
declare function onEvent(name: "ponder.tag", handler: (event: Internal.PonderItemTagEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, client
 */
declare function onEvent(name: "ponder.tag.registry", handler: (event: Internal.PonderTagRegistryEventJS) => void): void;
/**
 * @cancellable No
 * @at startup
 */
declare function onEvent(name: "postinit", handler: (event: Internal.StartupEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "potion.tags", handler: (event: Internal.TagEventJS<Unresolved>) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "recipes", handler: (event: Internal.RecipeEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "recipes.after_load", handler: (event: Internal.RecipesAfterLoadEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "recipes.compostables", handler: (event: Internal.CompostablesRecipeEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "recipes.serializer.special.flag", handler: (event: Internal.SpecialRecipeSerializerManager) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "recipes.type_registry", handler: (event: Internal.RecipeTypeRegistryEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "server.datapack.first", handler: (event: Internal.DataPackEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "server.datapack.high_priority", handler: (event: Internal.DataPackEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "server.datapack.last", handler: (event: Internal.DataPackEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "server.datapack.low_priority", handler: (event: Internal.DataPackEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "server.load", handler: (event: Internal.ServerEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "server.tick", handler: (event: Internal.ServerEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "slurry.tags", handler: (event: Internal.TagEventJS<Unresolved>) => void): void;
/**
 * @cancellable No
 * @at startup
 */
declare function onEvent(name: "sound.registry", handler: (event: Internal.SoundRegistryEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "tags.blocks", handler: (event: Internal.TagEventJS<Unresolved>) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "tags.enchantments", handler: (event: Internal.TagEventJS<Unresolved>) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "tags.entity_types", handler: (event: Internal.TagEventJS<Unresolved>) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "tags.fluids", handler: (event: Internal.TagEventJS<Unresolved>) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "tags.functions", handler: (event: Internal.TagEventJS<Unresolved>) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "tags.gases", handler: (event: Internal.TagEventJS<Unresolved>) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "tags.infuse_types", handler: (event: Internal.TagEventJS<Unresolved>) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "tags.items", handler: (event: Internal.TagEventJS<Unresolved>) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "tags.pigments", handler: (event: Internal.TagEventJS<Unresolved>) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "tags.potions", handler: (event: Internal.TagEventJS<Unresolved>) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "tags.slurries", handler: (event: Internal.TagEventJS<Unresolved>) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "tags.tile_entity_types", handler: (event: Internal.TagEventJS<Unresolved>) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "tags.tunnel_types", handler: (event: Internal.TagEventJS<Unresolved>) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "tunnel_types.tags", handler: (event: Internal.TagEventJS<Unresolved>) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "world.load", handler: (event: Internal.SimpleWorldEventJS) => void): void;
/**
 * @cancellable No
 * @at startup, server
 */
declare function onEvent(name: "world.tick", handler: (event: Internal.SimpleWorldEventJS) => void): void;
/**
 * @cancellable No
 * @at startup
 */
declare function onEvent(name: "worldgen.add", handler: (event: Internal.WorldgenAddEventJSForge) => void): void;
/**
 * @cancellable No
 * @at startup
 */
declare function onEvent(name: "worldgen.remove", handler: (event: Internal.WorldgenRemoveEventJSForge) => void): void;
/**
 * this is the general representation of `onEvent()`, seeing this comment usually indicates that such event does not exist,
 * or is unknown to ProbeJS yet
 */
declare function onEvent(name: string, handler: (event: Internal.EventJS) => void): void;

/**
 * @cancellable Yes
 * @at client
 */
declare function onEvent(name: `player.data_from_server.${string}`, handler: (event: Internal.NetworkEventJS) => void): void;
/*
 * This is the general representation of wildcarded event, you should replace `${string}` with actual id.
 * 
 * E.g. `player.data_from_server.reload`, `ftbquests.completed.123456`
 */
declare function onEvent(name: `${string}.${string}`, handler: (event: Internal.EventJS) => void): void;

declare function onForgeEvent(name: "appeng.api.events.LocatableEventAnnounce", handler: (event: Internal.LocatableEventAnnounce) => void): void;
declare function onForgeEvent(name: "be.florens.expandability.api.forge.LivingFluidCollisionEvent", handler: (event: Internal.LivingFluidCollisionEvent) => void): void;
declare function onForgeEvent(name: "be.florens.expandability.api.forge.PlayerSwimEvent", handler: (event: Internal.PlayerSwimEvent) => void): void;
declare function onForgeEvent(name: "com.daderpduck.seamless_loading_screen.events.PreLoadWorldEvent", handler: (event: Internal.PreLoadWorldEvent) => void): void;
declare function onForgeEvent(name: "com.daderpduck.seamless_loading_screen.events.PreUnloadWorldEvent", handler: (event: Internal.PreUnloadWorldEvent) => void): void;
declare function onForgeEvent(name: "com.daderpduck.seamless_loading_screen.events.UpdatePlayerLookEvent", handler: (event: Internal.UpdatePlayerLookEvent) => void): void;
declare function onForgeEvent(name: "com.hollingsworth.arsnouveau.api.event.MaxManaCalcEvent", handler: (event: Internal.MaxManaCalcEvent) => void): void;
declare function onForgeEvent(name: "com.jozufozu.flywheel.event.BeginFrameEvent", handler: (event: Internal.BeginFrameEvent) => void): void;
declare function onForgeEvent(name: "com.jozufozu.flywheel.event.ReloadRenderersEvent", handler: (event: Internal.ReloadRenderersEvent) => void): void;
declare function onForgeEvent(name: "com.jozufozu.flywheel.event.RenderLayerEvent", handler: (event: Internal.RenderLayerEvent) => void): void;
declare function onForgeEvent(name: "com.legacy.structure_gel.events.RegisterDimensionEvent", handler: (event: Internal.RegisterDimensionEvent) => void): void;
declare function onForgeEvent(name: "com.legacy.structure_gel.events.RenderCloudsEvent", handler: (event: Internal.RenderCloudsEvent) => void): void;
declare function onForgeEvent(name: "com.legacy.structure_gel.events.RenderRainEvent", handler: (event: Internal.RenderRainEvent) => void): void;
declare function onForgeEvent(name: "com.legacy.structure_gel.events.RenderRainParticlesEvent", handler: (event: Internal.RenderRainParticlesEvent) => void): void;
declare function onForgeEvent(name: "com.legacy.structure_gel.events.RenderSkyEvent", handler: (event: Internal.RenderSkyEvent) => void): void;
declare function onForgeEvent(name: "com.minecraftabnormals.abnormals_core.core.events.AdvancementBuildingEvent", handler: (event: Internal.AdvancementBuildingEvent) => void): void;
declare function onForgeEvent(name: "com.minecraftabnormals.abnormals_core.core.events.AnimateFluidTickEvent", handler: (event: Internal.AnimateFluidTickEvent) => void): void;
declare function onForgeEvent(name: "com.minecraftabnormals.abnormals_core.core.events.AnimateTickEvent", handler: (event: Internal.AnimateTickEvent) => void): void;
declare function onForgeEvent(name: "com.minecraftabnormals.abnormals_core.core.events.EntityTrackingEvent", handler: (event: Internal.EntityTrackingEvent) => void): void;
declare function onForgeEvent(name: "com.minecraftabnormals.abnormals_core.core.events.EntityWalkEvent", handler: (event: Internal.EntityWalkEvent) => void): void;
declare function onForgeEvent(name: "com.simibubi.create.api.event.TileEntityBehaviourEvent", handler: (event: Internal.TileEntityBehaviourEvent<Unresolved>) => void): void;
declare function onForgeEvent(name: "com.supermartijn642.core.render.RenderWorldEvent", handler: (event: Internal.RenderWorldEvent) => void): void;
declare function onForgeEvent(name: "dev.ftb.mods.ftbquests.events.ClearFileCacheEvent", handler: (event: Internal.ClearFileCacheEvent) => void): void;
declare function onForgeEvent(name: "dev.latvian.kubejs.player.AttachPlayerDataEvent", handler: (event: Internal.AttachPlayerDataEvent) => void): void;
declare function onForgeEvent(name: "dev.latvian.kubejs.recipe.RegisterRecipeHandlersEvent", handler: (event: Internal.RegisterRecipeHandlersEvent) => void): void;
declare function onForgeEvent(name: "dev.latvian.kubejs.script.BindingsEvent", handler: (event: Internal.BindingsEvent) => void): void;
declare function onForgeEvent(name: "dev.latvian.kubejs.server.AttachServerDataEvent", handler: (event: Internal.AttachServerDataEvent) => void): void;
declare function onForgeEvent(name: "dev.latvian.kubejs.world.AttachWorldDataEvent", handler: (event: Internal.AttachWorldDataEvent) => void): void;
declare function onForgeEvent(name: "hellfirepvp.astralsorcery.common.event.AttributeEvent$PostProcessVanilla", handler: (event: Internal.AttributeEvent$PostProcessVanilla) => void): void;
declare function onForgeEvent(name: "hellfirepvp.astralsorcery.common.event.DynamicEnchantmentEvent$Add", handler: (event: Internal.DynamicEnchantmentEvent$Add) => void): void;
declare function onForgeEvent(name: "hellfirepvp.astralsorcery.common.event.DynamicEnchantmentEvent$Modify", handler: (event: Internal.DynamicEnchantmentEvent$Modify) => void): void;
declare function onForgeEvent(name: "io.github.noeppi_noeppi.libx.event.ConfigLoadedEvent", handler: (event: Internal.ConfigLoadedEvent) => void): void;
declare function onForgeEvent(name: "io.github.noeppi_noeppi.libx.event.RandomTickEvent$Block", handler: (event: Internal.RandomTickEvent$Block) => void): void;
declare function onForgeEvent(name: "io.github.noeppi_noeppi.libx.event.RandomTickEvent$Fluid", handler: (event: Internal.RandomTickEvent$Fluid) => void): void;
declare function onForgeEvent(name: "me.desht.pneumaticcraft.api.drone.DroneConstructingEvent", handler: (event: Internal.DroneConstructingEvent) => void): void;
declare function onForgeEvent(name: "me.desht.pneumaticcraft.api.heat.HeatRegistrationEvent", handler: (event: Internal.HeatRegistrationEvent) => void): void;
declare function onForgeEvent(name: "mezz.jei.events.EditModeToggleEvent", handler: (event: Internal.EditModeToggleEvent) => void): void;
declare function onForgeEvent(name: "mezz.jei.events.PlayerJoinedWorldEvent", handler: (event: Internal.PlayerJoinedWorldEvent) => void): void;
declare function onForgeEvent(name: "net.blay09.mods.cookingforblockheads.api.event.FoodRegistryInitEvent", handler: (event: Internal.FoodRegistryInitEvent) => void): void;
declare function onForgeEvent(name: "net.blay09.mods.farmingforblockheads.api.MarketRegistryReloadEvent$Post", handler: (event: Internal.MarketRegistryReloadEvent$Post) => void): void;
declare function onForgeEvent(name: "net.blay09.mods.farmingforblockheads.api.MarketRegistryReloadEvent$Pre", handler: (event: Internal.MarketRegistryReloadEvent$Pre) => void): void;
declare function onForgeEvent(name: "net.blay09.mods.waystones.api.KnownWaystonesEvent", handler: (event: Internal.KnownWaystonesEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.ClientChatEvent", handler: (event: Internal.ClientChatEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.ClientChatReceivedEvent", handler: (event: Internal.ClientChatReceivedEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.ClientPlayerNetworkEvent$LoggedInEvent", handler: (event: Internal.ClientPlayerNetworkEvent$LoggedInEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.ClientPlayerNetworkEvent$LoggedOutEvent", handler: (event: Internal.ClientPlayerNetworkEvent$LoggedOutEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.DrawHighlightEvent$HighlightBlock", handler: (event: Internal.DrawHighlightEvent$HighlightBlock) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.EntityViewRenderEvent$CameraSetup", handler: (event: Internal.EntityViewRenderEvent$CameraSetup) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.EntityViewRenderEvent$FOVModifier", handler: (event: Internal.EntityViewRenderEvent$FOVModifier) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.EntityViewRenderEvent$FogColors", handler: (event: Internal.EntityViewRenderEvent$FogColors) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.EntityViewRenderEvent$FogDensity", handler: (event: Internal.EntityViewRenderEvent$FogDensity) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.EntityViewRenderEvent$RenderFogEvent", handler: (event: Internal.EntityViewRenderEvent$RenderFogEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.FOVUpdateEvent", handler: (event: Internal.FOVUpdateEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.GuiContainerEvent$DrawBackground", handler: (event: Internal.GuiContainerEvent$DrawBackground) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.GuiContainerEvent$DrawForeground", handler: (event: Internal.GuiContainerEvent$DrawForeground) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.GuiOpenEvent", handler: (event: Internal.GuiOpenEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.GuiScreenEvent$BackgroundDrawnEvent", handler: (event: Internal.GuiScreenEvent$BackgroundDrawnEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.GuiScreenEvent$DrawScreenEvent$Post", handler: (event: Internal.GuiScreenEvent$DrawScreenEvent$Post) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.GuiScreenEvent$DrawScreenEvent$Pre", handler: (event: Internal.GuiScreenEvent$DrawScreenEvent$Pre) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.GuiScreenEvent$InitGuiEvent$Post", handler: (event: Internal.GuiScreenEvent$InitGuiEvent$Post) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.GuiScreenEvent$InitGuiEvent$Pre", handler: (event: Internal.GuiScreenEvent$InitGuiEvent$Pre) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.GuiScreenEvent$KeyboardCharTypedEvent$Pre", handler: (event: Internal.GuiScreenEvent$KeyboardCharTypedEvent$Pre) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.GuiScreenEvent$KeyboardKeyPressedEvent$Post", handler: (event: Internal.GuiScreenEvent$KeyboardKeyPressedEvent$Post) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.GuiScreenEvent$KeyboardKeyPressedEvent$Pre", handler: (event: Internal.GuiScreenEvent$KeyboardKeyPressedEvent$Pre) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.GuiScreenEvent$KeyboardKeyReleasedEvent$Post", handler: (event: Internal.GuiScreenEvent$KeyboardKeyReleasedEvent$Post) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.GuiScreenEvent$KeyboardKeyReleasedEvent$Pre", handler: (event: Internal.GuiScreenEvent$KeyboardKeyReleasedEvent$Pre) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.GuiScreenEvent$MouseClickedEvent$Post", handler: (event: Internal.GuiScreenEvent$MouseClickedEvent$Post) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.GuiScreenEvent$MouseClickedEvent$Pre", handler: (event: Internal.GuiScreenEvent$MouseClickedEvent$Pre) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.GuiScreenEvent$MouseDragEvent$Post", handler: (event: Internal.GuiScreenEvent$MouseDragEvent$Post) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.GuiScreenEvent$MouseDragEvent$Pre", handler: (event: Internal.GuiScreenEvent$MouseDragEvent$Pre) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.GuiScreenEvent$MouseReleasedEvent$Post", handler: (event: Internal.GuiScreenEvent$MouseReleasedEvent$Post) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.GuiScreenEvent$MouseReleasedEvent$Pre", handler: (event: Internal.GuiScreenEvent$MouseReleasedEvent$Pre) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.InputEvent$KeyInputEvent", handler: (event: Internal.InputEvent$KeyInputEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.InputEvent$MouseInputEvent", handler: (event: Internal.InputEvent$MouseInputEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.InputEvent$MouseScrollEvent", handler: (event: Internal.InputEvent$MouseScrollEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.InputEvent$RawMouseEvent", handler: (event: Internal.InputEvent$RawMouseEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.InputUpdateEvent", handler: (event: Internal.InputUpdateEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.RecipesUpdatedEvent", handler: (event: Internal.RecipesUpdatedEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderArmEvent", handler: (event: Internal.RenderArmEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderGameOverlayEvent$Chat", handler: (event: Internal.RenderGameOverlayEvent$Chat) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderGameOverlayEvent$Post", handler: (event: Internal.RenderGameOverlayEvent$Post) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderGameOverlayEvent$Pre", handler: (event: Internal.RenderGameOverlayEvent$Pre) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderGameOverlayEvent$Text", handler: (event: Internal.RenderGameOverlayEvent$Text) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderHandEvent", handler: (event: Internal.RenderHandEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderLivingEvent$Post", handler: (event: Internal.RenderLivingEvent$Post<Unresolved,Unresolved>) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderLivingEvent$Pre", handler: (event: Internal.RenderLivingEvent$Pre<Unresolved,Unresolved>) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderNameplateEvent", handler: (event: Internal.RenderNameplateEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderPlayerEvent$Post", handler: (event: Internal.RenderPlayerEvent$Post) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderPlayerEvent$Pre", handler: (event: Internal.RenderPlayerEvent$Pre) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderTooltipEvent$Color", handler: (event: Internal.RenderTooltipEvent$Color) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderTooltipEvent$PostBackground", handler: (event: Internal.RenderTooltipEvent$PostBackground) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderTooltipEvent$PostText", handler: (event: Internal.RenderTooltipEvent$PostText) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderTooltipEvent$Pre", handler: (event: Internal.RenderTooltipEvent$Pre) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderWorldLastEvent", handler: (event: Internal.RenderWorldLastEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.sound.PlaySoundEvent", handler: (event: Internal.PlaySoundEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.sound.PlaySoundSourceEvent", handler: (event: Internal.PlaySoundSourceEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.client.event.sound.PlayStreamingSourceEvent", handler: (event: Internal.PlayStreamingSourceEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.AddReloadListenerEvent", handler: (event: Internal.AddReloadListenerEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.AttachCapabilitiesEvent", handler: (event: Internal.AttachCapabilitiesEvent<Unresolved>) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.CommandEvent", handler: (event: Internal.CommandEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.DifficultyChangeEvent", handler: (event: Internal.DifficultyChangeEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.ItemAttributeModifierEvent", handler: (event: Internal.ItemAttributeModifierEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.LootTableLoadEvent", handler: (event: Internal.LootTableLoadEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.OnDatapackSyncEvent", handler: (event: Internal.OnDatapackSyncEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.RegisterCommandsEvent", handler: (event: Internal.RegisterCommandsEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.TagsUpdatedEvent$CustomTagTypes", handler: (event: Internal.TagsUpdatedEvent$CustomTagTypes) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.TagsUpdatedEvent$VanillaTagTypes", handler: (event: Internal.TagsUpdatedEvent$VanillaTagTypes) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.TickEvent$ClientTickEvent", handler: (event: Internal.TickEvent$ClientTickEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.TickEvent$PlayerTickEvent", handler: (event: Internal.TickEvent$PlayerTickEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.TickEvent$RenderTickEvent", handler: (event: Internal.TickEvent$RenderTickEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.TickEvent$ServerTickEvent", handler: (event: Internal.TickEvent$ServerTickEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.TickEvent$WorldTickEvent", handler: (event: Internal.TickEvent$WorldTickEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityEvent$EnteringChunk", handler: (event: Internal.EntityEvent$EnteringChunk) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityEvent$EntityConstructing", handler: (event: Internal.EntityEvent$EntityConstructing) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityEvent$Size", handler: (event: Internal.EntityEvent$Size) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityJoinWorldEvent", handler: (event: Internal.EntityJoinWorldEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityLeaveWorldEvent", handler: (event: Internal.EntityLeaveWorldEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityMobGriefingEvent", handler: (event: Internal.EntityMobGriefingEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityMountEvent", handler: (event: Internal.EntityMountEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.PlaySoundAtEntityEvent", handler: (event: Internal.PlaySoundAtEntityEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.ProjectileImpactEvent$Throwable", handler: (event: Internal.ProjectileImpactEvent$Throwable) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.item.ItemExpireEvent", handler: (event: Internal.ItemExpireEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingAttackEvent", handler: (event: Internal.LivingAttackEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingDamageEvent", handler: (event: Internal.LivingDamageEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingDeathEvent", handler: (event: Internal.LivingDeathEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingDestroyBlockEvent", handler: (event: Internal.LivingDestroyBlockEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingDropsEvent", handler: (event: Internal.LivingDropsEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingEquipmentChangeEvent", handler: (event: Internal.LivingEquipmentChangeEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingEvent$LivingJumpEvent", handler: (event: Internal.LivingEvent$LivingJumpEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingEvent$LivingUpdateEvent", handler: (event: Internal.LivingEvent$LivingUpdateEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingEvent$LivingVisibilityEvent", handler: (event: Internal.LivingEvent$LivingVisibilityEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingFallEvent", handler: (event: Internal.LivingFallEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingHealEvent", handler: (event: Internal.LivingHealEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingHurtEvent", handler: (event: Internal.LivingHurtEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingPackSizeEvent", handler: (event: Internal.LivingPackSizeEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingSpawnEvent$AllowDespawn", handler: (event: Internal.LivingSpawnEvent$AllowDespawn) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingSpawnEvent$CheckSpawn", handler: (event: Internal.LivingSpawnEvent$CheckSpawn) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingSpawnEvent$SpecialSpawn", handler: (event: Internal.LivingSpawnEvent$SpecialSpawn) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LootingLevelEvent", handler: (event: Internal.LootingLevelEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.PotionColorCalculationEvent", handler: (event: Internal.PotionColorCalculationEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.PotionEvent$PotionAddedEvent", handler: (event: Internal.PotionEvent$PotionAddedEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.PotionEvent$PotionApplicableEvent", handler: (event: Internal.PotionEvent$PotionApplicableEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.ItemTooltipEvent", handler: (event: Internal.ItemTooltipEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerContainerEvent$Close", handler: (event: Internal.PlayerContainerEvent$Close) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$HarvestCheck", handler: (event: Internal.PlayerEvent$HarvestCheck) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$LoadFromFile", handler: (event: Internal.PlayerEvent$LoadFromFile) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$NameFormat", handler: (event: Internal.PlayerEvent$NameFormat) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$PlayerLoggedInEvent", handler: (event: Internal.PlayerEvent$PlayerLoggedInEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$SaveToFile", handler: (event: Internal.PlayerEvent$SaveToFile) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$StartTracking", handler: (event: Internal.PlayerEvent$StartTracking) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$StopTracking", handler: (event: Internal.PlayerEvent$StopTracking) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$TabListNameFormat", handler: (event: Internal.PlayerEvent$TabListNameFormat) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.furnace.FurnaceFuelBurnTimeEvent", handler: (event: Internal.FurnaceFuelBurnTimeEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.village.VillagerTradesEvent", handler: (event: Internal.VillagerTradesEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.village.WandererTradesEvent", handler: (event: Internal.WandererTradesEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.world.BiomeLoadingEvent", handler: (event: Internal.BiomeLoadingEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.world.BlockEvent$CropGrowEvent$Post", handler: (event: Internal.BlockEvent$CropGrowEvent$Post) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.world.BlockEvent$CropGrowEvent$Pre", handler: (event: Internal.BlockEvent$CropGrowEvent$Pre) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.world.BlockEvent$NeighborNotifyEvent", handler: (event: Internal.BlockEvent$NeighborNotifyEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.world.ChunkDataEvent$Load", handler: (event: Internal.ChunkDataEvent$Load) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.world.ChunkDataEvent$Save", handler: (event: Internal.ChunkDataEvent$Save) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.world.ChunkEvent$Load", handler: (event: Internal.ChunkEvent$Load) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.world.ChunkEvent$Unload", handler: (event: Internal.ChunkEvent$Unload) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.world.ChunkWatchEvent$Watch", handler: (event: Internal.ChunkWatchEvent$Watch) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.world.StructureSpawnListGatherEvent", handler: (event: Internal.StructureSpawnListGatherEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.world.WorldEvent$Load", handler: (event: Internal.WorldEvent$Load) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.world.WorldEvent$PotentialSpawns", handler: (event: Internal.WorldEvent$PotentialSpawns) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.event.world.WorldEvent$Save", handler: (event: Internal.WorldEvent$Save) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.fml.event.lifecycle.FMLModIdMappingEvent", handler: (event: Internal.FMLModIdMappingEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.fml.event.server.FMLServerAboutToStartEvent", handler: (event: Internal.FMLServerAboutToStartEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.fml.event.server.FMLServerStartedEvent", handler: (event: Internal.FMLServerStartedEvent) => void): void;
declare function onForgeEvent(name: "net.minecraftforge.fml.event.server.FMLServerStartingEvent", handler: (event: Internal.FMLServerStartingEvent) => void): void;
declare function onForgeEvent(name: "org.embeddedt.embeddium.api.ChunkDataBuiltEvent", handler: (event: Internal.ChunkDataBuiltEvent) => void): void;
declare function onForgeEvent(name: "shadows.apotheosis.Apotheosis$ApotheosisReloadEvent", handler: (event: Internal.Apotheosis$ApotheosisReloadEvent) => void): void;
declare function onForgeEvent(name: "slimeknights.tconstruct.library.events.MaterialsLoadedEvent", handler: (event: Internal.MaterialsLoadedEvent) => void): void;
declare function onForgeEvent(name: "slimeknights.tconstruct.library.events.ToolEquipmentChangeEvent", handler: (event: Internal.ToolEquipmentChangeEvent) => void): void;
declare function onForgeEvent(name: "squeek.appleskin.api.event.FoodValuesEvent", handler: (event: Internal.FoodValuesEvent) => void): void;
declare function onForgeEvent(name: "squeek.appleskin.api.event.TooltipOverlayEvent$Pre", handler: (event: Internal.TooltipOverlayEvent$Pre) => void): void;
declare function onForgeEvent(name: "top.theillusivec4.caelus.api.RenderElytraEvent", handler: (event: Internal.RenderElytraEvent) => void): void;
declare function onForgeEvent(name: "top.theillusivec4.curios.api.event.SlotModifiersUpdatedEvent", handler: (event: Internal.SlotModifiersUpdatedEvent) => void): void;
declare function onForgeEvent(name: "top.theillusivec4.diet.api.DietEvent$ApplyEffect", handler: (event: Internal.DietEvent$ApplyEffect) => void): void;
declare function onForgeEvent(name: "vazkii.botania.api.mana.ManaItemsEvent", handler: (event: Internal.ManaItemsEvent) => void): void;
declare function onForgeEvent(name: "vazkii.botania.api.mana.ManaNetworkEvent", handler: (event: Internal.ManaNetworkEvent) => void): void;
declare function onForgeEvent(name: "vazkii.patchouli.api.BookContentsReloadEvent", handler: (event: Internal.BookContentsReloadEvent) => void): void;

