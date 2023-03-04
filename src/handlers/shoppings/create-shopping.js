module.exports.handler = async (event, _context, _callback) => {
    console.log("[DEBUG]", event);
    return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
            error: false,
            msg: "Hola Lambda!",
        })
    }
}