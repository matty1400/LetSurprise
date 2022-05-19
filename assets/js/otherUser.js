var myWishlist = document.querySelector('#myWishlist')

selectedUserData = sessionStorage.getItem("nameofuser");
myWishlist.innerHTML = "Wishlist of " + selectedUserData;