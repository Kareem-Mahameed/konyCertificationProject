//Type your code here
// category stack array
categoriesStack = [];
currentPage=1;
totalPages=1;
catProductsParams={"categoryID":"","categoryName":"","pageNo":1};
searchRecord={"searchText":"","pageNo":1};

function backNavigation()
{
  var catData=categoriesStack.pop();
  frmHome.lblBreadCrumb.text=catData.breadCrumb;
  frmHome.sgmtCategories.setData(catData.categories);
  if (categoriesStack.length == '0')
    {
      frmHome.flxHeader.btnBack.setVisibility(false);
      frmHome.flxHeader.imgBack.setVisibility(false);
    }
}
///************************************************************
function nextProductsList()
{
  catProductsParams={"categoryID":getCategoriesResponse.categoryID,"categoryName":getCategoriesResponse.categoryName,"pageNo":1};
            
}