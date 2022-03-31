import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container my-6 m-auto lg:w-5/12 md:w-8/12 w-10/12">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
