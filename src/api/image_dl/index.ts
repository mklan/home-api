const download = require('image-downloader');

const imageDl = ({ destination }) => async (req, res, next) => {
  const { url } = req.body;

  const options = {
    url,
    dest: destination,
  };

  try {
    const { fileName } = await download.image(options);
    res.send({ status: 'saved', fileName });
  } catch (e) {
    next(e);
  }
};

export default imageDl;
