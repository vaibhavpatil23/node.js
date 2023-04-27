const path = require('path')

const v =path.basename('c:\\temp\\myfile.html')
const v2 =path.dirname('c:\\temp\\myfile.html')
console.log(v)
console.log(v2)
const a3 = path.extname(__filename)
console.log(__filename,a3)