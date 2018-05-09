import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './App.css';

class ColorPalette extends Component {
	constructor() {
		super();

		this.state = {
			color: '333333',
			textColor: 'fff'
		}

		this.updateColor = this.updateColor.bind(this)
	}

	updateColor(event) {
		var color = event.target.value
		var white

		// Para impedir que HEX erradas sejam renderizadas
		if (color.lenght < 3 || (color.lenght > 3 && color.lenght < 6)) {
			return
		}

		// Trocar título, para não sumir com o fundo
		// ainda a ser implementado
		// if (color.lenght === 6) {
		// 	white = color.substr(4,5)
		// 	textColor = color.substr(0,4)
		// } else {
		// 	white = color.substr(2)
		// 	textColor = color.substr(0,2)
		// }
		
		this.setState({
			color: color,
		})
	}

	render() {
		return(
			<ReactCSSTransitionGroup
				transitionName="transitions">
				<div className="ColorPalette" style={{background: '#' + this.state.color, transition: "background .5s ease"}}>
					<span className="title" style={{color: '#'+this.state.textColor}}>Collor Palette</span>
					<div className="center">
						<span>#</span>
						<input type="text" className="inputColor" value={this.state.color} onChange={this.updateColor}></input>
					</div>
				</div>
			</ReactCSSTransitionGroup>
		)
	}
}

export default ColorPalette;