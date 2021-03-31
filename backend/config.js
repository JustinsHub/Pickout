

const DB_URI = (process.env.NODE_ENV === "test") 
? "postgresql:///BuyMe_test" 
: "postgresql:///BuyMe";

const SECRET_KEY = process.env.SECRET_KEY || "our_secret_key"

const BCRYPT_WORK_FACTOR = 12;

module.exports = {
    DB_URI,
    SECRET_KEY,
    BCRYPT_WORK_FACTOR
}