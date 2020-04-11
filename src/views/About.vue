<template>
  <div class="about">
    <h2>My Story<span>(est. 1 min read time)</span></h2>
    <article>
    	<p><b>Everyone in the world has a passion, a vision, or a dream they want to accomplish.</b> It is the individual's personal idea of success, what makes them happy, and what wakes them up in the morning. For the artist, they want to <i>share their perspective</i> of the world or express their emotions externally. For the leader, they dream of rallying support for their cause and <i>helping those in need</i>. And for the comedian, it is to <i>bring joy to the world</i> and put a smile on the faces of many.</p>
    	<p>Unfortunately, we are never taught how to share our ideas <b>effectively</b> in a digital world or even <i>where</i> to get started with the many tools available. Some just <i>do not have the time</i> to learn all the tools there are and want to focus on following their dream. An artist wants to master their medium, a leader wants to focus on helping others, and a comedian wants to practice their next joke. It can be difficult  That is where I want to help.</p>
    	<p><b>My passion</b> is to help others share their story in an online world.</p>
    	<p>So if you are a non-profit who needs help building a platform for your cause, a photographer who wants to showcase your work and offer your services, or a small business that wants to take advantage of the power of modern day marketing, I am always interested in hearing your story and finding out how I can help you tell it to others.</p>
    	<div class='about__cta'>
    		<p>Ready to share your story?</p>
    		<router-link to="/contact" class='cta__button'>Let's Get Started</router-link>
    	</div>
    	<h2>Want to know more?</h2>
    	<div class="stories-container">
			<ul class="stories__nav">
				<li @click="tabTo(0)" :class="{ 'tab-selected': tabIndex == 0 }">What is your process?</li>
				<!--<li @click="tabTo(1)" :class="{ 'tab-selected': tabIndex == 1 }">What are your skills?</li>-->
				<!--<li @click="tabTo(2)" :class="{ 'tab-selected': tabIndex == 2 }">What do you like?</li>-->
				<li @click="tabTo(3)" :class="{ 'tab-selected': tabIndex == 3 }">How much do you charge?</li>
				<li @click="tabTo(4)" :class="{ 'tab-selected': tabIndex == 4 }">What is your cat's name?</li>
			</ul>
			<div class="tab-container">
				<div v-show="tabIndex == 0" id="my-process">
					<p>For some, contacting me could be their <i>first step</i> into the world of marketing. It's always nice to have an idea of what you're going into to make you feel more comfortable.</p>
					<h3>My Process</h3>
					<ol>
						<li>Getting to Know You</li>
						<p>To be able to share your story, you must be able to tell your story and why you are passionate about what you do. You'll receive a brief questionnaire that will tell me a little about yourself and what your goals are.</p>
						<li>Discovery</li>
						<p>We will sit down either in person or through video conference to learn deeply about your vision, brainstorm some ideas on how you wish to broadcast your message or service, as well as answering any questions you may have.</p>
						<li>Strategy</li>
						<p>We will go through a process where we will find out what your brand stands for, what experience you wish for your clients to have, and how you want to represent your brand.</p>
						<li>Graphic Design</li>
						<p>If you decide in Strategy that you need visual resources created to help tell your story, this is when they will be made. Multiple revisions will be available to pick from until you feel like you are able to represent your brand effectively.</p>
						<li>Website Design</li>
						<p>If you decide you need a fresh coat of paint, or to claim your stake in the digital world, then we will go through some steps to chose what goals you want to accomplish with a clean, mobile-friendly website.</p>
						<li>Physical Design</li>
						<p>After you have a foundation in the digital world, if you want optional materials, like flyers, business cards, and more, we can create those together so they align with your goals</p>
						<li>Follow Your Dreams</li>
						<p>Once your platform for success has been built, you can either take the reins or we can discuss ongoing marketing. Either way, we will toast to the brand and to the good in the world you will bring!</p>

					</ol>
				</div>
				<div v-show="tabIndex == 1" id="my-skills">
					<h3>My Skills</h3>
				</div>
				<div v-show="tabIndex == 2" id="my-interests">
					<p>I like a lot of things, actually. </p>
					<h3>My Interests</h3>
					<div class="interest__category">
						<label>People Who Inspire Me</label>
						<ul>
							<a href="https://www.youtube.com/watch?v=f7T1Zs28Deo">Chris Do</a>
							<a href="https://www.youtube.com/watch?v=6Wcg15FaUnU">Gary Vaynerchuk</a>
						</ul>
					</div>
					<div class="interest__category">
						<label>Books</label>
						<ul>
							<a href="https://www.amazon.com/Princess-Bride-Deluxe-Morgensterns-Adventure/dp/1328948854/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr=">The Princess Bride</a>
							<a href="https://www.eckharttolle.com/power-of-now-excerpt/">The Power of Now</a>
							<a href="https://www.adamgrant.net/give-and-take">Give and Take</a>
							<a href="https://eloquentjavascript.net/">Eloquent JavaScript</a>
						</ul>
					</div>
					<div class="interest__category">
						<label>Music</label>
						<ul>
							<a href="https://www.youtube.com/watch?v=1Wl1B7DPegc">The 1975</a>
						</ul>
					</div>
					<div class="interest__category">
						<label>Movies</label>
						<ul>
							<a href="https://www.youtube.com/watch?v=WNNUcHRiPS8">The Princess Bride</a>
						</ul>
					</div>
				</div>
				<div v-show="tabIndex == 3" id="my-price">
					<p>It depends, really.</p>
					<p>My services will range from <b>$2000</b> to <b>$100</b> depending on your needs, however, money is not my motivation to help others <i>(but I enjoy keeping the lights on)</i>.</p> 
					<p><b>Nobody likes being sold something they do not need</b>. When we sit down to talk about your story and ideas, we will figure out of what you actually need to accomplish your goals effectively. Not everyone needs a new logo.</p>
					<p>If in the end I am still unable to fit your budget, I would still love to point you in the right direction to help you with your ideas. There is no price tag on advice.</p>
				</div>
				<div v-show="tabIndex == 4" id="my-cat">
					<p>Her name is <b>Kanna</b>. She is a two year old cat that I fostered as a kitten after someone knocked on my door at 1 a.m. and asked if I could help her.</p>
					<p>I never did find her another home for her, as she grew on me very quickly.</p>
					<br>
					<img src="@/assets/kanna_01.jpg" alt="">
					<div class="kanna-row">
						<img src="@/assets/kanna_02.jpg" alt="">
						<img src="@/assets/kanna_03.jpg" alt="">
					</div>
					<img src="@/assets/kanna_04.jpg" alt="">
				</div>
			</div>
		</div>
    	
    	<!--
    	<p>My name is <b>Trevor Welch</b> and I have self-studied Javascript on the front-end and PHP on the back-end for <b>3</b> years now. Since then, I've done a summer internship, helped others with Javascript questions across multiple social platforms, and am currently enrolled at Wake Tech Community College to earn a degree in <a href="https://www.waketech.edu/programs-courses/credit/credit-programs/web-designer/degrees-programs/a25590dm" target="_blank">Web Design</a>.</p>
    	<div class="split">
    		<p>I first dipped my toes into programming in 2012 while taking computer science classes at Campbell University, though my path was set for a degree in Biology. Over the course of one summer, I went from Hello World in HTML to working with this enigma of a framework called <b>Angular</b>, specifically <em>Angular JS</em>&nbsp;(since apparently that mattered). Unfortunately, that was the peak of my learning for a while.</p>
    		<img src="@/assets/about-01.png" alt="">
    	</div>
    	<p class="narrow">Years later, I decided I would give it a second chance, only to find out Javascript was a <a href="https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f" target="_blank">whole different beast</a> at that time. Luckily, awesome sources like <a href="https://www.freecodecamp.org/" target="_blank">freeCodeCamp</a> were beginning to pop up to help autodidactic developers figure out where they fit in the huge Javascript ecosystem. Additionally, there was a couple of whispers about this cool library called <b>React</b> that was going to change the way we developed even more. So I figured I better learn <em>that</em> too! The rug was always being pulled from under us newbies before we could even catch up.</p>
		<div class="split">
			<img src="@/assets/about-02.png" alt="">
			<p>Eventually, after going in and out of <a href="https://en.wikipedia.org/wiki/Migraine" target="_blank">burnout</a> multiple times, I found myself reaching different milestones with different concepts I wanted to learn. I even started to have <a href="https://en.wikipedia.org/wiki/Stockholm_syndrome" target="_blank">fun</a> with my hobby. Coding is actually pretty interesting once you make it past the learning curve. Started picking up CSS frameworks, SCSS (how did I last so long without it), HTML Canvas, and so much more!</p>
		</div>
		<p class="narrow">Presently, I've been devoting myself to <a href="https://blog.pusher.com/why-vuejs-laravel/" target="_blank">Vue and Laravel</a> since PHP and Javascript have been in my blood since the beginning, plus my HostGator hosting won't let me use Node.js on a shared plan. I have using these two technologies to solve some pain points at current my job and save a lot of headaches with a web app called <em>Foundation</em>. In between that and other side projects, I've been networking, doing school work, and looking for post-graduate opportunities.</p> 
		<p>Aside from my developer journey, I've been collecting concert tickets for some of my favorite music artists, finding myself  invested in virtual reality advancements, picking up some <a href="https://hackernoon.com/10-soft-skills-every-developer-needs-66f0cdcfd3f7" target="_blank">people skills</a> I missed out on at some point, and getting overwhelmed by how many good video games have been coming out recently. In the future, I would like to expand my skillset to work on more advanced technologies like machine automation, Internet of Things devices, and even designing <a href="https://medium.com/startup-grind/4-things-i-learned-designing-user-interfaces-for-vr-cc08cac9e7ec" target="_blank">virtual reality interfaces</a> are just a few interests of mine. Lastly, I really like learning about how web dev fits into the marketing world, as increasing brand awareness and helping a business make money has always been my career centered goal in life. If my clients do well, it makes me look good too!</p>
		-->
		<div class='about__footer'>
			<p>Any other questions?</p>
			<router-link to="/contact" class='cta__button'>Let's Chat</router-link>
		</div>
    </article>
  </div>
