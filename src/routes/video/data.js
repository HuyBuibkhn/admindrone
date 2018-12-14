const drones = [];

function makeid() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}


for (let i = 0; i < 500; i++) {
    drones.push({
        id: i,
        code: makeid(),
        year: Math.floor(Math.random() * 3) + 2014
    })
}

export default {
    drones
}
