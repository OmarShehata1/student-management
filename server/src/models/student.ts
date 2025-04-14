import mongoose, {Schema , Document} from "mongoose";

interface IStudent extends Document {
    fullName: string;
    email: string;
    age: string;
    class: string;
}

const StudentSchema: Schema = new Schema({
    fullName: {type: String, required: true},
    email: {type: String},
    age: {type: String},
    class: {type: String}
}, {
    timestamps: true      
});

export const studentModel = mongoose.model<IStudent>('Students', StudentSchema);
