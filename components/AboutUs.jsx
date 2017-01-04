import React from 'react';

var Aboutus = React.createClass({
	render : function(){
		var message = this.props.data.counter || ""
		return (
				<div>
				{message.data?message.data.info:""}
				</div>
			)
	}
})

export default Aboutus;