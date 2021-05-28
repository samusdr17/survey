import logo from './logo.svg';
import './App.scss';
import Header from './component/Header/header';
import Cover from './component/Cover/cover';

function App() {
  const name = 'ni te lo voy a decir'
  return (
    <div className="">
      <Header></Header>
      <Cover name={name}></Cover>
    </div>
  );
}

export default App;
