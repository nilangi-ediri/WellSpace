const upload_preset = "mnvaxbmu"
const cloud_name = "de28z5did"

const uploadCloudinary = async (file) => {
  const uploadData = new FormData()

  uploadData.append('file', file)
  uploadData.append('upload_preset', upload_preset)
  uploadData.append('cloud_name', cloud_name)

  const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
    method: "POST",
    body: uploadData,
  })

  const data = await res.json()

  return data
}

export default uploadCloudinary