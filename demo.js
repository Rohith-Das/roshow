// <%- include ('../layout/header') %>
//     <div class="page-wrapper">
//            <header class="header header-6">
//             <div class="header-top">
//                 <div class="container">
//                     <div class="header-left">
//                         <ul class="top-menu top-link-menu d-none d-md-block">
//                             <li>
//                                 <a href="#">Links</a>
                              
//                             </li>
//                         </ul><!-- End .top-menu -->
//                     </div><!-- End .header-left -->

//                     <div class="header-right">
                       
//                         <ul class="top-menu top-link-menu">
//                             <li>
//                                 <a href="#">Links</a>
//                                 <ul>
                                    
                                   
//                                 </ul>
//                             </li>
//                         </ul><!-- End .top-menu -->
//                     </div><!-- End .header-right -->
//                 </div>
//             </div>
//             <div class="header-middle">
//                 <div class="container">
//                     <div class="header-left">
//                         <div class="header-search header-search-extended header-search-visible d-none d-lg-block">
//                             <a href="#" class="search-toggle" role="button"><i class="icon-search"></i></a>
//                             <form id="searchForm" action="/search" method="get">
//                                 <div class="header-search-wrapper search-wrapper-wide">
//                                     <label for="q" class="sr-only">Search</label>
//                                     <button class="btn btn-primary" type="submit"><i class="icon-search"></i></button>
//                                     <input type="search" class="form-control" name="q" id="q" placeholder="Search product ..." value="">
//                                 </div>
//                             </form>
                            
//                             <script>
//                             // document.addEventListener('DOMContentLoaded', function() {
//                             //     const searchForm = document.getElementById('searchForm');
//                             //     const searchInput = document.getElementById('q');
                            
//                             //     searchForm.addEventListener('submit', function(e) {
//                             //         e.preventDefault();
//                             //         const searchQuery = searchInput.value.trim();
//                             //         if (searchQuery) {
//                             //             window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
//                             //         } else {
//                             //             window.location.href = '/home';
//                             //         }
//                             //     });
//                             // });
//                             // </script>
                            
                            
//                         </div><!-- End .header-search -->
//                     </div>
//                     <div class="header-center">
//                         <a href="index.html" class="logo">
//                             <!-- <img src="/assets/images/demos/demo-9/logo.png" alt="Molla Logo" width="82" height="20"> -->

//                             <h2>Roshow</h2>
//                         </a>
//                     </div><!-- End .header-left -->

//                     <div class="header-right">
//                         <a href="/wishlist" class="wishlist-link">
//                             <i class="icon-heart-o"></i>
//                             <!-- <span class="wishlist-count">3</span> -->
//                             <span class="wishlist-txt"></span>
//                         </a>

//                         <!-- jQuery first, then Bootstrap JS -->
// <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
// <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

//                         <div>
//                             <a href="/cart" role="button">
//                                 <i class="icon-shopping-cart" style="font-size: 34px;"></i>
//                               </a>
                          
//                         </div>
//                         <div class="dropdown cart-dropdown">
//                             <!-- <a href="#" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
//                                 <i class="icon-shopping-cart"></i>
//                                 -->
//                             <div>
                                     
//                                       <% if (userData){%>
//                                         <a href="/profile"><i class="icon-user"></i><%=userData.name%></a>
//                                      <% }else if (user){%>
                                        
//                                         <a href="/profile"><i class="icon-user"></i><%=user.name%></a>
//                                     <% }else{%>
//                                         <!-- <h1>Welcome, <%= user ? user.name : 'Guest' %>!</h1> -->
                                       
//                                         <a href="/login"><i class="icon-user"></i>Login</a>
//                                         <% }%>
//                             </div>

//                         </div><!-- End .cart-dropdown -->
//                     </div>
//                 </div><!-- End .container -->
//             </div><!-- End .header-middle -->

//             <div class="header-bottom sticky-header">
//                 <div class="container">
//                     <div class="header-left">
//                         <nav class="main-nav">
//                             <ul class="menu sf-arrows">
//                                 <li class="megamenu-container active">
//                                     <a href="/home" class="sf-with-ul">Home</a>

//                                 </li>
//                                 <li>
//                                     <a href="/shop" class="sf-with-ul">Shop</a>


//                                     <div class="megamenu megamenu-md">
//                                         <div class="row no-gutters">
//                                             <div class="col-md-8">
                                              
//                                             </div><!-- End .col-md-8 -->

                                           
//                                         </div><!-- End .row -->
//                                     </div><!-- End .megamenu megamenu-md -->
//                                 </li>
                             
//                             </ul><!-- End .menu -->
//                         </nav><!-- End .main-nav -->

//                         <button class="mobile-menu-toggler">
//                             <span class="sr-only">Toggle mobile menu</span>
//                             <i class="icon-bars"></i>
//                         </button>
//                     </div><!-- End .header-left -->

//                     <div class="header-right">
//                         <i class="la la-lightbulb-o"></i><p>Clearance Up to 30% Off</span></p>
//                     </div>
//                 </div><!-- End .container -->
//             </div><!-- End .header-bottom -->
//         </header><!-- End .header -->

//         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
//   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert2/11.4.24/sweetalert2.min.css">
//         <main class="main">
//         	<div class="page-header text-center" style="background-image: url('assets/images/page-header-bg.jpg')">
//         		<div class="container">
//         			<h1 class="page-title">Checkout<span>Shop</span></h1>
//         		</div><!-- End .container -->
//         	</div><!-- End .page-header -->
//             <nav aria-label="breadcrumb" class="breadcrumb-nav">
//                 <div class="container">
//                     <ol class="breadcrumb">
//                         <li class="breadcrumb-item"><a href="index.html">Home</a></li>
//                         <li class="breadcrumb-item"><a href="/shop">Shop</a></li>
//                         <li class="breadcrumb-item active" aria-current="page">Checkout</li>
//                     </ol>
//                 </div><!-- End .container -->
//             </nav><!-- End .breadcrumb-nav -->

//             <style>
//                 #priceDetails {
//                 background-color: #f8f9fa; /* Light background */
//                 padding: 20px;
//                 border-radius: 10px;
//                 box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
//                 max-width: 300px;
//                 margin: 0 auto;
//             }
            
