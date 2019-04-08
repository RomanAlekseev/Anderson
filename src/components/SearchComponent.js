import * as React from "react";

import Display from "./Display";

class FilterComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      male: false,
      female: false,
      boss: ""
    };
  }
  ageFilter() {}
  bossFilter() {}
  componentDidMount() {
    this.props.fetchUsers("http://www.mocky.io/v2/5cab54d63000007e19904ac6");
  }
  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <input
              className="mt-5 col-12"
              id="filterInput"
              name="filterInput"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="form-row small d-flex justify-content-between text-left text-lg-center">
            <div className="form-group text-left px-1 col-4">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input d-none"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  male
                </label>
                <span className="pl-2">/</span>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input d-none"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox2">
                  female
                </label>
                <span className="pl-2">/</span>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input d-none"
                  type="checkbox"
                  id="inlineCheckbox3"
                  value="option3"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox3">
                  not specifed
                </label>
              </div>
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="from">age from</label>
              <input
                type="number"
                min="18"
                max="99"
                id="from"
                className="mx-1 col-2 px-1"
              />
              <label htmlFor="to">to</label>
              <input
                type="number"
                min="18"
                max="99"
                id="to"
                className="ml-1 col-2 px-1"
              />
            </div>
            <div className="form-group d-flex align-self-baseline col-4">
              <label className="ml-sm-auto pt-2" htmlFor="from">
                works for
              </label>
              <input type="text" id="from" className="mx-1 col-3 px-1" />
            </div>
          </div>
        </form>
        <Display />
      </div>
    );
  }
}

export default FilterComponent;
