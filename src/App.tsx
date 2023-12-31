import './App.scss';
import { Suspense } from 'react';
import NProgress from './components/NProgress';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRoutes } from 'react-router-dom';
import routers from './router/routerMap';
function App() {
  return (
    <div className="">
      <Header></Header>
      <Suspense fallback={<NProgress />}>{useRoutes(routers)}</Suspense>
      <Footer></Footer>
    </div>
  );
}

export default App;
