import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Counter from './components/counter/Counter.jsx';
import Homepage from './components/Homepage.jsx';
import Todo from './components/todo/Todo.jsx';

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

]) ;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
