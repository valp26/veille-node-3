var http = require("http"); 
http.createServer((request, response) =>
{ 
 console.log('branchement sur le port 3000')
 response.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
 const fs = require("fs");
 let data = fs.readFileSync('provinces.json');
 let tt = JSON.parse(data);
 let tableau = '<table>';
 console.log(data);
 for (let p in tt) {
 	tableau += '<tr><td>' + p + '</td><td>' + tt[p] + '</td></tr>';
 }
 tableau += '</table>';
 response.write(tableau);
 response.end(); 
}).listen(3000);