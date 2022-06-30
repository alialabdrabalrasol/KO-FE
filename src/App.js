import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import PageNotFound from './pages/PageNotFound';
import Navbar from './components/Navbar';
import ItemPreview from './pages/ItemPreview';
import TopViewItem from './pages/TopViewItem';
function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/item" element={<ItemPreview />} />
          <Route path="/about" element={<About />} />
          <Route path="/topview" element={<TopViewItem />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
