const createHashtagsMarkup = (hashtag) => {
	return `
		<span class="card__hashtag-inner">
			<span class="card__hashtag-name">#${hashtag}</span>
		</span>

	`;
};

const createHashtagTemplate = (hashtags) =>
	hashtags.map((hashtag) => createHashtagsMarkup(hashtag)).join('\n');

export { createHashtagTemplate };
