// npm i chalk

// -------------------------------------------------

/* import chalk from 'chalk';
console.log(chalk.blue('Hello'));
console.log(chalk.red.bold('Hello'));
console.log(chalk.green.bold.underline('Hello')); */

//--------------------------------------------------

/*const path = require ('path')
console.log(__dirname) // prints C:\Users\RUDRAKSH\Desktop\backendH
console.log(path.join(__dirname,'index.js')) //prints C:\Users\RUDRAKSH\Desktop\backendH\index.js*/

//-------------------------------------------------

/*
! assignment 1 !
*/

/*
const fs = require ('fs')
const {Command} = require('commander')
const program = new Command()

program.name('counter').description('helllo').version("0.8.0");
program.command('count').description('count num of lines').argument('<file>','file to count').action((file)=>{
  fs.readFile(file,'utf8',(err,data)=>{
    if(err){
      console.log(err);
    }
    else{
      const lines = data.split('/n').length;
      console.log(`there are ${lines} lines in ${file}`)
    }
  })
})

program.parse();
*/

//-------------------------------------------------

/*const express = require("express");

const app = express();

//route handler

app.get("/", function (req, res) {
  res.send("hello");
});

app.get("/hello", function (req, res) {
  res.send("hello hello");
});


app.listen(3000); //which port */

//-------------------------------------------------

/*const express = require("express");

function calculatedSum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans += i;
  }
  return ans;
}

const app = express();

app.get("/", function (req, res) {
  const n = req.query.n;
  const ans = calculatedSum(n);
  res.send(ans.toString());
});

app.listen(3000);*/

//-------------------------------------------------

const express = require("express");
const app = express();

var users = [
  {
    name: "first",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json())

app.get("/", function (req, res) {
  const firstKidney = users[0].kidneys;
  const numberOfKidneys = firstKidney.length;

  let numberOfHealthyKidneys = 0;

  for (let i = 0; i < firstKidney.length; i++) {
    if (firstKidney[i].healthy) {
      numberOfHealthyKidneys += 1;
    }
  }

  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy:isHealthy
  })
  res.json({
    msg: "done"
  })
});

app.put("/", function (req, res) {
for(let i = 0;i<users[0].kidneys.length;i++){
  users[0].kidneys[i].healthy = true;
}
res.json({})
});

app.delete("/", function (req, res) {
const newKidneys = [];
for(let i = 0;i<users[0].kidneys.length;i++){
 if (users[0].kidneys[i].healthy)
 {
  newKidneys.push({
    healthy:true,
  })
}
}
users[0].kidneys = newKidneys;
res.json({
  msg: "done"
})
});

app.listen(3000);

//-------------------------------------------------