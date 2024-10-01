
{
    const keyNBT = 'freq'
    const emojis = '─│┌┐└┘├┤┬┴┼═║╒╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡╢╣╤╥╦╧╨╩╪╫╬▀▄█▌▐░▒▓⚠⚡⚥✂✉✎✔✘❄❣❤⭐'.split('')
    /**
     * @type {import("packages/dev/latvian/mods/rhino/mod/util/color/$Color").$Color$$Type[]}
     */
    const colors = [
        'black',
        'dark_blue',
        'dark_green',
        'dark_aqua',
        'dark_red',
        'dark_purple',
        'gold',
        'gray',
        'dark_gray',
        'blue',
        'green',
        'aqua',
        'red',
        'light_purple',
        'yellow',
        'white',
    ];

    const cutDownLen = emojis.length * colors.length
    const splitLen = colors.length

    /**
     * @param {number} freq
     */
    function emojifiedFreq(freq) {
        if (freq == 0) {
            return '0';
        }
        const emojified = Text.of('Freq: ').green();
        if (freq < 0) {
            freq = -freq;
            emojified.append('-');
        }
        let hasNext = true;
        while (hasNext) {
            const cut = freq % cutDownLen;
            freq = freq / cutDownLen;
            emojified.append(Text.string(emojis[cut / splitLen]).color(colors[cut % splitLen]))
            hasNext = (freq != 0);
        }
        return emojified
    }
    // Text.of("wow").color(colors[0])

    onEvent('item.tooltip', event => {
        event.addAdvanced(
            "appliedenergistics2:quantum_entangled_singularity",
            (stack, isAdvanced, tooltips) => {
                if (!stack.hasNBT() || !stack.nbt.contains(keyNBT)) {
                    return
                }
                const freq = Number.parseInt(stack.nbt[keyNBT])
                tooltips.add(emojifiedFreq(freq))
            }
        )
    })
}