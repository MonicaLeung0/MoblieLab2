/**
 * My To Do List App
 *
 * @format
 */

import { SafeAreaView } from 'react-native-safe-area-context';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

export default function App() {
  return (
    <SafeAreaView>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}

