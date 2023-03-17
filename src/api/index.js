const baseUrl = "https://api.tvmaze.com";

export const getShowsUrl = () => `${baseUrl}/shows`;

export const getShowDetailUrl = (id) => {
  return `${baseUrl}/shows/${id}`;
};
