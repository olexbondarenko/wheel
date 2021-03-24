<template>
  <div id="app">
    <!-- Begin Wheel -->
    <div class="wheel">
      <svg
        class="wheel__main"
        :class="{ animated: isAnimated }"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 425 425"
      >
        <template v-for="(path, key) in paths">
          <g
            class="wheel__group"
            :class="{ active: randomNumber.value - 1 === key }"
            :key="key"
          >
            <path class="wheel__path" :id="`slice-${key}`" :d="path.d"></path>
            <text
              class="wheel__text"
              dominant-baseline="middle"
              :dy="path.cx / wheelSlots"
            >
              <textPath
                :xlink:href="`#slice-${key}`"
                startOffset="50%"
                text-anchor="middle"
              >
                {{ key + 1 }}
              </textPath>
            </text>
          </g>
        </template>
      </svg>
      <div class="wheel__btn" @click="generateNumber()">Крутить колесо</div>
    </div>
    <!-- // -->

    <!-- Begin modal -->
    <div class="modal" v-show="isVisibleModal">
      <div class="modal__main">
        <div class="modal__head">
          <div class="modal__head-close" @click="toggleModal()">&times;</div>
        </div>
        <div class="modal__body">
          <div class="modal__row">
            <div class="modal__col">
              <div class="modal__image">
                <img
                  :src="`https://picsum.photos/id/2${randomNumber.value}/200/300`"
                  alt=""
                />
              </div>
            </div>
            <div class="modal__col">
              <div class="modal__number">{{ randomNumber.value }}</div>
            </div>
          </div>
          <div class="modal__btn" @click="generateNumber()">Крутить колесо</div>
        </div>
      </div>
    </div>
    <!-- // -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isVisibleModal: false,
      wheelWidth: 425,
      wheelSlots: 6,
      paths: [],
      randomNumber: {
        min: 1,
        max: 6,
        value: 0,
      },
      isAnimated: false,
    };
  },
  methods: {
    createWheel(cx, cy, r, slices) {
      let fromAngle = null;
      let toAngle = null;
      let fromCoordX = null;
      let fromCoordY = null;
      let toCoordX = null;
      let toCoordY = null;
      let d = null;
      for (var i = 0; i < slices; i++) {
        fromAngle = (i * 360) / slices;
        toAngle = ((i + 1) * 360) / slices;
        fromCoordX = cx + r * Math.cos((fromAngle * Math.PI) / 180);
        fromCoordY = cy + r * Math.sin((fromAngle * Math.PI) / 180);
        toCoordX = cx + r * Math.cos((toAngle * Math.PI) / 180);
        toCoordY = cy + r * Math.sin((toAngle * Math.PI) / 180);
        d =
          "M" +
          cx +
          "," +
          cy +
          " L" +
          fromCoordX +
          "," +
          fromCoordY +
          " A" +
          r +
          "," +
          r +
          " 0 0,1 " +
          toCoordX +
          "," +
          toCoordY +
          "z";
        this.paths.push({ d, cx, cy });
      }
    },
    generateNumber() {
      this.isAnimated = true;
      this.randomNumber.value = 0;
      this.isVisibleModal = false;
      setTimeout(() => {
        let min = Math.ceil(this.randomNumber.min);
        let max = Math.floor(this.randomNumber.max);
        this.randomNumber.value = Math.floor(Math.random() * (max - min)) + min;
        this.isAnimated = false;
        this.toggleModal();
      }, 2000);
    },
    toggleModal() {
      this.isVisibleModal = !this.isVisibleModal;
    },
  },
  mounted() {
    this.createWheel(
      this.wheelWidth / 2,
      this.wheelWidth / 2,
      this.wheelWidth / 2,
      this.wheelSlots
    );
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/_reset";
@import "~@/assets/scss/_variables";
body {
  margin: 0;
  padding: 0 15px;
  font-family: "Arial", sans-serif;
  font-size: 14px;
  font-weight: 400;
}

// Begin  wheel
@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.wheel {
  position: relative;
  width: 100%;
  max-width: $circle-size + px;
  margin: 30px auto;
  &__main {
    display: block;
    overflow: visible;
    &.animated {
      transform-origin: center center;
      animation: rotating 2s linear infinite;
    }
  }
  &__group {
    cursor: pointer;
    &.active {
      .wheel {
        &__path {
          fill: $black;
          stroke: $white;
          cursor: pointer;
        }
        &__text {
          font-size: 20px;
          fill: $white;
        }
      }
    }
  }
  &__path {
    fill: $white;
    stroke: $green;
  }
  &__text {
    font-size: 20px;
    fill: $black;
    cursor: default;
  }
  &__btn {
    width: 100%;
    max-width: 290px;
    margin: 30px auto 0;
    padding: 15px;
    background: $green;
    border: 1px solid $green;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background: $black;
      color: $white;
    }
  }
}

// Begin modal
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba($color: $black, $alpha: 0.5);
  overflow-y: auto;
  &__main {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    max-width: 730px;
    transform: translate(-50%, -50%);
    background: $white;
  }
  &__head {
    position: relative;
    background: $black;
    height: 40px;
    &-close {
      position: absolute;
      top: 50%;
      right: 15px;
      font-size: 20px;
      transform: translateY(-50%);
      color: #fff;
      cursor: pointer;
    }
  }
  &__body {
    padding: 30px;
  }
  &__row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: 0 -15px;
  }
  &__col {
    flex-basis: 50%;
    max-width: 50%;
    align-self: stretch;
    padding: 0 15px;
  }
  &__image {
    img {
      display: block;
      max-width: 100%;
      width: 100%;
    }
  }
  &__number {
    display: flex;
    align-items: center;
    justify-content: center;
    background: $black;
    height: 100%;
    width: 100%;
    font-size: 25px;
    color: $white;
  }
  &__btn {
    width: 100%;
    max-width: 290px;
    margin: 30px auto 0;
    padding: 15px;
    background: $green;
    border: 1px solid $green;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background: $black;
      color: $white;
    }
  }
}
</style>
