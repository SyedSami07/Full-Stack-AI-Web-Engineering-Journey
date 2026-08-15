Act as an UI/UX designer and you're a senior front-end developer. You know how the design works.
I have designed a website using raw html css code by replicating a figma design.  your task is to complete a section by generating code that keeps the same structure of my website and completely fullfill the requirements. 
here are the requirement:
- The section must stay relevant to the DevConf 2026 theme (e.g. Sponsors, Venue, FAQ, Newsletter Signup, Hackathon Details, Past Highlights, Job Board, etc.).
- make it unique and creative .
- it fits visually and thematically with the rest of the page.
- the design and icon should not look like AI maded, it should be look like the structure of my current code and design. 
- it should be look like human maded design.
and finally give me the html css raw code. (seperate)

and here is my website code that i created:
html part:

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Assignment-01</title>
    <link rel="stylesheet" href="./style.css" />
    <!-- font added -->
     <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Yuyu+Short&display=swap" rel="stylesheet">
</head>
<body>
    <!-- navbar starts -->
    <nav>
        <div class="nav-parent">
            <img src="./images/logo.png" alt="Logo" />
            <div>
                <ul>
                    <li><a href="">Speakers</a></li>
                    <li><a href="">Schedule</a></li>
                    <li><a href="">Tracks</a></li>
                    <li><a href="">Venue</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
            </div>
            <div>
                <button class="common-btn">Register Now</button>
            </div>
        </div>
    </nav>
    <!-- navbar ends -->

    <!-- banner starts -->
    <header>
        <div class="header-content">
            <h1>Code. <em>Connect.</em> Create</h1>
            <p>
                Join 4,000+ engineers, founders, and builders at the premier developer
                <br />
                conference of 2026. Three days of cutting-edge talks, hands-on
                workshops, <br />
                and meaningful connections.
            </p>
            <button class="common-btn">Register Now</button>
        </div>
    </header>
    <!-- banner ends -->
    <main>
        <!-- speaker section starts -->
        <section>
            <div class="speaker-section">
                <h1>Meet the Speakers</h1>
            </div>

            <div class="card-parent">
                <div class="card">
                    <img src="./images/andrej.png" alt="" />
                    <div class="info">
                        <p class="card-title">AI/ML</p>
                        <h4>Andrej Karpathy</h4>
                        <p class="card-company">Pretraining team, Anthropic</p>
                    </div>
                </div>

                <div class="card">
                    <img src="./images/demis.png" alt="" />
                    <div class="info">
                        <p class="card-title">Cloud & DevOps</p>
                        <h4>Demis Hassabis</h4>
                        <p class="card-company">PCo-Founder and CEO, Google DeepMind</p>
                    </div>
                </div>
            </div>
            <br />

            <div class="card-parent">
                <div class="card">
                    <img src="./images/gary.png" alt="" />
                    <div class="info">
                        <p class="card-title">Frontend</p>
                        <h4>Gary Marcus</h4>
                        <p class="card-company">Pretraining team, Anthropic</p>
                    </div>
                </div>

                <div class="card">
                    <img src="./images/mustafa.png" alt="" />
                    <div class="info">
                        <p class="card-title">Security</p>
                        <h4>Mustafa Suleyman</h4>
                        <p class="card-company">PCo-Founder and CEO, Google DeepMind</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- speaker section ends -->

        <!--  Secure Your Spot (pricing section) starts -->
        <section class="pricing-section">
            <div class="pricing-header">
                <h1>Secure Your Spot</h1>
                <p>Early-bird pricing ends August 15, 2026.</p>
            </div>

            <!-- pricing card 1 -->
            <div class="pricing-parent">
                <div class="pricing-card">
                    <span>STANDARD</span>
                    <h2>$399</h2>
                    <p>per person</p>
                    <hr />
                    <div class="card-list">
                        <p>
                            <span class="dot">󠁯•󠁏󠁏</span> Access to all 3 conference days
                        </p>
                        <p>
                            <span class="dot">󠁯•󠁏󠁏</span> 48 curated technical talks
                        </p>
                        <p>
                            <span class="dot">󠁯•󠁏󠁏</span> 2 workshop sessions
                        </p>
                        <p>
                            <span class="dot">󠁯•󠁏󠁏</span> Networking lunch & coffee breaks
                        </p>
                        <p>
                            <span class="dot">󠁯•󠁏󠁏</span> Conference swag bag
                        </p>
                        <p>
                            <span class="dot">󠁯•󠁏󠁏</span> Digital recordings (30 days)
                        </p>
                    </div>
                    <button class="pricing-button-1">Get Standard</button>
                </div>
         
            <!-- pricing card 2 -->
       
                <div class="pricing-card dark-card">
                    <span>PRO</span>
                    <h2>$749</h2>
                    <p>per person</p>
                    <hr />
                    <div class="card-list">
                        <p>
                            <span class="dot">󠁯•󠁏󠁏</span> Everything in Standard
                        </p>
                        <p>
                            <span class="dot">󠁯•󠁏󠁏</span> Unlimited workshop access
                        </p>
                        <p>
                            <span class="dot">󠁯•󠁏󠁏</span> Speaker meet & greet
                        </p>
                        <p>
                            <span class="dot">󠁯•󠁏󠁏</span> VIP networking dinner
                        </p>
                        <p>
                            <span class="dot">󠁯•󠁏󠁏</span> Lifetime recording access
                        </p>
                        <p>
                            <span class="dot">󠁯•󠁏󠁏</span> 1-on-1 mentorship (30 min)
                        </p>
                    </div>
                    <button class="common-btn">Get Pro</button>
                </div>
           


            <!-- pricing card 3 -->
           
                <div class="pricing-card off-white">
                    <span>Team</span>
                    <h2>$5,999</h2>
                    <p>up to 10 people</p>
                    <hr />
                    <div class="card-list">
                        <p>
                            <span class="dot">󠁯•󠁏󠁏</span> Everything in Pro (10 seats)
                        </p>
                        <p>
                            <span class="dot">󠁯•󠁏󠁏</span> Dedicated team lounge access
                        </p>
                        <p>
                            <span class="dot">󠁯•󠁏󠁏</span> Private workshop booking
                        </p>
                        <p>
                            <span class="dot">󠁯•󠁏󠁏</span> Company logo on event page
                        </p>
                        <p>
                            <span class="dot">󠁯•󠁏󠁏</span> Recruitment booth (1 day)
                        </p>
                        <p>
                            <span class="dot">󠁯•󠁏󠁏</span> Priority customer support
                        </p>
                    </div>
                    <button class="pricing-button-3">Contact Us</button>
                </div>
            </div>
        </section>
         <!--  Secure Your Spot (pricing section) ends -->

        <!-- PLACEHOLDER SECTION — AI CHALLENGE STARTS -->
        <!-- PLACEHOLDER SECTION — AI CHALLENGE ENDS -->
    </main>
