import ReactDOM from 'react-dom/client';
import CommentsComponent from './components/comment-section';
import { Provider } from 'react-redux';
import store from '../src/state/store';

const App = () => {
    return (
        <CommentsComponent />
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);
