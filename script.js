var Movie = React.createClass({

    propTypes: {
        movie: React.PropTypes.object.isRequred,
    },

    render: function() {
        return (
            React.createElement('li', {key: movie.id},
                React.createElement('h2', {}, this.props.movie.title),
                React.createElement('p', {}, this.props.movie.desc),
                React.createElement('img', {src: this.movie.img})
            )
        )
    },
});


var movie = [
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

var element = React.createElement(Movie, {key: movie.id,})

ReactDOM.render(element, document.getElementById('app'));