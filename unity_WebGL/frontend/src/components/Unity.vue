<template>
<div>
  <div class="d-flex justify-content-center my-">
    <unity
      src="./BT4/Build/Build.json"
      unityLoader="./BT4/Build/UnityLoader.json"
      class="unity-style mt-3"
      ref="unityInstance"
    ></unity>
  </div>
    <p>{{ id }} {{ nickname }}</p>
    <button class="btn btn-info text-white" @click="getUnityHook">계정 연동</button>
    <button v-b-modal.modal-center class="btn btn-warning text-white" @click="rank">순위 보기</button>
    <div>

      <b-modal id="modal-center" centered title="게임별 랭킹">
        <div class="bv-example-row">
          <b-row>
            <div class="login-box b-col-4 dongdong">Dot Dot
              <p>1. </p>
              <p>2. </p>
              <p>3. </p>
            </div>
            <div class="login-box b-col-4 dongdong">Sudoku
              <p>1. </p>
              <p>2. </p>
              <p>3. </p>
            </div>
            <div class="login-box b-col-6 dongdong">Sliding Puzzle
              <p>1. </p>
              <p>2. </p>
              <p>3. </p>
            </div>
            <div class="login-box b-col-6 dongdong">Memory Game
              <p>1. </p>
              <p>2. </p>
              <p>3. </p>
            </div>
          </b-row>
        </div>
      </b-modal>
    </div>
</div>
</template>

<script>
import Unity from "vue-unity-webgl";
import http from "@/util/http-common2";

export default {
  // name: "Unity",
  data() {
    return {
      id: localStorage.getItem("id"),
      nickname: localStorage.getItem("nickname"),
    };
  },
  created() {
    // this.user = this.$store.getters.user;
    // console.log("유니티 유저정보" + this.user);
    // console.log(this.user);
    console.log("getter");
    console.log(this.$store.state.user.id);
    console.log(this.$store.getters.user);
  },
  components: { Unity },
  methods: {
    getUnityHook() {
      this.$refs.unityInstance.message('JavascriptHook', 'SetNickname', this.nickname);
    },
    rank() {
      http
        .get("/rank", {
        })
        .then(({ data }) => {
          console.log(data)
        }).catch(() => {
        })
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.unity-style {
  width: 80%;
  height: 80%;
}
</style>
