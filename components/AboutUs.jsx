import React from 'react';

var Aboutus = React.createClass({
	render : function(){
		var message = this.props.data.basic || ""
		return (
				<div>
				{message.data?message.data.info:""}
				</div>
			)
	}
})

export default Aboutus;