const createColorInputMarkup = (color, index, currentColor) => {
	return `
		<input
			type="radio"
			id="color-${color}-${index + 1}"
			class="card__color-input card__color-input--${color} visually-hidden"
			name="color"
			value="${color}"
			${color === currentColor ? 'checked' : ''}
		/>
		<label
			for="color-${color}-${index + 1}"
			class="card__color card__color--${color}">
			${color}
		</label>
	`;
};

const createColorInputTemplate = (colors, currentColor) =>
	colors
		.map((color, i) => createColorInputMarkup(color, i, currentColor))
		.join('\n');

export { createColorInputTemplate };
