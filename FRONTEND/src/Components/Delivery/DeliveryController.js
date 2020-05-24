import config from "../../config";

async function createNewDeliveryOrder(deliveryOrder){
    const init = config.request_init;
    init.body = JSON.stringify(deliveryOrder);
    debugger
    await fetch("/post/deliveryOrder", init);
}


export default {
    createNewDeliveryOrder
}