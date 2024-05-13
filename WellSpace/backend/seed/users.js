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
    userName: "milaIsCool2000",
    phoneNumber: 412345678,
    profilePicture: "https://res.cloudinary.com/de28z5did/image/upload/v1715583693/samples/two-ladies.jpg",
    role: "patient",
    gender: "female",
    appointments: [],
  },
  {
    _id: "6602d3d1155e8f469cffdde9",
    email: "emma@gmail.com",
    password: hashPassword,
    name: "Emma Smith",
    userName: "emma2020",
    phoneNumber: 412345678,
    profilePicture: "https://res.cloudinary.com/de28z5did/image/upload/v1715583694/samples/smile.jpg",
    role: "patient",
    gender: "female",
    appointments: [],
  }
]