<template>
  <div id="hero" class="hero">
    <h2>Hello, I'm <b style="display:inline-block;" data-text="Trevor Welch" class='glitch'>Trevor Welch</b>.</h2>
    <p>I am a website developer and graphic designer from Raleigh, North Carolina.</p>
    <p>I create your <b>first impression</b> in a modern digital world.</p>
    <p>Continue below for things I am proud of.</p>
    <router-link to="/about" class='hero__cta'>My Story</router-link>
    <a href="#projects" class="hero__cta">My Work</a>
    <div id='scroll-arrow' class="scroll-arrow">&#x2B07;</div>
  </div>
</template>

<script>
  export default {
    mounted: function (){
      window.addEventListener('scroll', function(event){
        if( window.scrollY > 300) {
          document.getElementById('scroll-arrow').style.display = 'none'
        } else { 
          document.getElementById('scroll-arrow').style.display = 'block'
        }
      })
    }
  }
</script>

<style scoped lang="scss">
.hero {
  width: 100%;
  text-align: center;
  padding-top: 6vh;
  padding-bottom: 14vh;
  min-height: 89vh;
  position: relative;

  .hero__cta {
    background: #FCFCFC;
    display: inline-block;
    color: #03a87c;
    margin: 16px;
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid #03a87c;
    font-size: 0.85rem;
    &:hover{
      background:#E2F3EF ;
    }
  }
  
  h2 {
    background: #FCFCFC;
    margin:0 auto;
    max-width: 500px;
    margin-bottom: 48px;
    font-weight:400;
    z-index:5;
  }
  
  p {
    background: #FCFCFC;
    margin:8px auto;
    max-width: 700px;
    line-height: 32px;
    color: rgba(0,0,0,0.8);
    z-index:5;
    &:last-of-type{
      margin-bottom: 32px;
    }

    
  }

  .hero__cta, p {
    animation: fade-in .75s ease-out 1.25s 1 backwards;
  }

  @media screen and (max-width: 400px) {
    h2 {
      font-size: 1.7rem;
    }
    p {
      font-size: 0.85rem;
    }
    .hero__cta {
      margin: 8px;
    }
  }

  .scroll-arrow{
    position: absolute;
    bottom: 10vh;
    left: 50%;
    right: 50%;
    top: auto;
    font-size: 24px;
    animation: scrollArrow 2s linear 0s infinite;
  }

  @keyframes scrollArrow {
    0% {
      opacity: 0;
      transform: scaleY(0.1) translateY(-100px) rotateX(-90deg);
    }

    50% {
      opacity: 1;
      transform: scaleY(1.5) translateY(0px);
    }

    100% {
      opacity: 0;
      transform: scaleY(0.1) translateY(100px) rotateX(90deg);
    }
  }
}
</style>




