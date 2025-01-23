 
import App from './App';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

   
// 👇️ IMPORTANT: use the correct ID of your root element
// This is the ID of the div in your index.html file
//const rootElement = document.getElementById('root');
const root = createRoot(document.createElement('root'));

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);
it('renders without crashing', () => {
 
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
