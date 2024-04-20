import bcrypt from "bcryptjs"

const salt = await bcrypt.genSalt(10)
const hashPassword = await bcrypt.hash("1234", salt)

export const doctors = [
  {
    _id: "660247adb56a95c2c97fa68b",
    email: "anna@gmail.com",
    password: hashPassword,
    name: "Anna Howard",
    phone: 412345678,
    ticketPrice: 10,
    role: "doctor",
    gender: "female",
    specialization: "Depression",
    qualifications: [
      {
        startingDate: "2000-03-04",
        endingDate: "2008-04-05",
        degree: "PhD in Psychology",
        university: "Adelaide University"
      }
    ],
    experiences: [
      {
        startingDate: "2002-02-27",
        endingDate: "2009-03-15",
        position: "Junior Psychiatrists",
        hospital: "Royal Adelaide Hospital"
      },
      {
        startingDate: "2009-03-17",
        endingDate: "2020-03-29",
        position: "Senior Psychiatrists",
        hospital: "Royal Adelaide Hospital"
      }
    ],
    bio: "Empathic Listener, Healing Minds",
    about: "My journey in psychiatry began with a passion for understanding the complexities of the human mind and helping others navigate through life's challenges.",
    timeSlots: [
      {
        startingTime: "14:32",
        endingTime: "15:32",
        day: "tuesday"
      }
    ],
    reviews: [],
    averageRating: 5,
    totalRating: 2,
    isApproved: "approved",
    appointments: [],
    blogs: [],
  },
]