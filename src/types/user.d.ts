

export interface IUser {
    fullname: string
    phone_number: string
    password?: string
    role: 'farmer' | 'admin'
}