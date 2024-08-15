import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    to_user: {
        type: String,
        required: true
    },
    oid: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: [true, "Enter message"]
    },
    amount: {
        type: Number,
        required: [true, "Enter message"]
    },
    done: {
        type: Boolean,
        default: false
    }

}, {
    timestamps: true
})

const Payment = mongoose.models.Payment || mongoose.model("Payment",PaymentSchema)
export default Payment;
