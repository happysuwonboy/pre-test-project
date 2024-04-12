import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from 'pages/Home';
import ProductDetail from 'pages/ProductDetail';
import TopButton from './components/TopButton';


// reset CSS
const ResetStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
    	margin: 0;
    	padding: 0;
    	border: 0;
    	font-size: 100%;
    	font: inherit;
    	vertical-align: baseline;
    }
`
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ResetStyle />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<ProductDetail />} />
        {/* <Route path='*' element={<div>404 Not Found</div>} /> */}
      </Routes>
      <TopButton />
    </BrowserRouter>
  );
}

export default App;
