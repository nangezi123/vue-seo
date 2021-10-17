<template>
  <div class="swipe-image">
    <van-swipe :autoplay="3000" @change="onChange">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" width="100%" @click="clickToPreview(image)" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { ImagePreview } from 'vant';
export default {
  name: 'SwipeImage',
  data() {
    return {
      images: [
        'http://www.dududu123.com:8080/image/suzhou/tianping/compress/IMG_20201115_121759.jpg',
        'http://www.dududu123.com:8080/image/suzhou/tianping/compress/IMG_20201115_132844.jpg',
        'http://www.dududu123.com:8080/image/suzhou/tianping/compress/IMG_20201115_133343.jpg',
        'http://www.dududu123.com:8080/image/suzhou/tianping/compress/IMG_20201115_135403.jpg',
        'http://www.dududu123.com:8080/image/suzhou/tianping/compress/IMG_20201115_143418.jpg',
      ],
    };
  },
  methods: {
    onChange(index) {
      console.log('当前 Swipe 索引：' + index);
    },
    clickToPreview(url) {
      ImagePreview([url])
    }
  },
}
</script>

<style lang="less" scoped>
.swipe-image {
  width: 100%;
}
</style>