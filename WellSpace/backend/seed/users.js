import bcrypt from "bcryptjs"

// hash doctor's password
const salt = await bcrypt.genSalt(10)
const hashPassword = await bcrypt.hash("123", salt)

export const users = [
  {
    _id: "6602d3d1155e8f469cffdde8",
    email: "mila@gmail.com",
    password: hashPassword,
    name: "Mila Osbourne",
    phoneNumber: 412345678,
    role: "patient",
    gender: "female",
    appointments: [],
    verificationDocument: "",
  },
  {
    _id: "6602d3d1155e8f469cffdde9",
    email: "emma@gmail.com",
    password: hashPassword,
    name: "Emma Smith",
    phoneNumber: 412345678,
    role: "patient",
    gender: "female",
    appointments: [],
    verificationDocument: "",
  }
]