//             .price-item {
//                 font-size: 16px;
//                 margin: 10px 0;
//                 color: #333; /* Darker text for readability */
//             }
            
//             .price-item span {
//                 font-weight: bold;
//             }
            
//             .highlight {
//                 color: #28a745; /* Green color for highlighting */
//                 font-weight: bold;
//             }
            
//             .price-total {
//                 font-size: 18px;
//                 font-weight: bold;
//                 color: #007bff; /* Blue color for total */
//                 margin-top: 20px;
//             }
            
//             hr {
//                 border: none;
//                 border-top: 1px solid #ddd;
//                 margin: 15px 0;
//             }
            
//             </style>


//             <div class="container">
//                 <div class="row">
//                   <!-- Left Column: Form Section -->
//                   <div class="col-lg-7">
//                     <div class="card card-dashboard">
//                         <a href="#" class="btn btn-success" data-toggle="modal" data-target="#addAddressModal">
//                             Add an address
//                           </a>
//                       <div class="card-body">
//                         <% if (addresses.length === 0) { %>
//                           <h3>No addresses found first create a Address then you can place the Order 
//                             <a href="#" class="btn btn-secondary" data-toggle="modal" data-target="#addAddressModal">
//                               Add an address
//                             </a>
//                         </h3>
//                         <% } else { %>
//                           <form id="placeOrderForm" action="/create-order" method="POST">
//                             <h2 class="mb-3">Select Delivery Address</h2>
//                             <ul class="list-group mb-4">
//                               <% addresses.forEach(function(address) { %>
//                                 <li class="list-group-item d-flex justify-content-between align-items-center address-container">
//                                   <div>
//                                     <input type="radio" id="address_<%= address._id %>" name="shippingAddress" value="<%= address._id %>" 
//                                       <% if (address.isDefault) { %> checked <% } %> required />
//                                     <label for="address_<%= address._id %>" class="ml-2">
//                                       <strong><%= address.fullName %></strong><br>
//                                       <%= address.addressLine1 %>, <%= address.addressLine2 %>, <%= address.city %>, <%= address.state %>, <%= address.postalCode %>, <%= address.country %><br>
//                                       Phone: <%= address.phoneNumber %>
//                                     </label>
//                                   </div>
//                                   <div class="address-actions">
//                                     <a href="#" class="btn-icon edit" data-toggle="modal" data-target="#editAddressModal_<%= address._id %>">
//                                       <i class="fas fa-edit"></i>
//                                     </a>
//                                     <a href="/checkout/delete/<%= address._id %>" class="btn-icon delete">
//                                       <i class="fas fa-trash"></i>
//                                     </a>
//                                   </div>
//                                 </li>
//                               <% }); %>
//                             </ul>
                  
//                             <h2 class="mb-3">Select Payment Method</h2>
//                             <div class="form-group">
//                               <div class="form-check">
//                                 <input type="radio" class="form-check-input" name="paymentMethod" value="COD" id="COD" checked>
//                                 <label class="form-check-label" for="COD">Cash on Delivery</label>
//                               </div>
//                               <div class="form-check">
//                                 <input class="form-check-input" type="radio" name="paymentMethod" id="razorpay" value="Razorpay">
//                                 <label class="form-check-label" for="razorpay">Razorpay</label>
//                               </div>
//                               <div class="form-check">
//                                 <input class="form-check-input" type="radio" name="paymentMethod" id="walletCash" value="Wallet Cash">
//                                 <label class="form-check-label" for="walletCash">
//                                   Wallet Cash (Available: ₹<span id="walletBalance"></span>)
//                                 </label>
//                               </div>
//                             </div>
                  
//                             <!-- Razorpay Hidden Fields -->
//                             <input type="hidden" name="razorpay_payment_id" id="razorpay_payment_id">
//                             <input type="hidden" name="razorpay_order_id" id="razorpay_order_id">
//                             <input type="hidden" name="razorpay_signature" id="razorpay_signature">
                  
//                             <button type="submit" class="btn btn-primary mt-3" id="placeOrderBtn">Place Order</button>
//                             <button type="button" class="btn btn-primary mt-3" id="rzp-button" style="display: none;">Pay with Razorpay</button>
//                           </form>
//                         <% } %>
                  
//                         <!-- Coupons Section -->
//                         <div class="cart-discount mt-4">
//                           <div class="coupon">
//                             <button id="viewCouponsBtn" class="btn btn-primary">View Coupons</button>
//                           </div>
//                           <div id="couponsModal" class="modal">
//                             <div class="modal-content">
//                               <span class="close">&times;</span>
//                               <h2>Available Coupons</h2>
//                               <table class="table table-striped">
//                                 <thead>
//                                   <tr>
//                                     <th>Code</th>
//                                     <th>Description</th>
//                                     <th>Discount (%)</th>
//                                     <th>Min Amount</th>
//                                     <th>Max Discount</th>
//                                     <th>Expiry Date</th>
//                                   </tr>
//                                 </thead>
//                                 <tbody>
//                                   <% coupons.forEach((coupon) => { %>
//                                     <tr>
//                                       <td><%= coupon.code %></td>
//                                       <td><%= coupon.description %></td>
//                                       <td><%= coupon.discount %></td>
//                                       <td><%= coupon.minAmount %></td>
//                                       <td><%= coupon.maxDiscount %></td>
//                                       <td><%= new Date(coupon.expiryDate).toLocaleDateString() %></td>
//                                     </tr>
//                                   <% }); %>
//                                 </tbody>
//                               </table>
//                             </div>
//                           </div>
//                         </div>
                  
//                         <!-- Coupon Form -->
//                         <form id="couponForm" class="mt-4">
//                           <div class="input-group">
//                             <input type="text" id="couponCode" name="couponCode" class="form-control" value="" placeholder="Enter Coupon Code">
//                             <div class="input-group-append">
//                               <button class="btn btn-outline-primary" type="submit">Apply Coupon</button>
//                             </div>
//                           </div>
//                         </form>
                  
//                         <!-- Applied Coupon Display -->
//                         <div id="appliedCoupon" class="mt-3" style="display: none;">
//                           <p>Applied Coupon: <span id="appliedCouponCode"></span></p>
//                           <button id="removeCouponBtn" class="btn btn-danger">Remove Coupon</button>
//                         </div>
//                       </div> <!-- .card-body -->
//                     </div> <!-- .card -->
//                   </div> <!-- .col-lg-7 -->
                  
