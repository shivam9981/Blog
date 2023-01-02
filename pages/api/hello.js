// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'
export default async function handler(req, res) {

  let data = await fs.promises.readdir('blogData');
  let listdata = []
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    let value = await fs.promises.readFile(('blogData/'+element) , 'utf-8');
    listdata.push(JSON.parse(value))
  }
  res.json(listdata)
}

  // http://localhost:3000/api/hello