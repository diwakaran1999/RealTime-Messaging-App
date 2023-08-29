const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pic: {
        type: String,
        default:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Ftheyardmilkshakebar%2Fphotos%2Fa.268314940292287%2F1343438852779885%2F%3Ftype%3D3&psig=AOvVaw0qEHKwfquztUbrDUJssT8B&ust=1693334392205000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMCi8KuAgIEDFQAAAAAdAAAAABAQ"
    },
},
    {
        timestamps: true,
    }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
    if (!this.isModified) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

const User = mongoose.model("User", userSchema);

module.exports = User;