//                   <!-- CSS for styling -->
//                   <style>
//                     .address-container label {
//                       font-size: 1rem;
//                       color: #333;
//                     }
                  
//                     .btn-icon {
//                       padding: 0.5rem;
//                       font-size: 1.25rem;
//                     }
                  
//                     .table th, .table td {
//                       text-align: center;
//                     }
                  
//                     .modal-content {
//                       padding: 2rem;
//                       border-radius: 8px;
//                       background-color: #fff;
//                       max-width: 600px;
//                       margin: auto;
//                     }
                  
//                     .coupon .btn {
//                       margin-bottom: 1rem;
//                     }
//                   </style>
                  


//         <div id="priceDetails">
//             <p class="price-item">Subtotal: $<span id="subtotal"><%= totalAmount %></span></p>
//             <p class="price-item">Coupon Discount: $<span id="couponDiscount">0.00</span></p>
//             <p class="price-item">Shipping Charge: <span class="highlight">Free Shipping</span></p>
//             <p class="price-item">Tax Cost: $<span class="highlight">0.00</span></p>
//             <hr>
//             <p class="price-total">Total: $<span id="total"><%= totalAmount %></span></p>
//         </div>
        



//     </div>

//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
//     <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
   
                          

//          <!-- Add Address Modal -->
// <div class="modal fade" id="addAddressModal" tabindex="-1" role="dialog" aria-labelledby="addAddressModalLabel" aria-hidden="true">
//     <div class="modal-dialog" role="document">
//       <div class="modal-content">
//         <div class="modal-header">
//           <h5 class="modal-title" id="addAddressModalLabel">Add New Address</h5>
//           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         <div class="modal-body">
//           <form id="addAddressForm">
//             <div class="form-group">
//               <label for="fullName">Full Name</label>
//               <input type="text" class="form-control" id="fullName" name="fullName" required>
//             </div>
//             <div class="form-group">
//               <label for="addressLine1">Address Line 1</label>
//               <input type="text" class="form-control" id="addressLine1" name="addressLine1" required>
//             </div>
//             <div class="form-group">
//               <label for="addressLine2">Address Line 2</label>
//               <input type="text" class="form-control" id="addressLine2" name="addressLine2">
//             </div>
//             <div class="form-group">
//               <label for="city">City</label>
//               <input type="text" class="form-control" id="city" name="city" required>
//             </div>
//             <div class="form-group">
//               <label for="state">State</label>
//               <input type="text" class="form-control" id="state" name="state" required>
//             </div>
//             <div class="form-group">
//               <label for="postalCode">Postal Code</label>
//               <input type="number" class="form-control" id="postalCode" name="postalCode" required>
//             </div>
//             <div class="form-group">
//               <label for="country">Country</label>
//               <input type="text" class="form-control" id="country" name="country" required>
//             </div>
//             <div class="form-group">
//               <label for="phoneNumber">Phone Number</label>
//               <input type="number" class="form-control" id="phoneNumber" name="phoneNumber" required>
//             </div>
  
//             <button type="submit" class="btn btn-primary">Add Address</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
            
//   <!-- edit address -->

//   <% addresses.forEach(function(address) { %>
//     <!-- Edit Address Modal -->
//     <div class="modal fade" id="editAddressModal_<%= address._id %>" tabindex="-1" role="dialog" aria-labelledby="editAddressModalLabel_<%= address._id %>" aria-hidden="true">
//         <div class="modal-dialog" role="document">
//             <div class="modal-content">
//                 <div class="modal-header">
//                     <h5 class="modal-title" id="editAddressModalLabel_<%= address._id %>">Edit Address</h5>
//                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                         <span aria-hidden="true">&times;</span>
//                     </button>
//                 </div>
//                 <div class="modal-body">
//                     <form id="editAddressForm_<%= address._id %>" action="/checkout/edit/<%= address._id %>" method="POST">
//                         <div class="form-group">
//                             <label for="fullName_<%= address._id %>">Full Name</label>
//                             <input type="text" class="form-control" id="fullName_<%= address._id %>" name="fullName" value="<%= address.fullName %>" required>
//                         </div>
//                         <div class="form-group">
//                             <label for="addressLine1_<%= address._id %>">Address Line 1</label>
//                             <input type="text" class="form-control" id="addressLine1_<%= address._id %>" name="addressLine1" value="<%= address.addressLine1 %>" required>
//                         </div>
//                         <div class="form-group">
//                             <label for="addressLine2_<%= address._id %>">Address Line 2</label>
//                             <input type="text" class="form-control" id="addressLine2_<%= address._id %>" name="addressLine2" value="<%= address.addressLine2 %>">
//                         </div>
//                         <div class="form-group">
//                             <label for="city_<%= address._id %>">City</label>
//                             <input type="text" class="form-control" id="city_<%= address._id %>" name="city" value="<%= address.city %>" required>
//                         </div>
//                         <div class="form-group">
//                             <label for="state_<%= address._id %>">State</label>
//                             <input type="text" class="form-control" id="state_<%= address._id %>" name="state" value="<%= address.state %>" required>
//                         </div>
//                         <div class="form-group">
//                             <label for="postalCode_<%= address._id %>">Postal Code</label>
//                             <input type="text" class="form-control" id="postalCode_<%= address._id %>" name="postalCode" value="<%= address.postalCode %>" required>
//                         </div>
//                         <div class="form-group">
//                             <label for="country_<%= address._id %>">Country</label>
//                             <input type="text" class="form-control" id="country_<%= address._id %>" name="country" value="<%= address.country %>" required>
//                         </div>
//                         <div class="form-group">
//                             <label for="phoneNumber_<%= address._id %>">Phone Number</label>
//                             <input type="tel" class="form-control" id="phoneNumber_<%= address._id %>" name="phoneNumber" value="<%= address.phoneNumber %>" required>
//                         </div>
//                         <button type="submit" class="btn btn-primary">Update Address</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </div>
// <% }); %>
// <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
// <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.4.24/dist/sweetalert2.all.min.js"></script>
// <script src="https://checkout.razorpay.com/v1/checkout.js"></script>

// <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

// <script>

// $(document).ready(function() {
//     // Handle address form submission
//     $('#addAddressForm').on('submit', function(e) {
//         e.preventDefault();

