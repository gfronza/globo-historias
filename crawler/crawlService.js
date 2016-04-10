var Xray = require('x-ray');
var x = Xray();

var ROOT = 'http://g1.globo.com/politica/';

x(ROOT, '.feed-post', [{
  title: '.feed-post-body-title',
  subtitle: '.feed-post-body-resumo',
  activity_url: '.feed-text-wrapper a@href',
}])
  .paginate('.load-more a@href')
  .limit(10)
  .write('rawResults.json')
