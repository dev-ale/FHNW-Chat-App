//socket connection
import io from 'socket.io-client'

const socket = io("http://localhost:3000", { withCredentials: true, extraHeaders: { "Access-Control-Allow-Credentials": "Yes" } })

export default socket