//         if (!validateForm($(this))) {
//             return;
//         }

//         $.ajax({
//             url: '/checkout/add-address',
//             method: 'POST',
//             data: $(this).serialize(),
//             success: function(response) {
//                 if (response.success) {
//                     $('#addAddressModal').modal('hide');
//                     Swal.fire({
//                         title: 'Success!',
//                         text: 'Address added successfully',
//                         icon: 'success',
//                         confirmButtonText: 'OK'
//                     }).then(() => {
//                         location.reload();
//                     });
//                 } else {
//                     Swal.fire({
//                         title: 'Error!',
//                         text: response.message || 'Failed to add address',
//                         icon: 'error',
//                         confirmButtonText: 'OK'
//                     });
//                 }
//             },
//             error: function() {
//                 Swal.fire({
//                     title: 'Error!',
//                     text: 'An error occurred while adding the address',
//                     icon: 'error',
//                     confirmButtonText: 'OK'
//                 });
//             }
//         });
//     });
//     let walletBalance = 0;
//     function fetchWalletBalance() {
//         $.ajax({
//             url: '/wallet/balance',
//             method: 'GET',
//             success: function(data) {
//                 walletBalance = parseFloat(data.balance);
//                 $('#walletBalance').text(walletBalance.toFixed(2));
//             },
//             error: function(xhr, status, error) {
//                 console.error('Error fetching wallet balance:', error);
//                 Swal.fire({
//                     title: 'Error!',
//                     text: 'Failed to fetch wallet balance. Please try again.',
//                     icon: 'error',
//                     confirmButtonText: 'OK'
//                 });
//             }
//         });
//     }
//     fetchWalletBalance();
//     $('#placeOrderForm').on('submit', async function(e) {
//     e.preventDefault();
//     const selectedPaymentMethod = $('input[name="paymentMethod"]:checked').val();
//     let coupon = document.getElementById("couponCode").value;
//     const formData = new FormData(this);
//     formData.append('appliedCouponCode', coupon);
//     const totalAmount = parseFloat($('#totalAmount').text().replace('₹', ''));

//     // Check if wallet payment is selected
//     if (selectedPaymentMethod === 'Wallet Cash') {
//         if (walletBalance < totalAmount) {
//             Swal.fire({
//                 title: 'Insufficient Balance',
//                 text: 'Your wallet balance is not enough to complete this purchase.',
//                 icon: 'error',
//                 confirmButtonText: 'OK'
//             });
//             return;
//         }
//     }

//     // If Razorpay is selected, trigger Razorpay payment
//     if (selectedPaymentMethod === 'Razorpay') {
//         createRazorpayOrder();
//         return;
//     }

//     // For COD, check the limit
//     if (selectedPaymentMethod === 'COD' && totalAmount > 1000) {
//         Swal.fire({
//             title: 'Invalid Payment Method',
//             text: 'Cash on Delivery is not allowed for orders above ₹1000. Please choose a different payment method.',
//             icon: 'error',
//             confirmButtonText: 'OK'
//         });
//         return;
//     }

//     // For other payment methods, proceed with order placement
//     try {
//         const response = await fetch('/place', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//             body: new URLSearchParams(formData)
//         });
//         const result = await response.json();

//         if (result.success) {
//             Swal.fire({
//                 title: 'Order Placed!',
//                 text: `Your order has been placed successfully. Total: ₹${result.orderDetails.totalAmount.toFixed(2)}`,
//                 icon: 'success',
//                 confirmButtonText: 'OK'
//             }).then(() => {
//                 // Refresh wallet balance after successful order
//                 if (selectedPaymentMethod === 'Wallet Cash') {
//                     fetchWalletBalance();
//                 }
//                 window.location.href = `/orderSummary/${result.orderId}`;
//             });
//         } else {
//             Swal.fire({
//                 title: 'Order Failed!',
//                 text: result.message || 'Failed to place order.',
//                 icon: 'error',
//                 confirmButtonText: 'OK'
//             });
//         }
//     } catch (error) {
//         console.error('Error placing order:', error);
//         Swal.fire({
//             title: 'Error',
//             text: 'An unexpected error occurred. Please try again.',
//             icon: 'error',
//             confirmButtonText: 'OK'
//         });
//     }
// });

//     // Handle edit address form submission
//     $('form[id^="editAddressForm_"]').on('submit', function(e) {
//         e.preventDefault();

//         const formId = $(this).attr('id');
//         const addressId = formId.split('_')[1];

//         if (!validateForm($(this))) {
//             return;
//         }

//         $.ajax({
//             url: $(this).attr('action'),
//             method: 'POST',
//             data: $(this).serialize(),
//             success: function(response) {
//                 if (response.success) {
//                     $(`#editAddressModal_${addressId}`).modal('hide');
//                     Swal.fire({
//                         title: 'Success!',
//                         text: 'Address updated successfully',
//                         icon: 'success',
//                         confirmButtonText: 'OK'
//                     }).then(() => {
//                         location.reload();
//                     });
//                 } else {
//                     Swal.fire({
//                         title: 'Error!',
//                         text: response.message || 'Failed to update address',
//                         icon: 'error',
//                         confirmButtonText: 'OK'
//                     });
//                 }
//             },
//             error: function() {
//                 Swal.fire({
//                     title: 'Error!',
//                     text: 'An error occurred while updating the address',
//                     icon: 'error',
//                     confirmButtonText: 'OK'
//                 });
//             }
//         });
//     });

//     // Handle address delete
//     $('a.btn-icon.delete').on('click', function(e) {
//         e.preventDefault();

//         const deleteUrl = $(this).attr('href');

//         Swal.fire({
//             title: 'Are you sure?',
//             text: "You won't be able to revert this!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonText: 'Yes, delete it!',
//             cancelButtonText: 'Cancel'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 $.ajax({
//                     url: deleteUrl,
//                     method: 'DELETE',
//                     success: function(response) {
//                         if (response.success) {
//                             Swal.fire({
//                                 title: 'Deleted!',
//                                 text: 'Address has been deleted.',
//                                 icon: 'success',
//                                 confirmButtonText: 'OK'
//                             }).then(() => {
//                                 location.reload();
//                             });
//                         } else {
//                             Swal.fire({
//                                 title: 'Error!',
//                                 text: response.message || 'Failed to delete address',
//                                 icon: 'error',
//                                 confirmButtonText: 'OK'
//                             });
//                         }
//                     },
//                     error: function() {
//                         Swal.fire({
//                             title: 'Error!',
//                             text: 'An error occurred while deleting the address',
//                             icon: 'error',
//                             confirmButtonText: 'OK'
//                         });
//                     }
//                 });
//             }
//         });
//     });

