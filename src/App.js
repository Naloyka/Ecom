import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import FilterApiFetchFunction from './microServices/FilterApiFetchFunction'
import { HeaderMain } from './components/HeaderMain/HeaderMain';
import { Sidebar } from './components/Sidebar/Sidebar';
import './index.css'
function App() {

  const [apiIdValue, setApiIdValue] = useState(3989)
  const [shopFilterValue, setShopFilterValue] = useState('')
  const [categoryFilterValue, setCategoryFilterValue] = useState('')
  const [brandFilterValue, setBrandFilterValue] = useState('')
  const [fetchedData, setFetchedData] = useState([])

  return (
    <>
      <main className='main'>
        <Sidebar />
        <div className='content'>
          <HeaderMain />
        {/*  <Routes>
          <Route path='/' element={
          <Main
            shopFilterValue={shopFilterValue}
            setShopFilterValue={e => setShopFilterValue(e)}
            categoryFilterValue={categoryFilterValue}
            setCategoryFilterValue={e => setCategoryFilterValue(e)}
            brandFilterValue={brandFilterValue}
            setBrandFilterValue={e => setBrandFilterValue(e)}
          />
        }
        />
       <Route path='404' element={'404'} /> 
      </Routes>*/}
        </div>
      </main>

      {/* <Header 
      FilterApiFetchFunction={e => FilterApiFetchFunction(e)}
      apiIdValue={apiIdValue}
      shopFilterValue={shopFilterValue}
      categoryFilterValue={categoryFilterValue}
      brandFilterValue={brandFilterValue}
      setFetchedData={e => setFetchedData(e)}
    /> */}


     

      <Footer />
    </>
  );
}

export default App;
