<template>
  <div id="app">
    <header>
      <router-link to="/" class="app__branding">
        <h1>T</h1>
      </router-link>
      <nav>
        <router-link to="/">Projects</router-link>
        <span> / </span> 
        <!--
        <router-link to="/services">Services</router-link>
        <span> / </span>
        -->
        <router-link to="/about">About</router-link>
        <span> / </span> 
        <router-link to="/contact">Contact</router-link>
      </nav>
    </header>
    <router-view/>
    <footer>

      <div class="footer__nav">
        <a href="mailto:welch.trevor@yahoo.com?subject=Hello!%20I'm%20Interested%20In%20Working%20With%20You&body=Let's make this happen." target="_blank">Email</a>
        <span> / </span>
        <a href="https://twitter.com/Trevor_J_Welch" target="_blank">Twitter</a>
        <span> / </span>
        <a href="https://www.linkedin.com/in/trevor-welch-808a99106/" target="_blank">LinkedIn</a>
        <span> / </span>
        <router-link to="/contact">More</router-link>
        </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      addPixel: function(child, parent) {
        parent.appendChild(child)
      },
      createPixel: function() {
        let color = '#'+Math.floor(Math.random()*16777215).toString(16);
        let min_size = 3;
        let max_size = 10;
        let size = Math.floor(Math.random() * (max_size - min_size) + min_size)
        let x_position = Math.floor(Math.random() * (99 - 1) + 1 )
        let y_position = Math.floor(Math.random() * (99 - 1) + 1 )

        let newPixel = document.createElement('div')
        newPixel.style.width = size + 'px'
        newPixel.style.height = size + 'px'
        newPixel.style.background = color
        newPixel.style.position = 'absolute'
        newPixel.style.top = y_position.toString() + "%"
        newPixel.style.bottom = 'auto'
        newPixel.style.left = x_position.toString() + "%"
        newPixel.style.right = 'auto'
        newPixel.style.zIndex = '-1'
        return newPixel
      },
      populatePixels: function(parent_element, number){
        for(let i = 0; i <= number; i++){
          this.addPixel(this.createPixel(), parent_element)

        }
      },
    },
    mounted: function() {

      this.populatePixels(document.body, 40)
      
    },
    data: function() {
      return {
        pixels: []
      }
    }
  }
</script>

<style lang="scss">

@mixin glitchCopy { 
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.glitch {
  position: relative;
  &:hover{
    cursor: default;
    animation: glitch-skew 1s infinite linear alternate-reverse;
    &::before{
      opacity: 0.6;
      animation: glitch-anim 5s infinite linear alternate-reverse;
    }
    &::after {
      opacity: 0.6;
      animation: glitch-anim2 1s infinite linear alternate-reverse;
    }
  }
  
  &::before{
    @include glitchCopy;
    left: 2px;
    text-shadow: -2px 0 #ff00c1;
    clip: rect(44px, 450px, 56px, 0);
    opacity: 0;
  }
  
  &::after {
    @include glitchCopy;
    left: -2px;
    text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
    opacity:0;
  }
}

@keyframes glitch-anim {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(100)+px, 9999px, random(100)+px, 0);
      transform: skew((random(100) / 100) + deg);
    }
  }
}

@keyframes glitch-anim2 {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(100)+px, 9999px, random(100)+px, 0);
      transform: skew((random(100) / 100) + deg);
    }
  }
}

@keyframes glitch-skew {
  $steps: 10;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      transform: skew((random(10) - 5) + deg);
    }
  }
}

  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    padding: 16px;
    margin: 0px auto;
  }

  p {
    font-size: 110%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Muli', sans-serif;
  }

  h2{
    font-size: 2.4rem;
    text-align: center;
    margin-bottom: 32px;
  }

  p, nav {
    font-family: 'Montserrat', sans-serif;
  }

  nav {
    background:white;
    text-align: right;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    transition: 0.2s;
    &:hover{
      color: #03a87c;
      cursor: pointer;
    }
  }

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10vh;
  }

  nav span, footer span {
    color: #03a87c;
    margin: 0px 8px;
  }

  footer {
    width: 100%;
    border-top: 1px solid #eee;
    margin-top: 48px;
    padding-top: 64px;
    padding-bottom: 48px;
    .footer__nav{
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  .app__branding {
    border: 2px solid rgba(0,0,0,0.8);
    border-radius: 50%;
    padding: 0px 11px;
    transition: 0.2s;
    background: white;
    color: rgba(0,0,0,0.8);
    &:hover{
      border-color: #03a87c;
    }
  }


  @keyframes fade-in {
    0%{
      opacity: 0;
      transform: translateY(-20px);
    }
    100%{
      opacity: 1;
      transform: translateY(0px);
    }
  }

</style>
