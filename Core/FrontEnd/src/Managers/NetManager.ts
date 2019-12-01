import io = require('socket.io-client')
export default class NetManager {
    constructor() {
        let sio = io()
        sio.on('connect', this.onConnect)
        // sio.on('connect_error', this.onConnectError)
        // sio.on('connect_timeout', this.onConnectTimeout)
        // sio.on('error', this.onError)
        sio.on('disconnect', this.onDisconnect)
        // sio.on('reconnect_attempt', this.onReconnectAttempt)
        // sio.on('reconnecting', this.onReconnecting)
        // sio.on('reconnect_error', this.onReconnectError)
        // sio.on('reconnect_failed', this.onReconnectFailed)
        // sio.on('ping', this.onPing)
        // sio.on('pong', this.onPong)
    }
    onConnect = () => { }
    // onConnectError = () => { }
    // onConnectTimeout = () => { }
    // onError = () => { }
    onDisconnect = () => { }
    // onReconnect = () => { }
    // onReconnectAttempt = () => { }
    // onReconnecting = () => { }
    // onReconnectError = () => { }
    // onReconnectFailed = () => { }
    // onPing = () => { }
    // onPong = () => { }
}