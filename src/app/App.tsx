import { RouterProvider } from 'react-router'
import { Provider } from 'react-redux'
import router from '../router/router'
import rootStore from '../redux/stores/rootStore'

function App() {
  return (<Provider store={rootStore}>
      <RouterProvider router={router} />
  </Provider>);
}

export default App