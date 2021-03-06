import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import ColorPickerView from './ColorPickerView.jsx';
import createAction from '../../actions/ActionFactory.js';

export class ColorPickerContainer extends Component {

	static propTypes = {
		defaultColors: PropTypes.arrayOf(PropTypes.string).isRequired,
		onChangeColor: PropTypes.func.isRequired
	}
	
	constructor(props) {
		super(props);
	}

	changeColor(color) {
		this.props.onChangeColor(color);
	}

	render() {
		const {defaultColors} = this.props;

		return (
			<ColorPickerView 
				defaultColors={defaultColors} 
				rowSize={5}
				onChangeColor={this.changeColor.bind(this)}
			/>
		);
	}

}

const mapStateToProps = (state) => ({
	defaultColors: state.defaultOptions.defaultColors
});

const mapDispatchToProps = (dispatch) => ({
	onChangeColor: (color) => {
		dispatch(createAction('CHANGE_STROKE_PROPERTY', {property: 'color', value: color}));
	}
});

const ColorPicker = connect(
	mapStateToProps,
	mapDispatchToProps
)(ColorPickerContainer);

export default ColorPicker;
