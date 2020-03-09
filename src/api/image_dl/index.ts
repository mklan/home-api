const download = require('image-downloader');

const imageDl = ({ destination }) => async (req, res) => {
  const { url } = req.body;

  const options = {
    url,
    dest: destination,
  };

  try {
    const { fileName } = await download.image(options);
    res.send({ status: 'saved', fileName });
  } catch (e) {
    throw Error(e.message);
  }
};

export default imageDl;
