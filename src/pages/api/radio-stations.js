// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import radioStations from '@/utils/radio_stations';

export default function handler(req, res) {
  res.status(200).json(radioStations);
}
