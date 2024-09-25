import Text from './components/Text/Text';
import Quote from './components/Quote/Quote';
import Ulist from './components/Ulist/Ulist';
import Banner from './components/Banner/Banner';
import TextBooks from './components/TextBooks/TextBooks';
import Books from './components/Books/Books';
import TextBooksTwo from './components/TextBooksTwo/TextBooksTwo';
import Balloon from './components/Balloon/Balloon';
import Tags from './components/Tags/Tags';
import ReadToo from './components/ReadToo/ReadToo';
import FooterBoxes from './components/FooterBox/FooterBoxes';
import Title from './components/Title/Title';

function App() {
  return (
    <div className="app">

      <div className="title">
        <Title/>
      </div>
       
      <div className='text'>
        <Text />
        <Quote />
        <Ulist />
        <div className='banner'>
          <Banner />
        </div>
      </div>
        
      <div className='books'>
        <TextBooks />
        <Books />
        <TextBooksTwo />
      </div>
        
      <div className='below-books'>
        <Balloon />
        <Balloon />
      </div>
        
      <div className='footer'>
        <Tags />
        <ReadToo />
        <FooterBoxes />
      </div>

    </div>
  );
}

export default App;
