import EventEmitter from 'events'

function coinbaseMessageHandler(message) {
    const coinbaseData = JSON.parse(message.data)
    switch (coinbaseData['type']) {
        case 'subscriptions':
            break
        case 'error':
            break
        case 'snapshot':
            this.emit('snapshot', coinbaseData)
            break
        case 'l2update':
            this.emit('l2update', coinbaseData)
            break
        default:
            break
    }
}

/**
 * Create the socket connection with coinbase api
 */
export default class WebSocketConnectionEmmiter extends EventEmitter {
    constructor() {
        super()
        this.webSocket = new WebSocket('wss://ws-feed.pro.coinbase.com')
        this.webSocket.addEventListener('open', () => {
            const subscriptionMessage = JSON.stringify({
                type: 'subscribe',
                product_ids: [
                    'BTC-USD'
                ],
                channels: [
                    'level2',
                ]
            })
            console.log(`connection established`)
            this.webSocket.send(subscriptionMessage)
        })
        this.webSocket.addEventListener('error', () => {
            console.log(`got error`)
        })
        this.webSocket.addEventListener('close', () => {
            console.log(`got close`)

        })
        
        this.webSocket.addEventListener('message', coinbaseMessageHandler.bind(this))        
    }
}