<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-image">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 2C9.58206 2.00071 6.00079 5.58175 6.00008 9.9994C5.99664 12.4832 6.57408 14.9333 7.68628 17.1542C7.88852 17.5581 8.10697 17.9521 8.34163 18.336C10.3401 21.6043 13.4423 24.0494 17.0871 25.2291C17.5144 25.367 17.949 25.4877 18.3909 25.5911C19.14 25.7637 19.9006 25.882 20.6667 25.9449C21.1064 25.9811 21.5508 25.9995 21.9999 26V9.9994C21.9999 5.58141 18.4183 2 14 2ZM9.28585 5.28585C11.8894 2.68257 16.1105 2.68257 18.7141 5.28585C18.9828 5.55434 19.2283 5.84501 19.4481 6.15476C18.884 5.90543 18.2739 5.77691 17.6571 5.77745C16.1227 5.77745 14.7727 6.55585 14 7.72707C13.2272 6.55585 11.8772 5.77745 10.3428 5.77745C9.72606 5.77691 9.116 5.90543 8.55188 6.15476C8.77168 5.84501 9.01721 5.55434 9.28585 5.28585ZM9.72968 18.0372C11.3281 20.4704 13.6113 22.3759 16.2914 23.5134C16.5447 23.6199 16.7998 23.7192 17.0569 23.8113C16.6267 20.4876 13.7961 17.9996 10.4445 17.9992C10.2057 17.9992 9.96711 18.0119 9.72968 18.0372ZM20.6667 24.606C19.9133 24.5385 19.1663 24.4126 18.4325 24.2292C18.2944 21.6799 16.9469 19.35 14.8061 17.9588C17.1909 17.7178 19.3419 16.4198 20.6667 14.4224V24.606ZM11.5258 16.1901C14.0018 17.1793 16.829 16.5983 18.7141 14.7128C19.968 13.4652 20.6707 11.7678 20.6657 9.999C20.6657 8.40626 19.2945 7.11039 17.6561 7.11039C16.0178 7.11039 14.6846 8.40626 14.6846 9.999V13.11H13.3139V9.999C13.3139 8.40626 11.9812 7.11039 10.3423 7.11039C8.70345 7.11039 7.33276 8.40626 7.33276 9.999C7.33294 10.0549 7.33363 10.1106 7.33483 10.1663C7.4015 12.8316 9.04987 15.2008 11.5258 16.1901ZM10.4445 11.7775C11.1809 11.7775 11.7779 11.1805 11.7779 10.4441C11.7779 9.7077 11.1809 9.11073 10.4445 9.11073C9.70803 9.11073 9.11102 9.7077 9.11102 10.4441C9.11102 11.1805 9.70803 11.7775 10.4445 11.7775ZM18.8889 10.4441C18.8889 11.1805 18.2919 11.7775 17.5555 11.7775C16.8191 11.7775 16.222 11.1805 16.222 10.4441C16.222 9.7077 16.8191 9.11073 17.5555 9.11073C18.2919 9.11073 18.8889 9.7077 18.8889 10.4441Z"
            fill="#005ACD"
          />
        </svg>
      </div>
      <NuxtLink to="/" class="navbar-item header-title"> WISELY </NuxtLink>
      <a
        id="navbar-burger"
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <NuxtLink to="/inventory" class="navbar-item"> Inventory </NuxtLink>
        <NuxtLink to="/reservations" class="navbar-item">
          Reservations
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'AppHeader'
})
export default class AppHeader extends Vue {
  mounted() {
    // Should convert this to Typescript but for this sake of this example, not going to spend time on it
    document.addEventListener('DOMContentLoaded', () => {
      // Get all "navbar-burger" elements
      const $navbarBurger = document.getElementById('navbar-burger');
      if ($navbarBurger) {
        $navbarBurger.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = $navbarBurger.dataset.target;
          const $target = document.getElementById(target!);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          $navbarBurger.classList.toggle('is-active');
          $target!.classList.toggle('is-active');
        });
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.header-title {
  font-weight: bold;
  font-size: 1.25rem;
}

.navbar-image {
  margin: 5px 0 0 5px;
  display: flex;
  width: 44px;
  height: 44px;
  margin-right: 10px;
  padding-right: 2px;
  justify-content: center;
  align-items: center;
  border: 1px solid $color-brand-grey;
  border-radius: 50%;
  color: #005acd;
}
</style>
