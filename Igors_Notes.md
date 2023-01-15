Hi Nicholas and Ronnie,

It's been a while since I saw the script the last time, so I have had to review it again. What I can see is that there is a bare Git repository on the server (it's the 'fb_posts.git' folder in Ronnie's attachment), and then a local Git copy of the repository (folder 'fb_posts_repo' in the attachment). I have a small code change in my local repository that hasn't been pushed to the server.

There are two Python scripts: scraper.py and scheduler.py. I have never really used the scheduler, and I wouldn't count on it working properly at this point. Then scraper.py is the main script. It uses Selenium, which is a programmable Web browser, to load a FB page and expand all the comments. I had to reverse engineer the FB page structure to program the expansion. It will be sensitive to any change on the FB end, so it can get easily broken and may need to get updated when it happens.

Selenium then takes a screenshot of the expanded page and saves it as a picture. The contents of the downloaded page are then post-processed by Python library Beautiful Soup. I believe it strips and removes unnecessary noise. The resulting HTML page can be searched, but it doesn't look like the original FB page, whereas the screenshot looks like it, but cannot be searched. Finally, the contents of the HTML (and the auxiliary files, such as images) are then checked in into a local Git repository. In theory, each consequent run of the script should commit only the changes since the last time, i.e. only the new comments on the FB page.

The source code also contains a Dockerfile so that the script can be run in Docker. That would eliminate the need of installing Python and libraries on the machine that runs the script.

Nicholas, do I understand correctly that you're looking for ways to expose the script as a service somewhere online, i.e. is that what you mean by API? I was just running it locally on my machine when Ronnie needed it. I think I was planning to deploy it on one of the unused computers on the farm back in the day. It's up to Ronnie if he wants it to be available online; he hasn't used it very often so I don't know if it's necessary. Maybe you already discussed it.

Then the other issue, as you pointed out, is where the results will be stored. Unless the service returns a bundle with all files. Keep in mind that people can delete their comments, so I think the original idea was to run the scheduler (which may not work well right now) that would run the script on schedule to catch all those cases of deleted comments. I just remembered that we used a cron job for it before I started working on the scheduler script.

If you exposed the script as a service, then there would still have to be a client that calls it regularly and saves the results. The screenshots are going to take quite some space eventually, if not cleaned up after selecting the desired ones. The HTML stuff size is currently mitigated by the Git repository; only the changes are saved.

Let me know if you have any questions.

Igor



Nicholas Preston <michael.n.preston@gmail.com>
Oct 12, 2022, 2:46 AM
to Igor, Ronnie

"Nicholas, do I understand correctly that you're looking for ways to expose the script as a service somewhere online, i.e. is that what you mean by API?"

Yep!  I told Victor I could probably make a Chrome Extension that could save the Facebook conversations.  I have some minor experience with API hosting, but I've used plenty of them, such as Airtable, Wordpress, and Google Firestore.  For my job, I write APIs and full web apps.  I know databases pretty well, too.  Chrome Extensions are somewhat new for me, but the web basics like HTML, CSS, and JS I know well.

"If you exposed the script as a service, then there would still have to be a client that calls it regularly and saves the results. "

That's true.  My idea was to have the Chrome Extension pass the conversation url to an API and have whatever machine running the API do the Selenium/Beautiful soup work.  If we're still wanting doc storage on a local machine on the farm, Braden discovered something called Pocketbase, which is a full API and doc storage, all in a single file.  It can be hosted or just used on a local machine for personal use.  We should be able to easily store needful items with just this or at least get a strong prototype that could be deployed if needed.  I'd like to avoid using Google's offerings, but will if necessary.

The first big problem as you've stated will be people deleting or editing their comments plus making sure Facebook doesn't change anything on the copy (like CSS selectors)... I don't have a solution yet in mind for that, but the first thing that comes to mind is, like you said, running that Selenium again.  At a minimum, we'd need 2 copies of the conversation - the start of it and the end of it.  My idea was the Extension could allow a 'Record' button and a 'Stop Record' button for a given FB conversation.  The only thing users would need to know is where a conversation was and whether they're recording or not.

Are we wanting or need full documents?  I was thinking minimum bare-bones, just the comments, and maybe included pictures and not screenshots.  Comments would be relatively easier to track and get something rolling.

Nick


Nicholas Preston <michael.n.preston@gmail.com>
Oct 12, 2022, 2:52 AM
to Igor, Ronnie

One more thing to add to my previous response,

"The HTML stuff size is currently mitigated by the Git repository; only the changes are saved."

I don't think we'll even need to do that much.  Html is only useful for rendering things.  If we don't need the reading format to be in HTML, then all we need are the values between the tags.  This should cut down on the heft.  I would not recommend full HTML or Word or PDFs captured unless absolutely necessary.  The goal seems to be tracking comments, which are just text and timestamps.  It's easy to relate those by a Facebook comment url and detect changes after initial recording, if the comments are stored in a database. Something like (off the top of my head) the url of the conversation, the names and profile urls of all commenters, the comments themselves, date commented, date captured, etc.

How does that sound?

Nicholas Preston



Igor Palkoci <igor@igorp.me>
Oct 12, 2022, 11:01 PM
to me, Ronnie

