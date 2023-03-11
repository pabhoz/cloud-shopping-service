module.exports.handler = async (event, _context, _callback) => {
    console.log('[EVENT]:', event);
    if(event.Records[0].eventSource === 'aws:dynamodb') {
        console.log(JSON.stringify(event.Records[0].dynamodb));
    }
};
