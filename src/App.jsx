import React from "react";

import Nov2023 from "./pages/Nov2023";
import Dec2023 from "./pages/Dec2023";
import Apr from "./pages/Apr";
import Jun from "./pages/Jun";
import Jul from "./pages/Jul";
import Aug from "./pages/Aug";
import Sep from "./pages/Sep";
import Oct from "./pages/Oct";
import Dec from "./pages/Dec";
import Jan from "./pages/Jan";
import Feb from "./pages/Feb";
import Mar from "./pages/Mar";
import May from "./pages/May";
import Nov from "./pages/Nov";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/nov2023' element={<Nov2023 />} />
        <Route path='/dec2023' element={<Dec2023 />} />
        <Route path='/jan' element={<Jan />} />
        <Route path='/feb' element={<Feb />} />
        <Route path='/mar' element={<Mar />} />
        <Route path='/apr' element={<Apr />} />
        <Route path='/may' element={<May />} />
        <Route path='/jun' element={<Jun />} />
        <Route path='/jul' element={<Jul />} />
        <Route path='/aug' element={<Aug />} />
        <Route path='/sep' element={<Sep />} />
        <Route path='/oct' element={<Oct />} />
        <Route path='/nov' element={<Nov />} />
        <Route path='/dec' element={<Dec />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
