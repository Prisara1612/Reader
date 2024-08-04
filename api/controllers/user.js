 const getUsers = async(req,res) =>{
    try{
        res.send('working!!!')
    }
    catch(error){
        console.log(error.message || `There was a server error.`)
    }
}

  const createUser = async(req,res) =>{
    try{
        res.send('working!!!')
    }
    catch(error){
        console.log(error.message || `There was a server error.`)
    }
}
module.exports={
  getUsers,
  createUser
}