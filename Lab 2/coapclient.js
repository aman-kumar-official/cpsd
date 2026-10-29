const coap = require('coap')
const req = coap.request('coap://172.16.30.163/Pradeepkumar')
req.on('response', (res) => {
    res.pipe(process.stdout)
})

req.end()
