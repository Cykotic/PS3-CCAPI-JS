const PS3 = require('./CCAPI');

async function main() {
    const CF = new PS3();
    const IP = '192.168.0.226';
    try {
        await CF.connect(IP);
        CF.notify('Testing');
        console.log('Disconnecting...');
        CF.disconnect();
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}


main();