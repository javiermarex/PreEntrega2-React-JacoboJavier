import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar"

function App() {
  //   return (
  //   <>
  //       <NavBar />
  //       {/* <ItemListContainer /> */}
  //   </>
  // )

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={<ItemListContainer/>}
        />
        <Route
          exact
          path="/category/:categoryId"
          element={<ItemListContainer />}
        />
        <Route
          exact
          path="/detail/:productId"
          element={<ItemDetailContainer />}
        />
        {/*
        <Route path="/ejemplo" element={<Ejemplo />} />
        <Route path="/manejoclick" element={<ManejoClick />} />
        <Route path="/manejochange" element={<ManejoChange />} />
        <Route path="/manejosubmit" element={<ManejoSubmit />} />
        <Route path="/resolucionvocales" element={<ResolucionVocales />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App
