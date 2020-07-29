const express = require('express')
const app = express()
const m = `                                                                               
 <pre>                                                 
 &&&&&&&.    &&&&&&&&&&&&&&&@.              
    @%    &&&&&&&&&&&&&&&&&&&&&@*           
    @%  @&&&&&&&&&&&&&&&&&   ,&&&&          
    @% &&&&&&&&&&&&&&&&&&&&&&&&&&&&         
    &%                                      
    &&% @@@@@@@@@@@@@@@@@@@@@@@@@@@@,        
    &&%        .(@&&&&&&&&@%.                
    @&&&&&*       /&&&&&        .@&&&       
    &&&&&&&#      /&&&&&     .&&&&&&&       
    &&&&&&&&&/    /&&&&&    &&&&&&&&&.      
    .&&&&&&&&&&@  /&&&&&  *&&&&&&&&&&%      
    %&&&&&&&&&&&# /&&&&&  &&&&&&&&&&&@      
      ,@&&&&&&&&& /&&&&& @&&&&&&&&&(        
            %@&&& /&&&&& &&&&@              
</pre>`
const txt = `      Be like the Mandalorian,
never take off your mask in public.
This is the way !\n`

const createResp = () => {
  const msg = () => require('./data/message.json')
  const resp = `${m}<p>${txt}</p>  <div>${msg().title}<div/><div>${msg().text}<div/>`
  return resp
}

app.get('/', (req, res) => {
  res.send(createResp())
})
app.listen(8080)
