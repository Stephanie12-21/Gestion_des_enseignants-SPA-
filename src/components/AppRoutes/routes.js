import { Routes, Route } from 'react-router-dom';
import MainDash from '../../page/MainDash/MainDash';
import MainEnseignant from '../../page/MainEnseignant/MainEnseignant';

function AppRoutes(){
    return(
       
            <Routes>
                <Route path="/" element={<MainDash />}></Route>
                <Route path="/Enseignant" element={<MainEnseignant />}></Route>
               
            </Routes>
       
    )
}
export default AppRoutes;