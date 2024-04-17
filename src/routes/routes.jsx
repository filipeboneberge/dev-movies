import { Route, Routes } from "react-router-dom";

import Detail from "../containers/Detail";
import Home from "../containers/Home";
import Movies from "../containers/Movies";
import Series from "../containers/Series";
import DefautLayout from "../layout/DefautLayout";

function Router() {
  return (
    <Routes>
      <Route element={<DefautLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/detalhe/:id" element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default Router;
