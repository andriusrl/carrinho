import Routes from "../../Routes"
import GlobalStyle from '../../styles/global'
import { PageProvider } from "../../providers/PageValue"

function App() {
  return (
    <PageProvider>
      <GlobalStyle />
      {Routes()}
    </PageProvider>
  );
}

export default App;
