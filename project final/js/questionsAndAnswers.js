// A $( document ).ready() block.
$(document).ready(async function () {
  onPageLoad();
  const addPostBTN = document.getElementById("add-post");
  addPostBTN.addEventListener("click", onAddPostBTNClick);
  //   const addCommentBTN = document.getElementById("add-post");
  //   addCommentBTN.addEventListener("click", onAddCommentsBTNClick);
});
function addNewPost(postOBJ) {
  const postsContainer = document.getElementById("posts-container");
  // Add the content for the new post
  const newPost = document.createElement("div");
  newPost.innerHTML = postItem(postOBJ);

  // Prepend the new post to the container
  postsContainer.prepend(newPost);
}

async function onAddPostBTNClick() {
  let body = { post_content: "", id: "", timestamp: "", post_comments: [] };
  const postContent = document.getElementById("post-content");
  //   console.log(postContent.value);
  if (postContent?.value) {
    body.post_content = postContent.value;
    let res = await createPost(body);
    body.id = res.post_id;
    body.timestamp = res.timestamp;
    addNewPost(body);
    postContent.value = "";
    // console.log(res);
  }
}
async function onAddCommentsBTNClick(event) {
  const postID = event.id;
  if (!postID) {
    return;
  }

  const commentTextArea = document.getElementById("comment-content-" + postID);
  if (!commentTextArea) {
    return;
  }
  const body = { comment_content: commentTextArea.value, post_id: postID };
  // console.log(commentTextArea.value);
  let res = await createComment(body);
  // console.log(res);
  addToCommentListView(postID);
}

function addToCommentListView(questionId) {
  const questionElement = document.getElementById(questionId);
  const textarea = questionElement.querySelector("textarea");
  const answersContainer = questionElement.querySelector(".answers");

  const answerText = textarea.value.trim();
  if (answerText) {
    const answerParagraph = document.createElement("p");
    // answerParagraph.classList.add("text-success", "mb-2");
    answerParagraph.textContent = answerText;

    answersContainer.appendChild(answerParagraph);
    textarea.value = ""; // Clear the textarea after adding the answer
  }
}

async function onPageLoad() {
  let res = await getPosts();
  // console.log(res);
  addPostToPage(res.items);
}
function addPostToPage(postsList) {
  const postContainer = document.getElementById("posts-container");
  postContainer.innerHTML = "";
  postContainer.innerHTML = postBuilder(postsList);
}
function postBuilder(postList) {
  // console.log("postList", postList);
  let posts = "";
  postList.forEach((postObj) => {
    posts += postItem(postObj);
  });
  return posts;
}

function postItem(postObj) {
  if (!postObj.id) {
    return;
  }
  // console.log("the response is : ", postObj);
  const postItem = `<div class="list-group-item" id="${postObj.id}">
          <h5 class="mb-3">
           ${postObj.post_content}
          </h5>
          <div style="display: flex; justify-content: space-between;">
           <span style="margin-left: auto;">${
             postObj.timestamp ? postObj.timestamp : ""
           }</span> 
           </div>

          <textarea

            class="form-control mb-2"
            rows="2"
            placeholder="Enter your comment..."
            id="comment-content-${postObj.id}"
          ></textarea>
          <button
            class="btn btn-primary answer-btn"
            id="${postObj.id}"
            onclick="onAddCommentsBTNClick(this)"
          >
            Answer
          </button>
          <div class="answers mt-3">${commentBuilder(
            postObj.post_comments
          )}</div>
        </div>`;
  return postItem;
}

function commentBuilder(commentsList) {
  let comments = "";
  commentsList.forEach((commentObj) => {
    comments += commentItem(commentObj);
  });
  return comments;
}
function commentItem(commentObj) {
  const commentItem = `
          <p>${commentObj.comment_content}</P>
        `;
  return commentItem;
}