</template>

<script>
export default {
	name: 'about',
	methods: {
		tabTo: function(index) {
			this.tabIndex = index
		}
	},
	data: function() {
		return {
			tabIndex: 0,
		}
	}
}
</script>

<style scoped lang='scss'>
	.about{
		width: 100%;
		animation: fade-in .5s ease-out .5s 1 backwards;
		h2 {
			background: #FCFCFC;
		}
		h2 span{
			display:block;
			font-size: 12px;
			font-weight: 500;
			opacity:0.7;
			background: #FCFCFC;
		}
		article{
			animation: fade-in .5s ease-out 1s 1 backwards;
		}
	}

	.story-button {
		background: #FCFCFC;
		text-align: center;
    color: #03a87c;
    margin: 16px;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 0.85rem;
    &:hover{
      background:#E2F3EF ;
      cursor: pointer;
    }
	}

	.stories-container {
			animation: fade-in .5s ease-out 1.5s 1 backwards;
			h3 {
				text-align: center;
				font-size: 1.5rem;
				margin: 32px auto;
				margin-top:64px;
			}
			p {
				line-height: 2rem;
				margin-left: auto;
				margin-right: auto;
				margin-bottom: 24px;
				max-width: 800px;
			}

			ol {
				max-width: 800px;
				margin: 32px auto;
				list-style-position: inside;
				font-family: 'Montserrat', sans-serif;
				li {
					font-family: 'Muli', sans-serif;
					font-weight: bold;
					font-size: 125%;
				}
				p {
					margin: 8px auto;
					margin-bottom:32px;
					padding-left: 16px;
					box-sizing: border-box;
				}
			}

			#my-cat {
				display: flex;
				flex-direction: column;
				align-items: center;
				margin: 0px auto;
				width: 100%;
				max-width: 800px;
				p {
					margin-top:0px;
					width: 100%;
				}
				img {
					width: 100%;
				}
				.kanna-row {
					display: flex;
					margin:0px auto;
					width: 100%;
					flex-wrap:wrap;
					justify-content: space-between;
					img {
						margin-top: 16px;
						margin-bottom: 16px;
						width:49%;
						max-width:392px;

					}
				}
			}

			.interest__category {
				max-width: 800px;
				margin: 32px auto;
				display:flex;
				label{
					font-family: 'Muli', sans-serif;
					font-weight: bold;
					width: 180px;
					text-align: right;
					line-height: 27px;
				}
				ul {
					margin-left: 16px;
					margin-bottom: 32px;
					display: flex;
					flex-wrap:wrap;
					a {
						display: inline-block;
						background: #FCFCFC;
						text-align: center;
				    color: #03a87c;
				    margin:0px 16px 16px 0px;
				    padding: 6px 12px;
				    border-radius: 4px;
				    font-size: 0.75rem;
				    border: 1px solid #03a87c;
				    &:hover{
				      background:#E2F3EF ;
				      cursor: pointer;
				    }
					}
				}
			}

			
			#website-design, #graphic-design, #social-media-strategy, #marketing-strategy {
				animation: fade-in .5s ease-out 0s 1 backwards;
			}
		}

		.tab-container {
			&>div{
				animation: fade-in .5s ease-out 0s 1 backwards;
			}
		}

		.stories__nav {
			list-style-type: none;
			display:flex;
			justify-content:center;
			align-items:center;
			flex-wrap: wrap;
			margin: 32px auto;
			animation: fade-in .5s ease-out 1.5s 1 backwards;



			li {
				font-family: 'Montserrat', sans-serif;
				border: 1px solid rgba(0,0,0,0.5);
				color: rgba(0,0,0,0.5);
				padding: 8px 16px;
				border-radius: 4px;
				margin: 8px;
				transition: 0.2s;
				font-size: 0.85rem;
				&:hover {
					cursor: pointer;
					color: rgba(0,0,0,1);
					border: 1px solid rgba(0,0,0,1);
				}
			}

			.tab-selected {
				color: #03a87c;
				border: 1px solid #03a87c;
				&:hover {
					color: #03a87c;
					border: 1px solid #03a87c;
				}
			}
		}

	.about__cta {
		margin-bottom: 64px;
	}
	.about__footer, .about__cta {
		display: flex;
		flex-direction: column;
		p {
			font-style: italic;
			margin-bottom: 8px;
		}
	}

	.cta__button {
		display: inline-block;
		background: #FCFCFC;
		text-align: center;
    color: #03a87c;
    margin:16px auto;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 0.85rem;
    border: 1px solid #03a87c;
    &:hover{
      background:#E2F3EF ;
      cursor: pointer;
    }
	}

	article{
		max-width: 1000px;
		margin:0px auto;
		a {
			border-bottom: 1px solid rgba(0,0,0,0.7);
			transition: 0.2s;
			&:hover{
				border-bottom-color: #03a87c;
			}
		}

		p{ margin: 32px auto; line-height: 32px; background: #FCFCFC;}

		.split{
			max-width: 840px;
			margin: 0px auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			img {
				margin: 32px;
				max-width: 30vw;
				height:auto;
			}
			p {
				margin: 32px auto;
			}
		}

		.narrow{
			max-width: 680px;
		}

	}

	@media (max-width: 650px){
		article{
			.split{
			flex-wrap: wrap;
			align-items: center;
				img{ width: 80%; max-width: 280px; margin: 32px auto; }
			}
		}
	}
</style>
