import app from "./server.js"
import mongodb from "mongodb"
// import ReviewsDAO from "./dao/reviewsDAO.js"

const MongoClient = mongodb.MongoClient
const mongo_username = process.env["MONGO_USERNAME"]
const mongo_password = process.env["MONGO_PASSWORD"]

const uri = `mongodb+srv://anchitasharma31454:Wzt8RrhdD0O62P0C@cluster0.bc2cblr.mongodb.net/`

const port = 8000

MongoClient.connect(
    uri,
    {
        maxPoolSize:50,
        wtimeoutMS:2500,
        useNewUrlParser: true
    })
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client =>{
        app.listen(port,() => {
            console.log(`listening on port ${port}`)
        })
    })