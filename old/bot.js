const discord = require("discord.js")
const cliente = new discord.client()

cliente.on('ready',() => {
    console.log("Logado")
})

cliente.on('message',(message)=>{
    if (message.content === "oi"){
        message.replay("Oi Sam")
    }
})

cliente.login('MTE2MzgzMjA5NDY5MTE3MjM4Mg.G6dsEO.2AobOGU60OcNfi8Bt28eEDrE-5PIg5GZftVyCo')