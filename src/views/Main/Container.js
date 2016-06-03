import React from 'react'
import Map, {GoogleApiWrapper} from 'google-maps-react';

export class Container extends React.Component {
	onReady(mapProps, map) {

	}
  render() {
  	const style = {
  		width: '100vw',
  		height: '100vh'
  	}

    return (
      <div>
      	Hello from the container
        <Map 
        onReady={this.onReady.bind(this)}
        google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyDe9DggTZ5TVlWB9S-eocVmKf30m-zx2tY'
})(Container);