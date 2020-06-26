const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        description: {
            type: String,
            required: true,
            maxlength: 2000
        },
        price: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 32
        },
        category: {
            type: ObjectId,
            ref: "Category",
            required: true
        },
        website: {
            type: String,
            trim: true,
            maxlength: 32
        },
        admissions: {
            type: Date,
        
        },
        contactno: {
            type: Number,
            maxlength:10
        
        },
        photo: {
            data: Buffer,
            contentType: String
        },
       
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
