// A $( document ).ready() block.
$(document).ready(async function () {
  const addPostBTN = document.getElementById("add-post");
  addPostBTN.addEventListener("click", onAddPostBTNClick);
  //   const addCommentBTN = document.getElementById("add-post");
  //   addCommentBTN.addEventListener("click", onAddCommentsBTNClick);
});

async function onAddPostBTNClick() {
  let body = { post_content: "" };
  const postContent = document.getElementById("post-content");
  //   console.log(postContent.value);
  if (postContent?.value) {
    body.post_content = postContent.value;
    let res = await createPost(body);
    // console.log(res);
  }
}
function onAddCommentsBTNClick(event) {
  console.log(event);
}
