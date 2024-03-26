import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header'
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import './App.css'
import { useContext, useEffect } from "react";
import { ListItemsContext } from "./context/listContext";
import { data } from "./mock";

const App = () => {
  const { items, setItems } = useContext(ListItemsContext);

  useEffect(() => {
    setItems({
      ...items,
      all: data
    })
  }, [])

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
