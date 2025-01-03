const baseURL = "http://localhost:3000";
const dbURL = "http://localhost:3000";

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
async function searchService(query, doctypes = "device,guide") {
  try {
    // "http://localhost:3000/api/2.0/suggest/iphone?doctypes=device,guide"

    const response = await $.ajax({
      // /api/2.0/suggest/:query
      url: `${baseURL}/api/2.0/suggest/${query}?doctypes=${doctypes}`,
      type: "GET",
    });

    // console.log("response", response); // Handle the successful response
    return response;
  } catch (error) {
    console.error("Error:", error); // Handle errors
  }
}
async function createPost(data) {
  try {
    var settings = {
      url: `${dbURL}/ords/saadoun_task/ifixit/posts`,
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    };

    let response = await $.ajax(settings);
    return response;
  } catch (error) {
    console.error("Error:", error); // Handle errors
  }
}
async function getPosts() {
  try {
    var settings = {
      url: `${dbURL}/ords/saadoun_task/ifixit/posts`,
      method: "GET",
      timeout: 0,
    };
    let response = await $.ajax(settings);
    return response;
  } catch (error) {
    console.error("Error:", error); // Handle errors
  }
}
async function createComment(data) {
  try {
    var settings = {
      url: `${dbURL}/ords/saadoun_task/ifixit/comments`,
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    };

    let response = await $.ajax(settings);
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
