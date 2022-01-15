const rp = require('request-promise');
const cheerio = require('cheerio');
const { cache } = require('./cache');

const getEcoList = (url) => {
  return rp(url)
    .then(function (html) {
      const movesList = [];
      let movesDomStr = '';

      const $ = cheerio.load(html);
      $.html();

      $('tr').map((i, ele) => {
        const move_name = $('td > font > B', ele).text();
        const moves = $('td > font > font', ele).text();

        movesList.push({
          code: $('td > font', ele).text().substring(0, 3),
          move_name,
          moves
        });
        movesDomStr += `<b>${move_name}</b><br /><p>${moves}</p><hr />`;
      });

      cache.set('eco_moves', JSON.stringify(movesList));
      cache.set('eco_moves_str', movesDomStr);

      return { movesList, movesDomStr };
    })
    .catch(function (err) {
      console.log(err);
      return 'Error'
    });
}

module.exports = { getEcoList }
