import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FilmList } from './components/search/Film/FilmList';
import { FilmDetails } from './components/search/Film/FilmDetails';
import { FoodList } from './components/search/Food/FoodList';
import { FoodDetails } from './components/search/Food/FoodDetails';
import { Wrapper } from './components/GeneralComponents/Wrapper';
import { Menu } from './components/GeneralComponents/Menu';
import { Navigator } from './components/GeneralComponents/Navigation';
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
                        <Route path='/'/>
                        <Route path="/film/" element={
                            <FilmList
                                argument='film'
                                placeholder='Search Film'
                                redirect='/film/' />}>
                            <Route path="/film/:id" element={<FilmDetails />} />
                        </Route>
                        <Route path="/food/" element={
                            <FoodList
                                argument='food'
                                placeholder='Search Food'
                                redirect='/food/' />}>
                            <Route path="/food/:id" element={<FoodDetails />} />
                        </Route>
                    </Routes>
                </Wrapper>
            </BrowserRouter>
        </div>
    );
}

export default App;
