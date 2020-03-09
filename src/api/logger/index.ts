const logs = [];
const maxSize = 10;

export const getLogs = (limit = 10) => (req, res) => {
  return res.send(logs);
};

export function addLog(req, res) {
  console.log({ time: new Date(), payload: req.body.payload });
  if (logs.length >= maxSize) logs.shift();
  logs.push({ time: new Date(), payload: req.body.payload });
  return res.send(logs);
}
