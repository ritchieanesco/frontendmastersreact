var div = React.DOM.div;
var h1 = React.DOM.h1;

//create class method is a new blueprint of a type of component
var myFirstComponent = React.createClass({
	render: function () {
		//parenthesis are required to initalise the dom change
		//first argument (null values) are element attributes eg. id, class, data, etc.
		return (
			div(null,
				h1(null, 'This is my first component!')
			)
		);
	}
});
//create element method creates one instance of that object
ReactDOM.render(React.createElement(myFirstComponent), document.getElementById('app'));