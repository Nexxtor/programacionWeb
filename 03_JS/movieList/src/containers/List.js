import React, { Component } from "react";
import Card from "../components/Card/Card";

class List extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const movies = await fetch("assets/data.json");
    const moviesJSON = await movies.json();

    if (moviesJSON) {
      this.setState({
        data: moviesJSON,
        loading: false,
      });
    }
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <div>Loading ... </div>;
    }
    return (
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 card-deck">
        {data.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

export default List;
