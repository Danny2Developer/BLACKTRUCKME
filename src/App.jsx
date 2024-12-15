import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "../Routes";
function App() {
  return (
    <>
      <div >
        <RouterProvider router={routes} />
      </div>
    </>
  );
}

export default App;
