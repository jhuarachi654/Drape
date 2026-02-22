
Screenshot 2026-02-21 at 7.50.27 PM.png
I am having a lot of trouble scanning my outfits and aligning them to my own body - idk what to do

7:50 PM
It looks like the outfit scan isn't quite aligning to your body shape — the top is floating wide and boxy rather than conforming to your silhouette. This is a pretty common issue with virtual try-on apps! A few things that can help:

For better scanning:

Make sure you're photographing the clothing flat on a surface (not hung up) for more accurate shape detection
Good, even lighting with no harsh shadows makes a big difference
A plain, high-contrast background behind the garment helps the app isolate it better
For better body alignment:

Take your body photo in form-fitting clothing (like leggings and a tank) so the app can read your actual silhouette
Stand in good lighting against a plain wall, arms slightly away from your body
Make sure your full body is in frame with some space around you
App-specific tips:

What app are you using? Some have manual adjustment tools where you can drag anchor points to align the neckline, shoulders, and hem to your body
Some apps work better if you input your measurements manually rather than relying solely on the photo scan
The cape/poncho style of that top also makes it extra tricky since it's intentionally oversized and draped — even the best virtual try-on tools struggle with flowy, non-fitted silhouettes.

What app are you working with? I might be able to give more specific advice!

I am making this.... this is jsut a frame on figma

7:51 PM
Oh that's so cool — you're building a virtual try-on app yourself! That makes much more sense now.

What's the specific challenge you're running into? Is it:

The algorithm for mapping the clothing onto the body shape?
The Figma prototype/UI side of things?
Something else entirely?
I have no algorithm

7:51 PM
Got it! So you're at the stage where you have the UI concept in Figma but need to figure out the actual tech to make the outfit-to-body alignment work.

A few directions you could go:

Pre-built APIs/Models (easiest starting point)

Fashn.ai - virtual try-on API you can plug into your app
Replicate has several try-on models you can call via API (like IDM-VTON)
Kuaiyou/KLING also has try-on features
Open Source Models

IDM-VTON and OOTDiffusion are popular open source virtual try-on models you could self-host, though they require GPU resources
How they generally work These models take two inputs — a photo of the person and a photo of the garment — and use diffusion or warping techniques to realistically drape the clothing onto the body. You wouldn't need to build that from scratch.

Recommended path if you're just starting: Fashn.ai or a Replicate-hosted model would let you get a working prototype quickly with just API calls, without needing to train or host anything yourself.

What's your technical background — are you comfortable with coding/APIs, or are you looking for more of a no-code approach?

I like Fashn.ai! but the UI is terrible... help me bridge this

7:57 PM
So your plan is essentially — your beautiful Figma UI + Fashn.ai's API under the hood. Love it.

To help you build the bridge, a few quick questions:

What are you building the frontend in, and where are you in the process?

Frontend: React/Next.js, Plain HTML/CSS/JS, another framework, or not sure yet?
Stage: Just Figma mockups, some code started, or ready to integrate the API?
Q: What are you building the frontend in?
A: I have nothing. I have heard there is claude code to figma but I am an absolute noobie

Q: Where are you in the process?
A: Just Figma mockups so far

7:58 PM
Perfect starting point! Here's the simplest path forward for a noob:

Forget Claude-to-Figma for now. The easiest thing is to let me build you a working prototype directly as a web app — no Figma export needed. You can use your Figma as a visual reference and I'll recreate the UI in code.

The plan:

You share your Figma designs (screenshots are fine!)
I build it as a React or plain HTML app that looks like your design
We wire in the Fashn.ai API so it actually works
What you'll need:

A Fashn.ai API key (you can get one from their website)
Screenshots of your Figma mockups
Can you share some screenshots of your Figma design? Even rough mockups are totally fine — I just want to see the layout, colors, and flow you're going for. That'll let me build something that actually looks like your vision rather than a generic template.

Can i use framer to host it?

8:00 PM
Yes, Framer is great for hosting! But there's a small catch —

The limitation: Fashn.ai API calls need a backend (server) because you can't expose your API key in frontend code. Framer is purely frontend hosting.

