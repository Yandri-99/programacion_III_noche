import HelloWorld from './components/HelloWorld';
import WelcomeUser from './components/WelcomeUser';
import ButtonCounter from './components/ButtonCounter';
import TextInput from './components/TextInput';
import ToggleMessage from './components/ToggleMessage';
import ShowDate from './components/ShowDate';  
import ColorBox from './components/ColorBox';
import ConditionalText from './components/ConditionalText';
import EmojiList from './components/EmojiList';
import SimpleForm from './components/SimpleForm';
function App() {
  return (
    <>
      <HelloWorld />
      <WelcomeUser />
      <tr>
      <ButtonCounter />
      </tr>
      <TextInput />
      <tr>
      <ToggleMessage />
      </tr>
      <tr>
      <ShowDate />
      </tr>
      <tr>
      <ColorBox />
      </tr>
      <tr>
      <ConditionalText />
      </tr>
      <tr>
      <EmojiList />
      </tr>
      <tr>
      <SimpleForm />
      </tr>
    </>
  );
}

export default App;
