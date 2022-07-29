import { Routes, Route } from "react-router-dom";
import Provisioning from "../../../modules/pages/Provisioning";

export default function Content() {
  return (
    <div className="content">
      <Routes>
        <Route path='/' element={<div>accueil</div>}/>
        <Route path='/provisioning' element={<Provisioning />}/>
      </Routes>
    </div>
  )
}
