import './App.css';
import Header from './component/header/headerController';
import Post from './component/post/postController';
import { Routes ,Route} from "react-router-dom";

function App() {
  return (
    <div className ="App">
    <Header/>
    <Routes>
      <Route path="/"  />
      <Route path="/post" element={<Post />} />
      <Route path="/catalog" element={<Post />} />
    </Routes>
    </div>
);
}

export default App;
