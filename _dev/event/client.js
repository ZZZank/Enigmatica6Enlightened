
captureEvent("jei.hide.fluids", (event) => { });
captureEvent("jei.add.items", (event) => { });
captureEvent("jei.subtypes", (event) => { });
captureEvent("jei.hide.items", (event) => { });
captureEvent("jei.remove.recipes", (event) => { });
captureEvent("jei.information", (event) => { });

captureEvent("client.init", (event) => { console.info("client.init") })
captureEvent("client.debug_info.left", (event) => { console.info("client.debug_info.left") })
captureEvent("client.debug_info.right", (event) => { console.info("client.debug_info.right") })
captureEvent("client.logged_in", (event) => { console.info("client.logged_in") })
captureEvent("client.logged_out", (event) => { console.info("client.logged_out") })
captureEvent("client.tick", (event) => { })
// captureEvent("client.tick", (event)=>{console.info("client.tick")})
// captureEvent("player.data_from_server.<信道>", (event)=>{console.info("player.data_from_server.<信道>")})
captureEvent("item.right_click_empty", (event) => { console.info("item.right_click_empty") })
captureEvent("item.left_click", (event) => { console.info("item.left_click") })
captureEvent("item.tooltip", (event) => { console.info("item.tooltip") })