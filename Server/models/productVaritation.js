const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { schemaOption } = require("./schemaOption");

const productVaritation = new Schema(
    {
        color: { type: Schema.Types.Array, default: [] },
        size: { type: Schema.Types.Array, default: [] },
    },
    schemaOption
);
module.exports = mongoose.model("ProductVaritation", productVaritation);
