import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { PokemonInfosPage } from "./pokemon-infos";

const AppRoutes = () => {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/pokemon/infos/id/:id" element={<PokemonInfosPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }