import mongoose from "mongoose";
import { type } from "os";



const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        ref: 'User'
    },
    orderItems:[
        {
            name:{type:String, required:true},
            qty:{type:Number, required:true},
            price:{type:Number, required:true},
            image:{type:String, required:true},
            product:{type:mongoose.Schema.Types.ObjectId, ref:'Product', required:true},
            
        }
    ],
    shippingAddress:{
        address:{type:String, required:true},
        city:{type:String, required:true},
        postalCode:{type:String, required:true},
        country:{type:String, required:true},
    },
    paymentMethod:{type:String, required:true},
    paymentResult:{
        id:{type:String},
        status:{type:String},
        update_time:{type:String},
        email_address:{type:String},
    },
    itemsPrice:{
        type:Number, required:true,
        default:0,
    },
    taxPrice:{
        type:Number, required:true,
        default:0,
    },
    shippingPrice:{
        type:Number, required:true,
        default:0,
    },
    totalPrice:{
        type:Number, required:true,
        default:0,
    },
    isPaid:{
        type:Boolean,
        default:false,
    },
    paidAt:{
        type:Date,
        default:null,
        required:true,
    },
    isDelivered:{
        type:Boolean,
        default:false,
        required:true,
    },
    deliveredAt:{
        type:Date,
        default:null,
        required:true,
    },
  
    
},{timestamps:true});

const Order = mongoose.model('Order', orderSchema);

export default Order;