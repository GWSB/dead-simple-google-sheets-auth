## Dead Simple Google Sheets API Key Authentication

After spending far too much time searching for a simple, boilerplate JavaScript authentication method for the Google Sheets API, I decided to just write it myself. It's super simple to bake into any project. Follow the instructions below to get started.

## NOTE - This code is NOT suitable for production.

## NOTE: If you are using auth.js in an existing project, be sure to include the "https://apis.google.com/js/api.js" script BEFORE auth.js. ##

It's purpose is to simply give you an environment from which you can play with the Google Sheets API. See the license for warranty details.

## Installation instructions

1. Clone this repo

2. Open #auth.js# with your favorite text editor and add your API Key and SpreadsheetId from the directions below

## Getting your API Key

3. Go to https://console.developers.google.com/apis/credentials and create a new project

4. From "Dashboard", select "Enable API". Select "Sheets API" from the list of options and then press "Enable"

5. Click "Create Credentials" on the right hand side of the screen. Skip the next step by clicking the "API Key" link

6. Name your API key whatever you'd like and set your key restrictions to "None."

7. Press "Create" and copy your API Key. (Feel free to replace the API Key in auth.js at this point. Up to you.)

## Getting your spreadsheetId

1. Open or create a new spreadsheet.

2. Copy the string of characters in between /d/ and /edit/. It should look like this "1-A1FLN7gm1GfCUUTwosRTosXyQOzUnOJX9Rr0MGbdw0" (This is not a real spreadsheetId)

3. Type "123" in cell A1

4. Now replace the spreadsheetId in auth.js with the string you copied from the URL

## Checking to see if it worked

1. Spin up a local server from the root directory of your project. (I prefer the python SimpleHTTPServer)

2. Open your developers console from index.html

3. Refresh the page and check the console for this message "API Connection Successful"

## Voila! API Authenticated!

NOTE: If you are using auth.js in an existing project, be sure to include <script src="https://apis.google.com/js/api.js"></script> BEFORE auth.js.

## Contributing

I'm n00b to JavaScript and programming in general. If you see something that could be done better, please fork the repo and submit a pull request.
