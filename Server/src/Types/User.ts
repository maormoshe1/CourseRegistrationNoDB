import Course from "./Course"

type User = {
    id: number
    firstName: string
    lastName: string
    birthday: Date
    email: string
    phoneNumber: string
    takenCourses: Course[]
}

export default User;