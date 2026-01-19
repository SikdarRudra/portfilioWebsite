import jwt from 'jsonwebtoken'

const generateToken = async (userID)=>{
    try {
        const token = await jwt.sign({id:userID}, process.env.JWT_SECRET, {expiresIn:'1d'})
        return token

    } catch (error) {
        console.log(error)
    }
}

export default generateToken