import React, {Component} from 'react';

class Sort extends Component {
  renderSort = () => {
    let {sortType, sortOrder} = this.props;
    if(sortType !== '' && sortOrder !== '') {
      return (
        <span className="label label-success label-medium text-uppercase">
          {sortType} - {sortOrder}
        </span>
      )
    }
  }
  render() {
    return(
      <div className="dropdown">
        <button className="btn btn-default dropdown-toggle marginR5" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          Sort by <span className="caret" />
        </button>
        <ul className="dropdown-menu" id="dropdownMenu1">
          <li onClick={() => this.handleClick('name','asc')}>
            <span role="button" className="text-uppercase">Name ASC</span>
          </li>
          <li onClick={() => this.handleClick('name','desc')}>
            <span role="button" className="text-uppercase">Name DESC</span>
          </li>
          <li role="separator" className="divider"></li>
          <li onClick={() => this.handleClick('level','asc')}>
            <span role="button" className="text-uppercase">Level ASC</span>
          </li>
          <li onClick={() => this.handleClick('level','desc')}>
            <span role="button" className="text-uppercase">Level DESC</span>
          </li>
        </ul>
        {this.renderSort()}
      </div>
    )
  }
  handleClick = (sortType,sortOrder) => {
    this.props.handleSort(sortType,sortOrder);
  }
}

export default Sort;