import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Counter from './components/counter/Counter.jsx';
import Homepage from './components/Homepage.jsx';
import Todo from './components/todo/Todo.jsx';
import Accordion from './components/accordian/Accordian.jsx';
import Recipes from './components/recipe/Recipes.jsx';
import RecipeDetails from './components/recipe/RecipeDetails.jsx';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Homepage />

  },
  {
    path: "/counter",
    element: <Counter />
  },
  {
    path:"/todo",
    element: <Todo />
  },
  {
    path:"/accordian",
    element: <Accordion />
  },
  {
    path: "/recipe",
    element: <Recipes />
  },
  {
    path: "/recipe/:id",
    element: <RecipeDetails />
  }

]) ;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
