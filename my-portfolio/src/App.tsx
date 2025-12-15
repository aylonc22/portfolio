import About from './components/About/About';
import ChatAssitant from './components/ChatAssistant/ChatAssitant';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';





const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <ChatAssitant/>
      <Header/>
      <About/>
      <Experience/>
      <Projects/>
  </div>
  );
}

export default App
