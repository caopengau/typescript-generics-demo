import axios, { AxiosResponse } from "axios";
import { Bank, Movie } from "./types";

const movieUrl = "https://k2maan-moviehut.herokuapp.com/api/random";
const bankUrl = "https://random-data-api.com/api/v2/banks";

const getDataWithType = async <Type>(url: string) => {
  const response = await axios.get<Type>(url);
  return response;
};

const mainWithoutType = async () => {
  const res = await axios.get(movieUrl);
  console.log(res.data);
};

const main = async () => {
  const { data: movie } = await getDataWithType<Movie>(movieUrl);
  const { data: bank } = await getDataWithType<Bank>(bankUrl);
  console.log(movie);
  console.log(bank.id);

  console.log(extractName(movie));
  console.log(extractName(bank));
};

const extractName = <T extends { name?: string; bank_name?: string }>(
  obj: T
) => {
  if ("name" in obj) return obj.name;
  if ("bank_name" in obj) return obj.bank_name;
  return "No name found";
};

// mainWithoutType();
main();
