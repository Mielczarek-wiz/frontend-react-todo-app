import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { All } from './components/Pages/All';
import { Done } from './components/Pages/Done';
import { Active } from './components/Pages/Active';
import { Layout } from './components/Layout/Layout';
import { NoPage } from './components/Pages/NoPage';


function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<All />} />
        <Route path="/done" element={<Done />} />
        <Route path="/active" element={<Active />} />
        <Route path="*" element={<NoPage />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