//     $(document).ready(function() {
//     $.get('/wallet/balance', function(data) {
//       $('#walletBalance').text(data.balance.toFixed(2));
//     });
//   });
//         $(document).ready(function() {
//             var modal = $('#couponsModal');
//             var btn = $('#viewCouponsBtn');
//             var span = $('.close');

//             btn.click(function() {
//                 modal.css('display', 'block');
//             });

//             span.click(function() {
//                 modal.css('display', 'none');
//             });

//             $(window).click(function(event) {
//                 if (event.target == modal[0]) {
//                     modal.css('display', 'none');
//                 }
//             });

//             $('#couponForm').submit(function(e) {
//         e.preventDefault();
//         var couponCode = $('#couponCode').val();
        
//         $.ajax({
//             url: '/apply-coupon',
//             method: 'POST',
//             data: { couponCode: couponCode },
//             success: function(response) {
//                 if (response.success) {
//                     var subtotal = parseFloat($('#subtotal').text());
//                     var discountAmount = (subtotal * response.discount) / 100;
//                     var maxDiscount = response.maxDiscount;
                    
//                     if (discountAmount > maxDiscount) {
//                         discountAmount = maxDiscount;
//                     }
                    
//                     var total = subtotal - discountAmount;
                    
//                     $('#couponDiscount').text(discountAmount.toFixed(2));
//                     $('#total').text(total.toFixed(2));
                    
//                     // Show the applied coupon section
//                     $('#appliedCouponCode').text(couponCode);
//                     $('#appliedCoupon').show();
                    
//                     Swal.fire({
//                         icon: 'success',
//                         title: 'Coupon Applied!',
//                         text: 'Your coupon has been applied successfully!',
//                         showConfirmButton: false,
//                         timer: 2000
//                     });
//                 } else {
//                     Swal.fire({
//                         icon: 'error',
//                         title: 'Oops...',
//                         text: response.message
//                     });
//                 }
//             },
//             error: function() {
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Error',
//                     text: 'An error occurred while applying the coupon.'
//                 });
//             }
//         });
//     });

//     // Add event listener for Remove Coupon button
//     $('#removeCouponBtn').click(function () {
//     $.ajax({
//         url: '/remove-coupon',
//         method: 'POST',
//         success: function (response) {
//             if (response.success) {
//                 $('#appliedCoupon').hide();
//                 $('#couponForm').show();
//                 $('#couponCode').val('');
//                 $('#totalAmount').text('₹' + originalTotal); // Reset to original total
//                 Swal.fire({
//                     title: 'Coupon Removed',
//                     text: response.message,
//                     icon: 'success',
//                     confirmButtonText: 'OK'
//                 });
//             } else {
//                 Swal.fire({
//                     title: 'Error',
//                     text: response.message,
//                     icon: 'error',
//                     confirmButtonText: 'OK'
//                 });
//             }
//         },
//         error: function (err) {
//             Swal.fire({
//                 title: 'Error',
//                 text: 'An error occurred while removing the coupon.',
//                 icon: 'error',
//                 confirmButtonText: 'OK'
//             });
//         }
//     });
// });


  
//         });
//     // Form validation function
//     function validateForm(form) {
//         let isValid = true;

//         form.find('input[required]').each(function() {
//             if ($(this).val().trim() === '') {
//                 isValid = false;
//                 $(this).addClass('is-invalid');
//             } else {
//                 $(this).removeClass('is-invalid');
//             }
//         });

//         let phoneNumber = form.find('input[name="phoneNumber"]').val();
//         if (!/^\d{10}$/.test(phoneNumber)) {
//             isValid = false;
//             form.find('input[name="phoneNumber"]').addClass('is-invalid');
//         } else {
//             form.find('input[name="phoneNumber"]').removeClass('is-invalid');
//         }

//         let postalCode = form.find('input[name="postalCode"]').val();
//         if (!/^\d{6}(-\d{6})?$/.test(postalCode)) {
//             isValid = false;
//             form.find('input[name="postalCode"]').addClass('is-invalid');
//         } else {
//             form.find('input[name="postalCode"]').removeClass('is-invalid');
//         }

//         let country = form.find('input[name="country"]').val();
//         if (!/^[A-Za-z\s]+$/.test(country)) {
//             isValid = false;
//             form.find('input[name="country"]').addClass('is-invalid');
//         } else {
//             form.find('input[name="country"]').removeClass('is-invalid');
//         }

//         let state = form.find('input[name="state"]').val();
//         if (!/^[A-Za-z\s]+$/.test(state)) {
//             isValid = false;
//             form.find('input[name="state"]').addClass('is-invalid');
//         } else {
//             form.find('input[name="state"]').removeClass('is-invalid');
//         }

//         let fullName = form.find('input[name="fullName"]').val();
//         if (!/^[A-Za-z\s]+$/.test(fullName)) {
//             isValid = false;
//             form.find('input[name="fullName"]').addClass('is-invalid');
//         } else {
//             form.find('input[name="fullName"]').removeClass('is-invalid');
//         }

//         return isValid;
//     }
//     $('#rzp-button').on('click', function(e) {
//     e.preventDefault();
//     console.log("Razorpay button clicked");
//     rzp.open();
// });

// var razorpayOptions = {
//         key: '<%= razorpayKeyId %>', // Make sure this is correctly set
//         amount: '<%= totalAmount * 100 %>', // Make sure this is correctly set
//         currency: 'INR',
//         name: 'Ro show',
//         description: 'Order Payment',
//         image: '/your_logo.png',
//         order_id: 'orderId',
//         handler: function (response){
//             console.log("Payment successful", response);
//             $('#razorpay_payment_id').val(response.razorpay_payment_id);
//             $('#razorpay_order_id').val(response.razorpay_order_id);
//             $('#razorpay_signature').val(response.razorpay_signature);

