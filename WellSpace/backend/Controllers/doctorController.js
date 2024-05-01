import Doctor from "../Models/DoctorSchema.js"

export const getSingleDoctor = async (req, res) => {
  const id = req.params.id

  try {

    const singleDoctor = await Doctor.findById(id)
      // .populate("reviews")
      .select("-password")

    res.status(200).json({
      success: true,
      message: 'Doctor successfully found',
      data: singleDoctor
    })

  } catch (error) {
    console.log(error)
    res.status(404).json({
      success: false,
      message: 'No Doctor found'
    })
  }
}

export const getAllDoctor = async (req, res) => {

  try {

    const { query } = req.query
    let doctors

    if (query) {
      doctors = await Doctor.find({
        status: 'approved',
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } }
        ]
      }).select("-password")
    } else {
      doctors = await Doctor.find({ status: 'approved' }).select("-password")
    }

    res.status(200).json({
      success: true,
      message: 'All Doctors found',
      data: doctors
    })

  } catch (error) {
    console.log(error)
    res.status(404).json({
      success: false,
      message: 'No Doctors found'
    })
  }
}