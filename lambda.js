var https = require('https');
exports.handler = (event, context) => {
  try {
    if (event.session.new) {
      // New Session
      console.log("NEW SESSION");
    }
    switch (event.request.type) {
      case "LaunchRequest":
        // Launch Request
        console.log(`LAUNCH REQUEST`);
        context.succeed(
          generateResponse(
            buildSpeechletResponse("Welcome to an Alexa Skill, this is running on a deployed lambda function", true),
            {}
          )
        );
        break;

      case "IntentRequest":
        // Intent Request
        console.log(`INTENT REQUEST`);
        var options = {
                host: 'api.github.com',
                path: '/repos/jeedom/plugin-openzwave',
                method: 'GET',
                headers: {'user-agent': 'node.js'}
            };
        var body = "";

        switch(event.request.intent.name) {
          case "GetSubscriberCount":
            https.get(options, (response) => {
              response.on('data', (chunk) => { body += chunk });
              response.on('end', () => {
                var data = JSON.parse(body);
                //console.log(body);
                var subscriberCount = data.subscribers_count;
                context.succeed(
                  generateResponse(
                    buildSpeechletResponse(`Current subscriber count is ${subscriberCount}`, true),
                    {}
                  )
                );
              });
            });
            break;

          case "GetStartCount":
            https.get(options, (response) => {
              response.on('data', (chunk) => { body += chunk });
              response.on('end', () => {
                var data = JSON.parse(body);
                var stargazersCount = data.stargazers_count;
                context.succeed(
                  generateResponse(
                    buildSpeechletResponse(`Current start count is ${stargazersCount}`, true),
                    {}
                  )
                );
              });
            });
            break;

          case "GetOpenIssuesCount":
            //console.log(event.request.intent.slots.SinceDate.value);
            https.get(options, (response) => {
              response.on('data', (chunk) => { body += chunk });
              response.on('end', () => {
                var data = JSON.parse(body);
                var openIssuesCount = data.open_issues_count;
                context.succeed(
                  generateResponse(
                    buildSpeechletResponse(`Current number of open issues is ${openIssuesCount}`, true),
                    {}
                  )
                );
              });
            });
            break;

          default:
            throw "Invalid intent";
        }
        break;

      case "SessionEndedRequest":
        // Session Ended Request
        console.log(`SESSION ENDED REQUEST`);
        break;

      default:
        context.fail(`INVALID REQUEST TYPE: ${event.request.type}`);

    }
  } catch(error) { context.fail(`Exception: ${error}`) }
};

// Helpers
buildSpeechletResponse = (outputText, shouldEndSession) => {
  return {
    outputSpeech: {
      type: "PlainText",
      text: outputText
    },
    shouldEndSession: shouldEndSession
  };
};

generateResponse = (speechletResponse, sessionAttributes) => {
  return {
    version: "1.0",
    sessionAttributes: sessionAttributes,
    response: speechletResponse
  };
};
