function start() {
    // Initializes the client with the API key and the Sheets API.
    gapi.client.init({
        'apiKey': 'YOUR API KEY GOES HERE', // SIGN UP FOR ONE HERE https://console.developers.google.com/apis/credentials
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'], // This is the current URL for discovery docs - Jan 17 2017
    }).then(function testAuth() {
        // Executes an API request, and returns a Promise.
        // The method name `gapi.client.sheets.spreadsheets.values` comes from the API discovery.
        return gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: 'YOUR SPREADSHEETID GOES HERE', // You can find the spreadsheetId in the URL of your spreadsheet. Makes sure the spreadsheet is set to public.
            range: 'sheet1!A1', //This cell should work out of the gate on a new sheet. Just make that the sheet name is sheet1 and you have populated the A1 cell.
        });
    }).then(function(response) {
        var range = response.result;
        if (range.values.length =! 0 ) {
            console.log("API Connection Successful");
        } else {
            console.log("No data found.");
        }
        console.log(response.result)
    }, function(reason) {
        console.log('Error: ' + reason.result.error.message);
    });
};



// Loads the JavaScript client library and invokes `start` afterwards.
gapi.load('client', start);
