import React from "react";

class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Detail">
        <div className='SloganAndDescription'>
          <div className='Slogan'>
            {this.props.slogan}
          </div>
          <div className='Description'>
            {this.props.description}
          </div>
        </div>
        <div className='Features'>
          {this.props.features.map((item) => {
            return (
              <div key={item.feature}>&#x2713; {item.feature}: {item.value}</div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Detail;