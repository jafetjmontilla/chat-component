export interface AppProps extends Partial<HTMLDivElement> {
  message: string
  token: string
  theme: ThemeChat
  notifications: Notification[]
  contacts: Contact[]
  chats: Chat[]
  portals: Portal[]
}
export interface ThemeChat {
  primaryColor: string
  secondaryColor: string
  tertiaryColor: string
  baseColor: string
}
export interface Notification {
  _id: string
  type: string
  message: string
  createdAt: number
  readAt?: number
}
export interface Contact {
  _id: string
  uid: string
  type: string //no usado hasta el momento
  onLine: onLine
  nickName: string
  photoURL: string
  correo: string
  portals: Portal[]
}
export interface Chat {
  _id: string
  addedes: addedes[]
  messages: messageChat[]
  createdAt: number
  updatedAt: number
  onLine: string
  title: string
  type: string
  photoURL: string
}
export interface Event {
  _id: string
  nombre: string
}
export interface Portal {
  _id: string
  title: string
  url: string
  photoURL: string
}
export interface onLine {
  status: Boolean
  dateConection: number
}
export interface addedes {
  userUid: string
  type: string
  online: boolean
}
export interface messageChat {
  type: string
  emitUserUid: string
  message: string
  fileUrl: string
  createdAt: number
  received: boolean
  read: boolean
  deletedEmit: boolean
  deletedReceiv: boolean
}
export interface image {
  _id: string
  i1024: string
  i800: string
  i640: string
  i320: string
}