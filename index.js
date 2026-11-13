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

/* const express = require("express");
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

app.listen(3000);  */

//-------------------------------------------------

/*
const express = require("express");

const app = express();

function isOldEnough(age) {
  if (age >= 15) {
    return true;
  } else {
    return false;
  }
}

app.get("/hello", function (req, res) {
  if (isOldEnough(req.query.age)) {
    res.json({
      msg: "success",
    });
  } else {
    res.status(411).json({
      msg: "nuh uh",
    });
  }
});

app.get("/hello2", function (req, res) {
  if (isOldEnough(req.query.age)) {
    res.json({
      msg: "success",
    });
  } else {
    res.status(411).json({
      msg: "nuh uh",
    });
  }
});

app.listen(3000);
*/

//using middle ware

/* const express = require("express");

const app = express();

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 15) {
    next();
  } else {
    res.json({
      msg: "nuh-uh",
    });
  }
}

app.use(isOldEnoughMiddleware) //instead of passing it individually // triggers for those who are below this app/.use

app.get("/hello", isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "success",
  });
});

app.get("/hello2", isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "success x2",
  });
});

app.listen(3000); */

//-------------------------------------------------

/* 
!assignment!
*/

/* const express = require("express");

const app = express();

let requestCount = 0;

app.use(function(req,res,next)
{
  requestCount = requestCount + 1;
  next(); 
})

app.get('/user',function(res,req){
  res.statusCode(200).json({name:"john"})
})

app.post('/user',function(res,req){
  res.statusCode(200).json({msg:"hello ji"})
})

app.get('/requestCount',function(res,req){
  res.statusCode(200).json({requestCount})
})

app.listen(3000); */

//-------------------------------------------------

/* 
 !assignment ratelimmiter!
 */

/*const express = require("express");

const app = express();

let numberOfRequestsForUser = {};
serInterval(() => {
  numberOfRequestsForUser = {};
}, 1000);

app.use(function (req, res, next) {
  const userId = req.headers["user-id"];
  if (numberOfRequestsForUser[userId]) {
    numberOfRequestsForUser[userId] = numberOfRequestsForUser[userId] + 1;
    if (numberOfRequestsForUser[userId] > 5) {
      res.status(404).send("no");
    } else {
      next();
    }
  } else {
    numberOfRequestsForUser[userId] = 1;
    next();
  }
});
*/

//-------------------------------------------------

/* 
!assignment! errorCount
*/

/* const request = require('supertest');
const asssert = require('assert');
const express = require("express");

const app = express();

let errorCount = 0;

app.get('/user',function(req,res)
{
  throw new Error("user not found");
  res.status(200).json({name : 'john'})
})

app.post('/user',function(req,res)
{
  throw new Error("user not found");
  res.status(200).json({msg : 'dummy user'})
})

app.get('/errorCount',function(req,res)
{
  throw new Error("user not found");
  res.status(200).json({errorCount})
})

--error middleware--

app.use(function(err,req,res,next){
res.status(404).send({})
errorCount = errorCount + 1;
})

app.listen(3000); */

//-------------------------------------------------

/* const express = require("express");

const app = express();

app.get("/sum", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
 answer :  a+b
  });
});

app.get("/multiply", function (req, res) {
  const c = parseInt(req.query.c);
  const d = parseInt(req.query.d);

  res.json({
    answer: c * d,
  });
});


app.get("/sum/:e/:f", function (req, res) {
  const e = parseInt(req.params.e);
  const f = parseInt(req.params.f);

  res.json({
 answer :  e+f
  });
});
app.listen(3000); */

//-------------------------------------------------

/*const express = require("express");
const app = express();

let requestCount = 0;

function requestIncrease(req, res, next) {
  requestCount = requestCount + 1;
  console.log(`request number : ${requestCount}`);
  req.requestCount = requestCount;
  next(); 
}

app.use(requestIncrease);

app.get("/sum", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    answer: a + b,
    count: req.requestCount,
  });
});

app.get("/multiply", function (req, res) {
  const c = parseInt(req.query.c);
  const d = parseInt(req.query.d);

  res.json({
    answer: c * d,
    count: req.requestCount,
  });
});

app.listen(3000);*/

//-------------------------------------------------

/*
!assignment middleware
*/
/* const express = require("express");

const app = express();

function middleware(req,res,next)
{
  console.log("method is " + req.method)
  console.log("Host is" + req.hostname)
   console.log("Route is" + req.url)
  console.log(new Date())

  next();
}

app.use(middleware);

app.get("/sum", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
 answer :  a+b
  });
});

app.get("/multiply", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    answer: a * b,
  });
});


app.get("/divide", function (req, res) {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  res.json({
 answer :  a/b
  });
});
app.listen(3000); */

//-------------------------------------------------

/*const express = require("express");

const app = express();

//in express , if u want to send json data , first u have to parse it ,  express.json() is used to parse it or instead of express.json we can use bodyParser.json

const middleware = express.json();
app.use(middleware);

app.post("/sum", function (req, res) {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  res.json({
    answer: a + b,
  });
});

app.listen(3000); */

//-------------------------------------------------

