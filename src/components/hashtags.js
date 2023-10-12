const createHashtagsMarkup = (hashtag) => {
	return `
		<span class="card__hashtag-inner">
			<span class="card__hashtag-name">#${hashtag}</span>
		</span>

	`;
};

const createHashtagsListTemplate = (hashtags) => {
	const hashtagsMarkup = hashtags
		.map((hashtag) => createHashtagsMarkup(hashtag))
		.join('\n');

	return `
		<div class="card__hashtag">
			<div class="card__hashtag-list">
				${hashtagsMarkup}
			</div>
		</div>
	`;
};

export { createHashtagsListTemplate };