//             // Submit the form
//             $('#placeOrderForm').submit();
//         },
//         prefill: {
//             name: '<%= userData.name %>',
//             email: '<%= userData.email %>',
//             contact: '<%= userData.phoneNumber %>'
//         },
//         theme: {
//             color: '#FFFF00'
//         }, 
//         modal:{
//             ondismiss: () => {
//                 window.location.href = `/orderSummary`;
//             }
//         }
// };

//     var rzp = new Razorpay(razorpayOptions);

// //     $('input[name="paymentMethod"]').change(function() {
// //   if ($(this).val() === 'Razorpay') {
// //     $('#rzp-button').show();
// //     $('#placeOrderBtn').hide();
// //     createRazorpayOrder();
// //   } else if ($(this).val() === 'Wallet Cash') {
// //     $('#rzp-button').hide();
// //     $('#placeOrderBtn').show();
// //     $('#placeOrderForm').submit();
// //   } else {
// //     $('#rzp-button').hide();
// //     $('#placeOrderBtn').show();
// //   }
// // });

// $('input[name="paymentMethod"]').change(function() {
//     const selectedMethod = $(this).val();
//     if (selectedMethod === 'Razorpay') {
//         $('#rzp-button').show();
//         $('#placeOrderBtn').hide();
//     } else {
//         $('#rzp-button').hide();
//         $('#placeOrderBtn').show();
//     }
// });


// function createRazorpayOrder() {
//     $.ajax({
//         url: '/create-razorpay-order',
//         method: 'POST',
//         data: { couponCode: $('#couponCode').val() }, // Send the coupon code to the server
//         success: function(response) {
//             console.log("Razorpay order created", response);
//             if (response.success) {
//                 // Update the Razorpay options with the new order details
//                 razorpayOptions.order_id = response.order.id;
//                 razorpayOptions.amount = response.amount; // This is already in paisa

//                 // Update the displayed totals
//                 $('#subtotal').text(response.subtotal.toFixed(2));
//                 $('#couponDiscount').text(response.couponDiscount.toFixed(2));
//                 $('#total').text(response.totalAmount.toFixed(2));

//                 // Update Razorpay amount
//                 razorpayOptions.amount = response.amount;

//                 // Show applied coupon info if available
//                 if (response.appliedCoupon) {
//                     $('#appliedCoupon').show();
//                     $('#appliedCouponCode').text(response.appliedCoupon.code);
//                 } else {
//                     $('#appliedCoupon').hide();
//                 }

//                 // Re-initialize Razorpay with updated options
//                 rzp = new Razorpay(razorpayOptions);

//                 // Log the final Razorpay options for debugging
//                 console.log("Final Razorpay options:", razorpayOptions);
//             } else {
//                 console.error('Error creating Razorpay order:', response.message);
//                 Swal.fire({
//                     title: 'Error!',
//                     text: 'Failed to create Razorpay order: ' + response.message,
//                     icon: 'error',
//                     confirmButtonText: 'OK'
//                 });
//             }
//         },
//         error: function(xhr, status, error) {
//             console.error('Error creating Razorpay order:', error);
//             Swal.fire({
//                 title: 'Error!',
//                 text: 'Failed to create Razorpay order: ' + error,
//                 icon: 'error',
//                 confirmButtonText: 'OK'
//             });
//         }
//     });
// }

// $('#couponForm').submit(function(e) {
//     e.preventDefault();
//     var couponCode = $('#couponCode').val();
    

//     createRazorpayOrder();
// });

// });

// </script>

  
//         </main><!-- End .main -->

//         <script>
//             document.getElementById('removeCouponBtn').addEventListener('click', function () {
        
//               document.getElementById('couponDiscount').textContent = "0.00";
              
//               const subtotal = parseFloat(document.getElementById('subtotal').textContent);
//               const newTotal = subtotal; 
          
//               // Update the total displayed
//               document.getElementById('total').textContent = newTotal.toFixed(2);
          
//               // Hide the applied coupon display
//               document.getElementById('appliedCoupon').style.display = 'none';
//             });
//           </script>
          

//      <%- include('../layout/footer') %>
//     </div><!-- End .page-wrapper -->
//     <button id="scroll-top" title="Back to Top"><i class="icon-arrow-up"></i></button>

//     <!-- Mobile Menu -->
//     <div class="mobile-menu-overlay"></div><!-- End .mobil-menu-overlay -->

//     <div class="mobile-menu-container">
//         <div class="mobile-menu-wrapper">
//             <span class="mobile-menu-close"><i class="icon-close"></i></span>

//             <form action="#" method="get" class="mobile-search">
//                 <label for="mobile-search" class="sr-only">Search</label>
//                 <input type="search" class="form-control" name="mobile-search" id="mobile-search" placeholder="Search in..." required>
//                 <button class="btn btn-primary" type="submit"><i class="icon-search"></i></button>
//             </form>
            
//             <nav class="mobile-nav">
//                 <ul class="mobile-menu">
//                     <li class="active">
//                         <a href="index.html">Home</a>

