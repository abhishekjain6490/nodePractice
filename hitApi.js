const https = require('https');

console.log(1);

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
    console.log(2);
    let data = '';
    resp.on('data', (chunk) => {
        data += chunk;
    });
    console.log(3);
    resp.on('end', () => {
        console.log(JSON.parse(data));
        console.log(4);
    });
}).on("error", (err) => {
    console.log("Error: " + err.message);
});

console.log(5);