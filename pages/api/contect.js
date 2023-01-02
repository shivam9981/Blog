import * as fs from 'fs';


export default function contect(req,res){
    console.log(req.body)
    fs.writeFile(`contectjson/${req.body.name}.json`, JSON.stringify(req.body) , ()=>{
        res.status(200).json("done")
    })
    
}