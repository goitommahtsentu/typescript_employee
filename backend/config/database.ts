import mongoose from 'mongoose'

const uri:string='mongodb://127.0.0.1:27017/employee_crud_typescript'
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(uri, {

        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error( 'error' )
        process.exit(1)
    }
}

export default connectDB
