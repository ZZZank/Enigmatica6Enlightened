//priority: 1001

const isAE2Loaded = Platform.getMods().containsKey('appliedenergistics2');

const itemsToRemoveAE = [
    'appliedenergistics2:nether_quartz_dust',
    'appliedenergistics2:fluix_dust',
    'appliedenergistics2:certus_quartz_dust',

    'appliedenergistics2:fluix_crystal',
    'appliedenergistics2:charged_certus_quartz_crystal',
    'appliedenergistics2:certus_quartz_crystal',
    'appliedenergistics2:purified_certus_quartz_crystal',
    'appliedenergistics2:purified_nether_quartz_crystal',
    'appliedenergistics2:purified_fluix_crystal',

    'appliedenergistics2:quartz_ore',
    'appliedenergistics2:charged_quartz_ore',

    'appliedenergistics2:vibration_chamber',
    'appliedenergistics2:quartz_growth_accelerator',
    'appliedenergistics2:inscriber',
    'appliedenergistics2:crank',
    'appliedenergistics2:grindstone',

    'appliedenergistics2:printed_silicon',
    'appliedenergistics2:silicon',

    'appliedenergistics2:calculation_processor_press',
    'appliedenergistics2:engineering_processor_press',
    'appliedenergistics2:logic_processor_press',
    'appliedenergistics2:silicon_press'
];

const storagePartsAE = [
    {
        modID: 'appliedenergistics2',
        type: '',
        sizes: ['1k', '4k', '16k', '64k', '1k_fluid', '4k_fluid', '16k_fluid', '64k_fluid']
    },
    {
        modID: 'aeadditions',
        type: 'item',
        sizes: [
            //in K. (1024 means 1024k)
            '256',
            '1024',
            '4096',
            '16384'
        ]
    },
    {
        modID: 'aeadditions',
        type: 'fluid',
        sizes: [
            //in K. (1024 means 1024k)
            '256',
            '1024',
            '4096'
        ]
    },
    {
        modID: 'aeadditions',
        type: 'chemical',
        sizes: [
            //in K. (1024 means 1024k)
            '1',
            '4',
            '16',
            '64',
            '256',
            '1024',
            '4096'
        ]
    }
];
