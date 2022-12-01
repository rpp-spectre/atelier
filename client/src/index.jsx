import React from 'react';
import ReactDOM from 'react-dom/client';
//import ReviewSection from './review-components/ReviewIndex.jsx';
import QSection from './components-questions/qindex.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return <div>
      {/* <ReviewSection /> */}
      <QSection />
    </div>
//others will also put their sections in here
  }
};


const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <App />;
root.render(element);