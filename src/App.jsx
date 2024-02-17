import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddCard from "./Pages/AddCard";
import Home from "./Pages/Home";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/addcard",
      element: <AddCard />,
    },
  ]);

  return (
    <div className="layout">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
