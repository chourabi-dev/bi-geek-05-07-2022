var keyword = document.getElementById('keyword');
var price = document.getElementById('price');
var category = document.getElementById('category');
var productListElement = document.getElementById("products-list");
var priceView = document.getElementById('price-view');

var keywordValue = '';
var priceValue = '100';
var categoryValue = '';




keyword.addEventListener('keyup',function(event){
    keywordValue = event.target.value;
    search();
})

price.addEventListener('change',function(event){
    priceValue = event.target.value;
    const userPrice = (( Number(priceValue) * maxPriceProduct())  / 100 ) 

    priceView.innerHTML = '$ '+userPrice;
    search();
})

category.addEventListener('change',function(event){
   categoryValue = event.target.value;
   search();
})


var products = [
    { id:1, title:"Iphone X" , price:1200, category:'SMART_PHONE', photoURL:"https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-x/iphone-x-silver.jpg" },
    { id:2, title:"Samsung TV 50'" , price:2500, category:'TV', photoURL:"https://images.samsung.com/is/image/samsung/africa-fr-fhd-t5300-ua43t5300auxly-frontblack-243706398?$650_519_PNG$" },
    { id:3, title:"HP pavillion" , price:3600, category:'ELECTRONICS', photoURL:"https://www.tunisianet.com.tn/148612-large/pc-portable-hp-pavilion-gaming-15-dk0017nk-i5-9e-gen-8-go-sim-orange-offerte-30-go.jpg" }

];

var categoriesList = [

    { id:'SMART_PHONE', name:'Smart phone' },
    { id:'TV', name:'Tv' },
    { id:'ELECTRONICS', name:'Electronics' },
    
];



function initView(){





    let blocHTML = '';

    products.map((p)=>{
        blocHTML= blocHTML+ `
        <div class="col-md-4">
            <div class="card-box-a card-shadow">
              <div class="img-box-a">
                <img src="${ p.photoURL }" alt="" class="img-a img-fluid">
              </div>
              <div class="card-overlay">
                <div class="card-overlay-a-content">
                  <div class="card-header-a">
                    <h2 class="card-title-a">
                      <a href="#">${ p.title }</a>
                    </h2>
                  </div>
                  <div class="card-body-a">
                    <div class="price-box d-flex">
                      <span class="price-a">$ ${p.price}</span>
                    </div>
                    <a href="property-single.html" class="link-a">Click here to view
                      <span class="bi bi-chevron-right"></span>
                    </a>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>`;
    })



    productListElement.innerHTML = blocHTML;
}


function maxPriceProduct(){
    let max = 0;

    products.map((p)=>{
        if (p.price > max) {
            max = p.price;
        }
    })

    return max;
}

function search(){
    console.log(keywordValue,priceValue,categoryValue);


    // starts with keywords

    const keywordSearch = products.filter((p)=> p.title.toLowerCase().indexOf(keywordValue.toLowerCase()) != -1 );

    //console.log(keywordSearch);


    // price  
    

    const userPrice = (( Number(priceValue) * maxPriceProduct())  / 100 ) 
    const priceSearch = keywordSearch.filter((p)=> p.price <= userPrice ) 
    //console.log(priceSearch);


    // category
    
    
    let finalProductArray = [];


    if (categoryValue != '') {
        const lastSearch = priceSearch.filter((p)=> p.category == categoryValue);

        finalProductArray = lastSearch;
    }else{
        finalProductArray = priceSearch;
    }
    
    let blocHTML = '';

    finalProductArray.map((p)=>{
        blocHTML= blocHTML+ `
        <div class="col-md-4">
            <div class="card-box-a card-shadow">
              <div class="img-box-a">
                <img src="${ p.photoURL }" alt="" class="img-a img-fluid">
              </div>
              <div class="card-overlay">
                <div class="card-overlay-a-content">
                  <div class="card-header-a">
                    <h2 class="card-title-a">
                      <a href="#">${ p.title }</a>
                    </h2>
                  </div>
                  <div class="card-body-a">
                    <div class="price-box d-flex">
                      <span class="price-a">$ ${p.price}</span>
                    </div>
                    <a href="property-single.html" class="link-a">Click here to view
                      <span class="bi bi-chevron-right"></span>
                    </a>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>`;
    })



    productListElement.innerHTML = blocHTML;

    





}


function initCategories(){

    let blocHTML = '<option value="" >all categories</option>';

    categoriesList.map((c)=>{
        blocHTML = blocHTML+ `<option value="${c.id}" >${ c.name }</option>`;
    })

    category.innerHTML = blocHTML;
}




initCategories();
initView();

let userPrice = ( ( Number(priceValue) * maxPriceProduct() )  / 100 );
priceView.innerHTML = '$ '+userPrice;
