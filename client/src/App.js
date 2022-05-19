import Forms from './components/form';
import List from './components/list';
import ViewOne from './components/view_one';
import Update from './components/update';
import './App.css';
import { Link, Routes, Route, Navigate} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/title/new">New Movie</Link>&nbsp;&nbsp;&nbsp;
      <hr/>
      <Routes>
        {/* Main */}
        <Route path="/title" element={<List/>}/>
        {/* Create */}
        <Route path="/title/new" element={<Forms/>}/>
        {/* Show One */}
        <Route path="/title/:id" element={<ViewOne/>}/>
        {/* Update */}
        <Route path="/title/:id/edit" element={<Update/>}/>

        {/* Redirect */}
        <Route path='*' element={<Navigate to="/title/" replace/>}/>
      </Routes>
    </div>
  );
}

export default App;
