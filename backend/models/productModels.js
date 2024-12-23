import mongoose from "mongoose";

const reviewSchema= mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    user:{type: mongoose.Schema.Types.ObjectId, required: true, ref:'User'},

},{timestamps: true});

const productSchema = new mongoose.Schema({
    user:{type: mongoose.Schema.Types.ObjectId, required: true, ref:'User'},
    name: { type: String, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    category: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    reviews: [reviewSchema],
},{timestamps: true});


const Product = mongoose.model('Product',productSchema);


export default Product;