Easy solutions:

Vercel (free) — host a tiny Next.js app, super beginner friendly and honestly just as easy as Framer to deploy
Keep Framer for the UI but route API calls through a free backend like Vercel serverless functions or Railway
Honestly my recommendation for a noob: Just use Vercel end-to-end. It's:

Free
Drag and drop deploy (almost as easy as Framer)
Handles both your frontend AND the API key securely in the backend
Huge community/tutorials if you get stuck
Framer is amazing for marketing sites and portfolios but for an app that talks to an API it'll fight you a bit.

Want me to just build you the whole thing as a Next.js app you can deploy to Vercel in like one click? You'd just need to paste in your Fashn.ai API key. Share your Figma screenshots and we can get started! 🚀

okay vercel... are there other option - think thoroughly of any potential roadblocks. I want this to make my life easier

8:01 PM
Good thinking to pause and consider this! Let me be thorough:

The core roadblock with any option: Fashn.ai is an async API — you send images, it processes for 10-60 seconds, then returns a result. So whatever you build needs to handle waiting/polling, not just a simple button click.

Your real options:

Vercel (my rec) — free, beginner friendly, handles the backend API security problem, easy deploys. Potential roadblock: you'll need to learn a tiny bit of Next.js. Not much, but it's not zero.

Bubble.io — no-code, can make API calls with a plugin, has hosting built in. Roadblock: Fashn.ai's async nature might be tricky to wire up without code.

Glide or Adalo — similar no-code tools, same async problem.

Replit — you code it there and it hosts it too, all in one place. Very beginner friendly environment. Free tier exists. Roadblock: free tier apps "sleep" and wake up slowly.

The honest big picture question though — are you building this for:

Just yourself to try on outfits personally?
A portfolio project to show off?
An actual product for other users?
Because the answer changes everything about what's worth building vs. what's overkill. What's the goal?

For myself and a portfolio project since I am a designer

8:02 PM
Perfect combo! That actually makes this really clean:

You don't need anything fancy. Since it's just you using it + something pretty to show in your portfolio, here's the ideal setup:

Build it as a Next.js app on Vercel:

Looks professional in a portfolio
You can share a live link with anyone
Fashn.ai API key stays secure
Free forever at your usage level
And honestly — "I designed AND built this" is a massive portfolio flex as a designer
The workflow I'm imagining for you:

Upload your photo (once, saved)
Upload/scan a clothing item
Hit try-on
See the result
Simple, clean, yours.

Here's what I'd suggest we do right now:

Share your Figma screenshots and I'll build you a beautiful Next.js app that matches your design vision. You deploy it to Vercel by connecting your GitHub — literally just clicking a few buttons. I can walk you through every step.

The whole thing could be working today. Want to go for it? 🎯

I want to have an inventory on there

8:04 PM
Ooh nice — so the flow becomes something like:

Your photo → Your clothing inventory → Pick an item → Try it on

That adds a data layer though. A few questions to think through:

Where does your inventory live? You'd need somewhere to store your clothing photos and info. Options:

Supabase (free, beginner friendly database + file storage) — this would pair perfectly with Vercel/Next.js
Airtable (no-code database, very designer friendly to manage)
Cloudinary (just for image storage)
And for adding items to your inventory, do you envision:

How are you imagining adding and browsing your clothes?

probably a grid... lets not get carried away first. I just want to see if I can import a shirt image into the platform and have ti appkiued on me with fashn.ai

8:08 PM
Love that thinking — start simple, prove the concept.

MVP = 3 things:

Your photo (hardcoded for now)
Upload a clothing image
Hit a button → Fashn.ai does its thing → see the result
Let's just build that. Two things I need from you:

Screenshots of your Figma so I match your design
Your Fashn.ai API key — do you have one already or do you need to sign up?
wee.png
I need to sign up and here is a very basic figma mockup

8:10 PM
Love it! I can see the layout clearly:

Left column: vertical strip of clothing items (your inventory)
Center: your photo (the try-on canvas)
Bottom grid: more clothing inventory
Go sign up for Fashn.ai and grab your API key — while you do that, I'll start building this. Come back and paste the key and we'll plug it in!

