import ReactDom from "react-dom";
import App from './App.js'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

ReactDom.render(<App />,document.getElementById('root'));