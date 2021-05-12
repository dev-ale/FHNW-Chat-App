//socket connection
import io from 'socket.io-client'

//const socket = io("http://localhost:5000", { withCredentials: true, extraHeaders: { "Access-Control-Allow-Credentials": "Yes" } })
const socket = io("https://web-engineering-fhnw.herokuapp.com:5000", { withCredentials: true, extraHeaders: { "Access-Control-Allow-Credentials": "Yes" } })


export default socket