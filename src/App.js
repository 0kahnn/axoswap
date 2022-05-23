import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Views/Index";
import Protocol from "./Views/Protocol";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/protocol" element={<Protocol />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
