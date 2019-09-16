import Meta from "../components/Meta";
import Header from "./Header";
import Footer from "./Footer";

const Layout = props => (
  <div>
    <Meta />
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
