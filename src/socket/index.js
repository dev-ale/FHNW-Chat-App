//socket connection
import io from 'socket.io-client'

//const socket = io("http://localhost:5000", { withCredentials: true, extraHeaders: { "Access-Control-Allow-Credentials": "Yes" } })
const socket = io(process.env.URL_SOCKET + ":5000", { withCredentials: true, extraHeaders: { "Access-Control-Allow-Credentials": "Yes" } })


export default socket