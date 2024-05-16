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

export const updateUser = async (req, res) => {
  const id = req.params.id

  console.log(id)
  console.log(req.body)

  try {

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body
      },
      {
        new: true  // if true, return the modified document rather than the original
      }
    )

    console.log(updatedUser)

    res.status(200).json({
      success: true,
      message: 'User successfully updated',
      data: req.body
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Failed to update'
    })
  }
}