export default ()=>{

  let host = window.location.host==="localhost:3000" ?"localhost:8000":window.location.host
  let protocol = window.location.protocol==="https:"?"wss:":"ws:"

  return `${protocol}//${host}`
}
