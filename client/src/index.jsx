import React from 'react';
import ReactDOM from 'react-dom/client';
import ReviewSection from './review-components/ReviewIndex.jsx';
import Qsection from './components-questions/qindex.jsx';
import ProductSection from './product-components/Overview.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return <div>
      <ProductSection />
      <ReviewSection />
      <Qsection />
    </div>

//others will also put their sections in here
  }
};


const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <App />;
root.render(element);