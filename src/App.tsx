import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Welcome } from './components/Welcome';
import ChatBot from './components/Chatbot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/chatbase" element={<ChatBot />} />
      </Routes>
    </Router>
  );
}

export default App;
