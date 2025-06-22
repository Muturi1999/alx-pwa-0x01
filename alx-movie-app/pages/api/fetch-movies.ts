import { MoviesProps } from "@/interfaces";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { year, page, genre } = req.body;
  const today = new Date();

  const url = `https://moviesdatabase.p.rapidapi.com/titles?year=${
    year || today.getFullYear()
  }&sort=year.decr&limit=12&page=${page}&${genre ? `genre=${genre}` : ""}`;

  const apiResp = await fetch(url, {
    headers: {
      "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
      "x-rapidapi-key": process.env.MOVIE_API_KEY as string,
    },
  });

  if (!apiResp.ok) {
    return res.status(500).json({ message: "Failed to fetch movies" });
  }

  const data = await apiResp.json();
  const movies: MoviesProps[] = data.results;
  return res.status(200).json({ movies });
}
