import React, { Component } from 'react';
import axios from 'axios'

export default class Movie extends Component {
    state = {
        movies: [],
        searchWord: '',
        pages: []
    }

    onChange(e) {
        this.setState({ searchWord: e.target.value })
    }

    searchMovie() {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&query=${this.state.searchWord}`)
            .then(resp => {
                const pages = [];
                let num = 1;
                while (num <= resp.data.total_pages) {
                    pages.push(num)
                    num++;
                }
                this.setState({ movies: resp.data, pages })
            })
            .catch(err => console.log(err))
    }

    getPage(page) {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&query=${this.state.searchWord}&page=${page}`)
            .then(resp => this.setState({ movies: resp.data }))
    }

    render() {
        console.log(this.state.movies)
        console.log('pages array', this.state.pages)
        console.log(process.env.REACT_APP_MOVIE_KEY)
        return (
            <div>
                <h1>Movie Screen</h1>
                <input className='input-bar' value={this.state.searchWord} onChange={(e) => this.onChange(e)} placeholder="Enter Movie" />
                <button onClick={() => this.searchMovie()}>Enter</button>
                {this.state.movies.results ?
                    <div className='movie-list'> {
                        this.state.movies.results.map((movie, index) => {
                            return (
                                <div key={index} className="movie-container">
                                    <h2 className='movie-title'>{movie.title} ({movie.release_date.substr(0, 4)})</h2>
                                    <img className='movie-img' alt={movie.title} src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`} />
                                    <p className='movie-desc'>{movie.overview}</p>
                                </div>
                            )
                        }
                        )
                    }
                    </div>

                    : <div>No Results</div>}
                {this.state.movies.total_pages > 1 ?

                    this.state.pages.map(page => {
                        return <button key={page} onClick={() => this.getPage(page)}>{page}</button>
                    })
                    : null}
            </div>)
    }
}