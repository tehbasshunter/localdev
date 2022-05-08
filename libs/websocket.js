const socket = io('https://realtime.streamelements.com', {
    transports: ['websocket']
});
// Socket connected
socket.on('connect', onConnect);

// Socket got disconnected
socket.on('disconnect', onDisconnect);

// Socket is authenticated
socket.on('authenticated', onAuthenticated);

socket.on('unauthorized', (data) => {
    console.log(data)
});
// New event received
socket.on('event:test', (data) => {
    parseEvent(data);
});
socket.on('event', (data) => {
    parseEvent(data);
});
socket.on('event:update', (data) => {
    session.data.session[data.name]=data.data;
    const updateEvent = new CustomEvent(data.name, data);
    window.dispatchEvent(sessionEvent);
    session.session.data = data;

});

// Session reset/update received
socket.on('session:reset', (data) => {
    const sessionEvent = new CustomEvent('onSessionUpdate', {
        detail: {
            session: data
        }
    });
    session.session.data = data;
    window.dispatchEvent(sessionEvent);
});


function onConnect() {
    console.log('Successfully connected to the websocket');
    socket.emit('authenticate', {
        method: 'jwt',
        token: JWT
    });
}

function onDisconnect() {
    console.log('Disconnected from websocket');
    // Reconnect
}

function onAuthenticated(data) {
    const {
        channelId
    } = data;

    console.log(`Successfully connected to channel ${channelId}`);
}

function parseEvent(event) {
    const e = new CustomEvent('onEventReceived', {
        detail: event
    });
    window.dispatchEvent(e);
}