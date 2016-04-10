var Xray = require('x-ray');
var x = Xray();

x('http://g1.globo.com/politica/', '.feed-post', [{
  title: '.feed-post-body-title',
  subtitle: '.feed-post-body-resumo',
  activity_url: 'a@href',
}])
  .paginate('.load-more a@href')
  .limit(10)
  .write('results.json')
