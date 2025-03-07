# Mini Projects Repository

This repository contains a collection of mini projects built using React. Each project demonstrates different aspects of React, including state management, routing, and component lifecycle. Below is a brief overview of each project:

## Projects

### 1. **Homepage**
- **File:** `Homepage.jsx`
- **Description:** The homepage serves as the entry point to the application. It provides links to other mini projects such as Counter, Todo, Accordion, and Recipes.
- **Features:**
  - Navigation using `react-router-dom`.
  - Simple and clean UI with links to other projects.

### 2. **Counter**
- **File:** `Counter.jsx`
- **Description:** A simple counter application that allows users to increment, decrement, and reset the counter. It also supports adding or subtracting a custom amount.
- **Features:**
  - State management using `useReducer`.
  - Input field for custom increment/decrement values.
  - Dark mode toggle.
  - Persistent state using `localStorage`.

### 3. **Todo**
- **File:** `Todo.jsx` and `LogicTodo.jsx`
- **Description:** A todo list application where users can add, edit, and delete todo items. The todos are persisted in `localStorage`.
- **Features:**
  - Dynamic textarea resizing.
  - Add new todos by pressing Enter.
  - Delete individual todos.
  - Persistence using `localStorage`.

### 4. **Accordion**
- **File:** `Accordian.jsx` and `accordianLogic.js`
- **Description:** An accordion component that displays information about various JavaScript array methods. Users can expand and collapse each section.
- **Features:**
  - Dynamic accordion sections.
  - Information about JavaScript array methods like `splice`, `filter`, `map`, etc.
  - Smooth expand/collapse transitions.

### 5. **Recipes**
- **File:** `Recipes.jsx` and `RecipeDetails.jsx`
- **Description:** A recipe search application that allows users to search for meals and view detailed information about each recipe, including ingredients and a link to a YouTube tutorial.
- **Features:**
  - Search functionality to find meals.
  - Detailed view of each recipe with ingredients and YouTube link.
  - Navigation between the recipe list and details using `react-router-dom`.