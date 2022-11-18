import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { List } from './components/Film/List';
import { Details } from './components/Film/Details';
function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<List />}>
                        <Route path="/film/:id" element={<Details />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
