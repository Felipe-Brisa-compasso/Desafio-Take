const express = require('express')
const server = express()
const axios = require('axios')
const porta = process.env.PORT || 3000

server.get('/', (req, res) => {
    axios.get('https://api.github.com/users/takenet/repos?sort=created&direction=asc')
        .then( (response)=> {
            let CSRep = []
            let i = 0
            response.data.forEach(rep => {
                if(rep.language == 'C#'){
                    if(i < 5){
                        let query = {"nome":rep.name,"descricao":rep.description, avatar:rep.owner.avatar_url} 
                        CSRep.push(query)
                        i++
                    }
                    
                }
            });

            return res.json(CSRep);
        })
        .catch((error)=>{
            console.log(error)
        })

})
server.listen(porta, () => console.log('Rodando'))