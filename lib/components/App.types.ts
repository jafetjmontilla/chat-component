import { Dispatch } from "react"

export interface AppProps extends Partial<HTMLDivElement> {
  userUid: string
  label: string
  token: string
  theme: ThemeChat
  notifications: Notification[]
  chats: ResultChats,
  contacts: ResultContacts
  events: ResultEvents
  portals?: {
    results: Portal[]
    total: number
  },
  sendMessage: Dispatch<SendMessage>
  getScraperMetaData: Dispatch<any>
  elementLogo?: JSX.Element
  elementPerfil?: JSX.Element
  elementNotifications?: JSX.Element
}


export interface ResultChats {
  received?: number | null;
  total: number | null;
  results: Chat[];
}
export interface ResultContacts {
  total: number | null;
  results: Contact[];
}

export interface ResultEvents {
  total: number | null;
  results: Event[];
}

export interface Chat {
  _id: string
  addedes: Addedes[]
  messages: MessageChat[]
  createdAt?: number
  updatedAt?: number
  onLine: OnLine
  title: string
  type: string
  photoURL: string
}
interface propsValue {
  uid: string
  title: string
  photoURL: string
  onLine: OnLine
}

export interface Addedes {
  userUid: string
  type: string
  //  online: boolean
}
export interface MessageChat {
  type?: string
  emitUserUid?: string
  message?: string
  fileUrl?: string
  language?: string
  audio?: string
  video?: string
  image?: string
  title?: string
  description?: string
  url?: string
  createdAt?: number
  received?: boolean
  read?: boolean
  deletedEmit?: boolean
  deletedReceiv?: boolean
}
export interface OnLine {
  status: boolean
  dateConection: number
}
export interface Chats {
  results: Chat[]
  total: number | null
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
  onLine: OnLine
  nickName: string
  photoURL: string
  correo: string
  eventos?: Event[]
  portals?: Portal[]
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
export interface Image {
  _id: string
  i1024: string
  i800: string
  i640: string
  i320: string
}

export interface SendMessage {
  chat: Chat | null
  message: any
  type: string
}