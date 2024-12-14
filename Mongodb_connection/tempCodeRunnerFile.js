7.0.0.1:27017/testdb1')
.then(()=>console.log('mongodb connected'))
.catch((err)=>console.log('MongoError',err));