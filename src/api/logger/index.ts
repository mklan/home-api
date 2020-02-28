const logs = [];

export const getLogs = (limit = 10) => (req, res) => {
  return res.send(logs);
};

export function addLog(req, res) {
  logs.push({ time: new Date(), payload: req.body.payload });
  return res.send(logs);
}
