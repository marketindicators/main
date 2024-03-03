Vue.component('custom-component', {
	template: `
        <div>
            <h2>{{ title }}</h2>
            <p>{{ content }}</p>
        </div>
    `,
	data() {
		return {
			title: 'Vue.sdadsadadsasd',
			content: 'This is a Vue.js component used in a static page.',
		};
	},
});
