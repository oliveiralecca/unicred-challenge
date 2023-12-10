import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { Page404 } from "./pages/404";
import { Edit } from "./pages/Edit";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar" element={<Register />} />
        <Route path="/cooperado/:id" element={<Edit />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
