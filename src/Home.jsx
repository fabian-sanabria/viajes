import Provider from "./contexto/Provider"
import Router from "./routes/Router"


const Home = () => {
  return (
    <>
    <Provider>
      <Router></Router>
      </Provider>
    </>
  )
}

export default Home
