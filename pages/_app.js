const App = ({ Component, pageProps }) => (
  <>
    <div>header</div>
    <Component {...pageProps} />
    <div>footer</div>
  </>
);
export default App;
