<template>
  <div>
    <div>
        <swiper :options="swiperOption">
            <swiper-slide>
                <div class="slide">Slide 1</div>
            </swiper-slide>
            <swiper-slide>
                <div class="slide">Slide 2</div>
            </swiper-slide>
            <swiper-slide>
                <div class="slide">Slide 3</div>
            </swiper-slide>
            <swiper-slide>
                <div class="slide">Slide 4</div>
            </swiper-slide>
            <swiper-slide>
                <div class="slide">Slide 5</div>
            </swiper-slide>
        </swiper>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    data() {
      return {
        swiperOption: {
            direction:'horizontal',
            slidesPerView: 'auto',
            freeMode: true,
            spaceBetween:10
        }
      }
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>

<style lang="less">
.slide {
    height: 200px;
}
.swiper-container {
    width: 500px;
}
.swiper-wrapper .swiper-slide {
    width: 200px;
    background: #fff;
}
</style>