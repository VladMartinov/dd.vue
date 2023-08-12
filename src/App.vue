<template>
  <router-view/>
</template>

<style lang="scss">
#app {
}

.container {
  width: 1024px;

  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;

  /* Mobile */
  @media (min-width: 1025px) {
    width: 100%;
  }

  &_full-height {
    display: flex;
    flex-direction: column;

    flex-grow: 1;
  }
}

.visually-hidden {
  opacity: 0;
  visibility: hidden;
  width: 0px;
  height: 0px;
  display: block;
  margin-left: -10000px;
  background: transparent;
  font-size: 0;
}
</style>