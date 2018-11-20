import React, { Component } from "react";
import PropTypes from "prop-types";
import { Field } from "../Field/Field";
import { Textarea } from "../Textarea/Textarea";

export class TextareaField extends Component {
	constructor(props) {
		super(props);

		this.state = {
			inputValue: "",
			fieldNote: this.props.fieldNote,
			clicked: true
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleOnBlur = this.handleOnBlur.bind(this);
	}

	/**
	 * Validates input field on blur
	 */
	handleOnBlur(e) {
		this.setState(state => ({
			inputInvalid: !state.inputInvalid
		}));
	}

	/**
	 * Validates email field on change
	 */
	handleInputChange(e) {
		const inputValue = e.target.value;

		this.setState({
			inputValue: e.target.value
		});

		console.log(e.target.value);
	}

	render() {
		let fieldClass = "";
		const { valid, fieldNote, inputValue } = this.state;
		// If input isn't valid, the field is required, and the inputValue is empty
		if (
			this.state.inputInvalid &&
			this.props.required &&
			this.state.inputValue == ""
		) {
			fieldClass += " has-error";
			this.state.fieldNote =
				"This is a required field. Please fill in the proper information";
			// Return to original
		} else {
			this.state.fieldNote = this.props.fieldNote;
		}

		return (
			<Field
				className={fieldClass}
				id={this.props.id}
				label={this.props.label}
				hasError={this.props.hasError}
				disabled={this.props.disabled}
				required={this.props.required}
				fieldNote={this.state.fieldNote}
			>
				<Textarea
					type={this.props.type}
					id={this.props.id}
					name={this.props.name}
					value={this.state.value}
					placeholder={this.props.placeholder}
					disabled={this.props.disabled}
					readOnly={this.props.readOnly}
					required={this.props.required}
					aria-describedby={this.props.ariaDescribedBy}
					blurAction={this.handleOnBlur}
					changeAction={this.handleInputChange}
				/>
			</Field>
		);
	}
}

TextareaField.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	label: PropTypes.string,
	fieldNote: PropTypes.string,
	required: PropTypes.bool,
	disabled: PropTypes.bool,
	readOnly: PropTypes.bool,
	ariaDescribedBy: PropTypes.string,
	hasError: PropTypes.bool,
	value: PropTypes.string
};

TextareaField.defaultProps = {
	id: "textarea-field-1",
	label: "Label",
	fieldNote: "This is a fieldnote."
};