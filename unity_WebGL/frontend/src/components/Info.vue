<template>
  <div>
    <div>
    <div class="sections-menu">
      <span
         class="menu-point"
         v-bind:class="{active: activeSection == index}"
         @click="scrollToSection(index)"
         v-for="(offset, index) in offsets"
         v-bind:key="index">
      </span>
    </div>
    <section class="fullpage page1">
      <h1>스쿨버스란 무엇인가요?</h1>
      <p>스쿨버스란 ~~ 스쿨과 메타버스의 합성어로 ~~~ 아이들에게 게임을 하면서 ~~~을 늘려줄 수 있는~~~ 입니다. 스크롤을 내려 어떤 게임들이 있는지 확인해보세요</p>
      <div class="my-box">
          <p class="fs-3 mb-0">
            <router-link to="/unity" class="router-text">
              스쿨버스 시작하기
            </router-link>
          </p>
      </div>
      <!-- <p>by <a href="https://webdeasy.de/?referer=cp-NVOEBL" target="_blank">WebDEasy</a></p> -->
    </section>
    <section class="fullpage page1">
      <h1>~~~~ 게임</h1>
      <h3>fsdanjkl;dfsnafsdnlkfd</h3>
      <p>asdfnlkdasfnlk</p>
      <p>adsfnlkfdnaskl</p>
      <p>asdfadsffds</p>
      <!-- <p>made with <a href="https://vuejs.org/" target="_blank">Vue.js</a></p> -->
    </section>
    <section class="fullpage page1">
      <h1>Section 3</h1>
      <div class="card-group">
        <div class="card">
          <img src="../assets/schoolbus.png" class="card-img-top" alt="../assets/schoolbus.png">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <img src="../assets/schoolbus.png" class="card-img-top" alt="../assets/schoolbus.png">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <img src="../assets/schoolbus.png" class="card-img-top" alt="../assets/schoolbus.png">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      <!-- <p>works on <b>desktop & mobile</b></p> -->
    </section>
    <section class="fullpage page1">
      <h1>Section 4</h1>
      <!-- <p>Tutorial <a href="https://webdeasy.de/en/programming-vue-js-fullpage-scroll/?referer=cp-NVOEBL" target="_blank">here</a></p> -->
    </section>
  </div>
  </div>

</template>

<script>

export default {
    // el: '#scroll',
    components: {
    },
    data(){
      return {
        inMove: false,
        activeSection: 0,
        offsets: [],
        touchStartY: 0
      }
    },
    methods: {
      calculateSectionOffsets() {
        let sections = document.getElementsByTagName('section');
        let length = sections.length;
        
        for(let i = 0; i < length; i++) {
          let sectionOffset = sections[i].offsetTop;
          this.offsets.push(sectionOffset);
        }
      },
      handleMouseWheel: function(e) {
        
        if (e.wheelDelta < 30 && !this.inMove) {
          this.moveUp();
        } else if (e.wheelDelta > 30 && !this.inMove) {
          this.moveDown();
        }
          
        e.preventDefault();
        return false;
      },
      handleMouseWheelDOM: function(e) {
        
        if (e.detail > 0 && !this.inMove) {
          this.moveUp();
        } else if (e.detail < 0 && !this.inMove) {
          this.moveDown();
        }
        
        return false;
      },
      moveDown() {
        this.inMove = true;
        this.activeSection--;
          
        if(this.activeSection < 0) this.activeSection = this.offsets.length - 1;
          
        this.scrollToSection(this.activeSection, true);
      },
      moveUp() {
        this.inMove = true;
        this.activeSection++;
          
        if(this.activeSection > this.offsets.length - 1) this.activeSection = 0;
          
        this.scrollToSection(this.activeSection, true);
      },
      scrollToSection(id, force = false) {
        if(this.inMove && !force) return false;
        
        this.activeSection = id;
        this.inMove = true;
        
        document.getElementsByTagName('section')[id].scrollIntoView({behavior: 'smooth'});
        
        setTimeout(() => {
          this.inMove = false;
        }, 400);
        
      },
      touchStart(e) {
        e.preventDefault();
        
        this.touchStartY = e.touches[0].clientY;
      },
      touchMove(e) {
        if(this.inMove) return false;
        e.preventDefault();
        
        const currentY = e.touches[0].clientY;
        
        if(this.touchStartY < currentY) {
          this.moveDown();
        } else {
          this.moveUp();
        }
        
        this.touchStartY = 0;
        return false;
      }
    },
    mounted() {
      this.calculateSectionOffsets();
      
      window.addEventListener('DOMMouseScroll', this.handleMouseWheelDOM);  // Mozilla Firefox
      window.addEventListener('mousewheel', this.handleMouseWheel, { passive: false }); // Other browsers
      
      window.addEventListener('touchstart', this.touchStart, { passive: false }); // mobile devices
      window.addEventListener('touchmove', this.touchMove, { passive: false }); // mobile devices
    },
    destroyed() {
      window.removeEventListener('mousewheel', this.handleMouseWheel, { passive: false });  // Other browsers
      window.removeEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox
      
      window.removeEventListener('touchstart', this.touchStart); // mobile devices
      window.removeEventListener('touchmove', this.touchMove); // mobile devices
  }
}
</script>

<style>
  body {
    margin: 0;
    color: #FFF;
    font-family: Helvetica, arial, sans-serif;
    overflow: hidden;
  }

  h2 {
    position: fixed;
  }

  .fullpage {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .page1 {
    background: center no-repeat url("../assets/classroom.png");
    background-size:100vw 100vh;
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: space-between; */
  }

  h1 {
    font-size: 6em;
    margin: 0;
    text-align: center;
    padding: 0 1rem;
  }

  p {
    font-size: 1em;
  }

  .fullpage a {
    text-decoration: none;
    font-weight: 600;
    background: rgba(255, 255, 255, 0.3);
    padding: 5px 10px;
    color: #FFF;
    margin-left: 5px;
  }

  .red {
    background-color: #ab4545;
  }

  section.black {
    background-color: #000;
  }

  .blue {
    background-color: #237ad4;
  }

  .green {
    background-color: #68c368;
  }

  h1.black {
    color: #000;
  }

  .sections-menu {
    position: fixed;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .sections-menu .menu-point {
    width: 10px;
    height: 10px;
    background-color: #FFF;
    display: block;
    margin: 1rem 0;
    opacity: .6;
    transition: .4s ease all;
    cursor: pointer;
  }

  .sections-menu .menu-point.active {
    opacity: 1;
    transform: scale(1.5);
  }

  @media screen and (max-width: 1200px) {
    h1 {
      font-size: 2.5em;
    }
}
</style>