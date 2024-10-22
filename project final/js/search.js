// A $( document ).ready() block.
$(document).ready(async function () {
  let params = extractParams();
  let query = params.get("searchQuery");
  fillSearchField(query);
  let searchResults = await searchService(query);
  if (searchResults.results && searchResults.results.length > 0) {
    renderPageSections(searchResults);
  }
});
function renderPageSections(searchResults) {
  renderItems(searchResults.results);
  renderGuides(searchResults.results);
}

// Page Items Begin

function renderItems(list) {
  let result = buildDevicesItemsGrid(list);
  document.getElementById("itemsContainer").innerHTML = "";
  document.getElementById("itemsContainer").innerHTML = result;
}
// Page Items ends
// Header Search Field Begin

function fillSearchField(searchQuery) {
  let searchField = document.getElementById("header-input-search-field");
  searchField.value = "";
  searchField.value = searchQuery;
}
// Header Search Field ends
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
    if (element && element.dataType === "guide") {
      itemsGridDesign += guidItemBuilder(element);
    }
  });
  return itemsGridDesign;
}
function buildDevicesItemsGrid(list) {
  let itemsGridDesign = "";
  list.forEach((element) => {
    if (element && element.dataType === "wiki") {
      itemsGridDesign += deviceItemBuilder(element);
    }
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
          <img src=${item.image.standard}
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
function guidItemBuilder(item) {
  console.log("items sss ", item);
  let itemDesign = ` <div class="col-md-4 mb-4">
      <div class="card border-0 shadow-sm">
        <a href="stepfix.html?guidID=${item.guideid}" class="text-decoration-none">
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
