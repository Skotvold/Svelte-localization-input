var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'main',
        repo: 'https://github.com/Skotvold/Svelte-localization-input.git',
        user: {
            name: 'Skotvold',
            email: 'eskil.skotvold@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)