Hi Nicholas,

The script was sort of an evolution. The original idea was to pull HTML with all the styles and files, and pretty much replicate an FB page with all the visuals. However, that turned out to be not plausible as lots of the styles and visuals are rendered dynamically by JS. So taking the screenshots was a Plan B, and the HTML downloading was left there for the searchable version of the page.

Pulling just the comments and storing them to a database would be next level; definitely an improvement.

As to ditching the screenshots, that's something Ronnie would have to comment on, whether he agrees. The visual page has an advantage of being used as a proof of somebody saying something, in the visual context, just like everybody else could see it on the original page. If only the data is available (timestamp, text, URL, etc.), then it would be hard to use it as a proof. Moreover, some people have better visual memory and remember that there was a comment in a visual context.

I am not sure we're on the same page in regards to FB changing their rendering (e.g. change of html tags, CSS labels, etc.). What I was trying to say originally is that the script might need to be constantly maintained and adjusted to ever-changing FB rendering, provided that it does change.

I see that you meant that the storing and multiple capturing of a page would be happening on the server, i.e. "inside the API". If there is a database included within the API, then it could work quite well. The screenshots could be stored (if still wanted) either in a database, or just as files with proper folder structure and naming for easy identification.

For the deployment there are multiple options: a machine on the farm (the least convenient), Ronnie's server, a VM in a cloud, or a hosted service.

I glanced at PocketBase. Looks like it is written in JS. How would it interact with / run a Python script? Or would the script need to be rewritten in JS?

Igor



Nicholas Preston <michael.n.preston@gmail.com>
Oct 12, 2022, 11:36 PM
to Igor, Ronnie

"I am not sure we're on the same page in regards to FB changing their rendering (e.g. change of html tags, CSS labels, etc.). What I was trying to say originally is that the script might need to be constantly maintained and adjusted to ever-changing FB rendering, provided that it does change."

I think we are.  It's ever-changing underneath (so I heard) and might be hard to track individual comments, should we extract them individually.  Keeping that in sync along with screenshots will be difficult.  What I think you're saying is the script will need to be updated should they change the selectors in the future, which I can understand.  No worries, it's easy to figure these things out once we delve into the code and test it.

"How would it interact with / run a Python script? Or would the script need to be rewritten in JS?"

No rewrite is necessary if we don't want one. The advantage of API's is that you can simply call urls to get work done.  We can write one in JS/Python/anything.

The API layer would just sit in front of whatever code logic we need it to sit in front of.  It just acts as a service. Wordpress, for example calls a GET request when we load up the newest Posts.

A public API layer itself would call the parts of your code that can send back data, or it can say, change or schedule a cron or store a document, delete things, send email, photoshop things, whatever.  If you play around with Pocketbase, it will tell you how to connect using JS, but the same principle is available in Python (Flask), if you wished to make an API from that (which is probably what we'd be doing).

For the Chrome Extension, we probably should stick to JS, because it has good support in the browser.

"For the deployment there are multiple options: a machine on the farm (the least convenient), Ronnie's server, a VM in a cloud, or a hosted service."

Right on.  BTW, I'm not suggesting the chrons be replaced by an API.  However, we can get the best of both worlds (screenshots and comment breakdown and storage in a DB) with Pocketbase or Airtable.  Selenium will be interesting - for that, I'd still recommend some sort of serverless function to handle long-running tasks like that.  There are deployment services like Vercel or Firebase that could host that Selenium code along with any API code and it could all be in one place.  My concern would be how long it takes to scroll through all the comments.  API's aren't built for chron jobs in the cloud.  I'd have to do some more learning so as to keep that off the machine.

The nice thing is, whatever we write can pretty much be ported over to something else in the future if needed.  If I had to start right now, I'd build a Flack (Python) API around your code, and have that API send the docs either to my personal Airtable API or a temporary Pocketbase until we can figure out a better solution.  Then the Chrome Extension could read from the Airtable API either the extracted comments and/or the uploaded screenshot documents, etc.

Anything that works is fine by me.  I'm eager to hear what Ronnie thinks about this.  I hope I'm not going on too much and everything is clear.

Thanks,

Nicholas Preston

Attachments area
Preview YouTube video RESTful APIs in 100 Seconds // Build an API from Scratch with Node.js Express


Nicholas Preston <michael.n.preston@gmail.com>
Oct 12, 2022, 11:42 PM
to Igor, Ronnie

Flask*, not Flack.

Nicholas Preston



Igor Palkoci <igor@igorp.me>
Oct 16, 2022, 12:44 AM
to me, Ronnie

Hi Nicholas,

Save some details, I think I have a general idea of what you're saying here. I am not sure if Ronnie wants to comment about what his expectations are.

I have one comment regarding what you said about long running functions, e.g. Selenium unfolding comments. My experience is that for long running functions API calls are typically asynchronous. I.e. the API call returns only an acknowledgement, and optionally a link (API URI) to the function status in case a client wants to learn about the progress.

Igor


Nicholas Preston <michael.n.preston@gmail.com>
Oct 16, 2022, 2:43 PM
to Igor, Ronnie

Yeah, your comment about the long-running tasks is something we'll have to figure out somehow.  I like the URI idea.  We could put parameters for progress in that return URI.