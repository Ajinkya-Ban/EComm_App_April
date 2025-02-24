Ecommerce App by using ReactJS
-----------------------------------------------------------------------------------------
1. Create react project inside our expressjs application.

2. Open the command prompt with this location and create the new react project by using the command,
	"npx create-react-app client"
	
3. If you get the errors then use the react version 18.2. For this version you need to go inside the client  				folder/project using the command,
	"cd client"
	
4. After enetring inside the client project use the command to use react version 18.2
 	"npm install react@18.2.0 react-dom@18.2.0"
 	
5. After creating the react app, clean some data from specific files which listed below,
	a) index.css   --> remove all the css
	b) app.css     --> remove all the css
	c) app.js      --> remove all header contents.
	d) reportWebVitals.js ---> delete the file and its reference which is present in index.js
	
6. After cleaning all the files check the app using the command, npm start on terminal.

7. In public folder, go inside in index.html file add the bootstrap cdn link as well as add bundle.min.js file in body tag use the version 5.3

8. Create the two folders inside src,
	a) components --> create one folder inside this name as Layout
	b) pages

9. Inside the components/Layout folder create the below files,
	a)Footer.jsx
	b)Header.jsx
	c)Layout.jsx
	
10. Inside the pages folder create the some pages which listed below
	a) About.jsx
	b) Contact.jsx
	c) HomePage.jsx
	d) Login.jsx
	e) PageNotFound.jsx
	
11. For future use install the icons library from react use the command,
	"npm install react-icons"
	
12. For routing install the npm package called react-router-dom using the below command,
	npm install react-router-dom
	
13. Go to Layout folder and start the desgin of header part, for that use bootstrap to create
    header section, adds some css in index.css file for header.
    
14. After completing the design part of header then design the footer part of the page, adds some
    css in index.css for footer part.

15. After all completions then design the Layout part of app. In the layout part we display the page
    and we called it as children.

16. When complete all the design check the app using command npm start on terminal.

17. Design each page as your requirement and add it into Layout component.
================================================================================================

Que. What is mean by BrowserRouter, Routes, Route and NavLink?
----------------------------------------------------------------------------------------------------------------------
1. BrowserRouter:
------------------
a) Purpose: Wraps the entire application to enable routing using browser's history API.
b) How it works: It keeps track of the current location (URL) and provides routing functionalities.

2. Routes:
------------
a) Purpose: A container for multiple <Route> components.
b) How it works: It checks the URL path and renders the matching <Route>.

3. Route:
----------
a) Purpose: Defines a specific path and which component to render for that path.
b) Key Props:
	1. path: URL to match.
	2. element: The component to render.
	
4. NavLink:
------------
a) Purpose: Used for navigation, similar to <a> tags but with extra features like active styling.
b) Key Features:
	Automatically adds an "active" class to the link when the current URL matches the link.
==================================================================================================

Que : What is the use of react-helmet library in reactjs(SEO)?
----------------------------------------------------------------
In React, the react-helmet (or its modern counterpart react-helmet-async) library is used to manage and dynamically update the document head of a webpage. This includes setting the page's title, meta tags, and other <head> elements.

Why use Helmet?
----------------
1. Dynamically update the document's <head> based on the page or component being rendered.
2. Useful for SEO (Search Engine Optimization) by defining meta tags like descriptions, keywords, Open Graph tags, etc.

Key Features:
------------------
a) Set Page Title Update the browser tab's title dynamically based on the page or context.
b) Set Meta Tags Add meta tags for descriptions, keywords, social sharing, and more.
==================================================================================================

Que. What is the useState() in reactjs?
---------------------------------------
a) The useState hook in React is a built-in hook that allows functional components to have state. Before hooks, only class components could manage state, but useState enables stateful logic in functional components.

b) useState provides a way to declare state variables and update them within functional components. It returns an array with two elements:
	1.The current state value.
	2.A function to update the state.
	
Advantages of useState:
------------------------------------
1.Simplifies State Management in Functional Components:
	No need to convert a functional component into a class to use state.

2. Supports Primitive & Complex Data Types:
	Works with numbers, strings, objects, and arrays.
	
