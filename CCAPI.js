const ffi = require('ffi-napi');

class PS3 {
    static CCAPI_OK = 0;
    static NOTIFY_INFO = 12;
    
    constructor() {
        this.api = ffi.Library('./CCAPI.dll', {
            'CCAPIConnectConsole': ['int', ['string']],
            'CCAPIDisconnectConsole': ['int', []],
            'CCAPIVshNotify': ['int', ['int', 'string']]
        });
        
        this.connected = false;
        this.consoleIP = null;
    }

    async connect(ipAddress) {
        if (this.connected) {
            if (this.consoleIP === ipAddress) return true;
            throw new Error(`Already connected to ${this.consoleIP}`);
        }

        const result = this.api.CCAPIConnectConsole(ipAddress);
        if (result !== PS3.CCAPI_OK) {
            throw new Error(`Connection failed (code: ${result})`);
        }

        this.connected = true;
        this.consoleIP = ipAddress;
        return true;
    }

    disconnect() {
        if (!this.connected) return false;

        const result = this.api.CCAPIDisconnectConsole();
        if (result !== PS3.CCAPI_OK) {
            throw new Error(`Disconnection failed (code: ${result})`);
        }

        this.connected = false;
        this.consoleIP = null;
        return true;
    }

    notify(message, type = PS3.NOTIFY_INFO) {
        if (!this.connected) {
            throw new Error('Not connected to any console');
        }

        const result = this.api.CCAPIVshNotify(type, message);
        if (result !== PS3.CCAPI_OK) {
            throw new Error(`Notification failed (code: ${result})`);
        }
        return true;
    }
}

module.exports = PS3;