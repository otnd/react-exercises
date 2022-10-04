# Develhope - React Exercises

### After the download you need to execute command "npm install" and "npm start"

# Composition

## Component Composition - 01

Create a Container component that renders its children within a div tag. Have the div tag use a white background and a red border, either with a custom class or by using tailwindcss.

## Component Composition - 02

Modify the Container component so that it can display a title received within the title prop.

## Render Props - 01

Modify the TodoList component so that, instead of rendering the items array within the ul tag, it calls the function passed to its render prop, passing it the items array as a parameter, as well as the function required to delete the item. Pass a render prop to the TodoList component to correctly render and interact with the items array.

## Context - 01

Create a LanguageContext and wrap a DisplayLanguage component within its provider. Add a select tag to the component containing the DisplayLanguage component that allows the user to select the language, and pass it as a value to the Provider.

## Context - 02

Consume the LanguageContext within the DisplayLanguage component by using the context consumer, and show the selected language in an h1 tag.