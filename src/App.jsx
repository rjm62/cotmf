import { BrowserRouter as Router, Route,  Routes, Navigate } from "react-router-dom";
import './App.css';
import Accueil from './pages/Accueil/Accueil';
import Stockage from './pages/Stockage/Stockage';
import Transport from './pages/Transport/Transport';
import Logistique from './pages/Logistique/Logistique';
import MentionsLegales from './pages/MentionsLegales/MentionsLegales';
import PolitiqueDeConfidentialite from './pages/PolitiqueDeConfidentialite/PolitiqueDeConfidentialite';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {DataContextProvider} from './utils/Context/DataContext'

function App() {
    return (
        <div className="toto">
        <Router>
            <DataContextProvider>
                <Header />
                    <Routes>
                        {/* <Route path="/cotmf" element={<Navigate replace to="/"/>} /> */}
                        <Route path="/" element={<Accueil />} />
                        <Route path="/Stockage" element={<Stockage />} />
                        <Route path="/Transport" element={<Transport />} />
                        <Route path="/Logistique" element={<Logistique />} />
                        <Route path="/MentionsLegales" element={<MentionsLegales />} />
                        <Route path="/PolitiqueDeConfidentialite" element={<PolitiqueDeConfidentialite />} />
                    </Routes>
                <Footer />
            </DataContextProvider>
        </Router>
        </div> 
    )
}

export default App;