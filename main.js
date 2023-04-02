const menuEmail=document.querySelector(".navbar-email");
const desktopMenu=document.querySelector(".desktop-menu");
const menuHamImg=document.querySelector(".menu");
const mobileMenu=document.querySelector(".mobile-menu");
const carIcon=document.querySelector(".navbar-shopping-cart");
const aside=document.querySelector(".product-detail");
const cardsContainer=document.querySelector(".cards-container");


menuEmail.addEventListener('click',toggleMenuDesktop);
menuHamImg.addEventListener('click',toggleMobileMenu);
carIcon.addEventListener('click',toggleCarMenu);


function toggleMenuDesktop(){
    desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu(){

    const asideMenuOpen=!aside.classList.contains('inactive');
    
    if (asideMenuOpen){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarMenu(){
    const mobileMenuOpen=!mobileMenu.classList.contains('inactive');
    const desktopMenuOpen=!desktopMenu.classList.contains('inactive');

    if (mobileMenuOpen){

        mobileMenu.classList.add('inactive');
    }

    
    if (desktopMenuOpen){

        desktopMenu.classList.toggle('inactive');
    }



    aside.classList.toggle('inactive');

}


//   <div class="product-card">
//  <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//  <div class="product-info">
//    <div>
//      <p>$120,00</p>
//      <p>Bike</p>
//    </div>
//    <figure>
//      <img src="./icons/bt_add_to_cart.svg" alt="">
//    </figure>
//  </div>
// </div> 

const productList=[];
productList.push({
    name:'Bike',
    price:120,
    imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name:'Monitor',
    price:220,
    imagen:'https://www.lg.com/ec/images/monitores/md06248939/gallery/dm-1.jpg',
});
 
productList.push({
    name:'Laptop',
    price:1020,
    imagen:'https://cdn.thewirecutter.com/wp-content/media/2022/10/laptopstopicpage-2048px-2029.jpg?auto=webp&quality=75&width=1024',
});

productList.push({
    name:'Phone',
    price:720,
    imagen:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204',
});



function renderProduct(arr){   
    for(Product of arr){

        const productCar=document.createElement('div');
        productCar.classList.add('product-card');
    
        const img=document.createElement('img');
        img.setAttribute('src',Product.imagen);
    
        const productInfo=document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv=document.createElement('div');
    
        const productPrice=document.createElement('p');
        productPrice.innerHTML='$'+ Product.price;
    
        const productName=document.createElement('p');
        productName.innerHTML= Product.name;
        
        const figure=document.createElement('figure');
        
        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productPrice);
    
        const imgFigure=document.createElement('img');
        imgFigure.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        figure.appendChild(imgFigure);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(figure)
    
        productCar.appendChild(img);
        productCar.appendChild(productInfo);
    
        cardsContainer.appendChild(productCar);
        cardsContainer.classList.add('cards-container');
    
    }
}



renderProduct(productList);
