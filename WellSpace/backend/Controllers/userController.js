import User from "../Models/UserSchema.js"

export const getSingleUser = async (req, res) => {
  const id = req.params.id

  try {

    const singleUser = await User.findById(id).select("-password")

    res.status(200).json({
      success: true,
      message: 'User successfully found',
      data: singleUser
    })

  } catch (error) {
    console.log(error)
    res.status(404).json({
      success: false,
      message: 'No user found'
    })
  }
}

export const getAllUser = async (req, res) => {

  try {

    const users = await User.find({}).select("-password")

    res.status(200).json({
      success: true,
      message: 'All users found',
      data: users
    })

  } catch (error) {
    console.log(error)
    res.status(404).json({
      success: false,
      message: 'No users found'
    })
  }
}