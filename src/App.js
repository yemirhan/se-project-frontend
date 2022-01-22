import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Admin } from "./modules/Admin";
import { Packages } from "./modules/Admin/Packages";
import { Support } from "./modules/Admin/Support";

import { Login } from "./modules/Login";
import { Register } from "./modules/Register";
import { Dashboard } from "./modules/User";
import { GroupDetails } from "./modules/User/GroupDetails";
import { Groups } from "./modules/User/Groups";
import { NewGroup } from "./modules/User/NewGroup";
import { UserPackages } from "./modules/User/Packages";
function App() {
  return (
    <BrowserRouter>
      <div style={{ width: '100%', height: "100%" }}>
        <Routes>
          <Route path='register' element={<Register />} />
          <Route path='admin' element={<Admin />} >
            <Route index element={<Packages />} />
            <Route path="support" element={<Support />} />
          </Route>
          <Route path='/' exact element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} >
            <Route index element={<Groups />} />
            <Route path="group/:id" element={<GroupDetails />} />
            <Route path="create/group" element={<NewGroup />} />
            <Route path="packages" element={<UserPackages />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
