// any source  --> loader1 --> loader2 --->loader...n ---> js

import {marked} from 'marked'

 export default source=>{
    const html=marked(source)
    const code = `export default ${JSON.stringify(html)}`
    return code
}