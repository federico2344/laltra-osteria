const CLIENT_ID = process.env.OAUTH_GITHUB_CLIENT_ID;

exports.handler = async (event) => {
  const host = event.headers.host;
  const redirectUri = `https://${host}/.netlify/functions/callback`;
  const url = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=repo,user&redirect_uri=${encodeURIComponent(redirectUri)}`;
  return {
    statusCode: 302,
    headers: { Location: url },
  };
};
