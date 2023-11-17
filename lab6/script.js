const getUser = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/?results=1");
    if (!response.ok) {
      throw new Error("Something went wrong in fetching reponse");
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Error while getting user data ${error}`);
  }
};

const parseUser = (user) => {
  const parsedUser = {
    picture: user.picture.large,
    cell: `Cell: ${user.cell}`,
    city: `City: ${user.location.city}`,
    country: `Country: ${user.location.country}`,
    postcode: `Postcode: ${user.location.postcode}`,
  };
  return parsedUser;
};

document.addEventListener("DOMContentLoaded", () => {
  const picture = document.getElementById("picture");
  const cell = document.getElementById("cell");
  const city = document.getElementById("city");
  const country = document.getElementById("country");
  const postcode = document.getElementById("postcode");

  const submitButton = document.getElementById("submitButton");

  submitButton.addEventListener("click", () => {
    getUser().then((data) => {
      const parsedUser = parseUser(data.results[0]);

      picture.src = parsedUser.picture;
      cell.innerText = parsedUser.cell;
      city.innerText = parsedUser.city;
      country.innerText = parsedUser.country;
      postcode.innerText = parsedUser.postcode;
    });
  });
});
