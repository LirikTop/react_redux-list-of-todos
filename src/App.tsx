import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Loader, TodoFilter, TodoList, TodoModal } from './components';
import { useState } from 'react';
import { useAppSelector } from './app/hooks';

export const App = () => {
  const currentTodo = useAppSelector(state => state.currentTodo);
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="box">
            <h1 className="title">Todos:</h1>

            <div className="block">
              <TodoFilter />
            </div>

            <div className="block">
              {loading && <Loader />}
              <TodoList onLoading={setLoading} loading={loading} />
            </div>
          </div>
        </div>
      </div>

      {currentTodo && <TodoModal />}
    </>
  );
};
