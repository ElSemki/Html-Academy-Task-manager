const createEditTaskHashtagMarkup = (hashtag) => {
	return `
		<span class="card__hashtag-inner">
			<input
			type="hidden"
			name="hashtag"
			value="${hashtag}"
			class="card__hashtag-hidden-input"
			/>
			<p class="card__hashtag-name">
			#${hashtag}
			</p>
			<button type="button" class="card__hashtag-delete">
			delete
			</button>
		</span>
	`;
};

const createEditTaskHashtagTemplate = (hashtags) =>
	hashtags.map((hashtag) => createEditTaskHashtagMarkup(hashtag)).join('\n');

export { createEditTaskHashtagTemplate };
