import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Student from './components/Student.jsx';
import Titulo from './components/Titulo.jsx';

function App() {
    
  return(
    <>
    
      {/* <Header></Header>
      <Student nome="alysson" idade={21}></Student>
      <Student nome="gabriel" idade={20}></Student>
      <Student></Student>
      <Footer></Footer> */}
      
      <Titulo cor={'white'}></Titulo>
      <Titulo cor={'purple'}></Titulo>
      <Titulo cor={'wheat'}></Titulo>
      <Titulo cor={'grey'}></Titulo>

    </>
  );
}

export default App
