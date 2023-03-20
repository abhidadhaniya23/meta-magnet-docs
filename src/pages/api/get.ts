// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const ogs = require("open-graph-scraper");
const getMetaData = require("metadata-scraper");

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const reqUrl = req.body.url;

    const getOpenGraphData = Promise.resolve(ogs({ url: reqUrl })).then(
      (result) => result.result
    );
    const getMetaDataData = Promise.resolve(getMetaData(reqUrl));

    Promise.all([getOpenGraphData, getMetaDataData])
      .then((result) => {
        const data = { ...result[0], ...result[1] };
        return res.status(200).json(data);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json({ error: err });
      });
  } else {
    res
      .status(401)
      .json({ error: "You're not allowed to request from this server." });
  }
}
