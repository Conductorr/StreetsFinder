export async function fetchAddress() {
  try {
    const response = await fetch(
      "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
      {
        method: "POST",
        body: JSON.stringify({ query: "москва" }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Accept: "application/json",
          Authorization: "Token " + "673337e7ab9699431aeec125e0e9dea23b7e8175",
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