</body>

</html>

css part:
/* common things */
*{
    margin: 0;
    padding: 0;
    
}

.common-btn{
  padding: 12px 30px;
  background-color: #2563EB;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  color: white;
  border: none;
}

section{
    padding: 90px 8%;
}

body{
    font-family: "Open Sans", sans-serif;
}

/* common things end */


/* navbar design */
.nav-parent{
    display: flex;
    justify-content: space-between; 
    align-items: center;
    padding: 18px 8%;
    
}

.nav-parent ul{
    display: flex;
    list-style: none; 
    gap: 20px;
   
   
}

.nav-parent ul a{
    text-decoration: none;
    color: #575757;
}
/* navbar design end */


/* header design */
header{
    background-image:
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('./images/banner.jpg');
    width: 100%;
    min-height: 60vh;
     background-repeat: no-repeat;
     background-size: cover;
     background-position: center;
     display: grid;
     justify-content: center;
     align-items: center;
}
.header-content{
   color: white;
   text-align: center;
   display: grid;
   gap: 20px;
}

.header-content button{
    margin: 0 35%;
    margin-top: 35%;
}
.header-content h1{
    font-size: 50px;
}

.speaker-section h1{
    text-align: center;
    margin-bottom: 50px;
    font-weight: bold;
    font-size: 50px;
}

.card-parent{
    display: flex;
    gap: 32px;           
    padding: 0 8%;
   
}
.card-parent .info{
    padding: 0 15px;
}

