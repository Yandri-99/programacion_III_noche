/*import Clock from "./hood/useEffect/Clock";
import DynamicTitle from "./hood/useEffect/DynamicTitle";
import FetchUser from "./hood/useEffect/FetchUser";
import LogEffect from "./hood/useEffect/LogEffect";
import SafeFetch from "./hood/useEffect/SafeFetch";
import ScrollLogger from "./hood/useEffect/ScrollLogger";
import AccessWithLimit from "./hood/useState/AccessWithLimit";
import CheckboxSummary from "./hood/useState/CheckboxSummary";
import DocumentTitleChanger from "./hood/useState/DocumentTitleChanger";
import HoverFont from "./hood/useState/HoverFont";
import ParentLoginForm from "./hood/useState/ParentLoginForm";
import PostLikes from "./hood/useState/PostLikes";
import ButtonOne from "./props/ButtonOne";
import Greeting from "./props/Greeting";
import ParentIncrementButton from "./props/ParentIncrementButton";
import ParentInputNotifier from "./props/ParentInputNotifier";
import UserCard from "./props/UserCard";


function App() {
  const userData = { name: "Luis", age: 35 };
  return (
    <>
      <HoverFont/>
      <SafeFetch/>
      <ScrollLogger/>
      <DynamicTitle/>
      <Clock/>
      <FetchUser/>
      <LogEffect/>
      <DocumentTitleChanger/>
      <ParentLoginForm/>
      <PostLikes/>
      <CheckboxSummary/>
      <AccessWithLimit/>
      <Greeting name="Yandri" lastname="Llumiquinga" />
      <Greeting name="Ana" lastname="García" />
      <UserCard user={userData} />
      <ButtonOne onClick={() => alert("¡Hola desde el padre!")} />
      <ParentIncrementButton />
      <ParentInputNotifier />
    </>
  );
}
export default App;

import React, { useState } from 'react';
import { LanguageContext } from './language-context/LanguageContext';
import LanguageToggle from './language-context/LanguageToggle';

export default function App() {
  const [lang, setLang] = useState('es');
  const toggleLanguage = () => setLang(prev => (prev === 'es' ? 'en' : 'es'));

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      <LanguageToggle />
    </LanguageContext.Provider>
  );
}
import React, { useState } from 'react';
import { LoginContext } from './login-context/LoginContext';
import LoginStatus from './login-context/LoginStatus';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => setIsLoggedIn(prev => !prev);
  

  return (
    <LoginContext.Provider value={{ isLoggedIn, toggleLogin }}>
      <LoginStatus />
    </LoginContext.Provider>
  );
}
import React, { useState } from 'react';
import { CartContext } from './cart-context/CartContext';
import CartView from './cart-context/CartView';

export default function App() {
  const [items, setItems] = useState([]);
  const addItem = (item) => setItems(prev => [...prev, item]);
  const removeItem = (id) => setItems(prev => prev.filter(i => i.id !== id));

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      <CartView />
    </CartContext.Provider>
  );
}

import FocoAutomatico from './hood/useRef/FocoAutomatico';
import CirculoColorido from './hood/useRef/CirculoColorido';
import ScrollDemo from './hood/useRef/ScrollDemo';
import ReproductorSonido from './hood/useRef/ReproductorSonido';
import MoverCaja from './hood/useRef/MoverCaja';

export default function App() {
  return (
    <>
      <FocoAutomatico />
      <CirculoColorido />
      <ScrollDemo />
      <ReproductorSonido />
      <MoverCaja />
    </>
  );
}
*/
import ExpensiveCalc from './hood/useMemo/ExpensiveCalc';
import FiltroLista from './hood/useMemo/FiltroLista';
import TablaOrdenada from './hood/useMemo/TablaOrdenada';
import Contador from './hood/useCallback/Contador';
import HijoProps from './hood/useCallback/HijoProps';

export default function App() {
  return (
    <>
      <ExpensiveCalc />
      <FiltroLista />
      <TablaOrdenada />
      <Contador />
      <HijoProps />
    </>
  );
}







