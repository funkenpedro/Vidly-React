import React, { Component } from "react";
import { getMovies } from "../fakeMovieService";
class Movies extends Component {
  state = { movies: getMovies() };
  handleDelete = movie => {
    console.log(movie);
    const moos = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: moos });
  };
  render() {
    if (this.state.movies.length === 0) return <p>theres no movies</p>;
    return (
      <React.Fragment>
        <p>Showing {this.state.movies.length} movies</p>

        <table className="table">
          <thead>
            <tr>
              <th />
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(movie)}
                  >
                    {" "}
                    Delete{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