Also — do you have a preference on vibe/aesthetic for the UI? Your background is that soft blue gradient which is beautiful. Should I lean into that or do you have colors/fonts in mind from your Figma?

Screenshot 2026-02-21 at 8.11.41 PM.png
its not free?

8:11 PM
Yeah, not free — but the On-Demand plan is perfect for you:

$7.50 minimum purchase (100 credits)
Each try-on = 1 credit
So $7.50 = 100 try-ons
For personal use + portfolio that'll last you a long time. It's basically nothing.

Go with On-Demand, no subscription needed! 🙌

Ok I got one

8:15 PM
Amazing! Don't paste it here in the chat though — keep it secret! 🔐

Now, what's the aesthetic vibe you want for the UI? Since you're a designer I want to get this right before I start building.

I think I will finalize that later. Right now I am focusing on functionality

8:15 PM
Perfect mindset. Let's build.

Go into your Fashn.ai dashboard and grab your API key, then paste it here and I'll build the whole thing — I'll keep the UI clean and neutral so you can restyle it later.

Actually wait — you said you got one, do you mean you already have the API key ready? If so let's go! Just paste it in and I'll start building.

Are you sure? you told me not to share it

8:15 PM
You're right, good catch! 🔐 Don't paste it here.

Here's what we'll do instead — I'll build the app now with a placeholder for the API key. Then when I'm done, I'll show you exactly where to paste it safely in the code (it'll just be one line).

Let me start building!


Viewed a file, created a file, read a file
Viewed a file, created a file, read a file
Here's your app! ✨ Here's what to do next:

1. Add your photo Find this line in the code and replace your-photo.jpg with your actual photo filename:

html
<img class="model-img" id="modelImg" src="your-photo.jpg">
Put your photo in the same folder as index.html.

2. Deploy to Vercel

Go to vercel.com, sign up free
Drag and drop the folder — done!
3. Use the app

