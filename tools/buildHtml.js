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
  $('head').prepend("<script type='text/javascript'>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-39725983-11', 'auto');ga('send', 'pageview'); </script>");


  fs.writeFile('dist/index.html', $.html(), 'utf8', function(err) {
    if(err){
      return console.log(err);
    }
    console.log('index.html written to /dist'.green);
  });
});

  
