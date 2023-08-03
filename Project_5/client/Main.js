// // import React from "react";
// // import Pokemons from "./Components/Pokemons";
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Pokemon from "./Components/Pokemon";
// // import Trainers from "./Components/Trainers";

// // const Main = () => {
// //   return (
// //     <BrowserRouter>
// //       {/* Use the Routes component to wrap your Route components */}
// //       <Routes>
// //         <Route path="/" element={<Pokemons />} />
// //         <Route path="/:id" element={<Pokemon />} />
// //         <Route path="/" element={<Trainers />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // };

// // export default Main;

// import {
//   createBrowserRouter,
//   Outlet,
//   RouterProvider,
// } from "react-router-dom";
// import React from "react";
// import Pokemons from "./Components/Pokemons";
// import Pokemon from "./Components/Pokemon";
// import Trainers from "./Components/Trainers";
// import Trainer from "./Components/Trainer";
// import Home from "./Components/Home";


// function Main() {
//   const Layout = () => {
//     return (
//       <>
//         {/* <Navbar style={{ paddingLeft: "8%", paddingRight: "8%" }}/>
//         <Outlet style={{ paddingLeft: "8%", paddingRight: "8%" }}/>
//         <Footer/> */}
//         {/* <Navbar /> */}
//         <div style={{ paddingLeft: "8%", paddingRight: "8%" }}>
//           <Outlet />
//         </div>
//       </>
//     );
//   };

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout/>,
//       children: [
//         {
//           path: "/",
//           element: <Home/>,
//         },
//         {
//           path: "/pokemon/:id",
//           element: <Pokemon />,
//         },
//         {
//           path: "/trainer/:id",
//           element: <Trainer />,
//         }, 
//   ]}]);

//   return (
//     <div>
//         <RouterProvider router={router} />
//     </div>
//   )
// }

// export default Main;

      
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Pokemon from "./Components/Pokemon";
import Trainer from "./Components/Trainer";
import Home from "./Components/Home";

function Main() {
  const Layout = () => {
    return (
      <>
        <Outlet />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/", // localhost:1337/
          element: <Home />,
        },
        {
          path: "pokemon/:id", // localhost:1337/pokemon/1
          element: <Pokemon />,
        },
        {
          path: "trainer/:id", // localhost:13337/trainer/2
          element: <Trainer />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default Main;
