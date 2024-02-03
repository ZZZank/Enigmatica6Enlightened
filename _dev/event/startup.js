

captureEvent("init", (event)=>{console.info("init")})
captureEvent("postinit", (event)=>{console.info("postinit")})
captureEvent("loaded", (event)=>{console.info("loaded")})
captureEvent("block.registry", (event)=>{console.info("block.registry")})
captureEvent("item.registry", (event)=>{console.info("item.registry")})
captureEvent("item.modification", (event)=>{console.info("item.modification")})
captureEvent("fluid.registry", (event)=>{console.info("fluid.registry")})
captureEvent("worldgen.add", (event)=>{console.info("worldgen.add")})
captureEvent("worldgen.remove", (event)=>{console.info("worldgen.remove")})
captureEvent('ie.multiblock.form', (event) => { console.info('ie.multiblock.form') });
