import { useState } from 'react';
import { Loader } from './common/loader';

import './App.css';

import { UserPosts} from './components/users/UserPosts';
import { UsersList } from './components/users/UsersList';
 
function App() {
  const [userActive, setUserActive] = useState({});
  
  return (
    <div className="App">
      <header className="App-header">
        Please select a user to find their comments:
      </header>

      <Loader 
        name='users'
        url={'https://jsonplaceholder.typicode.com/users'}>
          <UsersList 
            active={ userActive }  
            setActive={ setUserActive }/>
      </Loader>
      
      { userActive.id && 
        <UserPosts user={ userActive }/>
      }
        
    </div>
  );
}

export default App;