/*const cors = require("cors")
const express = require("express");

const app = express();

const middleware = express.json();
app.use(cors(
  {
    domains : ["",""] //particular domains allowed
  }
));
app.use(middleware);

app.post("/sum", function (req, res) {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  res.json({
    answer: a + b,
  });
});

app.listen(3000);*/

//-------------------------------------------------

/*const express = require("express");

const app = express();

app.use(express.json());

const users = [];

function generateToken() {
  let options = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let token = "";
  for (let i = 0; i < 32; i++) {
    token += options[Math.floor(Math.random()) * options.length];
  }

  return token;
}

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (users.find((u) => u.username === username)) {
    res.json({
      message: "already signed up",
    });
    return;
  }
  if (username.length < 5 || password.length < 8) {
    res.json({
      message: "username small",
    });
    return;
  }
  users.push({
    username: username,
    password: password,
  });
  res.json({
    message: "you are signed up",
  });
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password == password) {
      foundUser = users[i];
    }
  }
  if (foundUser) {
    const token = generateToken;
    foundUser.token = token
    res.json({
      message: token,
    });
  }
  else {
    res.status(403).send({
      message : "invalid"
    })
  }
});

app.listen(3000); */

//-------------------------------------------------

/*
const express = require ('express')

const app = express ()

app.use(express.json());

const users = [];

function generateToken() {
  let options = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let token = "";
  for (let i = 0; i < 32; i++) {
    token += options[Math.floor(Math.random()) * options.length];
  }

  return token;
}

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (users.find((u) => u.username === username)) {
    res.json({
      message: "already signed up",
    });
    return;
  }
  if (username.length < 5 || password.length < 8) {
    res.json({
      message: "username small",
    });
    return;
  }
  users.push({
    username: username,
    password: password,
  });
  res.json({
    message: "you are signed up",
  });
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password == password) {
      foundUser = users[i];
    }
  }
  if (foundUser) {
    const token = generateToken;
    foundUser.token = token
    res.json({
      message: token,
    });
  }
  else {
    res.status(403).send({
      message : "invalid"
    })
  }
});

app.get('/me', function(req,res)
{
  const token = req.headers.token;
  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].token ==token) {
      foundUser = users[i];
    }
  }
    if(foundUser){
    res.json ({
     username: foundUser.username,
    password: foundUser.password,})
  } else { 
    res.status(401).send({
      message : "token invalid"
    })
  }
})

app.listen(3000) */

//-------------------------------------------------

/*
const express = require ('express')
const jwt = require('jsonwebtoken')
const JWT_SECRET = ""
const app = express ()

app.use(express.json());

const users = [];

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (users.find((u) => u.username === username)) {
    res.json({
      message: "already signed up",
    });
    return;
  }
  if (username.length < 5 || password.length < 8) {
    res.json({
      message: "username small",
    });
    return;
  }
  users.push({
    username: username,
    password: password,
  });
  res.json({
    message: "you are signed up",
  });
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password == password) {
      foundUser = users[i];
    }
  }
  if (foundUser) {
    const token = jwt.sign({
      username:username,
    },JWT_SECRET); //convert their username to a jwt
  
    res.json({
      message: token,
    });
  }
  else {
    res.status(403).send({
      message : "invalid"
    })
  }
});

app.get('/me', function(req,res)
{
  const token = req.headers.token;
  const decodedInformation = jwt.verify(token , JWT_SECRET);
  const username = decodedInformation.username;
  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].token ==token) {
      foundUser = users[i];
    }
  }
    if(foundUser){
    res.json ({
     username: foundUser.username,
    password: foundUser.password,})
  } else { 
    res.status(401).send({
      message : "token invalid"
    })
  }
})

app.listen(3000)  */

//-------------------------------------------------

/* const express = require("express")

const jwt = require('jsonwebtoken')
const JWT_SECRET = ""
const app = express ()

function logger(req,res,next){
console.log(`request came from ${req.method}`);
next()
}

app.use(express.json(),logger);

const users = [];

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (users.find((u) => u.username === username)) {
    res.json({
      message: "already signed up",
    });
    return;
  }
  if (username.length < 5 || password.length < 8) {
    res.json({
      message: "username small",
    });
    return;
  }
  users.push({
    username: username,
    password: password,
  });
  res.json({
    message: "you are signed up",
  });
});

app.post("/signin", function (req, res)  {
  const username = req.body.username;
  const password = req.body.password;
  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password == password) {
      foundUser = users[i];
    }
  }
  if (foundUser) {
    const token = jwt.sign({
      username:username,
    },JWT_SECRET); 
  
    res.json({
      message: token,
    });
  }
  else {
    res.status(403).send({
      message : "invalid"
    })
  }
});

function authMiddleware(req,res,next){
  const token = req.headers.token;
  const decodedData = jwt.verify(token,JWT_SECRET)
  if((decodedData.username)){
    req.username = decodedData.username;
    next()
  }
  else{
    res.json({
      message : "not logged"
    })
  }
}



app.get('/me',authMiddleware , logger , function(req,res)
{
  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username == req.username) {
      foundUser = users[i];
    }
  }
    if(foundUser){
    res.json ({
     username: foundUser.username,
    password: foundUser.password,})
  } else { 
    res.status(401).send({
      message : "token invalid"
    })
  }
})

app.listen(3000) */

//-------------------------------------------------