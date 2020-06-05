import * as functions from 'firebase-functions';

 // Start writing Firebase Functions
 // https://firebase.google.com/docs/functions/typescript

 exports.randomNumber = functions.https.onRequest((request, response) => {
    const number = Math.round(Math.random() * 100)

    response.send(number.toString())
 })

 exports.toTheKit = functions.https.onRequest((request, response) => {
    response.redirect('https://keepittight.me')
 })
