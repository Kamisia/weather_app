import { QueryClient, QueryClientProvider } from "react-query";
//import WeatherCard from "./components/WeatherCard";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Landing } from "./pages/index";
const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [{ index: true, element: <Landing /> }],
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
