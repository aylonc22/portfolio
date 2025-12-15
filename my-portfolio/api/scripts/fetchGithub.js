

const username = 'aylonc22';

export async function fetchGitHubData() {

    const profileRes = await fetch(`https://api.github.com/users/${username}`);
    const profile = await profileRes.json();

    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
    const repos = await reposRes.json();

    const repoSummaries = repos.map((r) => `- ${r.name}: ${r.description || 'No description'}`).join('\n');

    const githubContext = `
    GitHub profile: ${profile.html_url}
    Name: ${profile.name}
    Bio: ${profile.bio || ''}
    Repositories:
    ${repoSummaries}
    `;

    return githubContext;
}


