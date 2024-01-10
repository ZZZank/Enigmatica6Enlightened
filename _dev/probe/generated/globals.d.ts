/// <reference path="./internal.d.ts" />

class Text extends text {}
class Ingredient extends ingredient {}

declare interface AABB {
    static ofBlock(pos: BlockPos): Internal.AxisAlignedBB;
    static ofSize(x: number, y: number, z: number): Internal.AxisAlignedBB;
    static of(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number): Internal.AxisAlignedBB;
    static wrap(o: any): Internal.AxisAlignedBB;
    static ofBlocks(pos1: BlockPos, pos2: BlockPos): Internal.AxisAlignedBB;
    readonly CUBE : Internal.AxisAlignedBB;
    readonly EMPTY : Internal.AxisAlignedBB;
}
type AABB_ = AABB;
declare const AABB: AABB;
declare class DecorationGenerationStep extends Internal.Enum<DecorationGenerationStep> {
    getClass(): Internal.Class<any>;
    wait(arg0: number): void;
    wait(arg0: number, arg1: number): void;
    wait(): void;
    static valueOf(arg0: string): DecorationGenerationStep;
    static valueOf<T_>(arg0: Internal.Class<T_>, arg1: string): T_;
    notifyAll(): void;
    static values(): DecorationGenerationStep[];
    compareTo(arg0: any): number;
    compareTo(arg0: DecorationGenerationStep_): number;
    describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<DecorationGenerationStep>>;
    notify(): void;
    getDeclaringClass(): Internal.Class<DecorationGenerationStep>;
    hashCode(): number;
    equals(arg0: any): boolean;
    name(): string;
    toString(): string;
    ordinal(): number;
    static readonly RAW_GENERATION : DecorationGenerationStep;
    static readonly UNDERGROUND_STRUCTURES : DecorationGenerationStep;
    static readonly LOCAL_MODIFICATIONS : DecorationGenerationStep;
    static readonly TOP_LAYER_MODIFICATION : DecorationGenerationStep;
    static readonly UNDERGROUND_DECORATION : DecorationGenerationStep;
    static readonly LAKES : DecorationGenerationStep;
    static readonly SURFACE_STRUCTURES : DecorationGenerationStep;
    static readonly STRONGHOLDS : DecorationGenerationStep;
    static readonly VEGETAL_DECORATION : DecorationGenerationStep;
    static readonly UNDERGROUND_ORES : DecorationGenerationStep;
    get class(): Internal.Class<any>;
    get declaringClass(): Internal.Class<DecorationGenerationStep>;
}
type DecorationGenerationStep_ = "raw_generation" | "lakes" | "local_modifications" | "underground_structures" | "surface_structures" | "strongholds" | "underground_ores" | "underground_decoration" | "vegetal_decoration" | "top_layer_modification" | DecorationGenerationStep;
declare interface uuid {
    static digits(sb: Internal.StringBuilder, val: number, digits: number): void;
    static toString(id: Internal.UUID): string;
    static fromString(o: any): Internal.UUID;
}
type uuid_ = uuid;
declare const uuid: uuid;
declare class JsonIO {
    getClass(): Internal.Class<any>;
    wait(arg0: number): void;
    wait(arg0: number, arg1: number): void;
    wait(): void;
    static read(file: string): Internal.MapJS;
    static read(file: Internal.File): Internal.MapJS;
    hashCode(): number;
    notifyAll(): void;
    equals(arg0: any): boolean;
    toString(): string;
    static write(file: string, json: any): void;
    static write(file: Internal.File, json: any): void;
    notify(): void;
    get class(): Internal.Class<any>;
    constructor();
}
type JsonIO_ = JsonIO;
declare interface Color {
    static rgba(r: number, g: number, b: number, a: number): dev.latvian.mods.rhino.mod.util.color.Color;
    static of(o: any): dev.latvian.mods.rhino.mod.util.color.Color;
    static createMapped(o: any, names: string[]): dev.latvian.mods.rhino.mod.util.color.Color;
    readonly BLUE_DYE : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly GOLD : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly GRAY : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly MAGENTA_DYE : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly BLUE : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly DARK_AQUA : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly TEXT : {"dark_red":Internal.TextFormatting,"green":Internal.TextFormatting,"underline":Internal.TextFormatting,"dark_green":Internal.TextFormatting,"black":Internal.TextFormatting,"yellow":Internal.TextFormatting,"bold":Internal.TextFormatting,"italic":Internal.TextFormatting,"dark_blue":Internal.TextFormatting,"dark_purple":Internal.TextFormatting,"gold":Internal.TextFormatting,"red":Internal.TextFormatting,"aqua":Internal.TextFormatting,"gray":Internal.TextFormatting,"light_purple":Internal.TextFormatting,"blue":Internal.TextFormatting,"white":Internal.TextFormatting,"dark_aqua":Internal.TextFormatting,"dark_gray":Internal.TextFormatting,"reset":Internal.TextFormatting,"strikethrough":Internal.TextFormatting,"obfuscated":Internal.TextFormatting};
    readonly DYE : {"magenta":Internal.DyeColor,"pink":Internal.DyeColor,"green":Internal.DyeColor,"lime":Internal.DyeColor,"light_gray":Internal.DyeColor,"yellow":Internal.DyeColor,"black":Internal.DyeColor,"light_blue":Internal.DyeColor,"brown":Internal.DyeColor,"cyan":Internal.DyeColor,"orange":Internal.DyeColor,"red":Internal.DyeColor,"gray":Internal.DyeColor,"white":Internal.DyeColor,"blue":Internal.DyeColor,"purple":Internal.DyeColor};
    readonly WHITE_DYE : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly DARK_RED : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly LIGHT_PURPLE : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly BROWN_DYE : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly BLACK : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly GRAY_DYE : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly NONE : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly LIGHT_BLUE_DYE : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly AQUA : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly WHITE : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly LIGHT_GRAY_DYE : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly BLACK_DYE : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly RED_DYE : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly PURPLE_DYE : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly GREEN_DYE : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly PINK_DYE : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly DARK_BLUE : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly GREEN : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly CYAN_DYE : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly RED : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly DARK_PURPLE : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly ORANGE_DYE : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly YELLOW_DYE : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly DARK_GREEN : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly YELLOW : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly LIME_DYE : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly DARK_GRAY : dev.latvian.mods.rhino.mod.util.color.Color;
    readonly MAP : {"":Internal.NoColor,"light_blue_dye":Internal.DyeColor,"BLUE_DYE":Internal.DyeColor,"purple_dye":Internal.DyeColor,"dark_red":Internal.TextFormatting,"lightGrayDye":Internal.DyeColor,"DARK_AQUA":Internal.TextFormatting,"none":Internal.NoColor,"green_dye":Internal.DyeColor,"blackDye":Internal.DyeColor,"dark_blue":Internal.TextFormatting,"red":Internal.TextFormatting,"pink_dye":Internal.DyeColor,"aqua":Internal.TextFormatting,"white":Internal.TextFormatting,"WHITE_DYE":Internal.DyeColor,"dark_gray":Internal.TextFormatting,"LIGHT_PURPLE":Internal.TextFormatting,"BROWN_DYE":Internal.DyeColor,"BLACK":Internal.TextFormatting,"darkPurple":Internal.TextFormatting,"NONE":Internal.NoColor,"LIGHT_BLUE_DYE":Internal.DyeColor,"AQUA":Internal.TextFormatting,"lightBlueDye":Internal.DyeColor,"limeDye":Internal.DyeColor,"PURPLE_DYE":Internal.DyeColor,"GREEN_DYE":Internal.DyeColor,"magenta_dye":Internal.DyeColor,"-":Internal.NoColor,"lime_dye":Internal.DyeColor,"yellowDye":Internal.DyeColor,"grayDye":Internal.DyeColor,"purpleDye":Internal.DyeColor,"DARK_PURPLE":Internal.TextFormatting,"ORANGE_DYE":Internal.DyeColor,"darkGray":Internal.TextFormatting,"brownDye":Internal.DyeColor,"YELLOW":Internal.TextFormatting,"LIME_DYE":Internal.DyeColor,"blueDye":Internal.DyeColor,"white_dye":Internal.DyeColor,"pinkDye":Internal.DyeColor,"blue_dye":Internal.DyeColor,"cyanDye":Internal.DyeColor,"GOLD":Internal.TextFormatting,"GRAY":Internal.TextFormatting,"MAGENTA_DYE":Internal.DyeColor,"BLUE":Internal.TextFormatting,"yellow":Internal.TextFormatting,"darkBlue":Internal.TextFormatting,"transparent":Internal.NoColor,"orange_dye":Internal.DyeColor,"red_dye":Internal.DyeColor,"dark_purple":Internal.TextFormatting,"gold":Internal.TextFormatting,"gray":Internal.TextFormatting,"light_purple":Internal.TextFormatting,"darkRed":Internal.TextFormatting,"greenDye":Internal.DyeColor,"DARK_RED":Internal.TextFormatting,"redDye":Internal.DyeColor,"GRAY_DYE":Internal.DyeColor,"orangeDye":Internal.DyeColor,"yellow_dye":Internal.DyeColor,"black_dye":Internal.DyeColor,"magentaDye":Internal.DyeColor,"WHITE":Internal.TextFormatting,"green":Internal.TextFormatting,"LIGHT_GRAY_DYE":Internal.DyeColor,"BLACK_DYE":Internal.DyeColor,"darkGreen":Internal.TextFormatting,"RED_DYE":Internal.DyeColor,"dark_green":Internal.TextFormatting,"black":Internal.TextFormatting,"lightPurple":Internal.TextFormatting,"PINK_DYE":Internal.DyeColor,"DARK_BLUE":Internal.TextFormatting,"GREEN":Internal.TextFormatting,"darkAqua":Internal.TextFormatting,"gray_dye":Internal.DyeColor,"CYAN_DYE":Internal.DyeColor,"RED":Internal.TextFormatting,"brown_dye":Internal.DyeColor,"cyan_dye":Internal.DyeColor,"blue":Internal.TextFormatting,"whiteDye":Internal.DyeColor,"dark_aqua":Internal.TextFormatting,"YELLOW_DYE":Internal.DyeColor,"DARK_GREEN":Internal.TextFormatting,"DARK_GRAY":Internal.TextFormatting};
}
type Color_ = Color;
declare const Color: Color;
declare class BlockPos extends Vec3i {
    func_241872_a(arg0: Internal.Direction$Axis_, arg1: number): BlockPos;
    getClass(): Internal.Class<any>;
    func_218137_a(arg0: Internal.IPosition, arg1: number): boolean;
    compareTo(arg0: Vec3i): number;
    compareTo(arg0: any): number;
    static func_239585_a_(arg0: Internal.Random, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): Internal.Iterable<BlockPos>;
    static func_239581_a_(arg0: Internal.AxisAlignedBB): Internal.Stream<BlockPos>;
    static func_229383_a_(arg0: Internal.MutableBoundingBox): Internal.Stream<BlockPos>;
    func_177965_g(arg0: number): BlockPos;
    static func_218288_f(arg0: number): number;
    func_177967_a(arg0: Internal.Direction_, arg1: number): BlockPos;
    func_177967_a(arg0: Internal.Direction_, arg1: number): Vec3i;
    func_177984_a(): Vec3i;
    func_177984_a(): BlockPos;
    static func_218282_d(arg0: number): number;
    func_177963_a(arg0: number, arg1: number, arg2: number): BlockPos;
    func_177981_b(arg0: number): BlockPos;
    func_177981_b(arg0: number): Vec3i;
    static func_218290_b(arg0: number): number;
    func_218140_a(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
    func_218139_n(arg0: Vec3i): number;
    func_177955_d(arg0: Vec3i): Vec3i;
    func_177955_d(arg0: Vec3i): BlockPos;
    func_177951_i(arg0: Vec3i): number;
    func_177978_c(): BlockPos;
    func_177976_e(): BlockPos;
    static func_243514_a(arg0: BlockPos, arg1: number, arg2: Internal.Direction_, arg3: Internal.Direction_): Internal.Iterable<Internal.BlockPos$Mutable>;
    func_177974_f(): BlockPos;
    func_177972_a(arg0: Internal.Direction_): BlockPos;
    func_177970_e(arg0: number): BlockPos;
    func_218275_a(): number;
    func_218138_a(arg0: Internal.IPosition, arg1: boolean): number;
    static func_239588_b_(arg0: BlockPos, arg1: number, arg2: number, arg3: number): Internal.Stream<BlockPos>;
    wait(arg0: number): void;
    wait(arg0: number, arg1: number): void;
    wait(): void;
    func_177971_a(arg0: Vec3i): BlockPos;
    notifyAll(): void;
    static func_239583_a_(arg0: BlockPos, arg1: number, arg2: number, arg3: number): Internal.Iterable<BlockPos>;
    notify(): void;
    hashCode(): number;
    func_177968_d(): BlockPos;
    func_177985_f(arg0: number): BlockPos;
    static func_218283_e(arg0: number): BlockPos;
    static func_218287_a(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.Stream<BlockPos>;
    func_190942_a(arg0: Internal.Rotation_): BlockPos;
    static func_191531_b(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.Iterable<BlockPos>;
    func_177964_d(arg0: number): BlockPos;
    static func_218289_a(arg0: number, arg1: Internal.Direction_): number;
    static func_218281_b(arg0: BlockPos, arg1: BlockPos): Internal.Stream<BlockPos>;
    func_177982_a(arg0: number, arg1: number, arg2: number): BlockPos;
    static func_218291_a(arg0: number, arg1: number, arg2: number, arg3: number): number;
    func_229422_x_(): string;
    func_177956_o(): number;
    func_177958_n(): number;
    func_239590_i_(): Internal.BlockPos$Mutable;
    func_185334_h(): BlockPos;
    static func_239584_a_(arg0: BlockPos, arg1: number, arg2: number, arg3: ((arg0: BlockPos) => boolean)): Internal.Optional<BlockPos>;
    func_243648_a(arg0: Internal.Direction$Axis_): number;
    func_177952_p(): number;
    func_218141_a(arg0: Vec3i, arg1: number): boolean;
    func_177979_c(arg0: number): BlockPos;
    func_177979_c(arg0: number): Vec3i;
    equals(arg0: any): boolean;
    toString(): string;
    func_177977_b(): Vec3i;
    func_177977_b(): BlockPos;
    static func_218278_a(arg0: BlockPos, arg1: BlockPos): Internal.Iterable<BlockPos>;
    static func_218276_a(arg0: number, arg1: number, arg2: number): number;
    static func_218274_c(arg0: number): number;
    func_177973_b(arg0: Vec3i): BlockPos;
    static readonly field_177992_a : BlockPos;
    static readonly field_239578_a_ : Internal.Codec<BlockPos>;
    static readonly field_239781_c_ : Internal.Codec<Vec3i>;
    static readonly field_177959_e : Vec3i;
    get class(): Internal.Class<any>;
    constructor(arg0: Vec3i);
    constructor(arg0: Internal.IPosition);
    constructor(arg0: Vec3);
    constructor(arg0: number, arg1: number, arg2: number);
    constructor(arg0: number, arg1: number, arg2: number);
}
type BlockPos_ = BlockPos;
declare class JavaMath {
    getClass(): Internal.Class<any>;
    static multiplyFull(arg0: number, arg1: number): number;
    static copySign(arg0: number, arg1: number): number;
    static copySign(arg0: number, arg1: number): number;
    static log1p(arg0: number): number;
    static expm1(arg0: number): number;
    static cos(arg0: number): number;
    static rint(arg0: number): number;
    static atan(arg0: number): number;
    static ceilDiv(arg0: number, arg1: number): number;
    static ceilDiv(arg0: number, arg1: number): number;
    static ceilDiv(arg0: number, arg1: number): number;
    static nextUp(arg0: number): number;
    static nextUp(arg0: number): number;
    static sqrt(arg0: number): number;
    static ceilDivExact(arg0: number, arg1: number): number;
    static ceilDivExact(arg0: number, arg1: number): number;
    static decrementExact(arg0: number): number;
    static decrementExact(arg0: number): number;
    static absExact(arg0: number): number;
    static absExact(arg0: number): number;
    static exp(arg0: number): number;
    static clamp(arg0: number, arg1: number, arg2: number): number;
    static clamp(arg0: number, arg1: number, arg2: number): number;
    static clamp(arg0: number, arg1: number, arg2: number): number;
    static clamp(arg0: number, arg1: number, arg2: number): number;
    static atan2(arg0: number, arg1: number): number;
    static signum(arg0: number): number;
    static signum(arg0: number): number;
    static tan(arg0: number): number;
    static floorDivExact(arg0: number, arg1: number): number;
    static floorDivExact(arg0: number, arg1: number): number;
    static sinh(arg0: number): number;
    static toDegrees(arg0: number): number;
    static acos(arg0: number): number;
    static ceil(arg0: number): number;
    static divideExact(arg0: number, arg1: number): number;
    static divideExact(arg0: number, arg1: number): number;
    static getExponent(arg0: number): number;
    static getExponent(arg0: number): number;
    static addExact(arg0: number, arg1: number): number;
    static addExact(arg0: number, arg1: number): number;
    static multiplyHigh(arg0: number, arg1: number): number;
    static ulp(arg0: number): number;
    static ulp(arg0: number): number;
    wait(arg0: number): void;
    wait(arg0: number, arg1: number): void;
    wait(): void;
    static scalb(arg0: number, arg1: number): number;
    static scalb(arg0: number, arg1: number): number;
    static floorMod(arg0: number, arg1: number): number;
    static floorMod(arg0: number, arg1: number): number;
    static floorMod(arg0: number, arg1: number): number;
    static log(arg0: number): number;
    static log10(arg0: number): number;
    notifyAll(): void;
    static nextAfter(arg0: number, arg1: number): number;
    static nextAfter(arg0: number, arg1: number): number;
    static multiplyExact(arg0: number, arg1: number): number;
    static multiplyExact(arg0: number, arg1: number): number;
    static multiplyExact(arg0: number, arg1: number): number;
    notify(): void;
    static cbrt(arg0: number): number;
    static random(): number;
    static tanh(arg0: number): number;
    static min(arg0: number, arg1: number): number;
    static min(arg0: number, arg1: number): number;
    static min(arg0: number, arg1: number): number;
    static min(arg0: number, arg1: number): number;
    static negateExact(arg0: number): number;
    static negateExact(arg0: number): number;
    hashCode(): number;
    static hypot(arg0: number, arg1: number): number;
    static pow(arg0: number, arg1: number): number;
    static sin(arg0: number): number;
    static unsignedMultiplyHigh(arg0: number, arg1: number): number;
    static floor(arg0: number): number;
    static subtractExact(arg0: number, arg1: number): number;
    static subtractExact(arg0: number, arg1: number): number;
    static ceilMod(arg0: number, arg1: number): number;
    static ceilMod(arg0: number, arg1: number): number;
    static ceilMod(arg0: number, arg1: number): number;
    static max(arg0: number, arg1: number): number;
    static max(arg0: number, arg1: number): number;
    static max(arg0: number, arg1: number): number;
    static max(arg0: number, arg1: number): number;
    static toIntExact(arg0: number): number;
    static nextDown(arg0: number): number;
    static nextDown(arg0: number): number;
    static toRadians(arg0: number): number;
    static cosh(arg0: number): number;
    static IEEEremainder(arg0: number, arg1: number): number;
    static abs(arg0: number): number;
    static abs(arg0: number): number;
    static abs(arg0: number): number;
    static abs(arg0: number): number;
    static round(arg0: number): number;
    static round(arg0: number): number;
    static floorDiv(arg0: number, arg1: number): number;
    static floorDiv(arg0: number, arg1: number): number;
    static floorDiv(arg0: number, arg1: number): number;
    static incrementExact(arg0: number): number;
    static incrementExact(arg0: number): number;
    equals(arg0: any): boolean;
    toString(): string;
    static asin(arg0: number): number;
    static fma(arg0: number, arg1: number, arg2: number): number;
    static fma(arg0: number, arg1: number, arg2: number): number;
    static readonly E : 2.718281828459045;
    static readonly PI : 3.141592653589793;
    static readonly TAU : 6.283185307179586;
    get class(): Internal.Class<any>;
}
type JavaMath_ = JavaMath;
declare class utils {
    static getSystemTime(): number;
    getClass(): Internal.Class<any>;
    wait(arg0: number): void;
    wait(arg0: number, arg1: number): void;
    wait(): void;
    static getWorld(world: Internal.World): Internal.WorldJS;
    notifyAll(): void;
    notify(): void;
    static listOrSelf(o: any): Internal.ListJS;
    static getStat(id: ResourceLocation_): Internal.Stat<ResourceLocation>;
    static parseDouble(object: any, def: number): number;
    static getToolType(id: string): ToolType;
    static emptyList<T>(): Internal.List<T>;
    static getRandom(): Internal.Random;
    hashCode(): number;
    static randomOf(random: Internal.Random, objects: Internal.Collection<any>): any;
    static getClientWorld(): Internal.WorldJS;
    static emptyMap<K, V>(): Internal.Map<K, V>;
    static copy(o: any): any;
    static id(namespace: string, path: string): ResourceLocation;
    static id(id: ResourceLocation_): ResourceLocation;
    static listOf(o: any): Internal.ListJS;
    static rollChestLoot(id: ResourceLocation_, entity: Internal.EntityJS_): Internal.ListJS;
    static rollChestLoot(id: ResourceLocation_): Internal.ListJS;
    static getServer(): Internal.ServerJS;
    static newCountingMap(): Internal.CountingMap;
    static createConsole(name: string): Internal.ConsoleJS;
    static newMap(): Internal.MapJS;
    static newList(): Internal.ListJS;
    static parseInt(object: any, def: number): number;
    static isWrapped(o: any): boolean;
    static regex(s: any): Internal.Pattern;
    static regex(pattern: string, flags: number): Internal.Pattern;
    equals(arg0: any): boolean;
    static newRandom(seed: number): Internal.Random;
    toString(): string;
    static queueIO(runnable: (() => void)): void;
    static mapOf(o: any): Internal.MapJS;
    static getSound(id: ResourceLocation_): Internal.SoundEvent;
    get random(): Internal.Random;
    get server(): Internal.ServerJS;
    get clientWorld(): Internal.WorldJS;
    get systemTime(): number;
    get class(): Internal.Class<any>;
    constructor();
}
type utils_ = utils;
declare class Vec3 implements Internal.IPosition {
    getClass(): Internal.Class<any>;
    func_72444_a(arg0: Vec3): Vec3;
    wait(arg0: number): void;
    wait(arg0: number, arg1: number): void;
    wait(): void;
    func_216370_a(arg0: Internal.Direction$Axis_): number;
    static func_237490_a_(arg0: Vec3i, arg1: number): Vec3;
    static func_237491_b_(arg0: Vec3i): Vec3;
    static func_237492_c_(arg0: Vec3i): Vec3;
    notifyAll(): void;
    func_216371_e(): Vec3;
    func_216372_d(arg0: number, arg1: number, arg2: number): Vec3;
    func_237488_a_(arg0: Internal.IPosition, arg1: number): boolean;
    func_197746_a(arg0: Internal.EnumSet<Internal.Direction$Axis>): Vec3;
    func_242988_c(arg0: number): Vec3;
    func_216369_h(arg0: Vec3): Vec3;
    notify(): void;
    func_178788_d(arg0: Vec3): Vec3;
    func_178787_e(arg0: Vec3): Vec3;
    func_178789_a(arg0: number): Vec3;
    func_178785_b(arg0: number): Vec3;
    func_178786_a(arg0: number, arg1: number, arg2: number): Vec3;
    hashCode(): number;
    func_72430_b(arg0: Vec3): number;
    func_72432_b(): Vec3;
    func_72431_c(arg0: Vec3): Vec3;
    func_186678_a(arg0: number): Vec3;
    func_72433_c(): number;
    func_82615_a(): number;
    static func_237487_a_(arg0: number): Vec3;
    static func_237489_a_(arg0: Vec3i): Vec3;
    func_72436_e(arg0: Vec3): number;
    func_82616_c(): number;
    func_82617_b(): number;
    func_72438_d(arg0: Vec3): number;
    static func_189986_a(arg0: number, arg1: number): Vec3;
    func_189985_c(): number;
    func_186679_c(arg0: number, arg1: number, arg2: number): number;
    static func_189984_a(arg0: Internal.Vector2f): Vec3;
    equals(arg0: any): boolean;
    toString(): string;
    func_72441_c(arg0: number, arg1: number, arg2: number): Vec3;
    readonly field_72450_a : number;
    static readonly field_186680_a : Vec3;
    readonly field_72448_b : number;
    readonly field_72449_c : number;
    get class(): Internal.Class<any>;
    constructor(arg0: Internal.Vector3f);
    constructor(arg0: number, arg1: number, arg2: number);
}
type Vec3_ = Vec3;
declare class ingredient {
    getClass(): Internal.Class<any>;
    static customNBT(in_: Internal.IngredientJS_, predicate: ((arg0: Internal.CompoundNBT) => boolean)): Internal.IngredientJS;
    wait(arg0: number): void;
    wait(arg0: number, arg1: number): void;
    wait(): void;
    static getAll(): Internal.IngredientJS;
    static isIngredient(o: any): boolean;
    notifyAll(): void;
    static custom(in_: Internal.IngredientJS_, predicate: ((arg0: Internal.ItemStackJS) => boolean)): Internal.IngredientJS;
    static custom(predicate: ((arg0: Internal.ItemStackJS) => boolean)): Internal.IngredientJS;
    static getNone(): Internal.IngredientJS;
    notify(): void;
    static matchAny(objects: any): Internal.IngredientJS;
    hashCode(): number;
    equals(arg0: any): boolean;
    static of(object: any, count: number): Internal.IngredientJS;
    static of(object: any): Internal.IngredientJS;
    toString(): string;
    static registerCustomIngredientAction(id: string, callback: ((arg0: Internal.ItemStackJS, arg1: number, arg2: Internal.InventoryJS) => any)): void;
    get all(): Internal.IngredientJS;
    get none(): Internal.IngredientJS;
    get class(): Internal.Class<any>;
    constructor();
}
type ingredient_ = ingredient;
declare interface Facing {
    readonly ALL : {"east":Internal.Direction,"south":Internal.Direction,"north":Internal.Direction,"west":Internal.Direction,"up":Internal.Direction,"down":Internal.Direction};
    readonly DOWN : Internal.Direction;
    readonly south : Internal.Direction;
    readonly north : Internal.Direction;
    readonly WEST : Internal.Direction;
    readonly down : Internal.Direction;
    readonly east : Internal.Direction;
    readonly NORTH : Internal.Direction;
    readonly west : Internal.Direction;
    readonly up : Internal.Direction;
    readonly UP : Internal.Direction;
    readonly SOUTH : Internal.Direction;
    readonly EAST : Internal.Direction;
}
type Facing_ = Facing;
declare const Facing: Facing;
declare class JsonUtils {
    getClass(): Internal.Class<any>;
    wait(arg0: number): void;
    wait(arg0: number, arg1: number): void;
    wait(): void;
    hashCode(): number;
    notifyAll(): void;
    equals(arg0: any): boolean;
    static toPrettyString(json: Internal.JsonElement): string;
    static toString(json: Internal.JsonElement): string;
    toString(): string;
    static copy(json: Internal.JsonElement): Internal.JsonElement;
    static parse(string: string): any;
    notify(): void;
    get class(): Internal.Class<any>;
    constructor();
}
type JsonUtils_ = JsonUtils;
declare class BiomeDictionary {
    getClass(): Internal.Class<any>;
    wait(arg0: number): void;
    wait(arg0: number, arg1: number): void;
    wait(): void;
    static getBiomeType(o: any): Internal.BiomeDictionary$Type;
    static printTags(biome: ResourceLocation_): void;
    static printBiomes(type: Internal.BiomeDictionary$Type): void;
    hashCode(): number;
    static addTypes(biomes: ResourceLocation[], tags: Internal.BiomeDictionary$Type[]): void;
    notifyAll(): void;
    equals(arg0: any): boolean;
    toString(): string;
    notify(): void;
    get class(): Internal.Class<any>;
    constructor();
}
type BiomeDictionary_ = BiomeDictionary;
declare class NBTIO {
    getClass(): Internal.Class<any>;
    wait(arg0: number): void;
    wait(arg0: number, arg1: number): void;
    wait(): void;
    static read(file: string): any;
    static read(file: Internal.File): Internal.MapJS;
    hashCode(): number;
    notifyAll(): void;
    equals(arg0: any): boolean;
    toString(): string;
    static write(file: string, nbt: any): void;
    static write(file: Internal.File, nbt: any): void;
    notify(): void;
    get class(): Internal.Class<any>;
    constructor();
}
type NBTIO_ = NBTIO;
declare class Hand extends Internal.Enum<Hand> {
    getClass(): Internal.Class<any>;
    wait(arg0: number): void;
    wait(arg0: number, arg1: number): void;
    wait(): void;
    static valueOf(arg0: string): Hand;
    static valueOf<T_>(arg0: Internal.Class<T_>, arg1: string): T_;
    notifyAll(): void;
    static values(): Hand[];
    compareTo(arg0: any): number;
    compareTo(arg0: Hand_): number;
    describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Hand>>;
    notify(): void;
    getDeclaringClass(): Internal.Class<Hand>;
    hashCode(): number;
    equals(arg0: any): boolean;
    name(): string;
    toString(): string;
    ordinal(): number;
    static readonly MAIN_HAND : Hand;
    static readonly OFF_HAND : Hand;
    get class(): Internal.Class<any>;
    get declaringClass(): Internal.Class<Hand>;
}
type Hand_ = "main_hand" | "off_hand" | Hand;
declare class fluid {
    getClass(): Internal.Class<any>;
    wait(arg0: number): void;
    wait(arg0: number, arg1: number): void;
    wait(): void;
    notifyAll(): void;
    static water(amount: number): Internal.FluidStackJS;
    static water(): Internal.FluidStackJS;
    notify(): void;
    static lava(amount: number): Internal.FluidStackJS;
    static lava(): Internal.FluidStackJS;
    static getType(id: ResourceLocation_): Internal.Fluid;
    hashCode(): number;
    equals(arg0: any): boolean;
    static getEmpty(): Internal.FluidStackJS;
    static of(o: Internal.FluidStackJS): Internal.FluidStackJS;
    static of(o: Internal.FluidStackJS, amount: number, nbt: Internal.CompoundNBT): Internal.FluidStackJS;
    static of(o: Internal.FluidStackJS, nbt: Internal.CompoundNBT): Internal.FluidStackJS;
    static of(o: Internal.FluidStackJS, amount: number): Internal.FluidStackJS;
    static exists(id: ResourceLocation_): boolean;
    toString(): string;
    static getTypes(): Internal.List<string>;
    static readonly LAVA_ID : ResourceLocation;
    static readonly WATER_ID : ResourceLocation;
    get types(): Internal.List<string>;
    get class(): Internal.Class<any>;
    get empty(): Internal.FluidStackJS;
    constructor();
}
type fluid_ = fluid;
declare class ToolType {
    getClass(): Internal.Class<any>;
    wait(arg0: number): void;
    wait(arg0: number, arg1: number): void;
    wait(): void;
    hashCode(): number;
    notifyAll(): void;
    equals(arg0: any): boolean;
    static create(forgeName: string, fabricTag: (() => Internal.ITag<Internal.Item>)): ToolType;
    toString(): string;
    static byName(forgeName: string): ToolType;
    notify(): void;
    readonly fabricTag : (() => Internal.ITag<Internal.Item>);
    readonly forgeName : string;
    static readonly PICKAXE : ToolType;
    static readonly SHOVEL : ToolType;
    static readonly AXE : ToolType;
    static readonly HOE : ToolType;
    get class(): Internal.Class<any>;
}
type ToolType_ = ToolType;
declare class Vec3i implements Internal.Comparable<Vec3i> {
    getClass(): Internal.Class<any>;
    func_218138_a(arg0: Internal.IPosition, arg1: boolean): number;
    wait(arg0: number): void;
    wait(arg0: number, arg1: number): void;
    wait(): void;
    func_218137_a(arg0: Internal.IPosition, arg1: number): boolean;
    notifyAll(): void;
    compareTo(arg0: Vec3i): number;
    compareTo(arg0: any): number;
    notify(): void;
    hashCode(): number;
    func_177967_a(arg0: Internal.Direction_, arg1: number): Vec3i;
    func_177984_a(): Vec3i;
    func_177981_b(arg0: number): Vec3i;
    func_229422_x_(): string;
    func_177956_o(): number;
    func_177958_n(): number;
    func_243648_a(arg0: Internal.Direction$Axis_): number;
    func_177952_p(): number;
    func_218140_a(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
    func_218141_a(arg0: Vec3i, arg1: number): boolean;
    func_218139_n(arg0: Vec3i): number;
    func_177979_c(arg0: number): Vec3i;
    func_177955_d(arg0: Vec3i): Vec3i;
    func_177951_i(arg0: Vec3i): number;
    equals(arg0: any): boolean;
    toString(): string;
    func_177977_b(): Vec3i;
    static readonly field_239781_c_ : Internal.Codec<Vec3i>;
    static readonly field_177959_e : Vec3i;
    get class(): Internal.Class<any>;
    constructor(arg0: number, arg1: number, arg2: number);
    constructor(arg0: number, arg1: number, arg2: number);
}
type Vec3i_ = Vec3i;
declare interface NBT {
    static longArrayTag(v: number[]): Internal.INBT;
    static byteArrayTag(v: number[]): Internal.INBT;
    static b(v: number): Internal.INBT;
    static fromTag(t: Internal.INBT): any;
    static listTag(): Internal.INBT;
    static d(v: number): Internal.INBT;
    static f(v: number): Internal.INBT;
    static compoundTag(): Internal.INBT;
    static toTag(v: any): Internal.INBT;
    static i(v: number): Internal.INBT;
    static shortTag(v: number): Internal.INBT;
    static l(v: number): Internal.INBT;
    static floatTag(v: number): Internal.INBT;
    static s(v: number): Internal.INBT;
    static la(v: number[]): Internal.INBT;
    static longTag(v: number): Internal.INBT;
    static intArrayTag(v: number[]): Internal.INBT;
    static ia(v: number[]): Internal.INBT;
    static intTag(v: number): Internal.INBT;
    static doubleTag(v: number): Internal.INBT;
    static byteTag(v: number): Internal.INBT;
    static stringTag(v: string): Internal.INBT;
    static ba(v: number[]): Internal.INBT;
}
type NBT_ = NBT;
declare const NBT: NBT;
declare class Platform {
    static isDevelopmentEnvironment(): boolean;
    getClass(): Internal.Class<any>;
    static isClientEnvironment(): boolean;
    wait(arg0: number): void;
    wait(arg0: number, arg1: number): void;
    wait(): void;
    static getName(): string;
    static getInfo(modID: string): Internal.PlatformWrapper$ModInfo;
    static getMods(): Internal.Map<string, Internal.PlatformWrapper$ModInfo>;
    notifyAll(): void;
    static isForge(): boolean;
    static isLoaded(modId: string): boolean;
    notify(): void;
    static isFabric(): boolean;
    hashCode(): number;
    static getList(): Internal.Set<string>;
    equals(arg0: any): boolean;
    static getModVersion(): string;
    toString(): string;
    static getMcVersion(): string;
    get mods(): Internal.Map<string, Internal.PlatformWrapper$ModInfo>;
    get modVersion(): string;
    get developmentEnvironment(): boolean;
    get forge(): boolean;
    get fabric(): boolean;
    get mcVersion(): string;
    get clientEnvironment(): boolean;
    get name(): string;
    get list(): Internal.Set<string>;
    get class(): Internal.Class<any>;
    constructor();
}
type Platform_ = Platform;
declare class EquipmentSlot extends Internal.Enum<EquipmentSlot> {
    getClass(): Internal.Class<any>;
    wait(arg0: number): void;
    wait(arg0: number, arg1: number): void;
    wait(): void;
    static valueOf(arg0: string): EquipmentSlot;
    static valueOf<T_>(arg0: Internal.Class<T_>, arg1: string): T_;
    notifyAll(): void;
    static values(): EquipmentSlot[];
    compareTo(arg0: any): number;
    compareTo(arg0: EquipmentSlot_): number;
    describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<EquipmentSlot>>;
    static func_188451_a(arg0: string): EquipmentSlot;
    notify(): void;
    func_188452_c(): number;
    func_188450_d(): string;
    func_188453_a(): Internal.EquipmentSlotType$Group;
    getDeclaringClass(): Internal.Class<EquipmentSlot>;
    static func_220318_a(arg0: Internal.EquipmentSlotType$Group_, arg1: number): EquipmentSlot;
    func_188454_b(): number;
    hashCode(): number;
    equals(arg0: any): boolean;
    name(): string;
    toString(): string;
    ordinal(): number;
    static readonly CHEST : EquipmentSlot;
    static readonly HEAD : EquipmentSlot;
    static readonly OFFHAND : EquipmentSlot;
    static readonly MAINHAND : EquipmentSlot;
    static readonly LEGS : EquipmentSlot;
    static readonly FEET : EquipmentSlot;
    get class(): Internal.Class<any>;
    get declaringClass(): Internal.Class<EquipmentSlot>;
}
type EquipmentSlot_ = "mainhand" | "offhand" | "feet" | "legs" | "chest" | "head" | EquipmentSlot;
declare class Rarity {
    getClass(): Internal.Class<any>;
    wait(arg0: number): void;
    wait(arg0: number, arg1: number): void;
    wait(): void;
    hashCode(): number;
    notifyAll(): void;
    equals(arg0: any): boolean;
    toString(): string;
    notify(): void;
    static readonly RARE : Rarity;
    static readonly EPIC : Rarity;
    static readonly UNCOMMON : Rarity;
    static readonly COMMON : Rarity;
    readonly rarity : Internal.Rarity;
    get class(): Internal.Class<any>;
}
type Rarity_ = Rarity;
declare class block {
    getClass(): Internal.Class<any>;
    wait(arg0: number): void;
    wait(arg0: number, arg1: number): void;
    wait(): void;
    static getBlock(id: ResourceLocation_): Internal.Block;
    notifyAll(): void;
    static custom(predicate: Internal.BlockPredicate): Internal.BlockPredicate;
    static getTypeList(): Internal.List<string>;
    notify(): void;
    static getMaterial(): Internal.Map<string, Internal.MaterialJS>;
    static getTaggedIds(tag: ResourceLocation_): Internal.List<string>;
    hashCode(): number;
    equals(arg0: any): boolean;
    toString(): string;
    static getFacing(): Internal.Map<string, Internal.Direction>;
    static id(id: ResourceLocation_, properties: Internal.Map<string, any>): Internal.BlockIDPredicate;
    static id(id: ResourceLocation_): Internal.BlockIDPredicate;
    static entity(id: ResourceLocation_): Internal.BlockEntityPredicate;
    get typeList(): Internal.List<string>;
    get material(): Internal.Map<string, Internal.MaterialJS>;
    get facing(): Internal.Map<string, Internal.Direction>;
    get class(): Internal.Class<any>;
    constructor();
}
type block_ = block;
declare class Result {
    getClass(): Internal.Class<any>;
    wait(arg0: number): void;
    wait(arg0: number, arg1: number): void;
    wait(): void;
    hashCode(): number;
    static success(): Result;
    notifyAll(): void;
    equals(arg0: any): boolean;
    toString(): string;
    static error(arg0: Internal.Text): Result;
    notify(): void;
    get class(): Internal.Class<any>;
}
type Result_ = Result;
/**
*/
declare class ResourceLocation implements Internal.Comparable<ResourceLocation>, Internal.ResourceLocationAccess, Internal.SpecialEquality {
    getClass(): Internal.Class<any>;
    wait(arg0: number): void;
    wait(arg0: number, arg1: number): void;
    wait(): void;
    handler$zzd000$hashCodeHeadInjected(arg0: Internal.CallbackInfoReturnable<any>): void;
    notifyAll(): void;
    setPath(arg0: string): void;
    static func_208304_a(arg0: string): ResourceLocation;
    compareTo(arg0: any): number;
    compareTo(arg0: ResourceLocation_): number;
    notify(): void;
    static func_217855_b(arg0: string): boolean;
    handler$zzd000$hashCodeReturnInjected(arg0: Internal.CallbackInfoReturnable<any>): void;
    hashCode(): number;
    compareNamespaced(arg0: ResourceLocation_): number;
    equals(arg0: any): boolean;
    static func_195824_a(arg0: string): boolean;
    toString(): string;
    static func_195826_a(arg0: Internal.StringReader): ResourceLocation;
    static func_240909_b_(arg0: string): boolean;
    func_110623_a(): string;
    setNamespace(arg0: string): void;
    static func_195828_a(arg0: string, arg1: string): ResourceLocation;
    func_110624_b(): string;
    specialEquals(o: any, shallow: boolean): boolean;
    static readonly field_240908_a_ : Internal.Codec<ResourceLocation>;
    get class(): Internal.Class<any>;
    set path(arg0: string);
    set namespace(arg0: string);
    constructor(arg0: string, arg1: string);
    constructor(arg0: string);
}
type ResourceLocation_ = string | ResourceLocation;
declare class text {
    getClass(): Internal.Class<any>;
    wait(arg0: number): void;
    wait(arg0: number, arg1: number): void;
    wait(): void;
    static string(text: any): Internal.Text;
    notifyAll(): void;
    static yellow(text: any): Internal.Text;
    static darkBlue(text: any): Internal.Text;
    notify(): void;
    static translate(key: string, objects: any[]): Internal.Text;
    static translate(key: string): Internal.Text;
    static gold(text: any): Internal.Text;
    static red(text: any): Internal.Text;
    static aqua(text: any): Internal.Text;
    static gray(text: any): Internal.Text;
    static white(text: any): Internal.Text;
    hashCode(): number;
    static darkRed(text: any): Internal.Text;
    static of(object: any): Internal.Text;
    static darkPurple(text: any): Internal.Text;
    static join(separator: Internal.Text, texts: Internal.Iterable<Internal.Text>): Internal.Text;
    static green(text: any): Internal.Text;
    static darkGreen(text: any): Internal.Text;
    static lightPurple(text: any): Internal.Text;
    static black(text: any): Internal.Text;
    static darkAqua(text: any): Internal.Text;
    static blue(text: any): Internal.Text;
    equals(arg0: any): boolean;
    static keybind(keybind: string): Internal.Text;
    static darkGray(text: any): Internal.Text;
    toString(): string;
    get class(): Internal.Class<any>;
    constructor();
}
type text_ = text;
declare class Item {
    getClass(): Internal.Class<any>;
    wait(arg0: number): void;
    wait(arg0: number, arg1: number): void;
    wait(): void;
    notifyAll(): void;
    static getTypeList(): Internal.ListJS;
    static findGroup(id: string): Internal.ItemGroup;
    static getItem(id: ResourceLocation_): Internal.Item;
    static fireworks(properties: Internal.Map<string, any>): Internal.FireworksJS;
    notify(): void;
    static clearListCache(): void;
    hashCode(): number;
    static getList(): Internal.ListJS;
    equals(arg0: any): boolean;
    static getEmpty(): Internal.ItemStackJS;
    static of(in_: Internal.ItemStackJS_, count: number, nbt: Internal.CompoundNBT): Internal.ItemStackJS;
    static of(in_: Internal.ItemStackJS_, tag: Internal.CompoundNBT): Internal.ItemStackJS;
    static of(in_: Internal.ItemStackJS_, count: number): Internal.ItemStackJS;
    static of(in_: Internal.ItemStackJS_): Internal.ItemStackJS;
    static isItem(o: any): boolean;
    static exists(id: ResourceLocation_): boolean;
    toString(): string;
    static withChance(in_: Internal.ItemStackJS_, c: number): Internal.ItemStackJS;
    static withNBT(in_: Internal.ItemStackJS_, nbt: Internal.CompoundNBT): Internal.ItemStackJS;
    get typeList(): Internal.ListJS;
    get list(): Internal.ListJS;
    get class(): Internal.Class<any>;
    get empty(): Internal.ItemStackJS;
    constructor();
}
type Item_ = Item;
declare class CarvingGenerationStep extends Internal.Enum<CarvingGenerationStep> implements Internal.IStringSerializable {
    getClass(): Internal.Class<any>;
    wait(arg0: number): void;
    wait(arg0: number, arg1: number): void;
    wait(): void;
    static valueOf(arg0: string): CarvingGenerationStep;
    static valueOf<T_>(arg0: Internal.Class<T_>, arg1: string): T_;
    notifyAll(): void;
    static values(): CarvingGenerationStep[];
    compareTo(arg0: any): number;
    compareTo(arg0: CarvingGenerationStep_): number;
    describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<CarvingGenerationStep>>;
    notify(): void;
    getDeclaringClass(): Internal.Class<CarvingGenerationStep>;
    static func_236075_a_(arg0: string): CarvingGenerationStep;
    hashCode(): number;
    func_176610_l(): string;
    func_222671_a(): string;
    equals(arg0: any): boolean;
    name(): string;
    toString(): string;
    ordinal(): number;
    static readonly LIQUID : CarvingGenerationStep;
    static readonly AIR : CarvingGenerationStep;
    static readonly field_236074_c_ : Internal.Codec<CarvingGenerationStep>;
    get class(): Internal.Class<any>;
    get declaringClass(): Internal.Class<CarvingGenerationStep>;
}
type CarvingGenerationStep_ = "air" | "liquid" | CarvingGenerationStep;
declare namespace net.minecraft.util {
    class Unit extends Internal.Enum<net.minecraft.util.Unit> {
        getClass(): Internal.Class<any>;
        wait(arg0: number): void;
        wait(arg0: number, arg1: number): void;
        wait(): void;
        static valueOf(arg0: string): net.minecraft.util.Unit;
        static valueOf<T_>(arg0: Internal.Class<T_>, arg1: string): T_;
        notifyAll(): void;
        static values(): net.minecraft.util.Unit[];
        compareTo(arg0: any): number;
        compareTo(arg0: net.minecraft.util.Unit_): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<net.minecraft.util.Unit>>;
        notify(): void;
        getDeclaringClass(): Internal.Class<net.minecraft.util.Unit>;
        hashCode(): number;
        equals(arg0: any): boolean;
        name(): string;
        toString(): string;
        ordinal(): number;
        static readonly INSTANCE : net.minecraft.util.Unit;
        get class(): Internal.Class<any>;
        get declaringClass(): Internal.Class<net.minecraft.util.Unit>;
        /**
         * Internal constructor, this means that it's not valid and you will get an error if you use it.
         */
        protected constructor();
    }
    type Unit_ = "instance" | Unit;
}
declare namespace fr.frinn.custommachinery.common.integration.kubejs.function_ {
    interface RecipeFunction extends Internal.Function<Internal.Context, Result> {
        compose<V_>(arg0: ((arg0: V_) => Internal.Context)): Internal.Function<V_, Result>;
        apply(arg0: Internal.Context): Result;
        andThen<V_>(arg0: ((arg0: Result) => V_)): Internal.Function<Internal.Context, V_>;
    }
    type RecipeFunction_ = RecipeFunction;
}
declare namespace net.minecraft.client.resources {
    class Language implements Internal.Language, Internal.Comparable<net.minecraft.client.resources.Language> {
        getClass(): Internal.Class<any>;
        wait(arg0: number): void;
        wait(arg0: number, arg1: number): void;
        wait(): void;
        getName(): string;
        notifyAll(): void;
        func_135035_b(): boolean;
        getJavaLocale(): Internal.Locale;
        compareTo(arg0: net.minecraft.client.resources.Language): number;
        compareTo(arg0: any): number;
        notify(): void;
        getRegion(): string;
        hashCode(): number;
        equals(arg0: any): boolean;
        toString(): string;
        getCode(): string;
        get code(): string;
        get javaLocale(): Internal.Locale;
        get name(): string;
        get region(): string;
        get class(): Internal.Class<any>;
        /**
         * Internal constructor, this means that it's not valid and you will get an error if you use it.
         */
        protected constructor();
    }
    type Language_ = Language;
}
declare namespace it.unimi.dsi.fastutil {
    interface Function <K, V> extends Internal.Function<K, V> {
        size(): number;
        compose<V_>(arg0: ((arg0: V_) => K)): Internal.Function<V_, V>;
        apply(arg0: K): V;
        containsKey(arg0: any): boolean;
        get(arg0: any): V;
        clear(): void;
        andThen<V_>(arg0: ((arg0: V) => V_)): Internal.Function<K, V_>;
        put(arg0: K, arg1: V): V;
        remove(arg0: any): V;
    }
    type Function_<K, V> = ((arg0: any) => V) | Function<K, V>;
}
declare namespace java_.nio.file {
    interface Path extends Internal.Comparable<java_.nio.file.Path>, Internal.Iterable<java_.nio.file.Path>, Internal.Watchable {
        getName(arg0: number): java_.nio.file.Path;
        resolve(arg0: java_.nio.file.Path): java_.nio.file.Path;
        resolve(arg0: string): java_.nio.file.Path;
        resolveSibling(arg0: java_.nio.file.Path): java_.nio.file.Path;
        resolveSibling(arg0: string): java_.nio.file.Path;
        subpath(arg0: number, arg1: number): java_.nio.file.Path;
        compareTo(arg0: java_.nio.file.Path): number;
        compareTo(arg0: any): number;
        iterator(): Internal.Iterator<java_.nio.file.Path>;
        hashCode(): number;
        normalize(): java_.nio.file.Path;
        relativize(arg0: java_.nio.file.Path): java_.nio.file.Path;
        getRoot(): java_.nio.file.Path;
        getFileName(): java_.nio.file.Path;
        getNameCount(): number;
        getParent(): java_.nio.file.Path;
        spliterator(): Internal.Spliterator<java_.nio.file.Path>;
        forEach(arg0: ((arg0: java_.nio.file.Path) => void)): void;
        toUri(): Internal.URI;
        toAbsolutePath(): java_.nio.file.Path;
        getFileSystem(): Internal.FileSystem;
        equals(arg0: any): boolean;
        toFile(): Internal.File;
        toRealPath(arg0: any[]): java_.nio.file.Path;
        endsWith(arg0: string): boolean;
        endsWith(arg0: java_.nio.file.Path): boolean;
        isAbsolute(): boolean;
        toString(): string;
        register(arg0: Internal.WatchService, arg1: Internal.WatchEvent$Kind<any>[], arg2: any[]): Internal.WatchKey;
        register(arg0: Internal.WatchService, arg1: Internal.WatchEvent$Kind<any>[]): Internal.WatchKey;
        startsWith(arg0: string): boolean;
        startsWith(arg0: java_.nio.file.Path): boolean;
    }
    type Path_ = Path;
}
declare namespace io.netty.util {
    interface Attribute <T> {
        set(arg0: T): void;
        compareAndSet(arg0: T, arg1: T): boolean;
        setIfAbsent(arg0: T): T;
        get(): T;
        getAndSet(arg0: T): T;
        getAndRemove(): T;
        key(): Internal.AttributeKey<T>;
        remove(): void;
    }
    type Attribute_<T> = Attribute<T>;
}
declare namespace dev.latvian.mods.rhino.mod.util.color {
    interface Color extends Internal.SpecialEquality {
        getRgbKJS(): number;
        getHexKJS(): string;
        getArgbKJS(): number;
        createTextColorKJS(): Internal.Color;
        getFireworkColorKJS(): number;
        getSerializeKJS(): string;
        specialEquals(o: any, shallow: boolean): boolean;
    }
    type Color_ = Color;
}
declare namespace com.mojang.authlib.properties {
    class Property {
        getClass(): Internal.Class<any>;
        getValue(): string;
        wait(arg0: number): void;
        wait(arg0: number, arg1: number): void;
        wait(): void;
        getName(): string;
        hashCode(): number;
        notifyAll(): void;
        equals(arg0: any): boolean;
        getSignature(): string;
        toString(): string;
        isSignatureValid(arg0: Internal.PublicKey): boolean;
        notify(): void;
        hasSignature(): boolean;
        get signature(): string;
        get name(): string;
        get class(): Internal.Class<any>;
        get value(): string;
        /**
         * Internal constructor, this means that it's not valid and you will get an error if you use it.
         */
        protected constructor();
    }
    type Property_ = Property;
}
declare namespace net.minecraftforge.fluids {
    class FluidStack {
        getClass(): Internal.Class<any>;
        wait(arg0: number): void;
        wait(arg0: number, arg1: number): void;
        wait(): void;
        getRawFluid(): Internal.Fluid;
        notifyAll(): void;
        getOrCreateChildTag(arg0: string): Internal.CompoundNBT;
        notify(): void;
        getChildTag(arg0: string): Internal.CompoundNBT;
        containsFluid(arg0: net.minecraftforge.fluids.FluidStack): boolean;
        static readFromPacket(arg0: Internal.PacketBuffer): net.minecraftforge.fluids.FluidStack;
        hashCode(): number;
        setTag(arg0: Internal.CompoundNBT): void;
        copy(): net.minecraftforge.fluids.FluidStack;
        setAmount(arg0: number): void;
        isFluidEqual(arg0: Internal.ItemStack): boolean;
        isFluidEqual(arg0: net.minecraftforge.fluids.FluidStack): boolean;
        writeToNBT(arg0: Internal.CompoundNBT): Internal.CompoundNBT;
        getAmount(): number;
        isFluidStackIdentical(arg0: net.minecraftforge.fluids.FluidStack): boolean;
        removeChildTag(arg0: string): void;
        grow(arg0: number): void;
        static loadFluidStackFromNBT(arg0: Internal.CompoundNBT): net.minecraftforge.fluids.FluidStack;
        hasTag(): boolean;
        shrink(arg0: number): void;
        getTranslationKey(): string;
        isEmpty(): boolean;
        getTag(): Internal.CompoundNBT;
        getOrCreateTag(): Internal.CompoundNBT;
        writeToPacket(arg0: Internal.PacketBuffer): void;
        getDisplayName(): Internal.ITextComponent;
        equals(arg0: any): boolean;
        getFluid(): Internal.Fluid;
        toString(): string;
        static areFluidStackTagsEqual(arg0: net.minecraftforge.fluids.FluidStack, arg1: net.minecraftforge.fluids.FluidStack): boolean;
        static readonly CODEC : Internal.Codec<net.minecraftforge.fluids.FluidStack>;
        static readonly EMPTY : net.minecraftforge.fluids.FluidStack;
        get orCreateTag(): Internal.CompoundNBT;
        get rawFluid(): Internal.Fluid;
        get amount(): number;
        get translationKey(): string;
        get displayName(): Internal.ITextComponent;
        get fluid(): Internal.Fluid;
        get tag(): Internal.CompoundNBT;
        get class(): Internal.Class<any>;
        get empty(): boolean;
        set amount(arg0: number);
        set tag(arg0: Internal.CompoundNBT);
        /**
         * Internal constructor, this means that it's not valid and you will get an error if you use it.
         */
        protected constructor();
    }
    type FluidStack_ = FluidStack;
}
declare namespace org.objectweb.asm {
    class Type {
        static getDescriptor(arg0: Internal.Class<any>): string;
        getDescriptor(): string;
        getClass(): Internal.Class<any>;
        getElementType(): org.objectweb.asm.Type;
        static getArgumentTypes(arg0: Internal.Method): org.objectweb.asm.Type[];
        getArgumentTypes(): org.objectweb.asm.Type[];
        static getArgumentTypes(arg0: string): org.objectweb.asm.Type[];
        wait(arg0: number): void;
        wait(arg0: number, arg1: number): void;
        wait(): void;
        notifyAll(): void;
        static getArgumentsAndReturnSizes(arg0: string): number;
        getArgumentsAndReturnSizes(): number;
        notify(): void;
        getArgumentCount(): number;
        static getArgumentCount(arg0: string): number;
        getDimensions(): number;
        getSort(): number;
        getSize(): number;
        static getMethodDescriptor(arg0: org.objectweb.asm.Type, arg1: org.objectweb.asm.Type[]): string;
        static getMethodDescriptor(arg0: Internal.Method): string;
        static getReturnType(arg0: string): org.objectweb.asm.Type;
        static getReturnType(arg0: Internal.Method): org.objectweb.asm.Type;
        getReturnType(): org.objectweb.asm.Type;
        static getInternalName(arg0: Internal.Class<any>): string;
        getInternalName(): string;
        static getType(arg0: string): org.objectweb.asm.Type;
        static getType(arg0: Internal.Class<any>): org.objectweb.asm.Type;
        static getType(arg0: Internal.Method): org.objectweb.asm.Type;
        static getType(arg0: Internal.Constructor<any>): org.objectweb.asm.Type;
        hashCode(): number;
        equals(arg0: any): boolean;
        static getConstructorDescriptor(arg0: Internal.Constructor<any>): string;
        static getObjectType(arg0: string): org.objectweb.asm.Type;
        static getMethodType(arg0: org.objectweb.asm.Type, arg1: org.objectweb.asm.Type[]): org.objectweb.asm.Type;
        static getMethodType(arg0: string): org.objectweb.asm.Type;
        toString(): string;
        getClassName(): string;
        getOpcode(arg0: number): number;
        static readonly CHAR_TYPE : org.objectweb.asm.Type;
        static readonly FLOAT : 6;
        static readonly DOUBLE_TYPE : org.objectweb.asm.Type;
        static readonly ARRAY : 9;
        static readonly LONG_TYPE : org.objectweb.asm.Type;
        static readonly BYTE_TYPE : org.objectweb.asm.Type;
        static readonly CHAR : 2;
        static readonly VOID_TYPE : org.objectweb.asm.Type;
        static readonly OBJECT : 10;
        static readonly BOOLEAN_TYPE : org.objectweb.asm.Type;
        static readonly FLOAT_TYPE : org.objectweb.asm.Type;
        static readonly BOOLEAN : 1;
        static readonly INT : 5;
        static readonly SHORT : 4;
        static readonly BYTE : 3;
        static readonly METHOD : 11;
        static readonly SHORT_TYPE : org.objectweb.asm.Type;
        static readonly DOUBLE : 8;
        static readonly VOID : 0;
        static readonly LONG : 7;
        static readonly INT_TYPE : org.objectweb.asm.Type;
        get argumentsAndReturnSizes(): number;
        get argumentCount(): number;
        get internalName(): string;
        get size(): number;
        get className(): string;
        get descriptor(): string;
        get argumentTypes(): org.objectweb.asm.Type[];
        get sort(): number;
        get class(): Internal.Class<any>;
        get elementType(): org.objectweb.asm.Type;
        get returnType(): org.objectweb.asm.Type;
        get dimensions(): number;
        /**
         * Internal constructor, this means that it's not valid and you will get an error if you use it.
         */
        protected constructor();
    }
    type Type_ = Type;
}
declare namespace io.netty.util.concurrent {
    interface ScheduledFuture <V> extends Internal.Future<V>, Internal.ScheduledFuture<V> {
        cancel(arg0: boolean): boolean;
        isCancelled(): boolean;
        getDelay(arg0: Internal.TimeUnit_): number;
        removeListeners(arg0: Internal.GenericFutureListener<Internal.Future<V>>[]): Internal.Future<V>;
        exceptionNow(): Internal.Throwable;
        getNow(): V;
        cause(): Internal.Throwable;
        awaitUninterruptibly(arg0: number, arg1: Internal.TimeUnit_): boolean;
        awaitUninterruptibly(): Internal.Future<V>;
        awaitUninterruptibly(arg0: number): boolean;
        compareTo(arg0: Internal.Delayed): number;
        removeListener(arg0: Internal.GenericFutureListener<Internal.Future<V>>): Internal.Future<V>;
        isDone(): boolean;
        sync(): Internal.Future<V>;
        resultNow(): V;
        syncUninterruptibly(): Internal.Future<V>;
        get(arg0: number, arg1: Internal.TimeUnit_): V;
        get(): V;
        isCancellable(): boolean;
        await(): Internal.Future<V>;
        await(arg0: number, arg1: Internal.TimeUnit_): boolean;
        await(arg0: number): boolean;
        state(): Internal.Future$State;
        addListeners(arg0: Internal.GenericFutureListener<Internal.Future<V>>[]): Internal.Future<V>;
        isSuccess(): boolean;
        addListener(arg0: Internal.GenericFutureListener<Internal.Future<V>>): Internal.Future<V>;
    }
    type ScheduledFuture_<V> = ScheduledFuture<V>;
}
declare namespace dev.latvian.mods.rhino.util.unit {
    abstract class Unit {
        getClass(): Internal.Class<any>;
        mod(with_: dev.latvian.mods.rhino.util.unit.Unit): dev.latvian.mods.rhino.util.unit.Unit;
        log1p(): dev.latvian.mods.rhino.util.unit.Unit;
        cos(): dev.latvian.mods.rhino.util.unit.Unit;
        deg(): dev.latvian.mods.rhino.util.unit.Unit;
        lt(with_: dev.latvian.mods.rhino.util.unit.Unit): dev.latvian.mods.rhino.util.unit.Unit;
        atan(): dev.latvian.mods.rhino.util.unit.Unit;
        getAsInt(): number;
        div(with_: dev.latvian.mods.rhino.util.unit.Unit): dev.latvian.mods.rhino.util.unit.Unit;
        neg(): dev.latvian.mods.rhino.util.unit.Unit;
        shiftLeft(with_: dev.latvian.mods.rhino.util.unit.Unit): dev.latvian.mods.rhino.util.unit.Unit;
        rad(): dev.latvian.mods.rhino.util.unit.Unit;
        sqrt(): dev.latvian.mods.rhino.util.unit.Unit;
        gte(with_: dev.latvian.mods.rhino.util.unit.Unit): dev.latvian.mods.rhino.util.unit.Unit;
        neq(with_: dev.latvian.mods.rhino.util.unit.Unit): dev.latvian.mods.rhino.util.unit.Unit;
        atan2(with_: dev.latvian.mods.rhino.util.unit.Unit): dev.latvian.mods.rhino.util.unit.Unit;
        add(with_: dev.latvian.mods.rhino.util.unit.Unit): dev.latvian.mods.rhino.util.unit.Unit;
        tan(): dev.latvian.mods.rhino.util.unit.Unit;
        toBool(): dev.latvian.mods.rhino.util.unit.Unit;
        ceil(): dev.latvian.mods.rhino.util.unit.Unit;
        eq(with_: dev.latvian.mods.rhino.util.unit.Unit): dev.latvian.mods.rhino.util.unit.Unit;
        shiftRight(with_: dev.latvian.mods.rhino.util.unit.Unit): dev.latvian.mods.rhino.util.unit.Unit;
        sub(with_: dev.latvian.mods.rhino.util.unit.Unit): dev.latvian.mods.rhino.util.unit.Unit;
        wait(arg0: number): void;
        wait(arg0: number, arg1: number): void;
        wait(): void;
        mul(with_: dev.latvian.mods.rhino.util.unit.Unit): dev.latvian.mods.rhino.util.unit.Unit;
        log(): dev.latvian.mods.rhino.util.unit.Unit;
        log10(): dev.latvian.mods.rhino.util.unit.Unit;
        notifyAll(): void;
        notify(): void;
        not(): dev.latvian.mods.rhino.util.unit.Unit;
        min(with_: dev.latvian.mods.rhino.util.unit.Unit): dev.latvian.mods.rhino.util.unit.Unit;
        hashCode(): number;
        and(with_: dev.latvian.mods.rhino.util.unit.Unit): dev.latvian.mods.rhino.util.unit.Unit;
        get(): number;
        pow(with_: dev.latvian.mods.rhino.util.unit.Unit): dev.latvian.mods.rhino.util.unit.Unit;
        sin(): dev.latvian.mods.rhino.util.unit.Unit;
        xor(with_: dev.latvian.mods.rhino.util.unit.Unit): dev.latvian.mods.rhino.util.unit.Unit;
        lte(with_: dev.latvian.mods.rhino.util.unit.Unit): dev.latvian.mods.rhino.util.unit.Unit;
        floor(): dev.latvian.mods.rhino.util.unit.Unit;
        isFixed(): boolean;
        sq(): dev.latvian.mods.rhino.util.unit.Unit;
        or(with_: dev.latvian.mods.rhino.util.unit.Unit): dev.latvian.mods.rhino.util.unit.Unit;
        max(with_: dev.latvian.mods.rhino.util.unit.Unit): dev.latvian.mods.rhino.util.unit.Unit;
        gt(with_: dev.latvian.mods.rhino.util.unit.Unit): dev.latvian.mods.rhino.util.unit.Unit;
        abs(): dev.latvian.mods.rhino.util.unit.Unit;
        getAsBoolean(): boolean;
        equals(arg0: any): boolean;
        toString(): string;
        append(arg0: Internal.StringBuilder): void;
        get asInt(): number;
        get fixed(): boolean;
        get class(): Internal.Class<any>;
        get asBoolean(): boolean;
        /**
         * Internal constructor, this means that it's not valid and you will get an error if you use it.
         */
        protected constructor();
    }
    type Unit_ = Unit;
}
declare namespace net.minecraftforge.client.model.pipeline {
    interface IVertexConsumer {
        setQuadOrientation(arg0: Internal.Direction_): void;
        setTexture(arg0: Internal.TextureAtlasSprite): void;
        setApplyDiffuseLighting(arg0: boolean): void;
        setQuadTint(arg0: number): void;
        getVertexFormat(): Internal.VertexFormat;
        put(arg0: number, arg1: number[]): void;
    }
    type IVertexConsumer_ = IVertexConsumer;
}
declare namespace java_.util.concurrent {
    interface Callable <V> {
        call(): V;
    }
    type Callable_<V> = (() => V) | Callable<V>;
    interface Future <V> {
        cancel(arg0: boolean): boolean;
        resultNow(): V;
        isCancelled(): boolean;
        exceptionNow(): Internal.Throwable;
        get(arg0: number, arg1: Internal.TimeUnit_): V;
        get(): V;
        state(): Internal.Future$State;
        isDone(): boolean;
    }
    type Future_<V> = Future<V>;
}
declare namespace org.apache.logging.log4j.message {
    interface Message extends Internal.Serializable {
        getParameters(): any[];
        getFormattedMessage(): string;
        getFormat(): string;
        getThrowable(): Internal.Throwable;
    }
    type Message_ = Message;
}
declare namespace org.apache.logging.log4j.util {
    interface Supplier <T> {
        get(): T;
    }
    type Supplier_<T> = Supplier<T>;
}
declare namespace com.mojang.datafixers.types {
    abstract class Type <A> implements Internal.App<Internal.Type$Mu, A> {
        template(): Internal.TypeTemplate;
        getClass(): Internal.Class<any>;
        wait(arg0: number): void;
        wait(arg0: number, arg1: number): void;
        wait(): void;
        updateMu(arg0: Internal.RecursiveTypeFamily): com.mojang.datafixers.types.Type<any>;
        findTypeInChildren<FT_, FR_>(arg0: com.mojang.datafixers.types.Type<FT_>, arg1: com.mojang.datafixers.types.Type<FR_>, arg2: Internal.Type$TypeMatcher<FT_, FR_>, arg3: boolean): Internal.Either<Internal.TypedOptic<A, any, FT_, FR_>, Internal.Type$FieldNotFoundException>;
        notifyAll(): void;
        rewriteOrNop(arg0: Internal.TypeRewriteRule): Internal.RewriteResult<A, any>;
        notify(): void;
        point(arg0: Internal.DynamicOps<any>): Internal.Optional<A>;
        findChoiceType(arg0: string, arg1: number): Internal.Optional<Internal.TaggedChoice$TaggedChoiceType<any>>;
        ifSame<B_>(arg0: com.mojang.datafixers.types.Type<B_>, arg1: B_): Internal.Optional<A>;
        ifSame<B_>(arg0: Internal.Typed<B_>): Internal.Optional<A>;
        ifSame<B_>(arg0: com.mojang.datafixers.types.Type<B_>, arg1: Internal.RewriteResult<B_, any>): Internal.Optional<Internal.RewriteResult<A, any>>;
        hashCode(): number;
        findType<FT_, FR_>(arg0: com.mojang.datafixers.types.Type<FT_>, arg1: com.mojang.datafixers.types.Type<FR_>, arg2: Internal.Type$TypeMatcher<FT_, FR_>, arg3: boolean): Internal.Either<Internal.TypedOptic<A, any, FT_, FR_>, Internal.Type$FieldNotFoundException>;
        static opticView<S_, T_, A_, B_>(arg0: com.mojang.datafixers.types.Type<S_>, arg1: Internal.RewriteResult<A_, B_>, arg2: Internal.TypedOptic<S_, T_, A_, B_>): Internal.RewriteResult<S_, T_>;
        pointTyped(arg0: Internal.DynamicOps<any>): Internal.Optional<Internal.Typed<A>>;
        getSetType<FT_, FR_>(arg0: Internal.OpticFinder<FT_>, arg1: com.mojang.datafixers.types.Type<FR_>): com.mojang.datafixers.types.Type<any>;
        readAndWrite<T_>(arg0: Internal.DynamicOps<T_>, arg1: com.mojang.datafixers.types.Type<any>, arg2: Internal.TypeRewriteRule, arg3: Internal.PointFreeRule, arg4: T_): Internal.DataResult<T_>;
        write<T_>(arg0: Internal.DynamicOps<T_>, arg1: A): Internal.DataResult<T_>;
        findCheckedType(arg0: number): Internal.Optional<com.mojang.datafixers.types.Type<any>>;
        all(arg0: Internal.TypeRewriteRule, arg1: boolean, arg2: boolean): Internal.RewriteResult<A, any>;
        writeDynamic<T_>(arg0: Internal.DynamicOps<T_>, arg1: A): Internal.DataResult<Internal.Dynamic<T_>>;
        read<T_>(arg0: Internal.Dynamic<T_>): Internal.DataResult<com.mojang.datafixers.util.Pair<A, Internal.Dynamic<T_>>>;
        read<T_>(arg0: Internal.DynamicOps<T_>, arg1: Internal.TypeRewriteRule, arg2: Internal.PointFreeRule, arg3: T_): Internal.DataResult<com.mojang.datafixers.util.Pair<Internal.Optional<any>, T_>>;
        one(arg0: Internal.TypeRewriteRule): Internal.Optional<Internal.RewriteResult<A, any>>;
        rewrite(arg0: Internal.TypeRewriteRule, arg1: Internal.PointFreeRule): Internal.Optional<Internal.RewriteResult<A, any>>;
        finder(): Internal.OpticFinder<A>;
        codec(): Internal.Codec<A>;
        everywhere(arg0: Internal.TypeRewriteRule, arg1: Internal.PointFreeRule, arg2: boolean, arg3: boolean): Internal.Optional<Internal.RewriteResult<A, any>>;
        static unbox<A_>(arg0: Internal.App<Internal.Type$Mu, A_>): com.mojang.datafixers.types.Type<A_>;
        equals(arg0: any): boolean;
        equals(arg0: any, arg1: boolean, arg2: boolean): boolean;
        findFieldType(arg0: string): com.mojang.datafixers.types.Type<any>;
        toString(): string;
        buildTemplate(): Internal.TypeTemplate;
        findField(arg0: string): Internal.OpticFinder<any>;
        readTyped<T_>(arg0: Internal.DynamicOps<T_>, arg1: T_): Internal.DataResult<com.mojang.datafixers.util.Pair<Internal.Typed<A>, T_>>;
        readTyped<T_>(arg0: Internal.Dynamic<T_>): Internal.DataResult<com.mojang.datafixers.util.Pair<Internal.Typed<A>, T_>>;
        findFieldTypeOpt(arg0: string): Internal.Optional<com.mojang.datafixers.types.Type<any>>;
        findTypeCached<FT_, FR_>(arg0: com.mojang.datafixers.types.Type<FT_>, arg1: com.mojang.datafixers.types.Type<FR_>, arg2: Internal.Type$TypeMatcher<FT_, FR_>, arg3: boolean): Internal.Either<Internal.TypedOptic<A, any, FT_, FR_>, Internal.Type$FieldNotFoundException>;
        get class(): Internal.Class<any>;
        /**
         * Internal constructor, this means that it's not valid and you will get an error if you use it.
         */
        protected constructor();
    }
    type Type_<A> = Type<A>;
}
declare namespace dev.latvian.mods.rhino {
    interface Function extends Internal.Scriptable, Internal.Callable {
        hasInstance(arg0: Internal.Scriptable): boolean;
        setParentScope(arg0: Internal.Scriptable): void;
        getIds(): any[];
        construct(arg0: dev.latvian.mods.rhino.Context, arg1: Internal.Scriptable, arg2: any[]): Internal.Scriptable;
        delete(arg0: number): void;
        delete(arg0: string): void;
        put(arg0: number, arg1: Internal.Scriptable, arg2: any): void;
        put(arg0: string, arg1: Internal.Scriptable, arg2: any): void;
        getDefaultValue(arg0: Internal.Class<any>): any;
        setPrototype(arg0: Internal.Scriptable): void;
        getPrototype(): Internal.Scriptable;
        call(arg0: dev.latvian.mods.rhino.Context, arg1: Internal.Scriptable, arg2: Internal.Scriptable, arg3: any[]): any;
        get(arg0: number, arg1: Internal.Scriptable): any;
        get(arg0: string, arg1: Internal.Scriptable): any;
        has(arg0: string, arg1: Internal.Scriptable): boolean;
        has(arg0: number, arg1: Internal.Scriptable): boolean;
        getClassName(): string;
        getParentScope(): Internal.Scriptable;
    }
    type Function_ = Function;
    class Context {
        getClass(): Internal.Class<any>;
        static throwAsScriptRuntimeEx(e: Internal.Throwable): Internal.RuntimeException;
        isSealed(): boolean;
        isGeneratingDebugChanged(): boolean;
        callFunctionWithContinuations(function_: Internal.Callable, scope: Internal.Scriptable, args: any[]): any;
        getClassShutterSetter(): Internal.Context$ClassShutterSetter;
        executeScriptWithContinuations(script: Internal.Script, scope: Internal.Scriptable): any;
        createClassLoader(parent: Internal.ClassLoader): Internal.GeneratedClassLoader;
        static getDebuggableView(script: Internal.Script): Internal.DebuggableScript;
        getApplicationClassLoader(): Internal.ClassLoader;
        evaluateReader(scope: Internal.Scriptable, in_: Internal.Reader, sourceName: string, lineno: number, securityDomain: any): any;
        getTypeWrappers(): Internal.TypeWrappers;
        compileReader(in_: Internal.Reader, sourceName: string, lineno: number, securityDomain: any): Internal.Script;
        static javaToJS(value: any, scope: Internal.Scriptable): any;
        static toBoolean(value: any): boolean;
        getDebugger(): Internal.Debugger;
        removeActivationName(name: string): void;
        setDebugger(debugger_: Internal.Debugger, contextData: any): void;
        captureContinuation(): Internal.ContinuationPending;
        resumeContinuation(continuation: any, scope: Internal.Scriptable, functionResult: any): any;
        static enter(): dev.latvian.mods.rhino.Context;
        static reportRuntimeError0(messageId: string): Internal.EvaluatorException;
        static reportRuntimeError1(messageId: string, arg1: any): Internal.EvaluatorException;
        isActivationNeeded(name: string): boolean;
        static reportRuntimeError2(messageId: string, arg1: any, arg2: any): Internal.EvaluatorException;
        setGeneratingSource(generatingSource: boolean): void;
        static reportRuntimeError3(messageId: string, arg1: any, arg2: any, arg3: any): Internal.EvaluatorException;
        static reportRuntimeError(message: string): Internal.EvaluatorException;
        static reportRuntimeError(message: string, sourceName: string, lineno: number, lineSource: string, lineOffset: number): Internal.EvaluatorException;
        hasTypeWrappers(): boolean;
        getInstructionObserverThreshold(): number;
        getThreadLocal(key: any): any;
        removePropertyChangeListener(l: Internal.PropertyChangeListener): void;
        static getUndefinedValue(): any;
        putThreadLocal(key: any, value: any): void;
        setClassShutter(shutter: Internal.ClassShutter): void;
        static exit(): void;
        setGeneratingDebug(generatingDebug: boolean): void;
        setInstructionObserverThreshold(threshold: number): void;
        getElements(object: Internal.Scriptable): any[];
        static reportRuntimeError4(messageId: string, arg1: any, arg2: any, arg3: any, arg4: any): Internal.EvaluatorException;
        hasFeature(featureIndex: number): boolean;
        initSafeStandardObjects(scope: Internal.ScriptableObject, sealed: boolean): Internal.ScriptableObject;
        initSafeStandardObjects(scope: Internal.ScriptableObject): Internal.Scriptable;
        initSafeStandardObjects(): Internal.ScriptableObject;
        static toNumber(value: any): number;
        setLocale(loc: Internal.Locale): Internal.Locale;
        initStandardObjects(): Internal.ScriptableObject;
        initStandardObjects(scope: Internal.ScriptableObject): Internal.Scriptable;
        initStandardObjects(scope: Internal.ScriptableObject, sealed: boolean): Internal.ScriptableObject;
        isStrictMode(): boolean;
        wait(arg0: number): void;
        wait(arg0: number, arg1: number): void;
        wait(): void;
        setApplicationClassLoader(loader: Internal.ClassLoader): void;
        getWrapFactory(): Internal.WrapFactory;
        notifyAll(): void;
        setGenerateObserverCount(generateObserverCount: boolean): void;
        seal(sealKey: any): void;
        setWrapFactory(wrapFactory: Internal.WrapFactory): void;
        evaluateString(scope: Internal.Scriptable, source: string, sourceName: string, lineno: number, securityDomain: any): any;
        notify(): void;
        setSecurityController(controller: Internal.SecurityController): void;
        compileFunction(scope: Internal.Scriptable, source: string, sourceName: string, lineno: number, securityDomain: any): dev.latvian.mods.rhino.Function;
        getClassShutter(): Internal.ClassShutter;
        setErrorReporter(reporter: Internal.ErrorReporter): Internal.ErrorReporter;
        hashCode(): number;
        newObject(scope: Internal.Scriptable): Internal.Scriptable;
        newObject(scope: Internal.Scriptable, constructorName: string): Internal.Scriptable;
        newObject(scope: Internal.Scriptable, constructorName: string, args: any[]): Internal.Scriptable;
        static jsToJava(value: any, desiredType: Internal.Class<any>): any;
        static toObject(value: any, scope: Internal.Scriptable): Internal.Scriptable;
        static getSourcePositionFromStack(linep: number[]): string;
        addPropertyChangeListener(l: Internal.PropertyChangeListener): void;
        static reportWarning(message: string, sourceName: string, lineno: number, lineSource: string, lineOffset: number): void;
        static reportWarning(message: string): void;
        static reportWarning(message: string, t: Internal.Throwable): void;
        setLanguageVersion(version: number): void;
        stringIsCompilableUnit(source: string): boolean;
        removeThreadLocal(key: any): void;
        static getCurrentContext(): dev.latvian.mods.rhino.Context;
        newArray(scope: Internal.Scriptable, length: number): Internal.Scriptable;
        newArray(scope: Internal.Scriptable, elements: any[]): Internal.Scriptable;
        static reportError(message: string): void;
        static reportError(message: string, sourceName: string, lineno: number, lineSource: string, lineOffset: number): void;
        isGeneratingSource(): boolean;
        getFactory(): Internal.ContextFactory;
        getDebuggerContextData(): any;
        getErrorReporter(): Internal.ErrorReporter;
        isGeneratingDebug(): boolean;
        static call(factory: Internal.ContextFactory, callable: Internal.Callable, scope: Internal.Scriptable, thisObj: Internal.Scriptable, args: any[]): any;
        getMaximumInterpreterStackDepth(): number;
        addActivationName(name: string): void;
        setMaximumInterpreterStackDepth(max: number): void;
        equals(arg0: any): boolean;
        compileString(source: string, sourceName: string, lineno: number, securityDomain: any): Internal.Script;
        static toString(value: any): string;
        toString(): string;
        unseal(sealKey: any): void;
        getLocale(): Internal.Locale;
        static getContext(): dev.latvian.mods.rhino.Context;
        static enterWithNewFactory(): dev.latvian.mods.rhino.Context;
        getImplementationVersion(): string;
        static readonly FEATURE_INTEGER_WITHOUT_DECIMAL_PLACE : 18;
        static readonly FEATURE_ENHANCED_JAVA_ACCESS : 13;
        static readonly FEATURE_RESERVED_KEYWORD_AS_IDENTIFIER : 3;
        static readonly FEATURE_DYNAMIC_SCOPE : 7;
        static readonly FEATURE_LITTLE_ENDIAN : 19;
        static readonly FEATURE_THREAD_SAFE_OBJECTS : 17;
        generateObserverCount : boolean;
        static readonly FEATURE_STRICT_MODE : 11;
        static readonly FEATURE_WARNING_AS_ERROR : 12;
        static readonly FEATURE_STRICT_EVAL : 9;
        static readonly FEATURE_LOCATION_INFORMATION_IN_ERROR : 10;
        static readonly errorReporterProperty : "error reporter";
        static readonly FEATURE_V8_EXTENSIONS : 14;
        static readonly FEATURE_STRICT_VARS : 8;
        static readonly FEATURE_MEMBER_EXPR_AS_FUNCTION_NAME : 2;
        static readonly FEATURE_PARENT_PROTO_PROPERTIES : 5;
        static readonly languageVersionProperty : "language version";
        static readonly emptyArgs : any[];
        get factory(): Internal.ContextFactory;
        get undefinedValue(): any;
        get implementationVersion(): string;
        get currentContext(): dev.latvian.mods.rhino.Context;
        get sealed(): boolean;
        get debugger(): Internal.Debugger;
        get strictMode(): boolean;
        get debuggerContextData(): any;
        get maximumInterpreterStackDepth(): number;
        get locale(): Internal.Locale;
        get typeWrappers(): Internal.TypeWrappers;
        get classShutterSetter(): Internal.Context$ClassShutterSetter;
        get generatingDebug(): boolean;
        get errorReporter(): Internal.ErrorReporter;
        get generatingDebugChanged(): boolean;
        get applicationClassLoader(): Internal.ClassLoader;
        get wrapFactory(): Internal.WrapFactory;
        get context(): dev.latvian.mods.rhino.Context;
        get class(): Internal.Class<any>;
        get instructionObserverThreshold(): number;
        get classShutter(): Internal.ClassShutter;
        get generatingSource(): boolean;
        set generatingDebug(generatingDebug: boolean);
        set errorReporter(reporter: Internal.ErrorReporter);
        set languageVersion(version: number);
        set applicationClassLoader(loader: Internal.ClassLoader);
        set wrapFactory(wrapFactory: Internal.WrapFactory);
        set maximumInterpreterStackDepth(max: number);
        set securityController(controller: Internal.SecurityController);
        set locale(loc: Internal.Locale);
        set instructionObserverThreshold(threshold: number);
        set classShutter(shutter: Internal.ClassShutter);
        set generatingSource(generatingSource: boolean);
        /**
         * Internal constructor, this means that it's not valid and you will get an error if you use it.
         */
        protected constructor();
    }
    type Context_ = Context;
}
declare namespace dev.latvian.mods.rhino.util {
    interface MapLike <K, T> extends Internal.CustomJavaObjectWrapper {
        wrapAsJavaObject(cx: dev.latvian.mods.rhino.Context, scope: Internal.Scriptable, staticType: Internal.Class<any>): Internal.Scriptable;
        containsKeyML(key: K): boolean;
        clearML(): void;
        removeML(key: K): void;
        keysML(): Internal.Collection<K>;
        getML(arg0: K): T;
        putML(key: K, value: T): void;
    }
    type MapLike_<K, T> = MapLike<K, T>;
}
declare namespace java_.nio.channels {
    interface Channel extends Internal.Closeable {
        isOpen(): boolean;
        close(): void;
    }
    type Channel_ = Channel;
}
declare namespace com.mojang.datafixers.util {
    class Pair <F, S> implements Internal.App<Internal.Pair$Mu<S>, F> {
        getClass(): Internal.Class<any>;
        wait(arg0: number): void;
        wait(arg0: number, arg1: number): void;
        wait(): void;
        swap(): com.mojang.datafixers.util.Pair<S, Internal.Pair$Mu<S>>;
        notifyAll(): void;
        notify(): void;
        mapFirst<F2_>(arg0: ((arg0: Internal.Pair$Mu<S>) => F2_)): com.mojang.datafixers.util.Pair<F2_, S>;
        static unbox<F_, S_>(arg0: Internal.App<Internal.Pair$Mu<S_>, F_>): com.mojang.datafixers.util.Pair<F_, S_>;
        getFirst(): Internal.Pair$Mu<S>;
        hashCode(): number;
        static toMap<F_, S_>(): Internal.Collector<com.mojang.datafixers.util.Pair<F_, S_>, any, Internal.Map<F_, S_>>;
        static of<F_, S_>(arg0: F_, arg1: S_): com.mojang.datafixers.util.Pair<F_, S_>;
        equals(arg0: any): boolean;
        getSecond(): S;
        toString(): string;
        mapSecond<S2_>(arg0: ((arg0: S) => S2_)): com.mojang.datafixers.util.Pair<Internal.Pair$Mu<S>, S2_>;
        get class(): Internal.Class<any>;
        get first(): Internal.Pair$Mu<S>;
        get second(): S;
        /**
         * Internal constructor, this means that it's not valid and you will get an error if you use it.
         */
        protected constructor();
    }
    type Pair_<F, S> = Pair<F, S>;
}
declare namespace Document {
    class RecipeHolder {
        /**
        * All recipes from Minecraft.
        */
        readonly minecraft: Document.MinecraftRecipes;
    }
    class MinecraftRecipes {
        /**
        * Adds a smelting recipe to Minecraft.
        *
        * This is used by Furnaces.
        */
        smelting(output: dev.latvian.kubejs.item.ItemStackJS, input): Internal.CookingRecipeJS;
        /**
        * Adds a smelting recipe to Minecraft.
        *
        * This is used by Smokers.
        */
        smoking(output: dev.latvian.kubejs.item.ItemStackJS, input): Internal.CookingRecipeJS;
        /**
        * Adds a smelting recipe to Minecraft.
        *
        * This is used by Blast Furnaces.
        */
        blasting(output: dev.latvian.kubejs.item.ItemStackJS, input): Internal.CookingRecipeJS;
        /**
        * Adds a shaped crafting recipe.
        */
        crafting_shaped(output: dev.latvian.kubejs.item.ItemStackJS, pattern): Internal.ShapedRecipeJS;
        /**
        * Adds a shapeless crafting recipe.
        */
        crafting_shapeless(output: dev.latvian.kubejs.item.ItemStackJS, inputs): Internal.ShapelessRecipeJS;
        /**
        * Adds a smelting recipe to Minecraft.
        *
        * This is used by Camefire.
        */
        camefire_cooking(output: dev.latvian.kubejs.item.ItemStackJS, input): Internal.CookingRecipeJS;
        /**
        * Adds a stonecutting recipe.
        */
        stonecutting(output: dev.latvian.kubejs.item.ItemStackJS, inputs): Internal.StonecuttingRecipeJS;
        /**
        * Adds a smithing recipe.
        */
        smithing(output: dev.latvian.kubejs.item.ItemStackJS, base): Internal.SmithingRecipeJS;
    }
}
declare namespace Type {
}
declare namespace TSDoc {
}
declare namespace stub.probejs {
    class recipeHolder {
        readonly minecraft : stub.probejs.minecraft
        readonly kubejs : stub.probejs.kubejs
        readonly thermal : stub.probejs.thermal
        readonly custommachinery : stub.probejs.custommachinery
    }
    class minecraft {
        stonecutting(...args: object): Internal.StonecuttingRecipeJS
        crafting_shaped(...args: object): Internal.ShapedRecipeJS
        smithing(...args: object): Internal.SmithingRecipeJS
        crafting_shapeless(...args: object): Internal.ShapelessRecipeJS
        smoking(...args: object): Internal.CookingRecipeJS
        smelting(...args: object): Internal.CookingRecipeJS
        blasting(...args: object): Internal.CookingRecipeJS
        campfire_cooking(...args: object): Internal.CookingRecipeJS
    }
    class kubejs {
        shapeless(...args: object): Internal.ShapelessRecipeJS
        shaped(...args: object): Internal.ShapedRecipeJS
    }
    class thermal {
        rock_gen(...args: object): Internal.RockGenMappingRecipeJS
        chiller(...args: object): Internal.BasicThermalRecipeJS
        insolator_catalyst(...args: object): Internal.CatalystRecipeJS
        insolator(...args: object): Internal.InsolatorRecipeJS
        potion_diffuser_boost(...args: object): Internal.PotionDiffuserBoostRecipeJS
        centrifuge(...args: object): Internal.BasicThermalRecipeJS
        stirling_fuel(...args: object): Internal.FuelRecipeJS
        lapidary_fuel(...args: object): Internal.FuelRecipeJS
        tree_extractor_boost(...args: object): Internal.TreeExtractorBoostRecipeJS
        press(...args: object): Internal.BasicThermalRecipeJS
        crucible(...args: object): Internal.BasicThermalRecipeJS
        sawmill(...args: object): Internal.BasicThermalRecipeJS
        pulverizer(...args: object): Internal.BasicThermalRecipeJS
        smelter(...args: object): Internal.BasicThermalRecipeJS
        pulverizer_catalyst(...args: object): Internal.CatalystRecipeJS
        smelter_catalyst(...args: object): Internal.CatalystRecipeJS
        furnace(...args: object): Internal.BasicThermalRecipeJS
        pyrolyzer(...args: object): Internal.BasicThermalRecipeJS
        fisher_boost(...args: object): Internal.FisherBoostRecipeJS
        compression_fuel(...args: object): Internal.FuelRecipeJS
        brewer(...args: object): Internal.BasicThermalRecipeJS
        magmatic_fuel(...args: object): Internal.FuelRecipeJS
        refinery(...args: object): Internal.BasicThermalRecipeJS
        tree_extractor(...args: object): Internal.TreeExtractorMappingRecipeJS
        numismatic_fuel(...args: object): Internal.FuelRecipeJS
        bottler(...args: object): Internal.BasicThermalRecipeJS
    }
    class custommachinery {
        custom_machine(...args: object): Internal.CustomMachineJSRecipeBuilder
    }
}
