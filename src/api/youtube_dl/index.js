const fs = require('fs');
const youtubedl = require('youtube-dl');

const y2mp4 = ({ destination }) => (req, res) => {

const { id } = req.query;

const video = youtubedl(`http://www.youtube.com/watch?v=${id}`,
  // Optional arguments passed to youtube-dl.
  ['--format=mp4'],
  // Additional options can be given for calling `child_process.execFile()`.
  { cwd: __dirname });

video.on('info', info => {
  console.log('Download started');
  console.log('filename: ' + info._filename);
  console.log('size: ' + info.size);

  video.pipe(fs.createWriteStream(`${destination}/${info._filename}`));
  res.send({ message: 'download started'})
});

}

module.exports = {
  y2mp4
}