import axios from "axios";
const baseURL = "https://www.ifixit.com";
const dbURL = "https://windinfosys.com";

const getCategoryWikisChildrenData = async (category) => {
  try {
    const response = await axios.get(
      `${baseURL}/api/2.0/wikis/CATEGORY/${category}/children`
    );
    console.log("Data received:", response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Request made and server responded
      // console.error("Error response data:", error.response.data);
      // console.error("Error status:", error.response.status);
      // console.error("Error headers:", error.response.headers);
      return error.response;
    } else if (error.request) {
      // Request was made but no response
      console.error("No response received:", error.request);
      return error.request;
    } else {
      // Something else caused the error
      console.error("Error:", error.message);
      return error.message;
    }
  }
};
const getCategoryData = async (category) => {
  try {
    const response = await axios.get(
      `${baseURL}/api/2.0/categories/${category}`
    );
    console.log("Data received:", response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Request made and server responded
      // console.error("Error response data:", error.response.data);
      // console.error("Error status:", error.response.status);
      // console.error("Error headers:", error.response.headers);
      return error.response;
    } else if (error.request) {
      // Request was made but no response
      console.error("No response received:", error.request);
      return error.request;
    } else {
      // Something else caused the error
      console.error("Error:", error.message);
      return error.message;
    }
  }
};

const getDeviceCategoryData = async (category) => {
  try {
    const response = await axios.get(
      `${baseURL}/api/2.0/wikis/CATEGORY/${category}`
    );
    // console.log("Data received:", response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Request made and server responded
      // console.error("Error response data:", error.response.data);
      // console.error("Error status:", error.response.status);
      // console.error("Error headers:", error.response.headers);
      return error.response;
    } else if (error.request) {
      // Request was made but no response
      console.error("No response received:", error.request);
      return error.request;
    } else {
      // Something else caused the error
      console.error("Error:", error.message);
      return error.message;
    }
  }
};

const getGuideByID = async (guideID) => {
  try {
    const response = await axios.get(`${baseURL}/api/2.0/guides/${guideID}`);
    // console.log("Data received:", response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Request made and server responded
      // console.error("Error response data:", error.response.data);
      // console.error("Error status:", error.response.status);
      // console.error("Error headers:", error.response.headers);
      return error.response;
    } else if (error.request) {
      // Request was made but no response
      console.error("No response received:", error.request);
      return error.request;
    } else {
      // Something else caused the error
      console.error("Error:", error.message);
      return error.message;
    }
  }
};
const searchService = async (query, doctypes) => {
  try {
    //https://www.ifixit.com/api/2.0/suggest/iphone?doctypes=device,guide
    const response = await axios.get(
      `${baseURL}/api/2.0/suggest/${query}?doctypes=${doctypes}`
    );
    // console.log("Data received:", response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Request made and server responded
      // console.error("Error response data:", error.response.data);
      // console.error("Error status:", error.response.status);
      // console.error("Error headers:", error.response.headers);
      return error.response;
    } else if (error.request) {
      // Request was made but no response
      console.error("No response received:", error.request);
      return error.request;
    } else {
      // Something else caused the error
      console.error("Error:", error.message);
      return error.message;
    }
  }
};

const getPosts = async () => {
  try {
    //https://www.ifixit.com/api/2.0/suggest/iphone?doctypes=device,guide
    const response = await axios.get(`${dbURL}/ords/saadoun_task/ifixit/posts`);
    // console.log("Data received:", response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Request made and server responded
      // console.error("Error response data:", error.response.data);
      // console.error("Error status:", error.response.status);
      // console.error("Error headers:", error.response.headers);
      return error.response;
    } else if (error.request) {
      // Request was made but no response
      console.error("No response received:", error.request);
      return error.request;
    } else {
      // Something else caused the error
      console.error("Error:", error.message);
      return error.message;
    }
  }
};
const createPosts = async (postContent) => {
  try {
    let data = JSON.stringify(postContent);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://windinfosys.com/ords/saadoun_task/ifixit/posts",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios.request(config);
    console.log(response);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Request made and server responded
      // console.error("Error response data:", error.response.data);
      // console.error("Error status:", error.response.status);
      // console.error("Error headers:", error.response.headers);
      return error.response;
    } else if (error.request) {
      // Request was made but no response
      console.error("No response received:", error.request);
      return error.request;
    } else {
      // Something else caused the error
      console.error("Error:", error.message);
      return error.message;
    }
  }
};
const createComments = async (commentContent) => {
  try {
    let data = JSON.stringify(commentContent);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://windinfosys.com/ords/saadoun_task/ifixit/comments",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios.request(config);
    console.log(response);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Request made and server responded
      // console.error("Error response data:", error.response.data);
      // console.error("Error status:", error.response.status);
      // console.error("Error headers:", error.response.headers);
      return error.response;
    } else if (error.request) {
      // Request was made but no response
      console.error("No response received:", error.request);
      return error.request;
    } else {
      // Something else caused the error
      console.error("Error:", error.message);
      return error.message;
    }
  }
};
function print(input) {
  console.log("sssssss, ", input);
}

export {
  print,
  getCategoryWikisChildrenData,
  getCategoryData,
  getDeviceCategoryData,
  getGuideByID,
  searchService,
  getPosts,
  createPosts,
  createComments,
};
