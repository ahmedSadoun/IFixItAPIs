// A $( document ).ready() block.
$(document).ready(async function () {
  let params = extractParams();
  let guideId = params.get("guidID");
  if (!guideId) {
    return;
  }
  let guideObject = await getGuideByID(guideId);
  console.log(guideObject);
  // let categoryItems = [];
  if (!guideObject || !guideObject.steps || guideObject.steps.length <= 0) {
    notFoundContentBuilder();
    return;
  }
  renderPageSections(guideObject);
});
function renderPageSections(guideObj) {
  renderPageTitleSection(guideObj);
  renderSteps(guideObj.steps);
  //   renderGuides(categoryObject.guides);
}
// Page Title Begin
function renderPageTitleSection(categoryObject) {
  let result = titleSectionBuilder(categoryObject);
  document.getElementById("title_container").innerHTML = "";
  document.getElementById("title_container").innerHTML = result;
}
// Page Title end

// Page Items Begin

function renderSteps(list) {
  let result = buildStepsGrid(list);
  document.getElementById("steps-container").innerHTML = "";
  document.getElementById("steps-container").innerHTML = result;
}
// Page Items ends
// Page Guides Begin

function renderGuides(list) {
  let result = buildDevicesGuidesGrid(list);
  document.getElementById("guidesContainer").innerHTML = "";
  document.getElementById("guidesContainer").innerHTML = result;
}

// Page Guides ends

function buildDevicesGuidesGrid(list) {
  let itemsGridDesign = `<br/><br/><br/><h2 id="Section_Guides">Guides</h2><hr/><br/>`;
  list.forEach((element) => {
    itemsGridDesign += guidItemBuilder(element);
  });
  return itemsGridDesign;
}
function buildStepsGrid(list) {
  let itemsGridDesign = ``;
  list.forEach((element, index) => {
    itemsGridDesign += stepBuilder(element, index + 1);
  });
  return itemsGridDesign;
}

function stepBuilder(item, index) {
  let itemDesign = `<div class="row align-items-center mb-4  p-3 rounded-5 stepContanierColor">
           <div class="col-md-6">
               <h2 id="step1">Step ${index}: ${item.title}</h2>
               <p>${item.lines[0].text_rendered}</p>
           </div>
           <div class="col-md-6">
           
           ${mediaBuilder(item.media)}
           </div>
       </div>`;
  return itemDesign;
}
function notFoundContentBuilder() {
  let itemDesign = `<h2 class="m-auto vh-100 justify-content-center  text-center">No Data Found!</h2>`;
  document.getElementById("nodatafound").innerHTML = "";
  document.getElementById("nodatafound").innerHTML = itemDesign;
}
function mediaBuilder(mediaObj) {
  let media = "";
  if (mediaObj.type === "image") {
    mediaObj.data.forEach((item) => {
      media += `<img src="${item.standard}" class="img-fluid m-3" alt="Power Off Image">`;
    });
  }
  if (mediaObj.type === "embed") {
    console.log(mediaObj.data.html);
    media = `${mediaObj.data.html}`;
  }

  return media;
}
function guidItemBuilder(item) {
  console.log("items sss ", item);
  let itemDesign = ` <div class="col-md-4 mb-4">
      <div class="card border-0 shadow-sm">
        <a href="stepfix.html?guidID=${item.title.replace(
          " ",
          "_"
        )}" class="text-decoration-none">
          <img src=${item.image?.standard}
               class="card-img-top img-fluid rounded-2" 
               alt="${item.title}">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
          </div>
        </a>
      </div>
    </div>`;
  return itemDesign;
}
function titleSectionBuilder(guide) {
  let guideTitleDesign = ` <h1 class="text-center">${guide.title}</h1>`;
  return guideTitleDesign;
}
