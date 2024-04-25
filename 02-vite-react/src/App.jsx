
import './App.css'
import Card from './components/Card';

function App() {
  console.log(Card);
  return (
    <>
    <h1 className='mb-6'>Hey these are the cards</h1>
    <div className='flex gap-4'>
    <Card name = 'macbook' btn='Learn more' />
    <Card name = 'Computer' btn='hehehe'/>
</div>
     
    </>
  )
}

export default App
