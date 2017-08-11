import { createStore } from 'redux';
import reducer from './reducer';

export default function configStore(initState = { todos: []}) {
  return createStore(reducer, initState)
}
