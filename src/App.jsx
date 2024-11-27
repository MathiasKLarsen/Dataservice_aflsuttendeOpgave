import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import './App.css'

import Home from "./pages/Home"
import ViborgHaveservice1 from "./pages/ViborgHaveservice1"
import ViborgHaveservice2 from "./pages/ViborgHaveservice2"
import Vejret from "./pages/Vejret"
import Energidata from "./pages/Energidata"
import Opgave4 from "./pages/Opgave4"

function App() {

  const router = createBrowserRouter (
    [
      {
        path: "/", 
        element: <Layout />, 
        // errorElement: <PageNotFound />,
        children: [
          {
            index: true, element: <Home />
          },
          {
            path: "/viborghaveservice1", element: <ViborgHaveservice1 />
          },
          {
            path: "/viborghaveservice2", element: <ViborgHaveservice2 />
          },
          {
            path: "/vejret", element: <Vejret />
          },
          {
            path: "/energidata", element: <Energidata />
          },
          {
            path: "/opgave4", element: <Opgave4 />
          }
        ]
      }
    ]  
  )

  return (
    <section className="container mx-auto">
      <RouterProvider router={router} />
    </section>
  )
}

export default App
