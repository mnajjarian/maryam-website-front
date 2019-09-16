import Layout from "../components/Layout";
import Biography from "../components/Biography";
import Article from "../components/Article";

const App = () => {
  return (
    <div>
      <Layout>
        <Biography />
        <Article />
      </Layout>
    </div>
  );
};

export default App;
