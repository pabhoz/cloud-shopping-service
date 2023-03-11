module.exports.handler = async (event, _context, _callback) => {
    console.log(`Despachando correo para: ${event.email}.`);
    console.log(`Hola ${event.name} gracias por ser un usuario PREMIUM`);
};
