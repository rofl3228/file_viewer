const router = require('express').Router();
const fs = require('fs/promises');

const getLogs = async (req, res, next) => {
  const file = await fs.readFile('/home/deteck/DiscordBot/discord.log', 'utf-8');
  res.status(200).send(file.split('\n').reverse().join('\n'));
  next();
}

router.get('/', getLogs);

module.exports = router;
