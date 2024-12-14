
const fs = require('fs');

//sync ---  (Blocking)--->can be stored in a variable for reading-------->uses threading
//Async-----(Non-Blocking)---->cannot be stored in a variable for reading, requires callback() fn-------->no threading

//FILE WRITING

    //Blocking file(Sync)  --- gives output; no call back fn required

    // fs.writeFileSync('./test.txt', 'hey there');


    //Non-Blocking file(Async) ------- doesn't give output, require call back fn

    // fs.writeFile('./test.txt',"hello from aysnc",(err)=>{})



//FILE READING

    //Blocking

    // const res=fs.readFileSync('./contact.txt', 'utf-8');   //filename, encoding
    // console.log(res);

    //Non-Blocking

    // fs.readFile('./contacts.txt',"utf-8",(err,res)=>{
    //      if(err){
    //          console.log("error",err);
    //      }else{
    //         console.log(res);
    //      }
    // } );


//FILE APPENDING

//    fs.appendFileSync('./test.txt',`${Date.now()}hey there\n`);
   


