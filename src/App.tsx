import Body from './global/Body/Body';
import Header from './global/Header/Header';
import Content from './global/Body/Content/Content';
import Nav from './global/Body/Nav/Nav';
import Layout from './global/Layout';
import { Link } from 'react-router-dom';

export default function App() {

  const user = {name: 'John Doe'};

  return (
    <div className="App">
      <Layout 
        header={ <Header user={user.name}/> }
        body={
          <Body 
            nav={ <Nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/provisioning">Provisioning</Link></li>
              </ul>
            </Nav> }
            content={ <Content/>}
          />
        }
      />
    </div>
  );
}
