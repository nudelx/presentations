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

const resp = `${m}<p>${txt}</p>`
app.get('/', (req, res) => {
  res.send(resp)
})
app.listen(8080)
