const fs = require('fs');
const youtubedl = require('youtube-dl');

// TODO proper error handling when video folder not found
const y2mp4 = ({ destination }) => (req, res) => {
  const { id } = req.body;

  try {
    const video = youtubedl(
      `http://www.youtube.com/watch?v=${id}`,
      // Optional arguments passed to youtube-dl.
      ['--format=mp4'],
      // Additional options can be given for calling `child_process.execFile()`.
      { cwd: __dirname },
    );

    video.on('info', info => {
      console.log('Download started');
      console.log(`filename: ${info._filename}`);
      console.log(`size: ${info.size}`);
      try {
        const writeStream = fs.createWriteStream(
          `${destination}/${info._filename}`,
        );
        video.pipe(writeStream);
        res.send(info);
      } catch (e) {
        throw new Error(e);
      }
    });
    video.on('error', e => new Error(e));
  } catch (e) {
    res.status(500).send(e.message);
  }
};

module.exports = {
  y2mp4,
};
