import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import TodoList from './components/Todos/TodoList';

function App() {
  return (
    <div className='grid h-screen px-6 font-sans bg-blue-100 place-items-center'>
      <Navbar />

      <div className='w-full p-6 bg-white rounded-lg shadow-lg md:max-w-3xl'>
        <Header />

        <hr className='mt-4' />

        <TodoList />

        <hr className='mt-4' />

        <Footer />
      </div>
    </div>
  );
}

export default App;
