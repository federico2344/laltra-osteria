const CLIENT_ID = process.env.OAUTH_GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.OAUTH_GITHUB_CLIENT_SECRET;

exports.handler = async (event) => {
  const code = event.queryStringParameters && event.queryStringParameters.code;
  if (!code) {
    return { statusCode: 400, body: 'Missing code' };
  }

  try {
    const res = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
      }),
    });
    const data = await res.json();

    if (data.error) {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'text/html' },
        body: renderPage('error', { provider: 'github', error: data.error_description || data.error }),
      };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html' },
      body: renderPage('success', { provider: 'github', token: data.access_token }),
    };
  } catch (err) {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html' },
      body: renderPage('error', { provider: 'github', error: err.message }),
    };
  }
};

function renderPage(status, content) {
  const message = `authorization:${content.provider}:${status}:${JSON.stringify(content)}`;
  return `<!doctype html><html><body><script>
(function() {
  function receiveMessage(e) {
    window.opener.postMessage(${JSON.stringify(message)}, e.origin);
    window.removeEventListener("message", receiveMessage, false);
  }
  window.addEventListener("message", receiveMessage, false);
  window.opener.postMessage("authorizing:${content.provider}", "*");
})();
</script><p>Autenticazione in corso...</p></body></html>`;
}
