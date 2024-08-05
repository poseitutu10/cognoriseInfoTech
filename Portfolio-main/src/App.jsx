import { RouterProvider } from "react-router-dom";
import { route } from "./components/route/Route";
import OverallContext from "./utils/OverallContext.jsx";

export default function App() {
  return (
    <>
      <OverallContext>
        <RouterProvider router={route} />
      </OverallContext>
    </>
  );
}