3. Optimized Performance:
	Only updates the state that changes instead of re-rendering the entire component 
	unnecessarily.
================================================================================================

Ques. What is onChnage() event?
-------------------------------------------------------------------
The onChange event in React is used to detect changes in an input field, such as a text box, checkbox, or dropdown. It is commonly used to update state when a user enters or selects a value.

1. It is mainly used with form elements like:
a) <input> (text, checkbox, radio)
b) <textarea>
c) <select>

2. onChange is used for real-time updates.
================================================================================================
install axios and react-toastify in client folder.
install concurrently package and cors in our backend folder to run react and express both at same time then 
create the env file in client folder and add key as below,
	REACT_APP_API = http://localhost:7878
================================================================================================

What is mean by axios?
-------------------------------------------
Axios is a popular JavaScript library used in ReactJS (and other frameworks) to make HTTP requests from the browser or Node.js. It helps in fetching data from APIs, sending data to servers, and handling responses efficiently.

Features of Axios:
---------------------------------------
1.Promise-based – Works with async/await.
2.Supports Interceptors – Modify requests and responses globally.
3.Automatic JSON conversion – Parses JSON automatically.
4.Request & Response Timeout – Prevents hanging requests.
5.Supports request cancellation – Useful in React to prevent memory leaks.
6.Handles errors well – Provides error messages and status codes.

===========================================================================================
What is mean by props drilling?
----------------------------------------------------
Prop Drilling occurs when you pass props from a parent component to deeply nested child components, even when intermediate components do not need them. It makes the code harder to maintain and refactor.

Example:
-------------------------






Why is Prop Drilling Bad?
-----------------------------------------------
a) Unnecessary passing of props through intermediate components.
b) Hard to maintain when components grow larger.
c) Difficult to refactor because every intermediary component depends on props.


=======================================================================
What is mean by contextapi in reactjs?
-------------------------------------------------------------------
The Context API in ReactJS is a built-in feature that allows you to share state (data) across components without passing props manually at every level. It helps in avoiding prop drilling, making state management more efficient.

How Context API Works:
---------------------------------------------
1. Create a Context – Define a context using React.createContext().
2. Provide the Context – Use the <Context.Provider> to wrap the component tree and pass the state.
3. Consume the Context – Access the state using useContext(Context) or the Context.Consumer component.

When to Use Context API?
------------------------------------------------
1. When passing props deep down the component tree (to avoid prop drilling).
2. When managing global state like themes, authentication, language settings, etc.
3. When Redux or other state management libraries are overkill for your project.

============================================================================

How to create middleware in expressjs for Login also check weather the role is admin or not?
--------------------------------------------------------------------------------------------------------------------------------------------------------------
1. First create the folder in expressjs name as middlewares, in that create a file called authMiddleware.js
2. here we are creating a protected middleware.
3. This middleware check if the user is admin or not, if the user is admin then display the admin dashboard otherwise
   display the user dashboard.
   
=============================================================================

How to create the private routing using react-router-dom?
---------------------------------------------------------------------------------------------------
1. For this first create the folder inside the client/src/pages/ name as user.
2. In that folder add file name as Dashboard.jsx.
3. Wrap the code with Layout components as we do previously.
4. Create the route for Dashboard page in App.js.
5. In route folder of expressjs create one protected route for the dashboard page.
6. Create the folder in client / src / components / Routes.
7. In the  Routes folder add one file called as Private.js
8. After completing the code create a spinner file that loads the progress bar. Go to bootstrap.com website and search for
    spinner class.
9. create the Spinner.jsx file inside the components folder, in that add Spinner related code.
10. After this create one private route in app.js file, by using this we can get the dashboard page only when we are the
     autheniticated user.


Forget password / Role based login:
------------------------------------------------------------
For this we need to perform the following operations.
1) Add new field in the model called as question.
2) Create new route for forgot-password.
3) Create the new controller for forgot password.
4) Go to the Register page and change some values. check in code.
5) After that go to the Login page and add Forgot password button and navigate it.
6) Create the page called as ForgotPassword.jsx inside components.
7) Add the code from login page and do some changes like add answer field, email, new password field. Also change the API end points also.
