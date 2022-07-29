import Body from './global/Body/Body';
import Header from './global/Header/Header';
import Content from './global/Body/Content/Content';
import Nav from './global/Body/Nav/Nav';
import Layout from './global/Layout';

export default function App() {

  const user = {name: 'John Doe'};

  return (
    <div className="App">
      <Layout 
        header={ <Header user={user.name}/> }
        body={
          <Body 
            nav={ <Nav>
              <a href="" className="nav__item">Login</a>
            </Nav> }
            content={ <Content/>}
          />
        }
      />
    </div>
  );
}
