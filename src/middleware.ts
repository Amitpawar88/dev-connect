export { default } from "next-auth/middleware"

export const config = { matcher: ["/my-rooms", "/browse", "/edit-room"] }