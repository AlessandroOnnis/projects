import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FilmList } from './components/search/Film/FilmList';
import { ProductDetails } from './components/search/Products/ProductDetails';
import { FoodList } from './components/search/Food/FoodList';
import { Wrapper } from './components/GeneralComponents/Wrapper';
import { Menu } from './components/GeneralComponents/Menu';
import { Navigator } from './components/GeneralComponents/Navigation';
import { HomePage } from './components/HomePage';
function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Wrapper >
                    <Menu>
                        <Navigator link={'/'} text={'Home'} />
                        <Navigator link={'/film/'} text={'Film'} />
                        <Navigator link={'/food/'} text={'Food'} />
                    </Menu>
                    <Routes>
                        <Route path='/' element={<HomePage/>} />
                        <Route path="/film/" element={
                            <FilmList
                                argument='film'
                                placeholder='Search Film'
                                redirect='/film/' />}>
                            <Route path="/film/:id" element={<ProductDetails argument={'film'} />} />
                        </Route>
                        <Route path="/food/" element={
                            <FoodList
                                argument='food'
                                placeholder='Search Food'
                                redirect='/food/' />}>
                            <Route path="/food/:id" element={<ProductDetails argument={'food'} />} />
                        </Route>
                    </Routes>
                </Wrapper>
            </BrowserRouter>
        </div>
    );
}

export default App;
