import * as React from "react";
import Display from "./Display";

class FilterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      male: false,
      female: false,
      boss: "",
      users: []
    };
    this.onChange = this.onChange.bind(this);
    this.filterByAge = this.filterByAge.bind(this);
    this.filterByName = this.filterByName.bind(this);
  }
  onChange(e) {
    let target = e.target.id;
    if (target === "every") {
      return this.setState({
        male: false,
        female: false,
        users: this.props.users
      });
    }
    let arr = this.props.users;
    let newArr =
      e.target.id === "male"
        ? arr.filter(function(person) {
            return person.gender === "male";
          })
        : arr.filter(function(person) {
            return person.gender === "female";
          });
    console.log(newArr);
    this.setState({
      male: false,
      female: false,
      [target]: true,
      users: newArr
    });
  }
  filterByAge(e) {
    let from = 1523;
    let to = 1544;
    if (e.target.id === "from") {
      from = e.target.value;
    } else if (e.target.id === "to") {
      to = e.target.value;
    }
    // console.log(`${from} ${to}`);
    let arr = this.props.users;
    let newArr = arr.filter(function(person) {
      return person.id >= from && person.id <= to;
    });
    this.setState(state => ({
      users: newArr
    }));
  }
  filterByName(e) {
    const value = e.target.value;
    let arr = this.props.users;
    //console.log(value);
    let newUsers = [];
    let pattern = new RegExp("\\b" + value, "gi");
    this.props.users.map((item, i) => {
      item.name.match(pattern) ? newUsers.push(arr[i]) : null;
    });
    this.setState(state => ({
      users: newUsers
    }));
    console.log(newUsers);
  }
  bossFilter() {}
  componentDidMount() {
    this.props
      .fetchUsers("http://www.mocky.io/v2/5cab54d63000007e19904ac6")
      .then(() => this.setState({ users: this.props.users }));
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
              onChange={this.filterByName}
            />
          </div>
          <div className="form-row small d-flex justify-content-between text-left text-lg-center">
            <div className="form-group text-left px-1 col-4">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input d-none"
                  type="checkbox"
                  name="male"
                  checked={this.state.male}
                  onChange={this.onChange}
                  id="male"
                />
                <label
                  className={
                    !this.state.male
                      ? "form-check-label text-muted"
                      : "form-check-label"
                  }
                  htmlFor="male"
                >
                  male
                </label>
                <span className="pl-2">/</span>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input d-none"
                  type="checkbox"
                  id="female"
                  name="female"
                  checked={this.state.female}
                  onChange={this.onChange}
                />
                <label
                  className={
                    !this.state.female
                      ? "form-check-label text-muted"
                      : "form-check-label"
                  }
                  htmlFor="female"
                >
                  female
                </label>
                <span className="pl-2">/</span>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input d-none"
                  type="checkbox"
                  id="every"
                  name="every"
                  checked={this.state.male || this.state.female ? false : true}
                  onChange={this.onChange}
                />
                <label
                  className={
                    this.state.male || this.state.female
                      ? "form-check-label text-muted"
                      : "form-check-label"
                  }
                  htmlFor="every"
                >
                  not specifed
                </label>
              </div>
            </div>
            <div className="form-group col-sm-5">
              <label htmlFor="from">age from</label>
              <input
                type="number"
                min="1524"
                max="1544"
                id="from"
                className="mx-1 px-1"
                style={{ width: "50px" }}
                onChange={this.filterByAge}
              />
              <label htmlFor="to">to</label>
              <input
                type="number"
                min="1524"
                max="1545"
                id="to"
                className="ml-1 px-1"
                style={{ width: "50px" }}
                onChange={this.filterByAge}
              />
            </div>
            <div className="form-group d-flex align-self-baseline col-sm-3">
              <label className="ml-sm-auto pt-2" htmlFor="from">
                works for
              </label>
              <input type="text" id="from" className="mx-1 col-3 px-1" />
            </div>
          </div>
        </form>
        <Display users={this.state.users} />
      </div>
    );
  }
}

export default FilterComponent;
