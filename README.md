# Develhope - React Exercises

### After the download you need to execute command "npm install" and "npm start"

# External libraries

## React Router - 01

Create an App component that wraps a Routes component and add a single Route to the / path that renders the Welcome component from Function Components 01, passing it a name prop. Render the App component within a BrowserRouter component.

## React Router - 02

Add a new Route to the /counter path that renders the Counter component from useState 01.

## React Router - 03

Add a new Route to the users/:username path that renders a ShowGithubUser component that receives the username as a path parameter and renders the GithubUser component from useEffect 03 by passing it the received username.

## React Router - 04

Add three Links within the main App component and use them to navigate to all three routes.

## React Router - 05

Add a Not Found route that renders when a user navigates to a path that does not exist.

## React Router - 06

Add a Route to the users path that shows the GihubUserList component from useEffect 04. Modify it so that instead of showing the GithubUser component for each username entered, it shows a link to a nested route that shows the ShowGithubUser component. In doing so, remove the /users/:username route from the App component, and add a new nested route within the /users route.

## React Router - 07

Add an index route to the GithubUserList route that shows the "Add a user and select it" message.

## SWR - 01

Modify the useGithubUser custom hook from Custom Hooks 03 to use the useSWR hook to fetch the data of a Github user.

## SWR - 02

Modify the useGithubUser hook so that, if the username is null, no request is made.

## SWR - 03

Modify the useGithubUser hook so that it returns a function to manually refetch the data when invoked.