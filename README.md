# Develhope - React Exercises

### After the download you need to execute command "npm install" and "npm start"

# Basic Concepts

## Components 01

Create a new React application with create-react-app and remove all the code within the src folder.

## Components 02

Write a Hello class components that renders the "Hello, World!" message within an h1 tag.

## Components 03

Write a class component called App that renders the Hello component within a div tag.

## Components 04

Create a new index.js file within the src folder and render the App component using the ReactDOM.render method.

## Components 06

Modify the Hello component so that it shows a p tag below the h1 tag with the message "What a beautiful day!".

## Components 07

Extract the "What a beautiful day!" message into a new component called Message and render it within the Hello component.

## Props 01

Create a Welcome class component that receives a name prop and renders the Welcome, {name}! message within a p tag. Render this component to you App component, passing it a name prop of your choosing.


## Props 02

What happens if no name prop is passed to the Welcome component? Can you set a default value for the name prop?

## Props 03

Modify the Welcome component so that it receives a second prop called age and renders it below the 'welcome' message, within a p tag after the message "Your age is ".

## Props 04

What happens if the name prop is a JSX expression instead of a string? How do you pass a prop that contains a JSX expression? Modify the value passed to the name prop so that it's contained within a strong tag.

## Props 05

Extract the "Your age is " message into a new component called Age and render it within the Welcome component. Pass to the Age component the age prop that Welcome is receiving from the App component.

## Conditional Rendering 01

Modify the Welcome component so that the Age component is rendered only if the age prop is greater than 18.

## Conditional Rendering 02

Modify the Welcome component so that the Age component is rendered only if the age prop is present.

## Conditional Rendering 03

Modify the Welcome component so that the Age component is rendered only if the age prop is greater than 18 and less than 65.

## Conditional Rendering 04

Modify the Welcome component so that the Age component is rendered only if the age prop is greater than 18 and less than 65 and the name prop is equal to "John".

## Conditional Rendering 05

Modify the Age component so that the "Your age is " message is rendered only if the age prop is greater than 18. Otherwise render the "You are very young!" message.

## State 01

Create a Counter class component with an internal state containing a count property, initialized to 0. The Counter component should render the count property within an h1 tag, and the count property should be incremented by 1 every second;

## State 03

Modify the Counter component so that the initial value of the counter, the increment interval and the increment amount are passed as props to the component.

## State 04

Extract the h1 tag showing the count state variable into a new component called CounterDisplay and render it within the Counter component, passing it the count state variable as a prop.

## Component lifecycle 01

Modify the Counter component so that the interval is initialized within the componentDidMount life cycle method instead of the constructor. Is the constructor still required?