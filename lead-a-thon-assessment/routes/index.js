const express = require('express');
const { cache } = require('../utils/cache');
const { getEcoList } = require('../utils/scrapdata');

const router = express.Router();

const getAllMoves = async (req, res) => {
  // Extract move id from request params
  const code = req.params.code;
  let data;

  if (cache.get('eco_moves') && cache.get('eco_moves_str')) {
    data = { movesList: JSON.parse(cache.get('eco_moves')), movesDomStr: cache.get('eco_moves_str') }
  } else {
    data = await getEcoList(process.env.ECO_LIST_API);
  }

  // If code presents check for cache data, if cache is empty fetch data and send result.
  if (code) {
    const move = await data.movesList.find(move =>
      move.code.toString().toLowerCase() === code.toString().toLowerCase());

    if (!move) { return res.end(); }

    const result = `<b>${move.move_name}</b><br /><p>${move.moves}</p><hr />`
    return res.status(200).send(result);
  }

  return res.status(200).send(data.movesDomStr);
}

const getAllMovesInJSON = async (req, res) => {
  // Extract move id from request params
  const code = req.params.code;
  let data;

  if (cache.get('eco_moves')) {
    data = { movesList: JSON.parse(cache.get('eco_moves')) }
  } else {
    data = await getEcoList(process.env.ECO_LIST_API);
  }

  // If code presents check for cache data, if cache is empty fetch data and send result.
  if (code) {
    const move = await data.movesList.find(move =>
      move.code.toString().toLowerCase() === code.toString().toLowerCase());

    return res.status(200).json({
      success: true,
      data: move
    });
  }

  return res.status(200).json({ success: true, data: data.movesList });
}

// Get All data in DOM structure
router.get('/', getAllMoves);
// Get all data in JSON format
router.get('/json', getAllMovesInJSON);
// Get single move in DOM
router.get('/:code', getAllMoves);
// Get single move JSON
router.get('/json/:code', getAllMovesInJSON);

module.exports = router;
