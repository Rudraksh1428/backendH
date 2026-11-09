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

const express = require("express");

const app = express();

//route handler

app.get("/", function (req, res) {
  res.send("hello");
});

app.get("/hello", function (req, res) {
  res.send("hello hello");
});


app.listen(3000);
