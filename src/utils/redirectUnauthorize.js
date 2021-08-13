export default (error)=>{
  if (error.response) {
    // console.log(error.response.data);
    // console.log(error.response.status);
    // console.log(error.response.headers);
    console.error(error)
    if(error.response.status === 401){
      window.localStorage.removeItem("token")
      // window.location.href = "/login"
    }
  }else{
    console.error(error)
  }
}
