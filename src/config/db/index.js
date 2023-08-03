const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1/f8_edu_dev');
    console.log("Connect successfully!");
  } catch (error) {
    console.log("Connect failure!");
  }
}

module.exports = { connect };

// const mongoose = require('mongoose'); 

// async function connect(){ 
//     mongoose.connect('mongodb://127.0.0.1:27017/mydata') 
//     .then(() => 
//     console.log('Connected! ')); 
// } 

// module.exports = {connect};