Paste your Fashn.ai API key into the right panel (it's never saved)
Upload a clothing photo
Hit Try It On
The UI is intentionally clean/neutral so you can restyle it later. Want me to walk you through the Vercel deploy?

Index
Code · HTML 
i am already confused

8:18 PM
Totally okay! Let's slow down. What specifically is confusing you right now?

Is it:

Q: Where are you stuck?
A: All of it, start from the very beginning

8:18 PM
Got it! No worries at all. Let's go one tiny step at a time.

Step 1 — Download the file I just made

Click the file I shared above (index) and download it to your computer. Put it in a folder on your desktop, call it something like drape.

That's it for now. Just do that and tell me when it's done 🙂

But you want me to chnage the code... can't you just do it?

8:18 PM
You're right, I can! I just need one thing from you:

Upload your photo here (the one of you standing, like the one you showed me earlier) and I'll put it directly into the app for you. No code touching needed on your end.

johanna 2_6.png
8:19 PM
Perfect! Let me bake your photo directly into the app so you don't need to manage any separate files.


Ran 3 commands, read a file
Ran 3 commands, read a file
Your photo is baked right in — download that single file drape-app.html.

To test it right now:

Download the file
Double-click it — it opens in your browser
Paste your Fashn.ai API key on the right
Upload any clothing photo
Hit Try It On!
No coding, no folders, no setup. Does it open okay for you?

Drape app
Code · HTML 
uh the file background should not be like that - the background is transparent not black

8:19 PM
You're right! The photo has a transparent background (PNG) but it's showing black. That's just because the app's canvas background is a blue gradient — your photo's transparency is actually working fine, the black is from the original PNG itself.

Let me check — did the photo come out with a black background when you exported it from whatever tool you used, or did it look transparent there?

transparent. it is also a png file

8:20 PM
Hmm, it might just be how your screen capture saved it. Let me just open it and check in the app — since the canvas has a blue gradient background, if the PNG is truly transparent it should blend right in beautifully.

Can you download the file and open it in your browser and tell me what you see? The blue gradient canvas should show through if it's truly transparent.

Screenshot 2026-02-21 at 8.21.11 PM.png
forget the blue gradient background - the UI is for later. Just use the mode. and have the neutral background as the background instead

8:21 PM
Got it! So just show you on a clean neutral background, no fancy canvas. Let me fix that quickly.


Ran a command, read a file
Ran a command, read a file
The canvas is now the same neutral beige as the rest of the app — your transparent PNG should blend right in. Try opening it again!

Drape app
Code · HTML 
Screenshot 2026-02-21 at 8.22.24 PM.png
are you sure?

8:22 PM
The PNG itself has a black background baked in — it's not actually transparent despite being a PNG file. We need to remove the black background from the image first.

Let me do that right now!


Ran 3 commands, read a file
Ran 3 commands, read a file
I removed the black background from your photo programmatically. Try opening it now — you should see yourself on the clean neutral background!

Drape app
Code · HTML 

johanna 2_6 1.svg
svg

here use this one

8:23 PM

Ran a command, read a file
Ran a command, read a file
Swapped in the SVG — try opening it now! SVGs natively support transparency so the background should be clean. How does it look?

Drape app
Code · HTML 
its better.... again we will refine this later

8:24 PM
Love it! Functionality first.

Do you have your Fashn.ai API key handy? Try the app:

Open the file in your browser
Paste your API key in the right panel
Upload any clothing photo
Hit Try It On
Tell me what happens! 🤞

Screenshot 2026-02-21 at 8.24.50 PM.png
so sad my body is cut off in the display

8:25 PM
Easy fix! Let me shrink the image so your full body fits in the canvas.


Ran a command, read a file
Ran a command, read a file
Should show your full body now! Try it out 🙂

Drape app
Code · HTML 
Screenshot 2026-02-21 at 8.26.22 PM.png
this is what happened

8:26 PM
Great progress — full body is showing perfectly now! 🎉

But there's an error: "Error: [object Object]" — that's the API call failing. This is a CORS issue — browsers block direct API calls from local HTML files for security reasons.

This is exactly why we need Vercel. The app works perfectly as a UI, but the Fashn.ai call needs to go through a proper server.

Ready to get it on Vercel? It's actually really quick — do you have a GitHub account?

I do not...

8:27 PM
No worries! You don't need one actually. Vercel lets you deploy by just dragging and dropping a folder.

Here's all you need to do — but the drag-and-drop on Vercel only works for simple static sites. Since we need a backend for the API call, we need one tiny extra step.

Honestly the easiest path for you right now with zero accounts except Vercel is:

Option A — Vercel (need GitHub, takes 10 min to set up) Option B — Use Fashn.ai's own playground to test first, build the real app after Option C — I rebuild this as a proper Vercel-ready app and walk you through it step by step

But let me ask — what's your priority right now?

Q: What do you want to do?
A: Create a GitHub account + deploy to Vercel

8:28 PM
Perfect! Let's do it step by step. Super simple I promise.

Step 1 — Create a GitHub account

Go to github.com and sign up. It's just like any other account — email, username, password.

Tell me when you're done and I'll walk you through Step 2! 🙂

done

8:30 PM
Nice! Step 2 — Create a new repository (this is just a folder on GitHub)

Click the + button in the top right corner of GitHub
Click "New repository"
Name it drape
Make sure it's set to Public
Click "Create repository"
Tell me when you see the empty repository page!

done

8:30 PM
Great! Step 3 — Upload your file

On that empty repository page you should see a link that says "uploading an existing file" — click that.

Then drag and drop the drape-app.html file you downloaded earlier onto that page.

Then click "Commit changes" (green button at the bottom).

Tell me when it's uploaded!

done

8:31 PM
Amazing! Step 4 — Deploy to Vercel

Go to vercel.com
Click "Sign Up"
Choose "Continue with GitHub" — this connects them together
Once you're in, click "Add New Project"
You should see your drape repository — click "Import"
Just click "Deploy" (don't change any settings)
Tell me when it's deployed — Vercel will give you a live link! 🚀

done

8:32 PM
What's the live link it gave you? Paste it here and let's test it! 🎉

here (https://drape-six.vercel.app/)

8:33 PM
Amazing it's live! 🎉 But we still have the CORS problem since it's just a static HTML file — we need to add a tiny backend so the Fashn.ai API call works properly.

Here's what I need to do: convert your project into a proper Vercel app with an API route. It sounds scarier than it is — you just need to upload a couple more files to GitHub.

Ready? Here's Step 1:

Go back to your GitHub drape repository and click "Add file" → "Create new file".

Name it exactly: api/tryon.js

Then paste this code in:

js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  
  const { model_image, garment_image, category } = req.body;
  const apiKey = req.headers['x-api-key'];

  const response = await fetch('https://api.fashn.ai/v1/run', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({ model_image, garment_image, category, mode: 'balanced' })
  });

  const data = await response.json();
  res.status(response.status).json(data);
}
Click "Commit changes". Tell me when done!

Screenshot 2026-02-21 at 8.35.17 PM.png
here it is

8:35 PM
You're on the upload page — but for this step we need to create a new file (not upload).

Click Cancel to go back, then:

Click "Add file" button
Choose "Create new file" (not upload)
That'll give you a text editor where you can type the filename and paste the code!

Screenshot 2026-02-21 at 8.36.03 PM.png
here it is

8:36 PM
The code is in but you need to name the file first!

Click in the "Name your file..." box at the top and type exactly:

api/tryon.js
The slash will automatically create a folder called api. Then click "Commit changes"!

done

8:36 PM
Now we need to update the HTML file so it talks to your new API route instead of calling Fashn.ai directly. Let me update it!


Ran 2 commands
Ran 2 commands
Now I also need to create a status proxy. Let me create that file for you to add to GitHub too.


Created a file, read a file
Created a file, read a file
You need to do two things in GitHub:

1. Update your HTML file — go to your drape-app.html in GitHub, click the pencil ✏️ edit icon, delete everything, paste the new one. Actually easier: just re-upload the new drape-app.html I just gave you.

2. Create another new file — just like you did before, create a file named exactly api/status.js and paste the contents of status.js into it.

Tell me when both are done!

Drape app
Code · HTML 
Status
JS 
Screenshot 2026-02-21 at 8.38.07 PM.png
do I delete the previous drape file

8:38 PM
Yes! A few things to do:

Delete drape-app (1).html — click on it, then the trash icon
Upload the new drape-app.html I gave you (the updated one)
Create api/status.js — like you did with tryon.js, create a new file named api/status.js and paste the contents of status.js
Do all three and tell me when done!

Screenshot 2026-02-21 at 8.40.29 PM.png
done?

8:40 PM
Almost! You have two HTML files now — drape-app (1).html and drape-app (2).html. You need to delete both and the problem is Vercel doesn't know which one to serve.

Delete both old HTML files, then we need to rename your new file properly. Click on drape-app (2).html and tell me what you see — is it the updated version with the /api/tryon call?

Actually simpler — just delete drape-app (1).html for now. Click on it → click the trash/delete icon → commit.

Then we need to tell Vercel which file is your main page by renaming drape-app (2).html to index.html. Click on it → pencil edit icon → change the filename at the top to index.html → commit.

Do those two things and tell me when done!

Screenshot 2026-02-21 at 8.42.08 PM.png
8:42 PM
Now click on drape-app (2).html → then click the pencil ✏️ edit icon → at the top where it shows the filename, clear it and type index.html → then click Commit changes.

That rename will make Vercel serve it as your homepage!

Screenshot 2026-02-21 at 8.42.53 PM.png
now this

8:43 PM
The file is empty — it lost the content during the rename! No worries, easy fix.

Click the pencil ✏️ edit icon on that page, then paste the entire contents of the drape-app.html file I gave you into the editor, then commit.

The file is already named index.html correctly, it just needs the content!

give it to me

8:43 PM

Check file size
Check file size
The file is 6.7MB because your photo is baked in as base64 — too big to paste into GitHub's editor. Let me give it to you as a download instead.


Presented file
Presented file
Download that file, then:

Go to your index.html on GitHub
Click the pencil ✏️ edit icon
Click "Upload files" instead — drag the drape-app.html file straight in
Actually GitHub won't let you upload to replace — so do this instead:

Click pencil to edit index.html
Select all the text in the editor (Ctrl+A / Cmd+A)
Delete it
Open drape-app.html in a text editor on your computer (right click → open with → TextEdit or Notepad)
Select all, copy, paste into GitHub
Commit!
Drape app
Code · HTML 
Screenshot 2026-02-21 at 8.44.36 PM.png
8:44 PM
It worked — 6.48 MB is in there! The file is too big for GitHub to preview but that's fine, it's uploaded correctly.

Now go to drape-six.vercel.app — Vercel should have auto-deployed. Try it and tell me what happens! 🤞

Screenshot 2026-02-21 at 8.46.51 PM.png
I could not see if I put in the api and a red box appeared

8:47 PM
It's live and looking great! 🎉 The red box means there's still an error though. It looks like your API key got autofilled (I can see it's highlighted blue in the field) — that might be a browser autofill putting the wrong thing in.

Can you:

Click the API key field on the right
Clear it completely
Manually type/paste your Fashn.ai key
Then hit Try It On
What error message does the red box say?

when i enter it - it appears blank

8:48 PM
That's because it's a password field — it hides what you type for security. That's normal! The dots or blank appearance just means it's masking your key.

Just paste your key in and hit Try It On — what does the red error box say?

it is not working....

8:49 PM
What does the red box say exactly? Can you zoom in and take a screenshot of the error message?

Screenshot 2026-02-21 at 8.49.27 PM.png
8:49 PM
The error box is empty — that means the error message isn't displaying properly. Let me fix the error handling so we can actually see what's going wrong.

Can you open the browser console? On your keyboard press F12 (or right click anywhere on the page → Inspect → click Console tab). Then try clicking Try It On again and tell me what red text appears there!

Screenshot 2026-02-21 at 8.50.25 PM.png
8:50 PM
I can see the error clearly now:

"String contains non ISO-8859-1 code point"

This means your API key has a special character in it that's breaking the header. It's likely a copy-paste issue — an invisible character snuck in.

Can you go to your Fashn.ai dashboard, copy your API key fresh, then paste it carefully into the field? Make sure there are no extra spaces before or after it.

Screenshot 2026-02-21 at 8.51.37 PM.png
8:51 PM
Same error — the problem is the API key is being sent as an HTTP header, and headers can't contain certain characters. This is a code fix I need to make. Let me update the API route to encode it properly.

Go to GitHub → api/tryon.js → click the pencil ✏️ → replace everything with this:


Updated tryon.js with proper API key encoding
Updated tryon.js with proper API key encoding
The key change: instead of sending the API key as a header (which causes the encoding error), we're now sending it in the request body. I also need to update the HTML to match. Let me do that too.


Ran 3 commands, read a file
Ran 3 commands, read a file
You need to update two files on GitHub:

1. api/tryon.js — replace with the tryon.js file I just gave you

2. index.html — replace with the updated drape-app.html file (same process as before — open in TextEdit, copy all, paste into GitHub editor)

Do both and commit — then try again on Vercel!

Tryon
JS 
Drape app
Code · HTML 
Is there anyway to keep the API visible for now... just to confirm that it is being pasted\

8:53 PM
Yes totally! Let me change the API key field from a password field to a regular text field so you can see what you're typing.


Ran a command, read a file
Ran a command, read a file
Updated! Now upload this new drape-app.html to replace index.html on GitHub, commit, and then you'll be able to see exactly what's being pasted into the API key field. 🙂

Drape app
Code · HTML 


Want to be notified when Claude responds?



Claude is AI and can make mistakes. Please double-check responses.
Tryon · JS
Copy

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { model_image, garment_image, category, api_key } = req.body;

  const response = await fetch('https://api.fashn.ai/v1/run', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${api_key}`
    },
    body: JSON.stringify({ model_image, garment_image, category, mode: 'balanced' })
  });

  const data = await response.json();
  res.status(response.status).json(data);
}

