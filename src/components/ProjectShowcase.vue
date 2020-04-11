<template>
	<div id='projects'>
		<h2>Projects</h2>
		<div class='project-showcase'>
			<div class='project' v-for='(project, index) in projects'>
				<div class='showcase__card'>
					<img :src=getImage(project.thumbnail) alt="">
					<div class='card-info'>
						<h3>{{project.title}}</h3>
						<p>{{project.snippet}}</p>
						<span @click="showProject(index)">View More</span>
					</div>
				</div>
			</div>
		</div>
		<a href="https://codepen.io/TrevorWelch/pens/popular" class='projects__more'>More on CodePen</a>

		<div id="project__modal" :class="{ show: show_modal } " @click="toggleModal($event)">
			<div id="modal__close">X</div>
			<div class="project__card" v-if='selected_project'>
				<div class="project__overview"><img :src=getImage(selected_project.overview) alt=""></div>
				<div class="project__details">
					<label>Title</label>
					<h2>{{selected_project.title}}</h2>
					<span>{{selected_project.roles | listRoles}}</span>
					
					<label>Description</label>
					<p>{{selected_project.description}}</p>
					<label>Technology Used:</label>
					<ul>
						<li v-for="tag in selected_project.technology">{{tag}}</li>
					</ul>
					<a target="_blank" :href=selected_project.url>View Page</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Projects from '@/models/Projects.js'

export default {
  name: 'ProjectShowcase',

  data() {
  	return {
  		projects: null,
  		selected_project: null,
  		show_modal: false
  	}
  },
  filters: {
  	listRoles: function(roles) {
  		return roles.join(', ')
  	}
  },
  methods: {
  	toggleModal(e){
  		if(e.toElement.id == "project__modal" || e.toElement.id == "modal__close"){
  			this.show_modal = !this.show_modal
  		}
  	},
  	getImage(image_name){
  		return require("@/assets/" + image_name)
  	},
  	showProject(index){
  		this.selected_project = this.projects[index]
  		this.show_modal = true
  	}
  },

  created() {
  	const fakeAPIcall = new Projects()
  	this.projects = fakeAPIcall.getAll().projects
  } 
}

	
</script>

<style scoped lang="scss">
	
	#projects {
		width: 100%;
		display:flex;
		flex-direction: column;
		align-items:center;
		animation: fade-in .75s ease-out 2s 1 backwards;
		h2{
			margin-bottom: 64px;
		}
		.projects__more {
			display: inline-block;
			margin: 32px auto;
			text-align: center;
			font-size: 0.85rem;
			padding: 16px;
		}
	}

	.project-showcase {
		width: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		.project {
			max-width: 380px;
		}
	}

	#project__modal {
		position: fixed;
		background: rgba(0,0,0,0.8);
		width: 100%;
		height: 100vh;
		z-index: 998;
		top:0px;
		left:0px;
		right:0px;
		box-sizing:border-box;
		padding: 16px;
		display: none;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		transform: translateY(0)!important;
		animation: showModalContainer .1s ease-out 0s 1 backwards;
		#modal__close {
			font-family: 'Muli', sans-serif;
			box-sizing:border-box;
			font-weight: bold;
			position: fixed;
			color: white;
			font-size: 32px;
			right: 32px;
			top: 16px;
			padding: 8px;
			z-index: 997;
			cursor: pointer;
			transition: 0.2s all;
			&:hover {
				color: #03a87c;
			}
		}
		.project__card {
			overflow: hidden;
			margin-top: 64px;
			border-radius: 5px;
			background: white;
			box-shadow: 0px 2px 4px rgba(0,0,0,0.95);
			opacity: 0;
			animation: showModal 0.25s ease-out 0.15s 1 forwards;
			justify-content:flex-end;
			display: flex;
			box-sizing:border-box;
			max-width: 800px;
			.project__overview {
				align-self: center;
				border-radius: 4px;
				overflow:hidden;
				img {
					max-width: 100%;
					padding:8px 8px 4px 8px;
				}
			}
			.project__details {
				display: flex;
				flex-direction: column;
				padding:24px 16px;
				font-family: 'Muli', sans-serif;
				width: 100%;
				max-width: 200px;
				box-sizing:border-box;
				max-height: 480px;
				
				label {
					font-size: 11px;
					opacity: 0.5;
					&:not(:first-of-type()){
						margin-top:auto;
					}
				}
				h2 { 
					text-align: left;
					font-size: 20px;
					margin-bottom:2px;
				}
				span{
					font-size: 13px;
					opacity: 0.9;
					margin-bottom: 32px;
				}
				p {
					font-size: 12px;
					margin-bottom:32px;
				}
				ul {
					li {
						display: inline-block;
						font-weight: bold;
						font-size: 12px;
						letter-spacing:0.2px;
						padding: 2px 4px;
						border-radius: 4px;
						margin: 2px;
						color: rgba(0,0,0,0.9);
						background: rgba(0,0,0,0.06);
					}
					margin-bottom:auto;
				}
				a {
					text-align: center;
					font-size: 13px;
					padding: 8px 16px;
					border: 1px solid black;
					margin-top: 16px;
					border-radius: 4px;
					&:hover {
						border-color: #03a87c;
					}
				}
			}

			@media only screen and (max-width: 800px){
				flex-direction:column;
				.project__overview{
					img{ 
						max-width: 100%;
						max-height: none;
					}
				}
				.project__details {
					width: 100%;
					max-width: none;
				}
			}
		}
	}
	@keyframes showModalContainer {
		from {
			transform:scale(0.9);
			opacity: 0;
		}
		to {
			transform:scale(1);
			opacity: 1;
		}
	}

	@keyframes showModal {
		from {
			transform:scale(0.5);
			opacity: 0;
		}
		to {
			transform:scale(1);
			opacity: 1;
		}
	}

	#project__modal.show {
		display: flex;
	}

	.showcase__card {
		display: flex;
		flex-direction: column;
		color: inherit;
		margin: 12px;
		overflow: hidden;
		box-shadow: 0 2px 2px rgba(0,0,0,.06), 0 0 2px 1px rgba(0,0,0,.03);
		border-radius: 8px;
		background: white;
		position: relative;
		&:hover{
			box-shadow: 0 7px 7px rgba(0,0,0,.06), 0 0 7px rgba(0,0,0,.03);
		}
		.card-info {
			position: absolute;
			display:flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			top: 0px;
			left: 0px;
			right: 0px;
			bottom: 0px;
			opacity: 0;
			transition: 0.2s all;
			cursor: pointer;
			span {
				font-family: 'Muli', sans-serif;
				margin-top: 32px;
				padding: 8px 16px;
				border-radius: 4px;
				color: #03a87c;
				border: 1px solid #03a87c;
				font-size: 0.85rem;
				transition: 0.2s all;
				&:hover{
					background: #e2f3ef;
				}
			}
		}

		&:hover {
			.card-info {
				background: rgba(255,255,255,0.93);
				opacity: 1;
			}
		}
		img{
			width: 100%;
			height: auto;
		}
		h3 {
			padding: 16px 24px;
			font-size: 22px;
		}
		p {
			padding: 0px 24px;
			font-size: 14px;
			opacity: 0.9;
		}

		
	}
</style>