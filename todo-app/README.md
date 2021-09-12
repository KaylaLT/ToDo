# Todo App Project

## Goal

The goal of this project is to build an "To Do" app! Success generally looks like:

1. Write an app where a user create and manage "to do"s in a list
1. Write tests for the major use cases of the app

## Starting Point

This project is basically just a [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) starter. Most of the default files were left in place to give examples of how the different pieces (styles, tests, etc) are connected. But if random code looks out of place for the project, it is probably a relic of the project set up and may not be important - feel free to change anything.

## Specific Rubric

### Acceptance Criteria

Here are the details for the major goals, and what the rubric for completion is:

1. A user can create and manage "To dos" to a list. In other words, a user can:

   - type anything into a text input
   - "submit" that "to do" via a button
   - view all of their "to do"s in a list that should update as soon as it is submitted
   - delete existing "to do"s
   - edit existing "to do"s

1. Write tests for use cases of the app. The tests should:

   - be modular and test a single use case
   - cover all important use cases of the app

### Other Important Things

While the goal of this project is to see how you go about building an app that runs as expected, there are some soft considerations you would expect to see in any codebase out in the wild. Things like code structure, code comments, variable names, and anything else that makes it human friendly code. There aren't any solid requirements, just a note that it's always nice to read code that's written for humans!

### Things that _are not_ important

There are things not to worry about:

- Styles don't matter here. They do for a real app, but styling is a time sink that isn't super important. The UI should be usable to make sure intent is clear, but don't worry about making it look any nicer than necessary!
- Performance. The app is simple enough that there shouldn't be any real noticeable lag, but at the same time, don't worry about optimizing code for performance. General approach and human-friendliness is much more important!

## Helpful Resources

For the React side of things, the best source is the [React documentation](https://reactjs.org/).

For writing tests, Kent C. Dodds is the expert and has [lots of resources](https://kentcdodds.com/testing/)! The tests should also use Testing Library, which has [good documentation](https://testing-library.com/).

## Running the app

To run the app, make sure to:

- Run `npm install` in this directory to install dependencies
- Run `npm run start` to start the app. It should handle hot reloading and be ready to go!

## Running tests

Here, assuming you've already installed dependencies via `npm install`, all you need to do is `npm run test`!
