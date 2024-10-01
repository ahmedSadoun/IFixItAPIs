// A $( document ).ready() block.
$(document).ready(async function () {
  let params = extractParams();
  let category = params.get("category");
  let categoryObject = await getItemsDescriptionByCategory(category);
  let categoryItems = await getDataByWikisCategory(category);
  console.log("categoryObject ", categoryObject);

  console.log("result ", categoryItems);
  renderPageSections(categoryItems, categoryObject);
});
function renderPageSections(categoryItems, categoryObject) {
  renderPageTitleSection(categoryObject);
  renderItems(categoryItems);
}
// Page Title Begin
function renderPageTitleSection(categoryObject) {
  let result = titleSectionBuilder(categoryObject);
  document.getElementById("title_container").innerHTML = "";
  document.getElementById("title_container").innerHTML = result;
}
// Page Title end

// Page Items Begin

function renderItems(list) {
  let result = buildDevicesItemsGrid(list);

  document.getElementById("itemsContainer").innerHTML = "";
  document.getElementById("itemsContainer").innerHTML = result;
}
// Page Items ends

function buildDevicesItemsGrid(list) {
  let itemsGridDesign = "";
  list.forEach((element) => {
    itemsGridDesign += deviceItemBuilder(element);
  });
  return itemsGridDesign;
}

function deviceItemBuilder(item) {
  let itemDesign = ` <div class="col-md-4 mb-4">
    <div class="card border-0 shadow-sm">
      <a href="main.html?category=${item.title.replace(
        " ",
        "_"
      )}" class="text-decoration-none">
        <img src=${item.image}
             class="card-img-top img-fluid rounded-2" 
             alt="${item.display_title}">
        <div class="card-body">
          <h5 class="card-title">${item.display_title}</h5>
        </div>
      </a>
    </div>
  </div>`;
  return itemDesign;
}
function titleSectionBuilder(item) {
  let itemDesign = ` <div class="bgimport1 p-4 rounded">
          <div class="row">
            <!-- Image Column -->
            <div class="col-lg-4 col-md-6 col-12 mb-4 mb-md-0">
              <div class="text-center">
                <img src=${item.image.standard} alt="Camera" class="img-fluid rounded-2">
              </div>
            </div>
            <!-- Text Column -->
            <div class="col-lg-8 col-md-6 col-12">
              <div>
                <h1>${item.wiki_title} Repair</h1>
                <p>${item.description}</p>
              </div>
            </div>
          </div>
        </div>`;
  return itemDesign;
}
