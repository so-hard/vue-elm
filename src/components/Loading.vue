<template>
  <section class="Loading" >
    <div class="loading">
      <div class="dot"></div>
    </div>
  </section>
</template>

<script>
// import { setTimeout } from 'timers';
// import { async } from 'q';
export default {
  naem: "Loading",
};
</script>

<style lang="stylus" scoped>
@charset 'utf8'
.Loading {
  top 0
  position fixed
  z-index 9999
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display flex
  justify-content center
  align-items center
  // background #fff
  // filter: blur(10px);
}

div {
  display: block;
  position: absolute;
}

.loading {
  width: 100%;
  height: 100%;
}

.dot {
  width: 100px;
  height: 100px;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  animation: rotation 2.5s ease infinite;
}

@keyframes rotation {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.dot:before {
  // background-color: #000;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  width: 100%;
  height: 100%;
  content: '';
  display: block;
  position: absolute;
  border-radius: 50%;
  // border: 1px solid #000;
  animation: dot 2.5s ease infinite;
}

@keyframes dot {
  0%, 95%, 100% {
    background-image: radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
    background-position: center top, 59px 5px, 73px 20px, right center, 73px 59px, 59px 73px, center bottom;
  }

  3% {
    background-image: radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), none;
  }

  12% {
    background-image: radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), none, none;
  }

  15% {
    background-image: radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), none, none, none;
  }

  19% {
    background-image: radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), none, none, none, none;
  }

  25% {
    background-image: radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), none, none, none, none, none;
  }

  28% {
    background-image: radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), none, none, none, none, none, none;
  }

  31% {
    background-image: none, none, none, none, none, none, none;
  }

  32% {
    background-image: none, none, none, none, none, none, radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
  }

  40% {
    background-image: none, none, none, none, none, radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
  }

  43% {
    background-image: none, none, none, none, radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
  }

  54% {
    background-image: none, none, none, radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
  }

  64% {
    background-image: none, none, radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
  }

  72% {
    background-image: none, radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), radial-gradient(closest-side at 50% 50%, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, #ed6c00, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
  }
}
</style>

