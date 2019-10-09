var Movie = React.createClass({
    propTypes: {
        movies: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            React.createElement('div', {},
            React.createElement('h1', {}, 'Movies List'),
            React.createElement('ul',{}, moviesElement)
            )
        )
    },
});

var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Movie About Young  Wizzard',
        img: 'images/harry.jpg'
    },
    {
        id: 2,
        title: 'Lion King',
        desc: 'Movie about king of jungle',
        img: 'images/krol.jpg'
    }
];

var moviesElement = movies.map(function(movie){
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.img, alt: movie.title})
        );
});

/*var element = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'Movies List'),
    	React.createElement('ul',{}, moviesElement)
);*/
var element = React.createElement(Movie, {key: movies.id});
ReactDOM.render(element, document.getElementById('app'));