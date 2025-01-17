// Daten abrufen
function getUserData(callback) {
    console.log("Daten werden abgerufen...");

    setTimeout(() => {
        const user = {
            id: 101,
            name: "Max Mustermann",
            email: "max@example.com"
        };

        callback(user);
    }, 2000);
}

// Callback: Daten anzeigen
function displayUser(data) {
    console.log("Benutzerinformationen:");
    console.log(`Name: ${data.name}`);
    console.log(`Email: ${data.email}`);
}

// Aufruf mit Callback
getUserData(displayUser);