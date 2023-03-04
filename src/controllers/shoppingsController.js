const { write } = require("../utils/dynamoDB");
const { uid } = require('uid');

const SHOPPINGS_TABLE = `Shoppings-${process.env.ENV}`;
/*
    {
        membershipPlan: "Bronze",
        value: 10,
        status: "APPROVED|DENIED|IN_PROGRESS",
        buyer: {
            name: "",
            nid: "",
            email: ""
        },
        createdAt: "",
        updatedAt: "",
    }
*/
const createShopping = async (body) => {
    const shoppingId = uid(16);
    const status = "APPROVED";
    const createdAt = Date.now();
    const updatedAt = Date.now();
    return write({ shoppingId, ...body, status, createdAt, updatedAt }, SHOPPINGS_TABLE);
}
module.exports = {
    createShopping,
}