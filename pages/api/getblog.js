import * as fs from 'fs'
export default function handler(req, res) {
  fs.readFile((`blogData/${req.query.slug}.json`),'utf-8', (err, val) => {
    res.status(200).json( JSON.parse(val) )
  });

}