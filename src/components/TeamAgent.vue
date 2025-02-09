<template>
  <div class="row">
    <div class="col-sm-6 col-12 img-container">
      <img class="img img-fluid" :src="imgSrc" alt="" />
    </div>
    <div class="col-sm-6 col-12 desc-container">
      <h3>{{this.name}}</h3>
      <p>
        {{ this.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamAgent",
  props: {
    name: String,
    description: String,
    imagePath: String,
  },
  computed: {
    imgSrc() {
        return require(`@/assets/${this.imagePath}`);
    }
  }
};
</script>

<style scoped>
p {
  color: white;
}

h3 {
  color: #ea23dd;
  margin-bottom: 30px;
}

.img {
  border: 1px solid #ea23dd;
  width: 50%;
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .img {
    width: 80%;
  }
  p {
    font-size: 15px;
  }
  h3 {
    margin-bottom: 10px;
  }
}
@media screen and (min-width: 576px) and (max-width: 767px) {
  .img {
    margin-top: 20px;
    width: 80%;
  }
  p {
    font-size: 13px;
  }
  h3 {
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 575px) {
  .img {
    width: 40%;
  }
  p {
    font-size: 13px;
    
  }
  h3 {
    margin-bottom: 10px;
  }
}

</style>