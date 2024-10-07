const baseURL = "http://localhost:3000";

async function getDataByWikisCategory(category) {
  try {
    const response = await $.ajax({
      url: `${baseURL}/api/2.0/wikis/CATEGORY/${category}/children`,
      type: "GET",
    });

    // console.log(response); // Handle the successful response
    return response;
  } catch (error) {
    console.error("Error:", error); // Handle errors
  }
}
async function getGuideByID(guideid) {
  try {
    const response = await $.ajax({
      url: `${baseURL}/api/2.0/guides/${guideid}`,
      type: "GET",
    });

    // console.log(response); // Handle the successful response
    return response;
  } catch (error) {
    console.error("Error:", error); // Handle errors
  }
}

async function getItemsDescriptionByCategory(category) {
  try {
    // "http://localhost:3000/api/2.0/categories/phone"

    const response = await $.ajax({
      url: `${baseURL}/api/2.0/categories/${category}`,
      type: "GET",
    });

    // console.log("response", response); // Handle the successful response
    return response;
  } catch (error) {
    console.error("Error:", error); // Handle errors
  }
}

function extractParams() {
  const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  console.log("urlParams.category ", urlParams.get("category"));
  return urlParams;
}
