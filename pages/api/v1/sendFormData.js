// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function inputsHandler(req, res) {
  let { name, password, success } = req.body;
  if (req.method === "GET") {
    res.status(200).json({ message: "GET request" });
  } else if (req.method === "POST") {
    if ((name.toLowerCase() === "эдик")||(name.toLowerCase() === "вася")) {
      res.status(200).send({ data: { name } });
    } else res.status(200).send({ data: { name, password }, success });
  }
}
