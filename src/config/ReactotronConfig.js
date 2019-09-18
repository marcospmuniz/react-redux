import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

// O create-react-app coloca a variável de ambiente NODE_ENV automaticamene
// ao utilizarmos o comando yarn start no ambiente de desenvolvimento. Quando
// estivermos no ambiente de produção ela não será colocada.
if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .connect();

  tron.clear();

  console.tron = tron;
}