.card{
    background-color: white;
    border-radius: 8px;    
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.05);
    
    
}
.card img{
    width: 100%;
}



.card-title{
    font-size: 10px;
    margin-top: 10px;
    margin-bottom: 5px;
    color: #1D4ED8;
}

.card-company{
    font-size: px;
    margin-top: 5px;
    margin-bottom: 15px;
    color: #575757;
}
/* header design end */


/* pricing section design starts */


.pricing-section {
   padding: 50px 18%;
}

.pricing-header{
    text-align: center;
    margin-bottom: 40px;
}

.pricing-header h1{
    font-size: 50px;
    color: #0D1B2A;
    margin-bottom: 10px;
    
}

.pricing-header p {
    color: #575757;
    
}

.pricing-parent{
    display: flex;
    gap: 57px;
    justify-content: center;
    
}
.pricing-card{
    flex: 1;
    background-color: white;
    font-family: "Open Sans", sans-serif;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 12px; 
    padding: 32px 60px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.pricing-card span{
    font-size: 12px;
    font-weight: bold;
    color: #888888;
}

.pricing-card hr{
    margin-top: 20px;
    color: #E5E7EB;
    margin-right: 8px;
}

.dark-card{
    background-color: #0D1B2A;
    color: rgba(255, 255, 255, 0);
    font-family: "Open Sans", sans-serif;
}
.off-white{
    background-color: #F8F9FB;
}

.dark-card span{
    color: #60A5FA;
}

.pricing-card h2 {
    font-size: 42px;
    color: #0f172a;

}

.dark-card h2 {
    color: white;
}

.pricing-card p{
    color: #333333;
}
.dark-card p {
    color: #FFFFFF;  
       
}


.pricing-card hr {
    border: 0;
    border-top: 1px solid #E5E7EB;
    margin: 20px 0;
}

.dark-card hr {
    border-top: 1px solid #e5e7eb6e;
}

.card-list{
    margin-bottom: 20px;
}

.card-list p {
    margin-bottom: 10px; 
}



.pricing-card .dot{
    color: #60A5FA;
    font-weight: bold;
    margin-right: 5px;
}
.pricing-button-1{
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    border: 1px solid #2563EB;
    background-color: white;
}

.pricing-button-3{
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    border: 1px solid black;
    background-color: white;
}


/* pricing section design ends */


/* PLACEHOLDER SECTION — AI CHALLENGE design starts */

/* --- Tracks Section Background & Frame --- */
.tracks-section {
    background-color: #ffffff; /* Clean contrast swap from the light gray pricing section */
    padding: 80px 8%;          /* Consistent margins keeping navbar grids aligned */
}

.tracks-header {
    text-align: center;
    margin-bottom: 50px;
}

.tracks-header h1 {
    font-size: 36px;
    color: #0f172a;
    margin-bottom: 12px;
}

.tracks-header p {
    color: #64748b;
    font-size: 16px;
}

/* --- 4-Column Flex Layout Track --- */
.tracks-parent {
    display: flex;
    gap: 20px;
    justify-content: center;
}

/* --- Individual Track Grid Boxes --- */
.track-card {
    flex: 1;                     /* Spreads all 4 column cards completely evenly */
    background-color: #f8fafc;   /* Ultra-subtle gray box tint */
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 30px 24px;
    transition: transform 0.2s ease; /* Basic smooth micro-interaction for UX feel */
}

/* Simple, safe hover interaction to make the Figma spec feel alive */
.track-card:hover {
    transform: translateY(-5px); /* Gentle lift effect when cursor hovers */
    border-color: #1D4ED8;       /* Accents card border with your signature blue */
}

/* Inner Box Elements */
.track-icon {
    font-size: 32px;
    margin-bottom: 16px;
}

.track-card h3 {
    font-size: 20px;
    color: #0f172a;
    margin-bottom: 10px;
}

.track-card p {
    font-size: 14px;
    color: #64748b;
    line-height: 1.6;            /* Essential line-height to make long sentences readable */
}

/* PLACEHOLDER SECTION — AI CHALLENGE design starts */
/* PLACEHOLDER SECTION — AI CHALLENGE design ends */