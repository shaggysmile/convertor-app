import './App.css';
import { ExchangeItem } from './ExchangeItem/ExchangeItem';

export const App = () => (
  <div className="App">
    <div className="today">
      {'📅 '}
      { new Date().toLocaleDateString()}
    </div>
    <ExchangeItem amount={135000} from="RUB" to="USD" />
    <ExchangeItem amount={165000} from="RUB" to="USD" />
    <ExchangeItem amount={300000} from="RUB" to="USD" />
  </div>
);
