# GithubDataAlexaSkill
Demo Alexa Skill to query the Github API on a specific repository. *Only for learning Alexa Skill* 

[Get started](https://developer.amazon.com/public/solutions/alexa)


**[The Intent Schema](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/defining-the-voice-interface#h2_intents)**
Is a JSON structure which declares the set of intents your service can accept and process.
```
{
  "intents": [
    {
      "intent": "GetSubscriberCount"
    },
    {
      "intent": "GetStartCount"
    },
    {
      "intent": "GetOpenIssuesCount"
    }
  ]
}
```


**[Slots](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/defining-the-voice-interface#h2_speech_input)**
You provide the mappings between the intents and the typical utterances that invoke those intents by adding sets of values for any custom slots supported by your skill and a list of sample utterances.
* N/A


**[Utterances](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/defining-the-voice-interface#h2_sample_utterances)**
Each possible sample utterance is assigned to one of the defined intents.

Get Subscriber Count
* GetSubscriberCount current subscriber count
* GetSubscriberCount subscriber count
* GetSubscriberCount number of subscribers
* GetSubscriberCount how many subscribers do I have

Get Start Count
* GetStartCount current start count
* GetStartCount start count
* GetStartCount number of start
* GetStartCount how many start do I have

Get Open Issues Count
* GetOpenIssuesCount current open issues
* GetOpenIssuesCount open issues count
* GetOpenIssuesCount number of open issues 
* GetOpenIssuesCount how many open issues do I have 


**Deploy to a **
[Alexa Web Services](https://aws.amazon.com/alexa/)
Alexa's Web Services offer a platform for creating services based on Alexa's.
