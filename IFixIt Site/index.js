// $(document).ready(function () {
//   // Making a GET request to the iFixit API
//   $.get("https://www.ifixit.com/api/2.0/categories/iPhone", function (data) {
//     console.log(data); // Log the API response to the console

//     // Assuming 'contents_rendered' is part of the response
//     if (data.contents_rendered) {
//       // Inserting the rendered content into the HTML container
//       $("#container").html(data.contents_rendered);
//     } else {
//       // Handle case when there's no 'contents_rendered'
//       $("#container").text("No rendered content available.");
//     }
//   }).fail(function () {
//     console.error("Failed to fetch data from iFixit API");
//   });
// });
