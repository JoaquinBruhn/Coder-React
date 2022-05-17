# E-commerce Ataraxia App
Practice App made with React
# How to use
The way to use the app is quite intuitive, explanation is going to be devided into sections.

#### App navigation:
- The home site shows you the full catalogue of products which you can filter with the different options in the Navbar to take you to a page with that filter. You can use the logo on the left of the Navbar to come back to the full catalogue.
- Clicking a "More info" button will take you to the detail page of said product, once at least 1 product has been selected you can go to the cart site through through the widget that will appear on the Navbaror with a button on the detail page of a product you bought.
- On the Cart you can continue and finish your purchase and it will dinamicaly change deppending on what proccess of it you are, after wich you can go back to the home page through a button or the Navbar.

| Page | Route |
| ------ | ------ |
| Home | "/" |
| Category | "/category/:categoryId" |
| Detail | "/item/:itemId" |
| Shopping cart | "/cart" |

#### Purchase products
 The whole proccess is simple, you go to an item´s detail with the "more info" button on it´s card and you can select the amount of that product that you want. After locking the amount you can either change it again, go back to the catalogue or go to the cart.

After selecting all the wanted products the user can go to the cart through the widget on the right of the Navbar or through a button on one of the bought products. There the user can see a list with the products he selected wich he can remove with a button or click on the image of it to go back to the product and alter the amount.

Bellow the list there is a mandatory form wich the user needs to fill in order to finish the purchase, once the form has been submited the options will lock and the user can click on "finish purchase" to start processing the order. while it´s being processed it can hand out a ticket with an id to identify the order if the purchase concludes properly.

> Please note that you can´t select a quantity bigger than the curent stock avaliable and you can not select a number below 1 as well.
> If the cart is emptied out the form will dissapear and a button to go back to the shop will appear.
> During the processing if the amount selected of a given product is greater than the amount avaliable on the database the processing will resolve into an error page listing the items that don´t have enough stock and cancel the order.

- #### An example on how a purchase is done can be seen on this GIF [here](https://www.youtube.com/)

# Components

#### Navigation / containers
| Component | usage  |
| ------ | ------ |
| app.js | Parent of all components, contains the navbar, routes, and the context for the shoppign cart. |
| Navbar | Contains the Navbar, it brings the categories from the database. |
| ItemListContainer | Loads the product list from the database and contains the catalogue and give´s it to ItemList, when a category route is entered, it´s reused to load from the database products of that category only |
| ItemList | Maps the list of products and organizes them on a grid pattern and returns one Item component for each product |
| Item | Shows some basic informarion of the product in the shape of a card. It redirects to the product´s more detailed card|
| ItemDetailContainer | Loads the specific product from the database and sends it to ItemDetail |
| CardCart | Displays the product added to the cart in the shape of a card, lets the user remove them or go to it´s detail. |

#### Interactive
| Component | usage  |
| ------ | ------ |
| Item | Shows some basic informarion of the product in the shape of a card. It redirects to the product´s more detailed card|
| ItemDetail | Shows the full information of the product and it lets the user select the amount of that product that they want along with limiting how much based on the avaliable stock. The user can go drom it to the catalogue or the cart |
| Cart | It maps the products added to the cart state that the user selected and returns it in a list of CartCards and validates if the user´s data has been inputed into the Form . When the user makes the purchase it runst the function that compares the amoints of the products with it´s corresponding stock in the DB and uploads the order. If the resolution is successful what is rendered changes into the ticked of the purchase and if it isn´t it renders the error message that shows wich items don´t have enough stock,|
| CartForm | It renders the form that the user needs to fill with his/her data to continue the purchase. It checks if the correct patters had been used for each input using HTML <input> properties. When it´s submited it turns it into an object and sets it as a state that is handled on the Cart component |

#### Tools
| Component | usage  |
| ------ | ------ |
| ItemCount | It´s used on ItemDetail. Displays the count state for the current amount of that Product and recives one fuction for each button to be executer to decease/increase the curent count. It checks that the curent count stays between 1 and the amount in stock recived from the ItemDetail and disables the corresponding button to do so. |
| Spinner | It´s used on ItemListContainer, ItemDetailContainer and Cart components. It displays an animated spinner and it´s used on conditional renders where the resolution of the requests for the database are being done. |
| CustOnClick | Custom button component that it´s used when a long function with one parameter need to be executed on an onClick event. I´s meant to circumvents the problem of seting a function with parameters to an onClick={} prop and makes the code look more organized. |