//                         <ul>
//                             <li><a href="index-1.html">01 - furniture store</a></li>
//                             <li><a href="index-2.html">02 - furniture store</a></li>
//                             <li><a href="index-3.html">03 - electronic store</a></li>
//                             <li><a href="index-4.html">04 - electronic store</a></li>
//                             <li><a href="index-5.html">05 - fashion store</a></li>
//                             <li><a href="index-6.html">06 - fashion store</a></li>
//                             <li><a href="index-7.html">07 - fashion store</a></li>
//                             <li><a href="index-8.html">08 - fashion store</a></li>
//                             <li><a href="index-9.html">09 - fashion store</a></li>
//                             <li><a href="index-10.html">10 - shoes store</a></li>
//                             <li><a href="index-11.html">11 - furniture simple store</a></li>
//                             <li><a href="index-12.html">12 - fashion simple store</a></li>
//                             <li><a href="index-13.html">13 - market</a></li>
//                             <li><a href="index-14.html">14 - market fullwidth</a></li>
//                             <li><a href="index-15.html">15 - lookbook 1</a></li>
//                             <li><a href="index-16.html">16 - lookbook 2</a></li>
//                             <li><a href="index-17.html">17 - fashion store</a></li>
//                             <li><a href="index-18.html">18 - fashion store (with sidebar)</a></li>
//                             <li><a href="index-19.html">19 - games store</a></li>
//                             <li><a href="index-20.html">20 - book store</a></li>
//                             <li><a href="index-21.html">21 - sport store</a></li>
//                             <li><a href="index-22.html">22 - tools store</a></li>
//                             <li><a href="index-23.html">23 - fashion left navigation store</a></li>
//                             <li><a href="index-24.html">24 - extreme sport store</a></li>
//                         </ul>
//                     </li>
//                     <li>
//                         <a href="category.html">Shop</a>
//                         <ul>
//                             <li><a href="category-list.html">Shop List</a></li>
//                             <li><a href="category-2cols.html">Shop Grid 2 Columns</a></li>
//                             <li><a href="category.html">Shop Grid 3 Columns</a></li>
//                             <li><a href="category-4cols.html">Shop Grid 4 Columns</a></li>
//                             <li><a href="category-boxed.html"><span>Shop Boxed No Sidebar<span class="tip tip-hot">Hot</span></span></a></li>
//                             <li><a href="category-fullwidth.html">Shop Fullwidth No Sidebar</a></li>
//                             <li><a href="product-category-boxed.html">Product Category Boxed</a></li>
//                             <li><a href="product-category-fullwidth.html"><span>Product Category Fullwidth<span class="tip tip-new">New</span></span></a></li>
//                             <li><a href="cart.html">Cart</a></li>
//                             <li><a href="checkout.html">Checkout</a></li>
//                             <li><a href="wishlist.html">Wishlist</a></li>
//                             <li><a href="#">Lookbook</a></li>
//                         </ul>
//                     </li>
//                     <li>
//                         <a href="product.html" class="sf-with-ul">Product</a>
//                         <ul>
//                             <li><a href="product.html">Default</a></li>
//                             <li><a href="product-centered.html">Centered</a></li>
//                             <li><a href="product-extended.html"><span>Extended Info<span class="tip tip-new">New</span></span></a></li>
//                             <li><a href="product-gallery.html">Gallery</a></li>
//                             <li><a href="product-sticky.html">Sticky Info</a></li>
//                             <li><a href="product-sidebar.html">Boxed With Sidebar</a></li>
//                             <li><a href="product-fullwidth.html">Full Width</a></li>
//                             <li><a href="product-masonry.html">Masonry Sticky Info</a></li>
//                         </ul>
//                     </li>
//                     <li>
//                         <a href="#">Pages</a>
//                         <ul>
//                             <li>
//                                 <a href="about.html">About</a>

//                                 <ul>
//                                     <li><a href="about.html">About 01</a></li>
//                                     <li><a href="about-2.html">About 02</a></li>
//                                 </ul>
//                             </li>
//                             <li>
//                                 <a href="contact.html">Contact</a>

//                                 <ul>
//                                     <li><a href="contact.html">Contact 01</a></li>
//                                     <li><a href="contact-2.html">Contact 02</a></li>
//                                 </ul>
//                             </li>
//                             <li><a href="login.html">Login</a></li>
//                             <li><a href="faq.html">FAQs</a></li>
//                             <li><a href="404.html">Error 404</a></li>
//                             <li><a href="coming-soon.html">Coming Soon</a></li>
//                         </ul>
//                     </li>
//                     <li>
//                         <a href="blog.html">Blog</a>

//                         <ul>
//                             <li><a href="blog.html">Classic</a></li>
//                             <li><a href="blog-listing.html">Listing</a></li>
//                             <li>
//                                 <a href="#">Grid</a>
//                                 <ul>
//                                     <li><a href="blog-grid-2cols.html">Grid 2 columns</a></li>
//                                     <li><a href="blog-grid-3cols.html">Grid 3 columns</a></li>
//                                     <li><a href="blog-grid-4cols.html">Grid 4 columns</a></li>
//                                     <li><a href="blog-grid-sidebar.html">Grid sidebar</a></li>
//                                 </ul>
//                             </li>
//                             <li>
//                                 <a href="#">Masonry</a>
//                                 <ul>
//                                     <li><a href="blog-masonry-2cols.html">Masonry 2 columns</a></li>
//                                     <li><a href="blog-masonry-3cols.html">Masonry 3 columns</a></li>
//                                     <li><a href="blog-masonry-4cols.html">Masonry 4 columns</a></li>
//                                     <li><a href="blog-masonry-sidebar.html">Masonry sidebar</a></li>
//                                 </ul>
//                             </li>
//                             <li>
//                                 <a href="#">Mask</a>
//                                 <ul>
//                                     <li><a href="blog-mask-grid.html">Blog mask grid</a></li>
//                                     <li><a href="blog-mask-masonry.html">Blog mask masonry</a></li>
//                                 </ul>
//                             </li>
//                             <li>
//                                 <a href="#">Single Post</a>
//                                 <ul>
//                                     <li><a href="single.html">Default with sidebar</a></li>
//                                     <li><a href="single-fullwidth.html">Fullwidth no sidebar</a></li>
//                                     <li><a href="single-fullwidth-sidebar.html">Fullwidth with sidebar</a></li>
//                                 </ul>
//                             </li>
//                         </ul>
//                     </li>
//                     <li>
//                         <a href="elements-list.html">Elements</a>
//                         <ul>
//                             <li><a href="elements-products.html">Products</a></li>
//                             <li><a href="elements-typography.html">Typography</a></li>
//                             <li><a href="elements-titles.html">Titles</a></li>
//                             <li><a href="elements-banners.html">Banners</a></li>
//                             <li><a href="elements-product-category.html">Product Category</a></li>
//                             <li><a href="elements-video-banners.html">Video Banners</a></li>
//                             <li><a href="elements-buttons.html">Buttons</a></li>
//                             <li><a href="elements-accordions.html">Accordions</a></li>
//                             <li><a href="elements-tabs.html">Tabs</a></li>
//                             <li><a href="elements-testimonials.html">Testimonials</a></li>
//                             <li><a href="elements-blog-posts.html">Blog Posts</a></li>
//                             <li><a href="elements-portfolio.html">Portfolio</a></li>
//                             <li><a href="elements-cta.html">Call to Action</a></li>
//                             <li><a href="elements-icon-boxes.html">Icon Boxes</a></li>
//                         </ul>
//                     </li>
//                 </ul>
//             </nav><!-- End .mobile-nav -->

