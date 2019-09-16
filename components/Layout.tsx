import Header from "./Header";

const layoutStyle = {
  margin: "0 auto",
  padding: 0,
  border: "1px solid #DDD"
};

const Layout = props => (
  <div>
    <Header />
    {props.children}
  </div>
);

export default Layout;
