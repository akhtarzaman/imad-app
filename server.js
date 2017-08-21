var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
  'article-one': {
      title: 'Article One | Akhtar Zaman',
    heading: 'Article One',
    date: '21-Aug-2017',
    content: `
            <p>
                This is Akhtar's first page content 
                </p>
                 <p>
                This is Akhtar's first page content 
                </p>
                 `
  },
  'article-two': {
      title: 'Article Two | Akhtar Zaman',
    heading: 'Article Two',
    date: '21-Aug-2017',
    content: `
            <p>
                This is Akhtar's second page content !
                 <p>
                This is Akhtar's first page content !!! 
            </p>`
  },
  'article-three': {
      title: 'Article One | Akhtar Zaman',
    heading: 'Article One',
    date: '21-Aug-2017',
    content: `
            <p>
                This is Akhtar's third page content ! 
                 <p>
                This is Akhtar's 3rd page content !!! 
            </p>`
  }
    
};

function createTemplate ( data) {
    
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = 
    `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="/ui/styles.css" rel="stylesheet">
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                    <h3>
                        ${heading}
                    </h3>
                    <div>
                        ${date}
                    </div>
                    <div>
                        ${content}
                    </div>
            </div>
            
        </body>
    </html>`
    ;
    return htmlTemplate;
}

app.get('/:articleName', function (req, res) {
  //res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
  //res.send('Article one is requested and will be served here');
  res.send(createTemplate(articles[articleName]));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
 });

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});


/*
var pool = require('pg').Pool;

var config = {
    user:'zamanakhtar',
    database:'zamanakhtar',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password:process.env.DB_PASSWORD
};




var article={};
function createTemplate(data) {
    
}

var pool = new Pool(config);
app.get('/test-db', function(req,res) {
    //make a select request
    //return response with the results
    pool.query('SELECT * from test',function ( err, result) {
        if ( err ) {
            res.status(500).send(err.toString());
        }else {
            res.send(JSON.stringify(result));
        }
    });
    
});


var app = express();
app.use(morgan('combined'));

var counter=0;
app.get('/counter', function ( req, res ) {
    counter = counter+1;
    res.send(counter.toString());
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
*/


