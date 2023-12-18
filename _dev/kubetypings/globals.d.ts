declare class Item extends Internal.ItemStackJS {}

declare class JavaMath {
    static abs(arg0: number): number;
    static abs(arg0: number): number;
    static abs(arg0: number): number;
    static abs(arg0: number): number;
    static sin(arg0: number): number;
    static cos(arg0: number): number;
    static tan(arg0: number): number;
    static atan2(arg0: number, arg1: number): number;
    static sqrt(arg0: number): number;
    static log(arg0: number): number;
    static log10(arg0: number): number;
    static pow(arg0: number, arg1: number): number;
    static exp(arg0: number): number;
    static min(arg0: number, arg1: number): number;
    static min(arg0: number, arg1: number): number;
    static min(arg0: number, arg1: number): number;
    static min(arg0: number, arg1: number): number;
    static max(arg0: number, arg1: number): number;
    static max(arg0: number, arg1: number): number;
    static max(arg0: number, arg1: number): number;
    static max(arg0: number, arg1: number): number;
    static floor(arg0: number): number;
    static ceil(arg0: number): number;
    static rint(arg0: number): number;
    static addExact(arg0: number, arg1: number): number;
    static addExact(arg0: number, arg1: number): number;
    static decrementExact(arg0: number): number;
    static decrementExact(arg0: number): number;
    static incrementExact(arg0: number): number;
    static incrementExact(arg0: number): number;
    static multiplyExact(arg0: number, arg1: number): number;
    static multiplyExact(arg0: number, arg1: number): number;
    static multiplyExact(arg0: number, arg1: number): number;
    static multiplyHigh(arg0: number, arg1: number): number;
    static negateExact(arg0: number): number;
    static negateExact(arg0: number): number;
    static subtractExact(arg0: number, arg1: number): number;
    static subtractExact(arg0: number, arg1: number): number;
    static fma(arg0: number, arg1: number, arg2: number): number;
    static fma(arg0: number, arg1: number, arg2: number): number;
    static copySign(arg0: number, arg1: number): number;
    static copySign(arg0: number, arg1: number): number;
    static signum(arg0: number): number;
    static signum(arg0: number): number;
    static scalb(arg0: number, arg1: number): number;
    static scalb(arg0: number, arg1: number): number;
    static getExponent(arg0: number): number;
    static getExponent(arg0: number): number;
    static floorMod(arg0: number, arg1: number): number;
    static floorMod(arg0: number, arg1: number): number;
    static floorMod(arg0: number, arg1: number): number;
    static asin(arg0: number): number;
    static acos(arg0: number): number;
    static atan(arg0: number): number;
    static cbrt(arg0: number): number;
    static IEEEremainder(arg0: number, arg1: number): number;
    static floorDiv(arg0: number, arg1: number): number;
    static floorDiv(arg0: number, arg1: number): number;
    static floorDiv(arg0: number, arg1: number): number;
    static sinh(arg0: number): number;
    static cosh(arg0: number): number;
    static tanh(arg0: number): number;
    static hypot(arg0: number, arg1: number): number;
    static expm1(arg0: number): number;
    static log1p(arg0: number): number;
    static toRadians(arg0: number): number;
    static toDegrees(arg0: number): number;
    static round(arg0: number): number;
    static round(arg0: number): number;
    static random(): number;
    static toIntExact(arg0: number): number;
    static multiplyFull(arg0: number, arg1: number): number;
    static absExact(arg0: number): number;
    static absExact(arg0: number): number;
    static ulp(arg0: number): number;
    static ulp(arg0: number): number;
    static nextAfter(arg0: number, arg1: number): number;
    static nextAfter(arg0: number, arg1: number): number;
    static nextUp(arg0: number): number;
    static nextUp(arg0: number): number;
    static nextDown(arg0: number): number;
    static nextDown(arg0: number): number;
    readonly static E: 2.718281828459045 & number;
    readonly static PI: 3.141592653589793 & number;
}
declare class item {
    readonly static typeList: Internal.ListJS;
    readonly static list: Internal.ListJS;
    readonly static empty: Internal.ItemStackJS;
    static of(_in: Internal.ItemStackJS, count: number, nbt: Internal.CompoundNBT): Internal.ItemStackJS;
    static of(_in: Internal.ItemStackJS, tag: Internal.CompoundNBT): Internal.ItemStackJS;
    static of(_in: Internal.ItemStackJS, count: number): Internal.ItemStackJS;
    static of(_in: Internal.ItemStackJS): Internal.ItemStackJS;
    static exists(id: ResourceLocation): boolean;
    static getItem(id: ResourceLocation): Internal.Item;
    static isItem(o: object): boolean;
    static findGroup(id: string): Internal.ItemGroup;
    static clearListCache(): void;
    static withChance(_in: Internal.ItemStackJS, c: number): Internal.ItemStackJS;
    static withNBT(_in: Internal.ItemStackJS, nbt: Internal.CompoundNBT): Internal.ItemStackJS;
    static fireworks(properties: Internal.Map<string, object>): Internal.FireworksJS;
    constructor();
}
declare interface NBT {
    static stringTag(v: string): Internal.INBT;
    static i(v: number): Internal.INBT;
    static b(v: number): Internal.INBT;
    static ba(v: number[]): Internal.INBT;
    static s(v: number): Internal.INBT;
    static f(v: number): Internal.INBT;
    static l(v: number): Internal.INBT;
    static d(v: number): Internal.INBT;
    static ia(v: number[]): Internal.INBT;
    static la(v: number[]): Internal.INBT;
    static longTag(v: number): Internal.INBT;
    static listTag(): Internal.INBT;
    static intTag(v: number): Internal.INBT;
    static shortTag(v: number): Internal.INBT;
    static doubleTag(v: number): Internal.INBT;
    static intArrayTag(v: number[]): Internal.INBT;
    static byteArrayTag(v: number[]): Internal.INBT;
    static longArrayTag(v: number[]): Internal.INBT;
    static floatTag(v: number): Internal.INBT;
    static byteTag(v: number): Internal.INBT;
    static compoundTag(): Internal.INBT;
    static toTag(v: object): Internal.INBT;
    static fromTag(t: Internal.INBT): object;
}
declare const NBT: NBT;
declare class Rarity {
    readonly static COMMON: Rarity;
    readonly static UNCOMMON: Rarity;
    readonly static RARE: Rarity;
    readonly static EPIC: Rarity;
    readonly rarity: Internal.Rarity;
}
declare class string extends Internal.Serializable, Internal.Comparable<string>, Internal.CharSequence, Internal.Constable, Internal.ConstantDesc{
    readonly empty: boolean;
    readonly blank: boolean;
    readonly bytes: number[];
    equals(arg0: object): boolean;
    length(): number;
    toString(): string;
    hashCode(): number;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    compareTo(arg0: string): number;
    compareTo(arg0: object): number;
    indexOf(arg0: number): number;
    indexOf(arg0: string): number;
    indexOf(arg0: string, arg1: number): number;
    indexOf(arg0: number, arg1: number): number;
    static valueOf(arg0: number): string;
    static valueOf(arg0: string[]): string;
    static valueOf(arg0: object): string;
    static valueOf(arg0: boolean): string;
    static valueOf(arg0: string[], arg1: number, arg2: number): string;
    static valueOf(arg0: string): string;
    static valueOf(arg0: number): string;
    static valueOf(arg0: number): string;
    static valueOf(arg0: number): string;
    charAt(arg0: number): string;
    codePointAt(arg0: number): number;
    codePointBefore(arg0: number): number;
    codePointCount(arg0: number, arg1: number): number;
    offsetByCodePoints(arg0: number, arg1: number): number;
    getBytes(arg0: Internal.Charset): number[];
    getBytes(arg0: string): number[];
    getBytes(arg0: number, arg1: number, arg2: number[], arg3: number): void;
    contentEquals(arg0: Internal.CharSequence): boolean;
    contentEquals(arg0: Internal.StringBuffer): boolean;
    regionMatches(arg0: boolean, arg1: number, arg2: string, arg3: number, arg4: number): boolean;
    regionMatches(arg0: number, arg1: string, arg2: number, arg3: number): boolean;
    startsWith(arg0: string, arg1: number): boolean;
    startsWith(arg0: string): boolean;
    lastIndexOf(arg0: string): number;
    lastIndexOf(arg0: string, arg1: number): number;
    lastIndexOf(arg0: number, arg1: number): number;
    lastIndexOf(arg0: number): number;
    substring(arg0: number, arg1: number): string;
    substring(arg0: number): string;
    replace(arg0: string, arg1: string): string;
    replace(arg0: Internal.CharSequence, arg1: Internal.CharSequence): string;
    matches(arg0: string): boolean;
    replaceFirst(arg0: string, arg1: string): string;
    replaceAll(arg0: string, arg1: string): string;
    split(arg0: string): string[];
    split(arg0: string, arg1: number): string[];
    static join(arg0: Internal.CharSequence, arg1: Internal.CharSequence[]): string;
    static join(arg0: Internal.CharSequence, arg1: Internal.Iterable<Internal.CharSequence>): string;
    toLowerCase(): string;
    toLowerCase(arg0: Internal.Locale): string;
    toUpperCase(): string;
    toUpperCase(arg0: Internal.Locale): string;
    trim(): string;
    strip(): string;
    stripLeading(): string;
    stripTrailing(): string;
    lines(): Internal.Stream<string>;
    repeat(arg0: number): string;
    toCharArray(): string[];
    static format(arg0: string, arg1: object[]): string;
    static format(arg0: Internal.Locale, arg1: string, arg2: object[]): string;
    resolveConstantDesc(arg0: Internal.MethodHandles$Lookup): object;
    resolveConstantDesc(arg0: Internal.MethodHandles$Lookup): string;
    codePoints(): Internal.IntStream;
    equalsIgnoreCase(arg0: string): boolean;
    compareToIgnoreCase(arg0: string): number;
    endsWith(arg0: string): boolean;
    subSequence(arg0: number, arg1: number): Internal.CharSequence;
    concat(arg0: string): string;
    contains(arg0: Internal.CharSequence): boolean;
    indent(arg0: number): string;
    stripIndent(): string;
    translateEscapes(): string;
    chars(): Internal.IntStream;
    transform(arg0: (arg0: string) => R): R;
    formatted(arg0: object[]): string;
    static copyValueOf(arg0: string[], arg1: number, arg2: number): string;
    static copyValueOf(arg0: string[]): string;
    intern(): string;
    describeConstable(): Internal.Optional<string>;
    readonly static CASE_INSENSITIVE_ORDER: Internal.Comparator<string>;
    constructor(arg0: Internal.StringBuffer);
    constructor(arg0: Internal.StringBuilder);
    constructor(arg0: number[], arg1: number, arg2: number, arg3: Internal.Charset);
    constructor(arg0: number[], arg1: string);
    constructor(arg0: number[], arg1: Internal.Charset);
    constructor(arg0: number[], arg1: number, arg2: number);
    constructor(arg0: number[]);
    constructor(arg0: string[], arg1: number, arg2: number);
    constructor(arg0: string[]);
    constructor(arg0: string);
    constructor();
    constructor(arg0: number[], arg1: number, arg2: number, arg3: string);
    constructor(arg0: number[], arg1: number);
    constructor(arg0: number[], arg1: number, arg2: number, arg3: number);
    constructor(arg0: number[], arg1: number, arg2: number);
}
declare interface Color {
    static of(o: object): Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    static createMapped(o: object, names: string[]): Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    static rgba(r: number, g: number, b: number, a: number): Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static MAP: {"": Unknown.NoColor, "light_blue_dye": Internal.DyeColor, "BLUE_DYE": Internal.DyeColor, "purple_dye": Internal.DyeColor, "dark_red": Internal.TextFormatting, "lightGrayDye": Internal.DyeColor, "DARK_AQUA": Internal.TextFormatting, "none": Unknown.NoColor, "green_dye": Internal.DyeColor, "blackDye": Internal.DyeColor, "dark_blue": Internal.TextFormatting, "red": Internal.TextFormatting, "pink_dye": Internal.DyeColor, "aqua": Internal.TextFormatting, "white": Internal.TextFormatting, "WHITE_DYE": Internal.DyeColor, "dark_gray": Internal.TextFormatting, "LIGHT_PURPLE": Internal.TextFormatting, "BROWN_DYE": Internal.DyeColor, "BLACK": Internal.TextFormatting, "darkPurple": Internal.TextFormatting, "NONE": Unknown.NoColor, "LIGHT_BLUE_DYE": Internal.DyeColor, "AQUA": Internal.TextFormatting, "lightBlueDye": Internal.DyeColor, "limeDye": Internal.DyeColor, "PURPLE_DYE": Internal.DyeColor, "GREEN_DYE": Internal.DyeColor, "magenta_dye": Internal.DyeColor, "-": Unknown.NoColor, "lime_dye": Internal.DyeColor, "yellowDye": Internal.DyeColor, "grayDye": Internal.DyeColor, "purpleDye": Internal.DyeColor, "DARK_PURPLE": Internal.TextFormatting, "ORANGE_DYE": Internal.DyeColor, "darkGray": Internal.TextFormatting, "brownDye": Internal.DyeColor, "YELLOW": Internal.TextFormatting, "LIME_DYE": Internal.DyeColor, "blueDye": Internal.DyeColor, "white_dye": Internal.DyeColor, "pinkDye": Internal.DyeColor, "blue_dye": Internal.DyeColor, "cyanDye": Internal.DyeColor, "GOLD": Internal.TextFormatting, "GRAY": Internal.TextFormatting, "MAGENTA_DYE": Internal.DyeColor, "BLUE": Internal.TextFormatting, "yellow": Internal.TextFormatting, "darkBlue": Internal.TextFormatting, "transparent": Unknown.NoColor, "orange_dye": Internal.DyeColor, "red_dye": Internal.DyeColor, "dark_purple": Internal.TextFormatting, "gold": Internal.TextFormatting, "gray": Internal.TextFormatting, "light_purple": Internal.TextFormatting, "darkRed": Internal.TextFormatting, "greenDye": Internal.DyeColor, "DARK_RED": Internal.TextFormatting, "redDye": Internal.DyeColor, "GRAY_DYE": Internal.DyeColor, "orangeDye": Internal.DyeColor, "yellow_dye": Internal.DyeColor, "black_dye": Internal.DyeColor, "magentaDye": Internal.DyeColor, "WHITE": Internal.TextFormatting, "green": Internal.TextFormatting, "LIGHT_GRAY_DYE": Internal.DyeColor, "BLACK_DYE": Internal.DyeColor, "darkGreen": Internal.TextFormatting, "RED_DYE": Internal.DyeColor, "dark_green": Internal.TextFormatting, "black": Internal.TextFormatting, "lightPurple": Internal.TextFormatting, "PINK_DYE": Internal.DyeColor, "DARK_BLUE": Internal.TextFormatting, "GREEN": Internal.TextFormatting, "darkAqua": Internal.TextFormatting, "gray_dye": Internal.DyeColor, "CYAN_DYE": Internal.DyeColor, "RED": Internal.TextFormatting, "brown_dye": Internal.DyeColor, "cyan_dye": Internal.DyeColor, "blue": Internal.TextFormatting, "whiteDye": Internal.DyeColor, "dark_aqua": Internal.TextFormatting, "YELLOW_DYE": Internal.DyeColor, "DARK_GREEN": Internal.TextFormatting, "DARK_GRAY": Internal.TextFormatting} & Internal.Map<string, Internal.dev.latvian.mods.rhino.mod.util.color.Color>;
    readonly static NONE: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static BLACK: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static DARK_BLUE: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static DARK_GREEN: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static DARK_AQUA: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static DARK_RED: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static DARK_PURPLE: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static GOLD: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static GRAY: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static DARK_GRAY: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static BLUE: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static GREEN: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static AQUA: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static RED: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static LIGHT_PURPLE: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static YELLOW: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static WHITE: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static TEXT: {"dark_red": Internal.TextFormatting, "green": Internal.TextFormatting, "underline": Internal.TextFormatting, "dark_green": Internal.TextFormatting, "black": Internal.TextFormatting, "yellow": Internal.TextFormatting, "bold": Internal.TextFormatting, "italic": Internal.TextFormatting, "dark_blue": Internal.TextFormatting, "dark_purple": Internal.TextFormatting, "gold": Internal.TextFormatting, "red": Internal.TextFormatting, "aqua": Internal.TextFormatting, "gray": Internal.TextFormatting, "light_purple": Internal.TextFormatting, "blue": Internal.TextFormatting, "white": Internal.TextFormatting, "dark_aqua": Internal.TextFormatting, "dark_gray": Internal.TextFormatting, "reset": Internal.TextFormatting, "strikethrough": Internal.TextFormatting, "obfuscated": Internal.TextFormatting} & Internal.Map<string, Internal.TextFormatting>;
    readonly static WHITE_DYE: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static ORANGE_DYE: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static MAGENTA_DYE: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static LIGHT_BLUE_DYE: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static YELLOW_DYE: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static LIME_DYE: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static PINK_DYE: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static GRAY_DYE: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static LIGHT_GRAY_DYE: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static CYAN_DYE: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static PURPLE_DYE: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static BLUE_DYE: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static BROWN_DYE: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static GREEN_DYE: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static RED_DYE: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static BLACK_DYE: Internal.dev.latvian.mods.rhino.mod.util.color.Color;
    readonly static DYE: {"magenta": Internal.DyeColor, "pink": Internal.DyeColor, "green": Internal.DyeColor, "lime": Internal.DyeColor, "light_gray": Internal.DyeColor, "yellow": Internal.DyeColor, "black": Internal.DyeColor, "light_blue": Internal.DyeColor, "brown": Internal.DyeColor, "cyan": Internal.DyeColor, "orange": Internal.DyeColor, "red": Internal.DyeColor, "gray": Internal.DyeColor, "white": Internal.DyeColor, "blue": Internal.DyeColor, "purple": Internal.DyeColor} & Internal.Map<string, Internal.DyeColor>;
}
declare const Color: Color;
declare class Platform {
    readonly static developmentEnvironment: boolean;
    readonly static fabric: boolean;
    readonly static forge: boolean;
    readonly static clientEnvironment: boolean;
    readonly static modVersion: "1605.3.19-build.299" & string;
    readonly static mods: {"minecraft": Internal.PlatformWrapper$ModInfo, "rhino": Internal.PlatformWrapper$ModInfo, "kubejs": Internal.PlatformWrapper$ModInfo, "mousetweaks": Internal.PlatformWrapper$ModInfo, "ftbessentials": Internal.PlatformWrapper$ModInfo, "fastfurnaceminusreplacement": Internal.PlatformWrapper$ModInfo, "ftbquests": Internal.PlatformWrapper$ModInfo, "immersiveengineering": Internal.PlatformWrapper$ModInfo, "ftblibrary": Internal.PlatformWrapper$ModInfo, "itemfilters": Internal.PlatformWrapper$ModInfo, "jei": Internal.PlatformWrapper$ModInfo, "entitycollisionfpsfix": Internal.PlatformWrapper$ModInfo, "rubidium": Internal.PlatformWrapper$ModInfo, "lightspeed": Internal.PlatformWrapper$ModInfo, "thermal": Internal.PlatformWrapper$ModInfo, "farsight_spyglasses": Internal.PlatformWrapper$ModInfo, "quark": Internal.PlatformWrapper$ModInfo, "terraforged": Internal.PlatformWrapper$ModInfo, "xaeroworldmap": Internal.PlatformWrapper$ModInfo, "modernfix": Internal.PlatformWrapper$ModInfo, "autoreglib": Internal.PlatformWrapper$ModInfo, "configured": Internal.PlatformWrapper$ModInfo, "thermal_foundation": Internal.PlatformWrapper$ModInfo, "thermal_expansion": Internal.PlatformWrapper$ModInfo, "cofh_core": Internal.PlatformWrapper$ModInfo, "randompatches": Internal.PlatformWrapper$ModInfo, "architectury": Internal.PlatformWrapper$ModInfo, "ferritecore": Internal.PlatformWrapper$ModInfo, "datafixerslayer": Internal.PlatformWrapper$ModInfo, "aiimprovements": Internal.PlatformWrapper$ModInfo, "catalogue": Internal.PlatformWrapper$ModInfo, "fpsreducer": Internal.PlatformWrapper$ModInfo, "fastbenchminusreplacement": Internal.PlatformWrapper$ModInfo, "probejs": Internal.PlatformWrapper$ModInfo, "ftbteams": Internal.PlatformWrapper$ModInfo, "forge": Internal.PlatformWrapper$ModInfo, "embeddium": Internal.PlatformWrapper$ModInfo, "sounddeviceoptions": Internal.PlatformWrapper$ModInfo} & Internal.Map<string, Internal.PlatformWrapper$ModInfo>;
    readonly static mcVersion: "1.16.5" & string;
    readonly static name: "forge" & string;
    readonly static list: Internal.Set<string>;
    static getInfo(modID: string): Internal.PlatformWrapper$ModInfo;
    static isLoaded(modId: string): boolean;
    constructor();
}
declare class Fluid {
    readonly static types: Internal.List<string>;
    readonly static empty: Internal.FluidStackJS;
    static of(o: Internal.FluidStackJS): Internal.FluidStackJS;
    static of(o: Internal.FluidStackJS, amount: number, nbt: Internal.CompoundNBT): Internal.FluidStackJS;
    static of(o: Internal.FluidStackJS, nbt: Internal.CompoundNBT): Internal.FluidStackJS;
    static of(o: Internal.FluidStackJS, amount: number): Internal.FluidStackJS;
    static getType(id: ResourceLocation): Internal.Fluid;
    static exists(id: ResourceLocation): boolean;
    static water(): Internal.FluidStackJS;
    static water(amount: number): Internal.FluidStackJS;
    static lava(): Internal.FluidStackJS;
    static lava(amount: number): Internal.FluidStackJS;
    readonly static WATER_ID: "minecraft:water" & ResourceLocation;
    readonly static LAVA_ID: "minecraft:lava" & ResourceLocation;
    constructor();
}
declare class BlockPos extends Vec3i{
    func_177984_a(): BlockPos;
    func_177984_a(): Vec3i;
    func_177977_b(): Vec3i;
    func_177977_b(): BlockPos;
    func_177982_a(arg0: number, arg1: number, arg2: number): BlockPos;
    func_177964_d(arg0: number): BlockPos;
    func_177970_e(arg0: number): BlockPos;
    func_177985_f(arg0: number): BlockPos;
    func_177965_g(arg0: number): BlockPos;
    static func_218278_a(arg0: BlockPos, arg1: BlockPos): Internal.Iterable<BlockPos>;
    func_177967_a(arg0: Internal.Direction, arg1: number): BlockPos;
    func_177967_a(arg0: Internal.Direction, arg1: number): Vec3i;
    func_177974_f(): BlockPos;
    func_177976_e(): BlockPos;
    func_177978_c(): BlockPos;
    func_177968_d(): BlockPos;
    func_177979_c(arg0: number): Vec3i;
    func_177979_c(arg0: number): BlockPos;
    func_185334_h(): BlockPos;
    static func_191531_b(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.Iterable<BlockPos>;
    func_177981_b(arg0: number): Vec3i;
    func_177981_b(arg0: number): BlockPos;
    func_177955_d(arg0: Vec3i): Vec3i;
    func_177955_d(arg0: Vec3i): BlockPos;
    func_190942_a(arg0: Internal.Rotation): BlockPos;
    func_218275_a(): number;
    func_177971_a(arg0: Vec3i): BlockPos;
    static func_218274_c(arg0: number): number;
    static func_218282_d(arg0: number): number;
    static func_218291_a(arg0: number, arg1: number, arg2: number, arg3: number): number;
    static func_218288_f(arg0: number): number;
    func_177963_a(arg0: number, arg1: number, arg2: number): BlockPos;
    static func_218276_a(arg0: number, arg1: number, arg2: number): number;
    static func_218290_b(arg0: number): number;
    func_177973_b(arg0: Vec3i): BlockPos;
    static func_218289_a(arg0: number, arg1: Internal.Direction): number;
    static func_218283_e(arg0: number): BlockPos;
    func_241872_a(arg0: Internal.Direction$Axis, arg1: number): BlockPos;
    static func_218281_b(arg0: BlockPos, arg1: BlockPos): Internal.Stream<BlockPos>;
    static func_218287_a(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.Stream<BlockPos>;
    static func_243514_a(arg0: BlockPos, arg1: number, arg2: Internal.Direction, arg3: Internal.Direction): Internal.Iterable<Internal.BlockPos$Mutable>;
    func_177972_a(arg0: Internal.Direction): BlockPos;
    readonly static field_177992_a: BlockPos;
    constructor(arg0: Vec3i);
    constructor(arg0: Internal.IPosition);
    constructor(arg0: Vec3d);
    constructor(arg0: number, arg1: number, arg2: number);
    constructor(arg0: number, arg1: number, arg2: number);
}
declare class ResourceLocation extends Internal.Comparable<ResourceLocation>, Internal.ResourceLocationAccess, Internal.SpecialEquality{
    path: string;
    namespace: string;
    equals(arg0: object): boolean;
    toString(): string;
    hashCode(): number;
    compareTo(arg0: object): number;
    compareTo(arg0: ResourceLocation): number;
    func_110623_a(): string;
    func_110624_b(): string;
    static func_208304_a(arg0: string): ResourceLocation;
    static func_195828_a(arg0: string, arg1: string): ResourceLocation;
    compareNamespaced(arg0: ResourceLocation): number;
    static func_195826_a(arg0: Internal.StringReader): ResourceLocation;
    static func_195824_a(arg0: string): boolean;
    static func_217855_b(arg0: string): boolean;
    specialEquals(o: object, shallow: boolean): boolean;
    handler$zzi000$hashCodeReturnInjected(arg0: Internal.CallbackInfoReturnable<unknown>): void;
    handler$zzi000$hashCodeHeadInjected(arg0: Internal.CallbackInfoReturnable<unknown>): void;
    constructor(arg0: string, arg1: string);
    constructor(arg0: string);
}
declare class EquipmentSlot extends Internal.Enum<EquipmentSlot>{
    static values(): EquipmentSlot[];
    static valueOf(arg0: string): EquipmentSlot;
    func_188450_d(): string;
    func_188452_c(): number;
    static func_220318_a(arg0: Internal.EquipmentSlotType$Group, arg1: number): EquipmentSlot;
    static func_188451_a(arg0: string): EquipmentSlot;
    func_188453_a(): Internal.EquipmentSlotType$Group;
    func_188454_b(): number;
    readonly static MAINHAND: EquipmentSlot;
    readonly static OFFHAND: EquipmentSlot;
    readonly static FEET: EquipmentSlot;
    readonly static LEGS: EquipmentSlot;
    readonly static CHEST: EquipmentSlot;
    readonly static HEAD: EquipmentSlot;
}
declare class Ingredient {
    readonly static all: Internal.IngredientJS;
    readonly static none: Internal.IngredientJS;
    static of(object: object, count: number): Internal.IngredientJS;
    static of(object: object): Internal.IngredientJS;
    static custom(_in: Internal.IngredientJS, predicate: (arg0: Internal.ItemStackJS) => boolean): Internal.IngredientJS;
    static custom(predicate: (arg0: Internal.ItemStackJS) => boolean): Internal.IngredientJS;
    static customNBT(_in: Internal.IngredientJS, predicate: (arg0: Internal.CompoundNBT) => boolean): Internal.IngredientJS;
    static isIngredient(o: object): boolean;
    static matchAny(objects: object): Internal.IngredientJS;
    static registerCustomIngredientAction(id: string, callback: Internal.CustomIngredientActionCallback): void;
    constructor();
}
declare class Block {
    readonly static typeList: Internal.List<string>;
    readonly static material: {"sponge": Internal.MaterialJS, "explosive": Internal.MaterialJS, "wool": Internal.MaterialJS, "ice": Internal.MaterialJS, "air": Internal.MaterialJS, "vegetable": Internal.MaterialJS, "clay": Internal.MaterialJS, "slime": Internal.MaterialJS, "rock": Internal.MaterialJS, "lava": Internal.MaterialJS, "leaves": Internal.MaterialJS, "web": Internal.MaterialJS, "grass": Internal.MaterialJS, "coral": Internal.MaterialJS, "cake": Internal.MaterialJS, "honey": Internal.MaterialJS, "plants": Internal.MaterialJS, "wood": Internal.MaterialJS, "dragon_egg": Internal.MaterialJS, "portal": Internal.MaterialJS, "organic": Internal.MaterialJS, "gourd": Internal.MaterialJS, "glass": Internal.MaterialJS, "metal": Internal.MaterialJS, "dirt": Internal.MaterialJS, "water": Internal.MaterialJS, "lantern": Internal.MaterialJS, "stone": Internal.MaterialJS, "sand": Internal.MaterialJS, "snow": Internal.MaterialJS, "plant": Internal.MaterialJS, "earth": Internal.MaterialJS, "iron": Internal.MaterialJS, "tnt": Internal.MaterialJS, "berry_bush": Internal.MaterialJS} & Internal.Map<string, Internal.MaterialJS>;
    readonly static facing: {"west": Internal.Direction, "east": Internal.Direction, "up": Internal.Direction, "down": Internal.Direction, "south": Internal.Direction, "north": Internal.Direction} & Internal.Map<string, Internal.Direction>;
    static entity(id: ResourceLocation): Internal.BlockEntityPredicate;
    static id(id: ResourceLocation, properties: Internal.Map<string, object>): Internal.BlockIDPredicate;
    static id(id: ResourceLocation): Internal.BlockIDPredicate;
    static getBlock(id: ResourceLocation): Internal.Block;
    static custom(predicate: Internal.BlockPredicate): Internal.BlockPredicate;
    static getTaggedIds(tag: ResourceLocation): Internal.List<string>;
    constructor();
}
declare class CarvingGenerationStep extends Internal.Enum<CarvingGenerationStep>, Internal.IStringSerializable{
    static values(): CarvingGenerationStep[];
    static valueOf(arg0: string): CarvingGenerationStep;
    func_222671_a(): string;
    func_176610_l(): string;
    readonly static AIR: CarvingGenerationStep;
    readonly static LIQUID: CarvingGenerationStep;
}
declare class DecorationGenerationStep extends Internal.Enum<DecorationGenerationStep>{
    static values(): DecorationGenerationStep[];
    static valueOf(arg0: string): DecorationGenerationStep;
    readonly static RAW_GENERATION: DecorationGenerationStep;
    readonly static LAKES: DecorationGenerationStep;
    readonly static LOCAL_MODIFICATIONS: DecorationGenerationStep;
    readonly static UNDERGROUND_STRUCTURES: DecorationGenerationStep;
    readonly static SURFACE_STRUCTURES: DecorationGenerationStep;
    readonly static STRONGHOLDS: DecorationGenerationStep;
    readonly static UNDERGROUND_ORES: DecorationGenerationStep;
    readonly static UNDERGROUND_DECORATION: DecorationGenerationStep;
    readonly static VEGETAL_DECORATION: DecorationGenerationStep;
    readonly static TOP_LAYER_MODIFICATION: DecorationGenerationStep;
}
declare class NBTIO {
    static write(file: string, nbt: object): void;
    static write(file: Internal.File, nbt: object): void;
    static read(file: string): object;
    static read(file: Internal.File): Internal.MapJS;
    constructor();
}
declare class Vec3i extends Internal.Comparable<Vec3i>{
    equals(arg0: object): boolean;
    toString(): string;
    hashCode(): number;
    compareTo(arg0: Vec3i): number;
    compareTo(arg0: object): number;
    func_177984_a(): Vec3i;
    func_177977_b(): Vec3i;
    func_177967_a(arg0: Internal.Direction, arg1: number): Vec3i;
    func_177979_c(arg0: number): Vec3i;
    func_177981_b(arg0: number): Vec3i;
    func_177955_d(arg0: Vec3i): Vec3i;
    func_218141_a(arg0: Vec3i, arg1: number): boolean;
    func_177951_i(arg0: Vec3i): number;
    func_218138_a(arg0: Internal.IPosition, arg1: boolean): number;
    func_243648_a(arg0: Internal.Direction$Axis): number;
    func_218140_a(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
    func_218139_n(arg0: Vec3i): number;
    func_218137_a(arg0: Internal.IPosition, arg1: number): boolean;
    func_177958_n(): number;
    func_177956_o(): number;
    func_177952_p(): number;
    readonly static field_177959_e: Vec3i;
    constructor(arg0: number, arg1: number, arg2: number);
    constructor(arg0: number, arg1: number, arg2: number);
}
declare class object {
    readonly class: Internal.Class<any>;
    wait(arg0: number, arg1: number): void;
    wait(): void;
    wait(arg0: number): void;
    equals(arg0: object): boolean;
    toString(): string;
    hashCode(): number;
    notify(): void;
    notifyAll(): void;
    constructor();
}
declare class Utils {
    readonly static server: Internal.ServerJS;
    readonly static random: Internal.Random;
    readonly static clientWorld: Internal.WorldJS;
    readonly static systemTime: 1702908932278 & number;
    static regex(s: object): Internal.Pattern;
    static regex(pattern: string, flags: number): Internal.Pattern;
    static id(namespace: string, path: string): ResourceLocation;
    static id(id: ResourceLocation): ResourceLocation;
    static emptyList(): Internal.List<T>;
    static isWrapped(o: object): boolean;
    static newMap(): Internal.MapJS;
    static copy(o: object): object;
    static parseInt(object: object, def: number): number;
    static parseDouble(object: object, def: number): number;
    static emptyMap(): Internal.Map<K, V>;
    static newList(): Internal.ListJS;
    static listOrSelf(o: object): Internal.ListJS;
    static mapOf(o: object): Internal.MapJS;
    static newCountingMap(): Internal.CountingMap;
    static createConsole(name: string): Internal.ConsoleJS;
    static getStat(id: ResourceLocation): Internal.Stat<ResourceLocation>;
    static randomOf(random: Internal.Random, objects: Internal.Collection<object>): object;
    static newRandom(seed: number): Internal.Random;
    static listOf(o: object): Internal.ListJS;
    static rollChestLoot(id: ResourceLocation, entity: Internal.EntityJS): Internal.ListJS;
    static rollChestLoot(id: ResourceLocation): Internal.ListJS;
    static queueIO(runnable: Internal.Runnable): void;
    static getToolType(id: string): ToolType;
    static getSound(id: ResourceLocation): Internal.SoundEvent;
    static getWorld(world: Internal.World): Internal.WorldJS;
    constructor();
}
declare class JsonUtils {
    static toString(json: Internal.JsonElement): string;
    static copy(json: Internal.JsonElement): Internal.JsonElement;
    static parse(string: string): object;
    static toPrettyString(json: Internal.JsonElement): string;
    constructor();
}
declare class JsonIO {
    static write(file: string, json: object): void;
    static write(file: Internal.File, json: object): void;
    static read(file: string): Internal.MapJS;
    static read(file: Internal.File): Internal.MapJS;
    constructor();
}
declare class Text {
    static join(separator: Internal.Text, texts: Internal.Iterable<Internal.Text>): Internal.Text;
    static of(object: object): Internal.Text;
    static red(text: object): Internal.Text;
    static string(text: object): Internal.Text;
    static blue(text: object): Internal.Text;
    static black(text: object): Internal.Text;
    static green(text: object): Internal.Text;
    static white(text: object): Internal.Text;
    static yellow(text: object): Internal.Text;
    static translate(key: string, objects: object[]): Internal.Text;
    static translate(key: string): Internal.Text;
    static gold(text: object): Internal.Text;
    static darkBlue(text: object): Internal.Text;
    static darkAqua(text: object): Internal.Text;
    static darkPurple(text: object): Internal.Text;
    static darkGreen(text: object): Internal.Text;
    static darkRed(text: object): Internal.Text;
    static aqua(text: object): Internal.Text;
    static lightPurple(text: object): Internal.Text;
    static darkGray(text: object): Internal.Text;
    static keybind(keybind: string): Internal.Text;
    static gray(text: object): Internal.Text;
    constructor();
}
declare class Hand extends Internal.Enum<Hand>{
    static values(): Hand[];
    static valueOf(arg0: string): Hand;
    readonly static MAIN_HAND: Hand;
    readonly static OFF_HAND: Hand;
}
declare class BiomeDictionary {
    static addTypes(biomes: ResourceLocation[], tags: Internal.BiomeDictionary$Type[]): void;
    static printBiomes(type: Internal.BiomeDictionary$Type): void;
    static printTags(biome: ResourceLocation): void;
    static getBiomeType(o: object): Internal.BiomeDictionary$Type;
    constructor();
}
declare interface AABB {
    static wrap(o: object): Internal.AxisAlignedBB;
    static of(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number): Internal.AxisAlignedBB;
    static ofBlock(pos: BlockPos): Internal.AxisAlignedBB;
    static ofBlocks(pos1: BlockPos, pos2: BlockPos): Internal.AxisAlignedBB;
    static ofSize(x: number, y: number, z: number): Internal.AxisAlignedBB;
    readonly static EMPTY: Internal.AxisAlignedBB;
    readonly static CUBE: Internal.AxisAlignedBB;
}
declare const AABB: AABB;
declare interface UUID {
    static fromString(o: object): Internal.UUID;
    static toString(id: Internal.UUID): string;
    static digits(sb: Internal.StringBuilder, val: number, digits: number): void;
}
declare const UUID: UUID;
declare class ToolType {
    static create(forgeName: string, fabricTag: () => Internal.ITag<Internal.Item>): ToolType;
    static byName(forgeName: string): ToolType;
    readonly static PICKAXE: ToolType;
    readonly static AXE: ToolType;
    readonly static HOE: ToolType;
    readonly static SHOVEL: ToolType;
    readonly forgeName: string;
    readonly fabricTag: () => Internal.ITag<Internal.Item>;
}
declare interface Direction {
    readonly static down: Internal.Direction;
    readonly static up: Internal.Direction;
    readonly static north: Internal.Direction;
    readonly static south: Internal.Direction;
    readonly static west: Internal.Direction;
    readonly static east: Internal.Direction;
    readonly static DOWN: Internal.Direction;
    readonly static UP: Internal.Direction;
    readonly static NORTH: Internal.Direction;
    readonly static SOUTH: Internal.Direction;
    readonly static WEST: Internal.Direction;
    readonly static EAST: Internal.Direction;
    readonly static ALL: {"east": Internal.Direction, "south": Internal.Direction, "north": Internal.Direction, "west": Internal.Direction, "up": Internal.Direction, "down": Internal.Direction} & Internal.Map<string, Internal.Direction>;
}
declare const Direction: Direction;
declare class Vec3d extends Internal.IPosition{
    equals(arg0: object): boolean;
    toString(): string;
    hashCode(): number;
    func_186679_c(arg0: number, arg1: number, arg2: number): number;
    func_82616_c(): number;
    func_82617_b(): number;
    func_82615_a(): number;
    func_189985_c(): number;
    func_216369_h(arg0: Vec3d): Vec3d;
    func_178787_e(arg0: Vec3d): Vec3d;
    func_72432_b(): Vec3d;
    func_186678_a(arg0: number): Vec3d;
    static func_189984_a(arg0: Internal.Vector2f): Vec3d;
    func_216370_a(arg0: Internal.Direction$Axis): number;
    func_72441_c(arg0: number, arg1: number, arg2: number): Vec3d;
    func_216372_d(arg0: number, arg1: number, arg2: number): Vec3d;
    func_178786_a(arg0: number, arg1: number, arg2: number): Vec3d;
    func_72438_d(arg0: Vec3d): number;
    func_72431_c(arg0: Vec3d): Vec3d;
    func_242988_c(arg0: number): Vec3d;
    func_178788_d(arg0: Vec3d): Vec3d;
    func_72433_c(): number;
    func_72444_a(arg0: Vec3d): Vec3d;
    func_72430_b(arg0: Vec3d): number;
    func_72436_e(arg0: Vec3d): number;
    func_178785_b(arg0: number): Vec3d;
    func_178789_a(arg0: number): Vec3d;
    func_197746_a(arg0: Internal.EnumSet<Internal.Direction$Axis>): Vec3d;
    static func_189986_a(arg0: number, arg1: number): Vec3d;
    func_216371_e(): Vec3d;
    readonly static field_186680_a: Vec3d;
    readonly field_72450_a: number;
    readonly field_72448_b: number;
    readonly field_72449_c: number;
    constructor(arg0: Internal.Vector3f);
    constructor(arg0: number, arg1: number, arg2: number);
}
namespace Internal.io.netty.util {
    interface IntSupplier {
        get(): number;
    }
}
namespace Internal.com.mojang.authlib.properties {
    class Property {
        readonly signature: string;
        readonly name: string;
        readonly value: string;
        hasSignature(): boolean;
        isSignatureValid(arg0: Internal.PublicKey): boolean;
        constructor(arg0: string, arg1: string);
        constructor(arg0: string, arg1: string, arg2: string);
    }
}
namespace Internal.com.mojang.datafixers.types {
    class Type<A> extends Internal.App<Internal.Type$Mu, A>{
        point(arg0: Internal.DynamicOps<any>): Internal.Optional<A>;
        equals(arg0: object, arg1: boolean, arg2: boolean): boolean;
        equals(arg0: object): boolean;
        write(arg0: Internal.DynamicOps<T>, arg1: A): Internal.DataResult<T>;
        read(arg0: Internal.DynamicOps<T>, arg1: Internal.TypeRewriteRule, arg2: Internal.PointFreeRule, arg3: T): Internal.DataResult<Internal.com.mojang.datafixers.util.Pair<Internal.Optional<any>, T>>;
        read(arg0: Internal.Dynamic<T>): Internal.DataResult<Internal.com.mojang.datafixers.util.Pair<A, Internal.Dynamic<T>>>;
        finder(): Internal.OpticFinder<A>;
        static unbox(arg0: Internal.App<Internal.Type$Mu, A>): Internal.com.mojang.datafixers.types.Type<A>;
        one(arg0: Internal.TypeRewriteRule): Internal.Optional<Internal.RewriteResult<A, any>>;
        all(arg0: Internal.TypeRewriteRule, arg1: boolean, arg2: boolean): Internal.RewriteResult<A, any>;
        rewrite(arg0: Internal.TypeRewriteRule, arg1: Internal.PointFreeRule): Internal.Optional<Internal.RewriteResult<A, any>>;
        template(): Internal.TypeTemplate;
        codec(): Internal.Codec<A>;
        ifSame(arg0: Internal.Typed<B>): Internal.Optional<A>;
        ifSame(arg0: Internal.com.mojang.datafixers.types.Type<B>, arg1: Internal.RewriteResult<B, any>): Internal.Optional<Internal.RewriteResult<A, any>>;
        ifSame(arg0: Internal.com.mojang.datafixers.types.Type<B>, arg1: B): Internal.Optional<A>;
        everywhere(arg0: Internal.TypeRewriteRule, arg1: Internal.PointFreeRule, arg2: boolean, arg3: boolean): Internal.Optional<Internal.RewriteResult<A, any>>;
        readTyped(arg0: Internal.DynamicOps<T>, arg1: T): Internal.DataResult<Internal.com.mojang.datafixers.util.Pair<Internal.Typed<A>, T>>;
        readTyped(arg0: Internal.Dynamic<T>): Internal.DataResult<Internal.com.mojang.datafixers.util.Pair<Internal.Typed<A>, T>>;
        writeDynamic(arg0: Internal.DynamicOps<T>, arg1: A): Internal.DataResult<Internal.Dynamic<T>>;
        findField(arg0: string): Internal.OpticFinder<any>;
        findCheckedType(arg0: number): Internal.Optional<Internal.com.mojang.datafixers.types.Type<any>>;
        static opticView(arg0: Internal.com.mojang.datafixers.types.Type<S>, arg1: Internal.RewriteResult<A, B>, arg2: Internal.TypedOptic<S, T, A, B>): Internal.RewriteResult<S, T>;
        rewriteOrNop(arg0: Internal.TypeRewriteRule): Internal.RewriteResult<A, any>;
        buildTemplate(): Internal.TypeTemplate;
        findFieldTypeOpt(arg0: string): Internal.Optional<Internal.com.mojang.datafixers.types.Type<any>>;
        getSetType(arg0: Internal.OpticFinder<FT>, arg1: Internal.com.mojang.datafixers.types.Type<FR>): Internal.com.mojang.datafixers.types.Type<any>;
        updateMu(arg0: Internal.RecursiveTypeFamily): Internal.com.mojang.datafixers.types.Type<any>;
        readAndWrite(arg0: Internal.DynamicOps<T>, arg1: Internal.com.mojang.datafixers.types.Type<any>, arg2: Internal.TypeRewriteRule, arg3: Internal.PointFreeRule, arg4: T): Internal.DataResult<T>;
        findTypeCached(arg0: Internal.com.mojang.datafixers.types.Type<FT>, arg1: Internal.com.mojang.datafixers.types.Type<FR>, arg2: Internal.Type$TypeMatcher<FT, FR>, arg3: boolean): Internal.Either<Internal.TypedOptic<A, any, FT, FR>, Internal.Type$FieldNotFoundException>;
        findType(arg0: Internal.com.mojang.datafixers.types.Type<FT>, arg1: Internal.com.mojang.datafixers.types.Type<FR>, arg2: Internal.Type$TypeMatcher<FT, FR>, arg3: boolean): Internal.Either<Internal.TypedOptic<A, any, FT, FR>, Internal.Type$FieldNotFoundException>;
        findTypeInChildren(arg0: Internal.com.mojang.datafixers.types.Type<FT>, arg1: Internal.com.mojang.datafixers.types.Type<FR>, arg2: Internal.Type$TypeMatcher<FT, FR>, arg3: boolean): Internal.Either<Internal.TypedOptic<A, any, FT, FR>, Internal.Type$FieldNotFoundException>;
        findChoiceType(arg0: string, arg1: number): Internal.Optional<Internal.TaggedChoice$TaggedChoiceType<any>>;
        pointTyped(arg0: Internal.DynamicOps<any>): Internal.Optional<Internal.Typed<A>>;
        findFieldType(arg0: string): Internal.com.mojang.datafixers.types.Type<any>;
        constructor();
    }
}
namespace Internal._java.lang.reflect {
    class Parameter extends Internal.AnnotatedElement{
        readonly synthetic: boolean;
        readonly varArgs: boolean;
        readonly namePresent: boolean;
        readonly implicit: boolean;
        readonly declaredAnnotations: Internal.Annotation[];
        readonly annotatedType: Internal.AnnotatedType;
        readonly name: string;
        readonly annotations: Internal.Annotation[];
        readonly declaringExecutable: Internal.Executable;
        readonly type: Internal.Class<any>;
        readonly parameterizedType: Internal._java.lang.reflect.Type;
        readonly modifiers: number;
        equals(arg0: object): boolean;
        toString(): string;
        hashCode(): number;
        getAnnotation(arg0: Internal.Class<T>): T;
        getAnnotationsByType(arg0: Internal.Class<T>): T[];
        getDeclaredAnnotation(arg0: Internal.Class<T>): T;
        getDeclaredAnnotationsByType(arg0: Internal.Class<T>): T[];
    }
    interface Type {
        readonly typeName: string;
    }
}
namespace Internal.dev.latvian.mods.rhino.util.unit {
    class Unit {
        readonly fixed: boolean;
        readonly asInt: number;
        readonly asBoolean: boolean;
        add(_with: Internal.dev.latvian.mods.rhino.util.unit.Unit): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        get(): number;
        toString(): string;
        append(arg0: Internal.StringBuilder): void;
        abs(): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        sin(): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        cos(): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        tan(): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        atan2(_with: Internal.dev.latvian.mods.rhino.util.unit.Unit): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        sqrt(): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        log(): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        log10(): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        pow(_with: Internal.dev.latvian.mods.rhino.util.unit.Unit): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        min(_with: Internal.dev.latvian.mods.rhino.util.unit.Unit): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        max(_with: Internal.dev.latvian.mods.rhino.util.unit.Unit): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        floor(): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        ceil(): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        mod(_with: Internal.dev.latvian.mods.rhino.util.unit.Unit): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        eq(_with: Internal.dev.latvian.mods.rhino.util.unit.Unit): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        shiftLeft(_with: Internal.dev.latvian.mods.rhino.util.unit.Unit): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        lt(_with: Internal.dev.latvian.mods.rhino.util.unit.Unit): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        atan(): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        log1p(): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        or(_with: Internal.dev.latvian.mods.rhino.util.unit.Unit): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        sub(_with: Internal.dev.latvian.mods.rhino.util.unit.Unit): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        shiftRight(_with: Internal.dev.latvian.mods.rhino.util.unit.Unit): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        and(_with: Internal.dev.latvian.mods.rhino.util.unit.Unit): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        xor(_with: Internal.dev.latvian.mods.rhino.util.unit.Unit): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        not(): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        div(_with: Internal.dev.latvian.mods.rhino.util.unit.Unit): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        neg(): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        sq(): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        mul(_with: Internal.dev.latvian.mods.rhino.util.unit.Unit): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        gt(_with: Internal.dev.latvian.mods.rhino.util.unit.Unit): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        rad(): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        deg(): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        lte(_with: Internal.dev.latvian.mods.rhino.util.unit.Unit): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        neq(_with: Internal.dev.latvian.mods.rhino.util.unit.Unit): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        toBool(): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        gte(_with: Internal.dev.latvian.mods.rhino.util.unit.Unit): Internal.dev.latvian.mods.rhino.util.unit.Unit;
        constructor();
    }
}
namespace Internal.com.mojang.datafixers.util {
    class Pair<F, S> extends Internal.App<Internal.Pair$Mu<S>, F>{
        readonly first: F;
        readonly second: S;
        equals(arg0: object): boolean;
        toString(): string;
        hashCode(): number;
        static of(arg0: F, arg1: S): Internal.com.mojang.datafixers.util.Pair<F, S>;
        static toMap(): Internal.Collector<Internal.com.mojang.datafixers.util.Pair<F, S>, any, Internal.Map<F, S>>;
        swap(): Internal.com.mojang.datafixers.util.Pair<S, F>;
        static unbox(arg0: Internal.App<Internal.Pair$Mu<S>, F>): Internal.com.mojang.datafixers.util.Pair<F, S>;
        mapFirst(arg0: (arg0: F) => F2): Internal.com.mojang.datafixers.util.Pair<F2, S>;
        mapSecond(arg0: (arg0: S) => S2): Internal.com.mojang.datafixers.util.Pair<F, S2>;
        constructor(arg0: F, arg1: S);
    }
}
namespace Internal.it.unimi.dsi.fastutil {
    interface Function<K, V> extends Internal.Function<K, V>{
        remove(arg0: object): V;
        get(arg0: object): V;
        put(arg0: K, arg1: V): V;
        clear(): void;
        size(): number;
        apply(arg0: K): V;
        containsKey(arg0: object): boolean;
    }
}
namespace stub.probejs {
    class RecipeHolder {
        minecraft: stub.probejs.recipes.Minecraft
        kubejs: stub.probejs.recipes.Kubejs
}
}
namespace stub.probejs.recipes {
    class Kubejs {
        shaped(...args: object): Internal.ShapedRecipeJS
        shapeless(...args: object): Internal.ShapelessRecipeJS
}
    class Minecraft {
        stonecutting(...args: object): Internal.StonecuttingRecipeJS
        crafting_shaped(...args: object): Internal.ShapedRecipeJS
        smelting(...args: object): Internal.CookingRecipeJS
        smoking(...args: object): Internal.CookingRecipeJS
        blasting(...args: object): Internal.CookingRecipeJS
        campfire_cooking(...args: object): Internal.CookingRecipeJS
        smithing(...args: object): Internal.SmithingRecipeJS
        crafting_shapeless(...args: object): Internal.ShapelessRecipeJS
}
}
namespace Internal.com.mojang.blaze3d.vertex {
    interface IVertexConsumer extends Internal.IVertexBuilder{
        func_181667_k(): void;
    }
}
namespace Internal.it.unimi.dsi.fastutil.ints {
    interface IntConsumer extends Internal.Consumer<number>, Internal.IntConsumer{
        accept(arg0: object): void;
        accept(arg0: number): void;
        andThen(arg0: Internal.IntConsumer): Internal.IntConsumer;
        andThen(arg0: Internal.IntConsumer): Internal.it.unimi.dsi.fastutil.ints.IntConsumer;
        andThen(arg0: (arg0: number) => void): (arg0: number) => void;
    }
}
namespace Internal.net.minecraft.pathfinding {
    class Path {
        toString(): string;
        func_189966_g(): Internal.PathPoint[];
        func_189965_h(): Internal.PathPoint[];
        func_242950_i(): Internal.PathPoint;
        func_242945_b(): boolean;
        func_224771_h(): boolean;
        func_75872_c(arg0: number): void;
        func_75881_a(arg0: Internal.Entity, arg1: number): Vec3d;
        func_75879_b(): boolean;
        func_75875_a(): void;
        func_75878_a(arg0: Internal.Entity): Vec3d;
        func_224770_k(): BlockPos;
        func_75874_d(): number;
        func_75876_a(arg0: Internal.net.minecraft.pathfinding.Path): boolean;
        func_242948_g(): BlockPos;
        func_186309_a(arg0: number, arg1: Internal.PathPoint): void;
        func_75873_e(): number;
        func_75877_a(arg0: number): Internal.PathPoint;
        func_242947_d(arg0: number): BlockPos;
        func_75870_c(): Internal.PathPoint;
        func_215747_b(arg0: number): void;
        func_224769_l(): number;
        static func_186311_b(arg0: Internal.PacketBuffer): Internal.net.minecraft.pathfinding.Path;
        constructor(arg0: Internal.List<Internal.PathPoint>, arg1: BlockPos, arg2: boolean);
    }
}
namespace Internal.com.google.common.reflect {
    class TypeToken<T> extends Internal.TypeCapture<T>, Internal.Serializable{
        readonly array: boolean;
        readonly primitive: boolean;
        readonly componentType: Internal.com.google.common.reflect.TypeToken<any>;
        readonly types: Internal.TypeToken$TypeSet<>;
        readonly rawType: Internal.Class<T>;
        readonly type: Internal._java.lang.reflect.Type;
        equals(arg0: object): boolean;
        toString(): string;
        method(arg0: Internal.Method): Internal.Invokable<T, object>;
        hashCode(): number;
        wrap(): Internal.com.google.common.reflect.TypeToken<T>;
        static of(arg0: Internal._java.lang.reflect.Type): Internal.com.google.common.reflect.TypeToken<any>;
        static of(arg0: Internal.Class<T>): Internal.com.google.common.reflect.TypeToken<T>;
        constructor(arg0: Internal.Constructor<any>): Internal.Invokable<T, T>;
        unwrap(): Internal.com.google.common.reflect.TypeToken<T>;
        where(arg0: Internal.TypeParameter<X>, arg1: Internal.Class<X>): Internal.com.google.common.reflect.TypeToken<T>;
        where(arg0: Internal.TypeParameter<X>, arg1: Internal.com.google.common.reflect.TypeToken<X>): Internal.com.google.common.reflect.TypeToken<T>;
        getSupertype(arg0: Internal.Class<T>): Internal.com.google.common.reflect.TypeToken<T>;
        resolveType(arg0: Internal._java.lang.reflect.Type): Internal.com.google.common.reflect.TypeToken<any>;
        isSupertypeOf(arg0: Internal._java.lang.reflect.Type): boolean;
        isSupertypeOf(arg0: Internal.com.google.common.reflect.TypeToken<any>): boolean;
        getSubtype(arg0: Internal.Class<any>): Internal.com.google.common.reflect.TypeToken<T>;
        isSubtypeOf(arg0: Internal._java.lang.reflect.Type): boolean;
        isSubtypeOf(arg0: Internal.com.google.common.reflect.TypeToken<any>): boolean;
    }
}
namespace Internal.org.apache.logging.log4j.message {
    interface Message extends Internal.Serializable{
        readonly formattedMessage: string;
        readonly throwable: Internal.Throwable;
        readonly format: string;
        readonly parameters: object[];
    }
}
namespace Internal.com.mojang.serialization {
    interface MapLike<T> {
        get(arg0: T): T;
        get(arg0: string): T;
        entries(): Internal.Stream<Internal.com.mojang.datafixers.util.Pair<T, T>>;
        static forMap(arg0: Internal.Map<T, T>, arg1: Internal.DynamicOps<T>): Internal.com.mojang.serialization.MapLike<T>;
    }
}
namespace Internal.net.minecraft.entity.ai.attributes {
    class Attribute extends Internal.ForgeRegistryEntry<Internal.net.minecraft.entity.ai.attributes.Attribute>{
        func_111109_a(arg0: number): number;
        func_111110_b(): number;
        func_111111_c(): boolean;
    }
}
namespace Internal.net.minecraftforge.common.animation {
    class Event extends Internal.Comparable<Internal.net.minecraftforge.common.animation.Event>{
        toString(): string;
        compareTo(arg0: object): number;
        compareTo(arg0: Internal.net.minecraftforge.common.animation.Event): number;
        offset(): number;
        event(): string;
        constructor(arg0: string, arg1: number);
    }
}
namespace Internal.dev.latvian.mods.rhino {
    interface Function extends Internal.Scriptable, Internal.Callable{
        construct(arg0: Internal.Context, arg1: Internal.Scriptable, arg2: object[]): Internal.Scriptable;
        call(arg0: Internal.Context, arg1: Internal.Scriptable, arg2: Internal.Scriptable, arg3: object[]): object;
    }
}
namespace Internal._java.nio.channels {
    interface Channel extends Internal.Closeable{
        readonly open: boolean;
        close(): void;
    }
}
namespace Internal._java.util.concurrent {
    interface Callable<V> {
        call(): V;
    }
}
namespace Internal.io.netty.util.concurrent {
    interface Future<V> extends Internal.Future<V>{
        readonly cancellable: boolean;
        readonly success: boolean;
        readonly now: V;
        addListener(arg0: Internal.GenericFutureListener<Internal.io.netty.util.concurrent.Future<V>>): Internal.io.netty.util.concurrent.Future<V>;
        removeListener(arg0: Internal.GenericFutureListener<Internal.io.netty.util.concurrent.Future<V>>): Internal.io.netty.util.concurrent.Future<V>;
        cause(): Internal.Throwable;
        sync(): Internal.io.netty.util.concurrent.Future<V>;
        cancel(arg0: boolean): boolean;
        removeListeners(arg0: Internal.GenericFutureListener<Internal.io.netty.util.concurrent.Future<V>>[]): Internal.io.netty.util.concurrent.Future<V>;
        await(arg0: number, arg1: Internal.TimeUnit): boolean;
        await(arg0: number): boolean;
        await(): Internal.io.netty.util.concurrent.Future<V>;
        awaitUninterruptibly(arg0: number, arg1: Internal.TimeUnit): boolean;
        awaitUninterruptibly(): Internal.io.netty.util.concurrent.Future<V>;
        awaitUninterruptibly(arg0: number): boolean;
        syncUninterruptibly(): Internal.io.netty.util.concurrent.Future<V>;
        addListeners(arg0: Internal.GenericFutureListener<Internal.io.netty.util.concurrent.Future<V>>[]): Internal.io.netty.util.concurrent.Future<V>;
    }
    interface ScheduledFuture<V> extends Internal.io.netty.util.concurrent.Future<V>, Internal.ScheduledFuture<V>{
    }
}
namespace Internal.dev.latvian.mods.rhino.mod.util.color {
    interface Color extends Internal.SpecialEquality{
        readonly fireworkColorKJS: number;
        readonly argbKJS: number;
        readonly rgbKJS: number;
        readonly serializeKJS: string;
        readonly hexKJS: string;
        specialEquals(o: object, shallow: boolean): boolean;
        createTextColorKJS(): Internal.Color;
    }
}
namespace Internal.net.minecraftforge.fluids {
    class FluidStack {
        amount: number;
        tag: Internal.CompoundNBT;
        readonly empty: boolean;
        readonly orCreateTag: Internal.CompoundNBT;
        readonly rawFluid: Internal.Fluid;
        readonly translationKey: string;
        readonly displayName: Internal.ITextComponent;
        readonly fluid: Internal.Fluid;
        equals(arg0: object): boolean;
        hashCode(): number;
        copy(): Internal.net.minecraftforge.fluids.FluidStack;
        grow(arg0: number): void;
        static areFluidStackTagsEqual(arg0: Internal.net.minecraftforge.fluids.FluidStack, arg1: Internal.net.minecraftforge.fluids.FluidStack): boolean;
        isFluidStackIdentical(arg0: Internal.net.minecraftforge.fluids.FluidStack): boolean;
        getOrCreateChildTag(arg0: string): Internal.CompoundNBT;
        static loadFluidStackFromNBT(arg0: Internal.CompoundNBT): Internal.net.minecraftforge.fluids.FluidStack;
        shrink(arg0: number): void;
        hasTag(): boolean;
        isFluidEqual(arg0: Internal.ItemStack): boolean;
        isFluidEqual(arg0: Internal.net.minecraftforge.fluids.FluidStack): boolean;
        getChildTag(arg0: string): Internal.CompoundNBT;
        removeChildTag(arg0: string): void;
        containsFluid(arg0: Internal.net.minecraftforge.fluids.FluidStack): boolean;
        writeToNBT(arg0: Internal.CompoundNBT): Internal.CompoundNBT;
        writeToPacket(arg0: Internal.PacketBuffer): void;
        static readFromPacket(arg0: Internal.PacketBuffer): Internal.net.minecraftforge.fluids.FluidStack;
        readonly static EMPTY: Internal.net.minecraftforge.fluids.FluidStack;
        readonly static CODEC: Internal.Codec<Internal.net.minecraftforge.fluids.FluidStack>;
        constructor(arg0: Internal.net.minecraftforge.fluids.FluidStack, arg1: number);
        constructor(arg0: Internal.Fluid, arg1: number, arg2: Internal.CompoundNBT);
        constructor(arg0: Internal.Fluid, arg1: number);
    }
}
namespace Internal.me.shedaniel.architectury.event {
    interface Event<T> {
        isRegistered(arg0: T): boolean;
        register(arg0: T): void;
        invoker(): T;
        unregister(arg0: T): void;
        clearListeners(): void;
    }
}
namespace Internal.com.mojang.bridge.game {
    interface Language {
        readonly code: string;
        readonly name: string;
        readonly region: string;
    }
}
namespace Internal.xaero.map.gui.message {
    class Message {
        readonly additionTime: number;
        readonly text: Internal.ITextComponent;
        constructor(arg0: Internal.ITextComponent, arg1: number);
    }
}
namespace Internal.org.apache.logging.log4j.util {
    interface Supplier<T> {
        get(): T;
    }
}
namespace Internal.net.minecraft.util {
    class Unit extends Internal.Enum<Internal.net.minecraft.util.Unit>{
        static values(): Internal.net.minecraft.util.Unit[];
        static valueOf(arg0: string): Internal.net.minecraft.util.Unit;
        readonly static INSTANCE: Internal.net.minecraft.util.Unit;
    }
}
