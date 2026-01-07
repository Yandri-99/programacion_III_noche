/*import HelloWorld from './components/HelloWorld';
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
}*/

import Greeting from './props/Greeting';
import UserCard from './props/UserCard';
import ButtonOne from './props/ButtonOne';
import IncrementButton from './props/IncrementButton';
import ParentInputNotifier from './props/ParentInputNotifier';
import HoverFont from './hood/HoverFont';
import AccessWithLimit from './hood/AccessWithLimit';
import DocumentTitleChanger from './hood/DocumentTitleChanger';
import PostLikes from './hood/PostLikes';
import CheckboxSummary from './hood/CheckboxSummary';
import LanguageSwitcher from './hood/LanguageSwitcher';
import MultiSwitch from './hood/MultiSwitch';
import AutoCounter from './hood/AutoCounter';
import DynamicColor from './hood/DynamicColor';
import ClickHistory from './hood/ClickHistory';



function App() {
  const userData = {name: "Juan",age: 25};
  
  return (
    <>
      <Greeting name="Francisco" lastname="Perez" />
      <Greeting name="Ana" lastname="Garcia" />
      <UserCard user={userData} />
      <ButtonOne onClick={() => console.log("Botón clickeado!")} />
      <IncrementButton onIncrement={() => console.log("Botón clickeado!")} />
      <ParentInputNotifier />
      <HoverFont />
      <AccessWithLimit />
      <DocumentTitleChanger />
      <PostLikes />
      <CheckboxSummary />
      <LanguageSwitcher />
      <MultiSwitch />
      <AutoCounter />
      <DynamicColor />
      <ClickHistory />
    </>
  );
}


export default App;