//             <div class="social-icons">
//                 <a href="#" class="social-icon" target="_blank" title="Facebook"><i class="icon-facebook-f"></i></a>
//                 <a href="#" class="social-icon" target="_blank" title="Twitter"><i class="icon-twitter"></i></a>
//                 <a href="#" class="social-icon" target="_blank" title="Instagram"><i class="icon-instagram"></i></a>
//                 <a href="#" class="social-icon" target="_blank" title="Youtube"><i class="icon-youtube"></i></a>
//             </div><!-- End .social-icons -->
//         </div><!-- End .mobile-menu-wrapper -->
//     </div><!-- End .mobile-menu-container -->

//     <!-- Sign in / Register Modal -->
//     <div class="modal fade" id="signin-modal" tabindex="-1" role="dialog" aria-hidden="true">
//         <div class="modal-dialog modal-dialog-centered" role="document">
//             <div class="modal-content">
//                 <div class="modal-body">
//                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                         <span aria-hidden="true"><i class="icon-close"></i></span>
//                     </button>

//                     <div class="form-box">
//                         <div class="form-tab">
//                             <ul class="nav nav-pills nav-fill" role="tablist">
//                                 <li class="nav-item">
//                                     <a class="nav-link active" id="signin-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="signin" aria-selected="true">Sign In</a>
//                                 </li>
//                                 <li class="nav-item">
//                                     <a class="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Register</a>
//                                 </li>
//                             </ul>
//                             <div class="tab-content" id="tab-content-5">
//                                 <div class="tab-pane fade show active" id="signin" role="tabpanel" aria-labelledby="signin-tab">
//                                     <form action="#">
//                                         <div class="form-group">
//                                             <label for="singin-email">Username or email address *</label>
//                                             <input type="text" class="form-control" id="singin-email" name="singin-email" required>
//                                         </div><!-- End .form-group -->

//                                         <div class="form-group">
//                                             <label for="singin-password">Password *</label>
//                                             <input type="password" class="form-control" id="singin-password" name="singin-password" required>
//                                         </div><!-- End .form-group -->

//                                         <div class="form-footer">
//                                             <button type="submit" class="btn btn-outline-primary-2">
//                                                 <span>LOG IN</span>
//                                                 <i class="icon-long-arrow-right"></i>
//                                             </button>

//                                             <div class="custom-control custom-checkbox">
//                                                 <input type="checkbox" class="custom-control-input" id="signin-remember">
//                                                 <label class="custom-control-label" for="signin-remember">Remember Me</label>
//                                             </div><!-- End .custom-checkbox -->

//                                             <a href="#" class="forgot-link">Forgot Your Password?</a>
//                                         </div><!-- End .form-footer -->
//                                     </form>
//                                     <div class="form-choice">
//                                         <p class="text-center">or sign in with</p>
//                                         <div class="row">
//                                             <div class="col-sm-6">
//                                                 <a href="#" class="btn btn-login btn-g">
//                                                     <i class="icon-google"></i>
//                                                     Login With Google
//                                                 </a>
//                                             </div><!-- End .col-6 -->
//                                             <div class="col-sm-6">
//                                                 <a href="#" class="btn btn-login btn-f">
//                                                     <i class="icon-facebook-f"></i>
//                                                     Login With Facebook
//                                                 </a>
//                                             </div><!-- End .col-6 -->
//                                         </div><!-- End .row -->
//                                     </div><!-- End .form-choice -->
//                                 </div><!-- .End .tab-pane -->
//                                 <div class="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
//                                     <form action="#">
//                                         <div class="form-group">
//                                             <label for="register-email">Your email address *</label>
//                                             <input type="email" class="form-control" id="register-email" name="register-email" required>
//                                         </div><!-- End .form-group -->

//                                         <div class="form-group">
//                                             <label for="register-password">Password *</label>
//                                             <input type="password" class="form-control" id="register-password" name="register-password" required>
//                                         </div><!-- End .form-group -->

//                                         <div class="form-footer">
//                                             <button type="submit" class="btn btn-outline-primary-2">
//                                                 <span>SIGN UP</span>
//                                                 <i class="icon-long-arrow-right"></i>
//                                             </button>

//                                             <div class="custom-control custom-checkbox">
//                                                 <input type="checkbox" class="custom-control-input" id="register-policy" required>
//                                                 <label class="custom-control-label" for="register-policy">I agree to the <a href="#">privacy policy</a> *</label>
//                                             </div><!-- End .custom-checkbox -->
//                                         </div><!-- End .form-footer -->
//                                     </form>
//                                     <div class="form-choice">
//                                         <p class="text-center">or sign in with</p>
//                                         <div class="row">
//                                             <div class="col-sm-6">
//                                                 <a href="#" class="btn btn-login btn-g">
//                                                     <i class="icon-google"></i>
//                                                     Login With Google
//                                                 </a>
//                                             </div><!-- End .col-6 -->
//                                             <div class="col-sm-6">
//                                                 <a href="#" class="btn btn-login  btn-f">
//                                                     <i class="icon-facebook-f"></i>
//                                                     Login With Facebook
//                                                 </a>
//                                             </div><!-- End .col-6 -->
//                                         </div><!-- End .row -->
//                                     </div><!-- End .form-choice -->
//                                 </div><!-- .End .tab-pane -->
//                             </div><!-- End .tab-content -->
//                         </div><!-- End .form-tab -->
//                     </div><!-- End .form-box -->
//                 </div><!-- End .modal-body -->
//             </div><!-- End .modal-content -->
//         </div><!-- End .modal-dialog -->
//     </div><!-- End .modal -->

//     <!-- Plugins JS File -->
//     <script src="assets/js/jquery.min.js"></script>
//     <script src="assets/js/bootstrap.bundle.min.js"></script>
//     <script src="assets/js/jquery.hoverIntent.min.js"></script>
//     <script src="assets/js/jquery.waypoints.min.js"></script>
//     <script src="assets/js/superfish.min.js"></script>
//     <script src="assets/js/owl.carousel.min.js"></script>
//     <!-- Main JS File -->
//     <script src="assets/js/main.js"></script>
// </body>


// <!-- molla/checkout.html  22 Nov 2019 09:55:06 GMT -->
// </html>