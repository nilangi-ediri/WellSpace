import User from "../Models/UserSchema.js"
import Doctor from "../Models/DoctorSchema.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"


const generateToken = user => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "7d",
    }
  )
}

export const register = async (req, res) => {
  const { name, userName, phoneNumber, email, password, verificationDocument, status, role } = req.body

  try {
    let user = null

    if (role === "patient") {
      user = await User.findOne({ email })
    } else if (role === "doctor") {
      user = await Doctor.findOne({ email }) // or { email: email }
    }

    // check if user exist
    if (user) {
      return res.status(400).json({ message: 'User exists!' })
    }

    // if no user is found, hash password before creating the new user
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    if (role === "patient") {
      user = new User({
        name,
        email,
        password: hashPassword,
        phoneNumber,
        role,
        userName
      })
    }

    if (role === "doctor") {
      user = new Doctor({
        name,
        email,
        password: hashPassword,
        phoneNumber,
        role,
        userName,
        verificationDocument,
        status
      })
    }

    await user.save()

    res.status(200).json({
      success: true,
      message: 'User successfully created'
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Internal server error. Try again!'
    })
  }
}

export const login = async (req, res) => {

  const { email } = req.body

  try {
    let user = null

    const patient = await User.findOne({ email })
    const doctor = await Doctor.findOne({ email })

    if (patient) {
      user = patient
    }
    if (doctor) {
      user = doctor
    }

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      })
    }

    const isPasswordMatch = await bcrypt.compare(req.body.password, user.password)
    if (!isPasswordMatch) {
      return res.status(400).json({ status: false, message: "Invalid Credentials" })
    }

    const token = generateToken(user)
    const { password, role, appointments, ...rest } = user._doc

    res.status(200).json({
      status: user.status,
      message: "User successfully logged in!",
      token,
      data: { role, ...rest },
      role
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'User log in failed!'
    })
  }
}