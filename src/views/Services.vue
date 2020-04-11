<template>
	<div class="services">
		<h2>My Skills</h2>
		<p><i>Feel proud of what represents you.</i></p>
		<div class="services-container">
			<ul class="services__nav">
				<li @click="tabTo(0)" :class="{ 'tab-selected': tabIndex == 0 }">Website Design</li>
				<li @click="tabTo(1)" :class="{ 'tab-selected': tabIndex == 1 }">Graphic Design</li>
				<li @click="tabTo(2)" :class="{ 'tab-selected': tabIndex == 2 }">Social Media Strategy</li>
				<li @click="tabTo(3)" :class="{ 'tab-selected': tabIndex == 3 }">Marketing Strategy</li>
			</ul>
			<div class="tab-container">
				<div v-show="tabIndex == 0" id="website-design">
					<h3>Website Design</h3>
					<p>In the digital world, websites are often the <i>first point of contact</i> potential customers will ever make with you. Make that first impression count with a website that helps you accomplish your goals with a modern mobile-friendly look.</p>
					<p>We will sit down, have an honest business meeting discussing what goals you want to achieve with a website, how you wish to represent your brand while doing so, and how we can make this experience something that is enjoyable as a user.</p>
					<h3>Examples</h3>
				</div>
				<div v-show="tabIndex == 1" id="graphic-design">
					<h3>Graphic Design</h3>
					<p>Add a touch of personality to your promotional materials or have something custom created just for you.</p>
					<p>My previous design work includes a variety of graphic projects, ranging from paper printed material and slideshow presentations to business cards and coupons.</p>
					<p>We will sit down at your convenience and discuss requirements for the project or exchange a few emails to keep it simple. All projects include revisions and edits.</p>
					<h3>Examples</h3>
				</div>
				<!--
				<div v-show="tabIndex == 2" id="social-media-strategy">
					<h3>Social Media Strategy</h3>
					<p></p>
				</div>
				<div v-show="tabIndex == 3" id="marketing-strategy">
					<h3>Marketing Strategy</h3>
				</div>
				-->
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.services {
		width:100%;
		animation: fade-in .5s ease-out .5s 1 backwards;
		&> p {
			text-align: center;
			animation: fade-in .5s ease-out 1s 1 backwards;
		}

		.tab-container {
			animation: fade-in .5s ease-out 1.5s 1 backwards;
			h3 {
				text-align: center;
				font-size: 1.5rem;
				margin: 32px auto;
				margin-top:64px;
			}
			p {
				line-height: 1.5rem;
				margin-left: auto;
				margin-right: auto;
				margin-bottom: 24px;
				max-width: 800px;
			}

			
			#website-design, #graphic-design, #social-media-strategy, #marketing-strategy {
				animation: fade-in .5s ease-out 0s 1 backwards;
			}
		}

		.services__nav {
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
	}
</style>

<script>
export default {
	name: 'services',
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