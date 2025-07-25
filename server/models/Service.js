import { Schema,model } from "mongoose";

const ServiceSchema = new Schema({
     name: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    default: 30,  
  },
  category: String,
  image: String, // could be a filename or URL
}, {
  timestamps: true, // adds createdAt and updatedAt
});

 
const Service = model('User', serviceschema);
export default Service;