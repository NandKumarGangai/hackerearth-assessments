import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Route } from "react-router-dom";
import Header from './components/Header';
import Loader from './components/Loader';
import config from './config/config.json';

const URL = `${config['newsApi'].base}${config['newsApi'].url}`

const TopNewsComponent = lazy(() => import('./components/TopNews'));
const PublishersComponent = lazy(() => import('./components/Publishers'));
const PublisherNewsComponent = lazy(() => import('./components/PublisherNews'));

const renderLoader = () => <Loader />;

const App = () => {

  const [newsData, setNewsData] = useState({
    publishers: [],
    rawNews: [],
    processedNews: {}
  })

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL)
      const resJson = await res.json()
      return resJson
    }

    fetchData().then((res = []) => {

      const publishers = res.reduce((acc, current) => {
        const sanitized = current?.PUBLISHER.replace(/\\/g, '')
        if (acc.indexOf(sanitized) === -1) {
          acc.push(sanitized)
        }
        return acc
      }, []);

      const processedNews = {};

      publishers.forEach(publisher => {
        const data = res.filter(item => item?.PUBLISHER === publisher).sort((a, b) => b.TIMESTAMP - a.TIMESTAMP)

        processedNews[publisher] = data
      })
      setNewsData({
        publishers,
        totalPublishers: publishers.length,
        rawNews: res.sort((a, b) => b.TIMESTAMP - a.TIMESTAMP),
        processedNews
      })
    })
  }, [])

  return (
    <Suspense fallback={renderLoader()}>
      <Header />

      <Route exact path={['/', '/top-news']}>
        <TopNewsComponent topNews={newsData.rawNews} />
      </Route>
      <Route exact path={['/publishers']}>
        <PublishersComponent publishers={newsData.publishers}/>
      </Route>
      <Route path='/news/:publisher'>
        <PublisherNewsComponent processedNews={newsData.processedNews} />
      </Route>
    </Suspense>
  )
}

export default App
