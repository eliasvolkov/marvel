export const fetchCharactersApi = async () => {
  const apiKey: string = "4c9674f31e041ad25ef153635461556e";
  const hash: string = "e9af80b0c13e7a268a152c6352dac9b8";

  const response = await fetch(
    `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${apiKey}&hash=${hash}`
  );
  const { data } = await response.json();

  return data.results;
};
