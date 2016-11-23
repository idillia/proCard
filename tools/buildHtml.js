import fs from 'fs';
import cheerio from 'cheerio'; // cheerio creates in memory DOM that could be query using jQuery selectors
import colors from 'colors';
/*eslint-disable no-console */

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if(err){
    return console.log(err);
  }

  const $ = cheerio.load(markup);

  $('head').prepend('<link rel="stylesheet" href="/styles.css">');
  $('head').prepend('<link rel="stylesheet" href="http://d22hhoe037sl7u.cloudfront.net/1.5/css/link_texting.min.css">');

  fs.writeFile('dist/index.html', $.html(), 'utf8', function(err) {
    if(err){
      return console.log(err);
    }
    console.log('index.html written to /dist'.green);
  });
});

  
