class Projects {
	constructor(){

	}

	getAll(){
		return {
			projects: [
				{
					title: "Vicious Cycles Website",
					roles: ['Logo Design, Website Design'],
					snippet: "Sleek, sharp design for electric motorcycle dealer.",
					description: "Vicious Cycles is a fake business that sells custom-made electric motorcycles. This website was my final project for a college class.",
					technology: ['HTML', 'CSS', 'Javascript'],
					thumbnail: "portfolio-vicious-cycles.png",
					overview: "portfolio-vicious-cycles-overview.png",
					url: "http://wcet3.waketech.edu/tjwelch/WEB140/ViciousCyclesProject/index.html"
				},
				{
					title: "Material Ripple without Javascript",
					roles: ['Open Source'],
					snippet: "A ripple button effect in less than 100 lines of code.",
					description: "A ripple button effect in less than 100 lines of code.",
					technology: ['HTML', 'CSS', 'Javascript'],
					thumbnail: "portfolio-material-ripple.png",
					video_preview: false,
					overview: "portfolio-material-ripple.png",
					/*overview: "portfolio-material-ripple-demo.mp4",*/
					url: "https://codepen.io/TrevorWelch/full/NwERXE/"
				},
				{
					title: "Foundation",
					roles: ['Concept Work'],
					snippet: "Single page demo of an employee portal for a hotel.",
					description: "This is an open source event management system that never saw fruition. It is still one of my favorite design snippets I've created.",
					technology: ['Work-In-Progress', 'HTML', 'CSS', 'SCSS', 'Javascript', 'Vue'],
					thumbnail: "portfolio-foundation.png",
					overview: "portfolio-foundation-overview.png",
					url:"https://codepen.io/TrevorWelch/full/MMjzGW"
				},
				{
					title: "Stop_Button Mockup",
					roles: ['Concept Work'],
					snippet: "A fresh coat of paint for a playful arcade.",
					description: "A neon concept design for the homepage of a bar arcade in Hope Mills, North Carolina. I created this for a programming challenge.",
					technology: ['HTML', 'CSS', 'SCSS'],
					thumbnail: "portfolio-stopbutton.png",
					overview: "portfolio-stopbutton.png",
					url:"https://codepen.io/TrevorWelch/full/PKEgqQ/"
				},
				{
					title: "Pycon Latin America 2019",
					roles: ['Front-End Web Developer'],
					snippet: "A fun, colorful Python convention held in Mexico.",
					description: "Partnered with a back-end developer to create many of the forms and pages for the website. Many code snippets for this project are available on CodePen.",
					technology: ['HTML', 'CSS', 'Javascript', 'Django'],
					thumbnail: "portfolio-pycon.png",
					overview: "portfolio-pycon-overview.png",
					url:"https://www.pylatam.org/en/"
				}
				
			]
		}
	}
}

export default Projects