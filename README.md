# Develhope - React Exercises

### After the download you need to execute command "npm install" and "npm start"

# Function components and hooks

## Function Components - 01

Rewrite the Welcome component to be a function component.

## Function Components - 02

Write a Sum function component that receives a numbers prop (expected to be an array of numbers) and renders the sum of all numbers in the array within a h1 tag.

## Function Components - 03

What happens if the numbers prop of the Sum component is not set? How can you set a default value for this prop?

## useState - 01

Rewrite the ClickCounter component from Events 01 as a function component, and use the useState hook to track the state of the counter.

## useState - 02

Rewrite the Login component from Forms 03 as a function component, and use the useState hook to track the state of the username, password and remember inputs. Tip: you can use useState more than once.

## useEffect - 01

Add a side effect to the ClickCounter component from useState 01 that calls a onCounterChange function with the current value of the counter every time value of the counter changes. The function should be received as a prop.

## useEffect - 02

Rewrite the Counter component from State 1 as a function component and add a side effect that initializes the interval as soon as the component renders, and clears it when the component unmounts.

## useEffect - 03

Create a GithubUser component that fetches the data of the username passed as a prop, and renders some of the data within a div tag. The API to query is https://api.github.com/users/${username}.

## useEffect - 04

Create a GithubUserList component that maintains an array of usernames, showing a GithubUser component for each username entered. The usernames should be added to the array using an input field and a button.

## Custom Hooks - 01

Create a custom hook useCounter that keeps track of the state of a counter, and returns the current value of the counter as well as three functions to increment, decrement and reset the counter.

## Custom Hooks - 02

Create a custom hook that keeps track of the state of a controlled form with the username and password inputs, and returns the current value of the inputs as well as an event handler to update either input.

## Custom Hooks - 03

Extract the logic to fetch a Github user's data from the GithubUser component from useEffect 03 into a custom hook called useGithubUser.

## Custom Hooks - 04

Modify the useGithubUser hook to return the function to fetch the data of a Github user, along with the data of the user and the error and loading states.

## useRef - 02

Create a CarDetails uncontrolled form that uses the HTML Form API to allow the user to insert details about a car, such as the model, the year and the color. Allow the form to receive a initialData prop that contains the default values of each input, and reset the form every time the initialData value changes.

## useContext

Rewrite the DisplayLanguage component from Context 02 to be a function component, and access the LanguageContext through the useContext hook.

## useCallback

Modify the useCounter custom hook from Custom Hooks 01 to use the useCallback to memoize the functions used to increment, decrement and reset the counter.

## useMemo

Create a FilteredList component that receives a list of objects each containing a name, an id and a age prop. The FilteredList component should render only the items of the list whose age is greater than 18, and the filtering should only happen when the list changes. Use useMemo to memoize the filtered list.