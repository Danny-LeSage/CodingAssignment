'use strict';

const jwt = require('jsonwebtoken');
//Coding Challenge REST API Wrapper and helper functions

const request = require('request');
const baseUrl = 'https://coding-assignment-v1.now.sh/api/v1';

class CodingAssignment {
    
    getInbox(id){
        const url = `${baseUrl}/inbox/${id}`;
        return new Promise((resolve, reject) => {
            request({
                url: url,
                method: 'GET'
            }, (error, response, body) => {
                if(error){
                    reject(response);
                }
                resolve(body);
            });
        });
    }

    decodePayload(payload){
        let decodedPayload = jwt.decode(payload);
        return decodedPayload;
    }

    transformAndSort(messages){
        let messagesArray = [];

        for(let messageId in messages){
            messages[messageId].messageId = messageId;
            messagesArray.push(messages[messageId]);
        }
        messagesArray.sort((a, b) => {
            return (b.messagePriority - a.messagePriority);
        });
        return messagesArray;

    }
}

module.exports = CodingAssignment;

