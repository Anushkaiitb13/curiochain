import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Example static response
  res.status(200).json({
    name: "Black Holes",
    children: [
      { name: "Thermodynamics" },
      { name: "Quantum Physics" },
      { name: "Space-Time" }
    ]
  })
}