#### Suporting & Complementary Files
| Component | usage |
| ------ | ------ |
| CartContext | React context used to feed and if needed re-render parent components or component on a diferent component branch  that use the cart state. It also contains and passes to the other components all the functions that modify the cart state or need to calculate simple functions with it. |
| index.js ( in ./services/firebase | Contains the Firebase data base authentication function that it´s needed for every function involving Firestore. It uses the keys saved localy on a .env file. |
| firestore.js | Contains all the functions that utilize firebase functions and require to get or alter data from the database. It´s purpose is to isolate in a single file the Firebase specific functions from the functions that handle already recived data on the rest of the app, this prevents having to modify the entire app when the DB is changed. It also simplifies reading the logic of the functions on the other components.  |
| productAdapterFirestore,js | It´s purpose is to adapt the name of the properties handled on the other components to the property name o the curent database. It allows for a smother transition to a new database since the property names on the other components don´t need to be updated to the ones the new database uses. |

# Dependency List
- react-router-dom: V ^6.3.0
- react-icons: V ^4.3.1
- firebase: V ^9.6.11
> This list asumes that you have already installed all the base dependencies for React.js as well

# Functions

#### Single component functions

- On ItemDetail

| Function | usage |
| ------ | ------ |
| onAdd | Adds 1 to the count amount |
| onSubtract | Subtracts 1 to the count amount |
| lockAmount | Validates if the user has selected the amount of the product and if he/she has it executes the function that ads the product to the cart with the product with it´s selected amount as a new parameter. |


#### Multiple component functions
- CartContext

| Function | usage |
| ------ | ------ |
| addToCart | It´s used on the ItemDetail component.It recives a product (object) to add/modify the cart state. It validates if the product already exists or not in the cart using the product ID and modifies it´s quantity property or adds it to the cart respectively.
| removeItem | It´s used on the Cart component. It recives a product (object) to be removed from the cart state. Searches for the product using it´s product ID and filters it out of the cart array, then it sets this filtered array as the new cart state |
| clearCart | Empties the cart array |
| widgetUpdate | It´s used on the CartWidget component. It calculates the total amount of product units on the cart. |
| onAdd | Adds 1 to the count amount |
| onSubtract | Subtracts 1 to the count amount |
| getQuantityInCart | Recives a product ID and return the total amount of units of that product that have been selected  |
| totalPrice | Calculates the total price of all the producst on the shoping cart |

#### Firebase Functions
The following functions utilize Firebase functions from the firebase dependency. Their logic has been split between two files (Component | firestore.js) for the reasons mentioned on firestore.js on the"Suporting & Complementary Files" section of this article. 
When a product gets brought in from the firestore DB each product gets their porperty names adapted from the ones on the firestoreDB to names used on the App and when it gets or sent to the firestore DB it gets adapted to those property names respectively. The adapters can be found on the productAdapterFirestore.js file.
The following firebas# E-commerce Ataraxia App
Practice App made with React
# How to use
The way to use the app is quite intuitive, explanation is going to be devided into sections.

#### App navigation:
- The home site shows you the full catalogue of products which you can filter with the different options in the Navbar to take you to a page with that filter. You can use the logo on the left of the Navbar to come back to the full catalogue.
- Clicking a "More info" button will take you to the detail page of said product, once at least 1 product has been selected you can go to the cart site through through the widget that will appear on the Navbaror with a button on the detail page of a product you bought.
- On the Cart you can continue and finish your purchase and it will dinamicaly change deppending on what proccess of it you are, after wich you can go back to the home page through a button or the Navbar.

| Page | Route |
| ------ | ------ |
| Home | "/" |
| Category | "/category/:categoryId" |
| Detail | "/item/:itemId" |
| Shopping cart | "/cart" |

#### Purchase products
 The whole proccess is simple, you go to an item´s detail with the "more info" button on it´s card and you can select the amount of that product that you want. After locking the amount you can either change it again, go back to the catalogue or go to the cart.

After selecting all the wanted products the user can go to the cart through the widget on the right of the Navbar or through a button on one of the bought products. There the user can see a list with the products he selected wich he can remove with a button or click on the image of it to go back to the product and alter the amount.

Bellow the list there is a mandatory form wich the user needs to fill in order to finish the purchase, once the form has been submited the options will lock and the user can click on "finish purchase" to start processing the order. while it´s being processed it can hand out a ticket with an id to identify the order if the purchase concludes properly.

> Please note that you can´t select a quantity bigger than the curent stock avaliable and you can not select a number below 1 as well.
> If the cart is emptied out the form will dissapear and a button to go back to the shop will appear.
> During the processing if the amount selected of a given product is greater than the amount avaliable on the database the processing will resolve into an error page listing the items that don´t have enough stock and cancel the order.

- #### An example on how a purchase is done can be seen on this GIF [here](https://www.youtube.com/)

# Components

#### Navigation / containers
| Component | usage  |
| ------ | ------ |
| app.js | Parent of all components, contains the navbar, routes, and the context for the shoppign cart. |
| Navbar | Contains the Navbar, it brings the categories from the database. |
| ItemListContainer | Loads the product list from the database and contains the catalogue and give´s it to ItemList, when a category route is entered, it´s reused to load from the database products of that category only |
| ItemList | Maps the list of products and organizes them on a grid pattern and returns one Item component for each product |
| Item | Shows some basic informarion of the product in the shape of a card. It redirects to the product´s more detailed card|
| ItemDetailContainer | Loads the specific product from the database and sends it to ItemDetail |
| CardCart | Displays the product added to the cart in the shape of a card, lets the user remove them or go to it´s detail. |

#### Interactive
| Component | usage  |
| ------ | ------ |
| Item | Shows some basic informarion of the product in the shape of a card. It redirects to the product´s more detailed card|
| ItemDetail | Shows the full information of the product and it lets the user select the amount of that product that they want along with limiting how much based on the avaliable stock. The user can go drom it to the catalogue or the cart |
| Cart | It maps the products added to the cart state that the user selected and returns it in a list of CartCards and validates if the user´s data has been inputed into the Form . When the user makes the purchase it runst the function that compares the amounts of the products with it´s corresponding stock in the DB and uploads the order. If the resolution is successful what is rendered changes into the ticked of the purchase and if it isn´t it renders the error message that shows wich items don´t have enough stock,|
| CartForm | It renders the form that the user needs to fill with his/her data to continue the purchase. It checks if the correct patters had been used for each input using HTML <input> properties. When it´s submited it turns it into an object and sets it as a state that is handled on the Cart component |

#### Tools
| Component | usage  |
| ------ | ------ |
| ItemCount | It´s used on ItemDetail. Displays the count state for the current amount of that Product and recives one fuction for each button to be executer to decease/increase the curent count. It checks that the curent count stays between 1 and the amount in stock recived from the ItemDetail and disables the corresponding button to do so. |
| Spinner | It´s used on ItemListContainer, ItemDetailContainer and Cart components. It displays an animated spinner and it´s used on conditional renders where the resolution of the requests for the database are being done. |
| CustOnClick | Custom button component that it´s used when a long function with one parameter need to be executed on an onClick event. I´s meant to circumvents the problem of seting a function with parameters to an onClick={} prop and makes the code look more organized. |

#### Suporting & Complementary Files
| Component | usage |
| ------ | ------ |
| CartContext | React context used to feed and if needed re-render parent components or component on a diferent component branch  that use the cart state. It also contains and passes to the other components all the functions that modify the cart state or need to calculate simple functions with it. |
| index.js ( in ./services/firebase | Contains the Firebase data base authentication function that it´s needed for every function involving Firestore. It uses the keys saved localy on a .env file. |
| firestore.js | Contains all the functions that utilize firebase functions and require to get or alter data from the database. It´s purpose is to isolate in a single file the Firebase specific functions from the functions that handle already recived data on the rest of the app, this prevents having to modify the entire app when the DB is changed. It also simplifies reading the logic of the functions on the other components.  |
| productAdapterFirestore,js | It´s purpose is to adapt the name of the properties handled on the other components to the property name o the curent database. It allows for a smother transition to a new database since the property names on the other components don´t need to be updated to the ones the new database uses. |

# Dependency List
- react-router-dom: V ^6.3.0
- react-icons: V ^4.3.1
- firebase: V ^9.6.11
> This list asumes that you have already installed all the base dependencies for React.js as well

# Functions

#### Single component functions

- On ItemDetail

| Function | usage |
| ------ | ------ |
| onAdd | Adds 1 to the count amount |
| onSubtract | Subtracts 1 to the count amount |
| lockAmount | Validates if the user has selected the amount of the product and if he/she has it executes the function that ads the product to the cart with the product with it´s selected amount as a new parameter. |

- On Cart

| Function | usage |
| ------ | ------ |
| makePurchase | It changes the return of the Cart component by changeing it´s "purchaseState" state depending on the curent state of the process, it calculates the total cost of all the products on the cart using the totalPrice function and send it along with the "buyerData" and "cart" states as paremeters for the "startPurchase" function |
| editInfo | Sets the "buyerData" state as undefined to hide the button that executes the "makePurchase function" |

#### Multiple component functions
- CartContext

| Function | usage |
| ------ | ------ |
| addToCart | It´s used on the ItemDetail component.It recives a product (object) to add/modify the cart state. It validates if the product already exists or not in the cart using the product ID and modifies it´s quantity property or adds it to the cart respectively.
| removeItem | It´s used on the Cart component. It recives a product (object) to be removed from the cart state. Searches for the product using it´s product ID and filters it out of the cart array, then it sets this filtered array as the new cart state |
| clearCart | Empties the cart array |
| widgetUpdate | It´s used on the CartWidget component. It calculates the total amount of product units on the cart. |
| onAdd | Adds 1 to the count amount |
| onSubtract | Subtracts 1 to the count amount |
| getQuantityInCart | Recives a product ID and return the total amount of units of that product that have been selected  |
| totalPrice | Calculates the total price of all the producst on the shoping cart |

#### Firebase Functions
The following functions utilize Firebase functions from the firebase dependency. Their logic has been split between two files (Component | firestore.js) for the reasons mentioned on firestore.js on the"Suporting & Complementary Files" section of this article. 
When a product gets brought in from the firestore DB each product gets their porperty names adapted from the ones on the firestoreDB to names used on the App and when it gets or sent to the firestore DB it gets adapted to those property names respectively. The adapters can be found on the productAdapterFirestore.js file.
The following firebase functions are being utilized in this App:
- addDoc
- getDocs
- getDoc
- collection
- documentId
- doc
- query
- where
- orderBy
- Timestamp
- writeBatch 

> For more information on how they work you can check them on the [official documentation](https://firebase.google.com/docs/reference/js/firestore_)

| Function | usage |
| ------ | ------ |
| loadProducts (firestore.js) | It recives as properties the "categoryID" of the curent URL params. It returns a promise wich validates "categoryID" to aply an appropriate query for the [getDocs](https://firebase.google.com/docs/reference/js/firestore_.md#getdocs) reference, then using firebase´s [.doc](https://firebase.google.com/docs/reference/js/firestore_.md#doc) method it maps out the responce into an array with the list of products. This array will contain all the products if "categoryID" is undefined or filtered by "categoryID" if not. The promise then resolves into that array or catches an error that can pop up and rejects it. |
| loadProducts (ItemListContainer) | After receiving the response of the promise above it sets it as the "products" state, if the promise respoce is an error it catches it and displays it in the console. |
| loadDetail (firestore.js) | It recives as properties the "itemId" of the curent URL params. It returns a promise wich utilices that "itemID" param to build the reference that is going to be used by the [getDoc](https://firebase.google.com/docs/reference/js/firestore_.md#getdoc) function. This function brings the produc information, adapts it and sends it as the response of the promise and if there is an error it sends it as the responce instead. |
| loadDetail (itemDetailContainer) | After receiving the response of the promise above it sets it as the "product" state, if the promise respoce is an error it catches it and displays it in the console. |
| loadCategories (firestore.js) | It recives does not recive properties. It returns a promise wich uses a query that brings the list of all the categories and orders them by the "order" property they possess. It uses that query as a reference for the [getDocs](https://firebase.google.com/docs/reference/js/firestore_.md#getdocs) function wich then maps the responce into an array with the adapted categories and responces the promise with it. If there is an error it sends it as the responce instead. |
| loadCategories (Navbar) |  After receiving the response of the promise above it sets it as the "categories" state, if the promise respoce is an error it catches it and displays it in the console.  |
| startPurchase (firebase.js) | It recives as properties "buyerData", "cart" and "totPrice" from the Cart component. It maps out the ID´s from the products creating an array (purchaseIds), then it builds an object listing the passed values  (objOrder). After that it returns a promise wich utilices that "itemID" param to build the reference that is going to be used by the |
startPurchase shall be explained below on a more step by step process
##### startPurchase (firebase.js) 
- It recives as properties "buyerData", "cart" and "totPrice" from the Cart component.
- It maps out the ID´s from the products creating an array (purchaseIds), then it builds an object listing the passed values  (objOrder).
- It returns a promise that start by creating a constant (batch) to represent the [writeBatch](https://firebase.google.com/docs/reference/js/firestore_.md#writebatch)  function, two references (colRef & docRef),  an empty array (outOfStock).
> "colRef" serves to direct the query of the "docRef" reference to the product colection and "docRef" serves as a query to bring the data of the specific producs on "purchaseIds".
- It uses "docRef"as reference for the [getDocs](https://firebase.google.com/docs/reference/js/firestore_.md#getdocs) function.
- Then (using firebase´s [.doc](https://firebase.google.com/docs/reference/js/firestore_.md#doc) method) for each product fetched, it adapts it to the apps property names (dataDoc), saves the quantity selected by the user in a constant (prodQuantity) and validates if the avaliable stock (in dataDoc) is more than the quantity of that product that is on the cart (in prodQuantity).
- If the validation is True then it stores the changes to the stock values on the "batch" constant (with the [.update](https://firebase.google.com/docs/reference/js/firestore_.writebatch.md#writebatchupdate) firebase method) and if it´s false it pushes the product into the outOfStock array.
- After all the functions have been sorted and if "outOfStock" is empty it will create a reference for the "orders" collection on the DB and using that reference it will add the purchase as a document on the database using the [addDoc](https://firebase.google.com/docs/reference/js/firestore_.md#adddoc) function. If there is an producto on "outOfStock" it will reject the promise and create a custom error message with a name and a list of all the products that don´t have enough stock.
- Then it will get the ID of the new doccument through the rerurn of [addDoc](https://firebase.google.com/docs/reference/js/firestore_.md#adddoc) as a parameter, commit the "batch" that contains the changes in stock using the [.commit](https://firebase.google.com/docs/reference/js/firestore_.writebatch.md#writebatchcommit) firebase method for [writeBatch](https://firebase.google.com/docs/reference/js/firestore_.md#writebatch) and resolve the promise returning the ID of the document

##### startPurchase (Cart) 

- It saves the order ID in the "purchaseReceipt" state.
- If there was an item out of stock and the promise was rejected it will catch the custom error and overwrite the "purchaseReceipt" state with the error name and save the missing producs on the "missingStock" state.
- Lastly regardless of an error or not it will clear the cart and set the "purchaseState" to "done" finishing the purchase cicle.

### Adapters

| Adapter | usage |
| ------ | ------ |
| productAdapterFirestore | Adapts an document recived from firestore using the [.data()](https://firebase.google.com/docs/reference/js/firestore_.documentsnapshot.md#documentsnapshotdata) firestore method to directly extract the data of the product. It changes the property names of that document into the ones used in the logic inside the app and returns that new object. |
| categoryAdapterFirestore | Adapts an document recived from firestore using the [.data()](https://firebase.google.com/docs/reference/js/firestore_.documentsnapshot.md#documentsnapshotdata) firestore method to directly extract the data of the category. It changes the property names of that document into the ones used in the logic inside the app and returns that new object. |
| buyerDataAdapterFirestore | Adapts the buyer information from te app and changes the property names of that object into the ones used in firestore´s DB. |

# Future updates to consider
- Creating a log in system that saves the user´s information for a more streamline experience.
- Adding a hidden admin route to refill the stock more easily, posibly only allow access though and admin account.
- Add a more advance filter box to filter producs by other parameters aside from category and allow multiple at the same time.
- Adding a way to load a new or multiple new producs to the DB. 

## Closing notes
This app is being developed by Joaquin Bruhn, to see more please visit my [Github](https://github.com/JoaquinBruhn).
The API keys for the .env file are:
REACT_APP_apiKey=AIzaSyDheaF8Q1nRJPNWj-eTEhnJ2e94hu5Aue4
REACT_APP_authDomain=e-comerce-coder.firebaseapp.com
REACT_APP_projectId=e-comerce-coder
REACT_APP_storageBucket=e-comerce-coder.appspot.com
REACT_APP_messagingSenderId=1033581361905
REACT_APP_appId=1:1033581361905:web:74c54b16936556d4b20750
