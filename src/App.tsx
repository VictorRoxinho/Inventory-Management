import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Sales from "./Pages/Sales/Sales";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Sales />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
