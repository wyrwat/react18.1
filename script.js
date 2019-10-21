var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Movie About Young Wizzard',
        img: 'images/harry.jpg'
    },
    {
        id: 2,
        title: 'Lion King',
        desc: 'Movie about king of jungle',
        img: 'images/krol.jpg'
    }
];

var App = React.createClass({
    render: function() {
        return (
            React.createElement('div', {className: 'app'},
            React.createElement(MovieList, {movies: movies, header: 'Movies List'}),
            )
        )
    },
});

var MovieList = React.createClass({
    propTypes: {
        header: React.PropTypes.string.isRequired,
        movies: React.PropTypes.array.isRequired,
    },
    
    render: function() {
        var moviesElement = this.props.movies.map(function(movie){
            return React.createElement('li', {key: movie.id},
                React.createElement('h2', {}, movie.title),
                React.createElement('p', {}, movie.desc),
                React.createElement('img', {src: movie.img, alt: movie.title})
                );
        });

        return (
        React.createElement('div', {}, 
            React.createElement('h1',{className: 'header'}, this.props.header),
            React.createElement('ul',{}, moviesElement)
            )
        )
   } 
});

var app = React.createElement(App, {key: movies.id});
ReactDOM.render(app, document.getElementById('app'));