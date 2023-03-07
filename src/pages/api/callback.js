/* eslint-disable import/no-anonymous-default-export */
import { AuthorizationCode } from "simple-oauth2";
import { config } from "../../lib/config";
import dedent from "dedent";

/* eslint-disable require-jsdoc */
export default async (req, res) => {
  const { host } = req.headers;
  const code = req.query.code;
  const provider = "github";
  const client = new AuthorizationCode(config(provider));
  const tokenParams = {
    code,
    redirect_uri: `https://${host}/api/callback`,
  };

  try {
    const accessToken = await client.getToken(tokenParams);
    const token = accessToken.token["access_token"];

    const responseBody = renderResponse("success", {
      token,
      provider,
    });

    res.statusCode = 200;
    res.end(responseBody);
  } catch (e) {
    res.statusCode = 200;
    res.end(renderResponse("error", e));
  }
};

export function renderResponse(status, content) {
  return dedent`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Authorizing ...</title>
    </head>
    <body>
      <p id="message"></p>
      <script>
        console.log(${status}, ${content}
        // Output a message to the user
        function sendMessage(message) {
          document.getElementById("message").innerText = message;
          document.title = message
        }

        // Handle a window message by sending the auth to the "opener"
        function receiveMessage(message) {
          console.debug("receiveMessage", message);
          window.opener.postMessage(
            'authorization:github:${status}:${JSON.stringify(content)}',
            message.origin
          );
          window.removeEventListener("message", receiveMessage, false);
          sendMessage("Authorized, closing ...");
        }

        sendMessage("Authorizing ...");
        window.addEventListener("message", receiveMessage, false);

        console.debug("postMessage", "authorizing:github", "*")
        window.opener.postMessage("authorizing:github", "*");
      </script>
    </body>
  </html>
  `;
}
