const CodingAssignment = require('../util/CodingAssignment');
const jwt = require('jsonwebtoken');

module.exports = {
    getMessagesAndTransform: function(){
        let ca = new CodingAssignment();
        let transformedPayload;
        ca.getInbox('123456').then((response) => {
            //console.log('Coding Assignment Response:', response);
            let body  = JSON.parse(response);
            let payload = ca.decodePayload(body.payload);
            //console.log('decoded payload:', payload)
            payload.messages = ca.transformAndSort(payload.messages);
            
            console.log(payload);
        });
        
    }
}
