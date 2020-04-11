<template>
	<div class="contact">
		<h2>Let's Connect</h2>
		<p>Ready to sit down and have a chat? <em>I'll buy the coffee.</em></p>
		<ul class="contact-list">
			<li><span>Email</span><a href="mailto:welch.trevor@yahoo.com?subject=Hello!%20I'm%20Interested%20In%20Working%20With%20You&body=Let's make this happen." target="_blank">welch.trevor@yahoo.com</a></li>
			<li><span>Twitter</span><a href="https://twitter.com/Trevor_J_Welch" target="_blank">@Trevor_J_Welch</a></li>
			<li><span>LinkedIn</span><a href="https://www.linkedin.com/in/trevor-welch-808a99106/" target="_blank">Trevor Welch</a></li>
			<li><span>CodePen</span><a href="https://codepen.io/TrevorWelch/" target="_blank">@TrevorWelch</a></li>
			<li><span>FreeCodeCamp</span><a href="https://www.freecodecamp.org/trevor-welch" target="_blank">trevor-welch</a></li>
			<li><span>GitHub</span><a href="https://github.com/Trevor-Welch" target="_blank">Trevor-Welch</a></li>
		</ul>
	</div>
</template>

<script>
	
</script>

<style scoped lang="scss">
	.contact{
		width:100%;
		animation: fade-in .5s ease-out .5s 1 backwards;
		h2{
			background: white;
		}
		p {
			text-align:center;
			animation: fade-in .5s ease-out 1s 1 backwards;
			color: rgba(0,0,0,0.7);
			background: white;
		}
		ul {
			animation: fade-in .5s ease-out 1s 1 backwards;
			list-style-type: none;
			max-width: 400px;
			margin: 10vh auto;
			li {
				margin: 16px auto;
				width: 100%;
				display:flex;
				justify-content: space-between;
				span {
					font-family: 'Montserrat', sans-serif;
					font-size: 1.5rem;
				}
				a {
					display: inline-block;
					color: #03a87c;
					padding: 8px 16px;
					border-radius: 4px;
					border: 1px solid #03a87c;
					background: #FCFCFC;
					&:hover{
						background:#E2F3EF;
					}
				}
			}
		}

	}
</style>