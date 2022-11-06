export type Movie = {
  type: any;
  _id: string;
  name: string;
  releaseYear: number;
  certificate: string;
  runtime: string;
  genre: string;
  imdbRating: number;
  overview: string;
  metaScore: number;
  director: string;
};
export type Bank = {
  id: number;
  uid: string;
  account_number: string;
  iban: string;
  bank_name: string;
  routing_number: string;
  swift_bic: string;
};
