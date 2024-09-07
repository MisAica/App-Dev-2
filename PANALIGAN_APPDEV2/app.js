const readline = require('readline');
const fs = require('fs');
const http = require('http');


/*Code1

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please Enter Your Name: ", (name) => {
    console.log("Enter Your Name: "+name);
    rl.close();
})

rl.on('close', () => {
    console.log("Interface is Closed");
    process.exit(0);
})*/

/*Code2********

let textIn = fs.readFileSync('./Files/input.txt', 'utf-8');
console.log(textIn)

let content = 'Data Read From input.txt: ${textIn}. \nDate created ${new Date ()}'
fs.writeFileSync('./Files/output.txt', content);*/

/*Code3*******

fs.readFile('./Files/start.txt', 'utf-8', (error1, data1) => {
    if (error1) {
      console.error(error1);
      return;
    }
    console.log(data1);
    fs.readFile(`./Files/${data1}.txt`, 'utf-8', (error2, data2) => {
      if (error2) {
        console.error(error2);
        return;
      }
      console.log(data2);
    });
  });
  console.log('Reading File....');*/

  /*Code4******SERVER*/

  const html = fs.readFileSync('./Template/index.html', 'utf-8')

  const server = http.createServer((request, response) => {
    //response.end(html);
    //console.log('Request was received');
    //console.log(response);
    let path = request.url;
    //response.end(path);
    if(path === '/' || path.toLocaleLowerCase() ==='/home'){
        response.end(html.replace('MA. ANGELICA D. PANALIGAN', 'You are in my home page!'));
    } else if(path.toLocaleLowerCase() === '/about'){
        response.end(html.replace('MA. ANGELICA D. PANALIGAN', 'You are in my about page!'));
    } else if(path.toLocaleLowerCase() === '/contact'){
        response.end(html.replace('MA. ANGELICA D. PANALIGAN', 'You are in my contact page!'));
    } else if(path.toLocaleLowerCase() === '/hobbies'){
        response.end(html.replace('MA. ANGELICA D. PANALIGAN', 'You are in my hobbies page!'));
    } else {
        response.end(html.replace('visitor', 'Hindi makita ang page!'));  
    }


  });

  server.listen(8000, '127.0.0.1', () => {
    console.log('Server started');
  })
