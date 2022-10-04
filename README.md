# Develhope - React Exercises

### After the download you need to execute command "npm install" and "npm start"

# Forms lists and styling

## Events - 01

Create a ClickCounter class component that increments a counter every time a user clicks on a button. Render both the current value of the counter and the button within the ClickCounter component.

## Events - 03

Create a ClickTracker component that renders three buttons. Implement a single event handler for all three buttons, and track of which button was pressed last. Show the last button that was pressed in an h1 tag within the ClickTracker component. Tip: you can use the event object to access the target property of the event.

## Forms - 01

Create an InteractiveWelcome component that renders an input tag and the Welcome component. Pass the current content of the input tag to the name prop of the Welcome component. The input tag should be a controlled component.

## Forms - 02

Create a Login component containing three inputs: a username input, a password input and a remember checkbox. All three inputs should be controlled components.

## Forms - 03

Add a "login" button to the Login component. This button should be disabled as long as the username and password inputs are empty. When clicked, the event handler attached to the button should call an onLogin function passed as a prop to the Login component, passing it the state.

## Forms - 04

Add a "reset" button to the Login component that clears the content of all three inputs when clicked.

## Forms - 05 

Implement an UncontrolledLogin component that implements all the operations of the Login component, but does so using uncontrolled components.

## Forms - 06

Modify the UncontrolledLogin component so that the username input is automatically focused when the component renders the first time.

## Lists - 03

Create a TodoList component that renders a ul tag with a li tag for each item contained in the items state variable. The items state variable should be an array of strings. The TodoList component should also contain an input tag and a button. When the button is clicked, the event handler should add the value of the input tag to the items array.

## Lists - 04

Modify the TodoList component so that the input clears every time a Todo is added to the items array.

## Lists - 05

Modify the TodoList by adding a "reset" button that clears the items array when clicked.

## Lists - 06

Modify the TodoList by adding a "remove" button to each li tag. When clicked, the event handler should remove corresponding item from the items array.

## Styling Components - 01

Create an index.css file and import it within the index.js file. Add a .welcome class to the Welcome component that changes its background color and adds a border.

## Styling Components - 03

Modify the Login component from Forms 03 so that the "login" button background color is "red" when the inputted password's length is shorter than 8 characters, green otherwise.