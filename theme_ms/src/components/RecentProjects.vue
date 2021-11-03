<template>
  <section id="recent-projects" class="overflow-hidden">
    <v-row no-gutters>
      <v-col class="primary text-center pa-5 white--text" cols="12" md="6">
        <base-bubble-1 style="transform: rotate(180deg) translateX(25%)" />

        <base-heading>
          테스트
        </base-heading>

        <base-text class="mb-5">
          <input type="text" placeholder="ID" id="id" name="id" v-model="id" />
          <input
            type="text"
            placeholder="Nickname"
            id="nickname"
            name="nickname"
            v-model="nickname"
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            v-model="password"
          />
          <button @click="register">클릭</button>
        </base-text>

        <v-card color="secondary">
          <v-container class="pa-2">
            <v-row>
              <v-col
                v-for="project in projects"
                :key="project"
                cols="12"
                md="6"
              >
                <a href="#">
                  <v-img
                    :src="require(`@/assets/${project}.jpeg`)"
                    max-height="300"
                  />
                </a>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>

      <v-col class="hidden-sm-and-down" md="6">
        <v-img :src="require('@/assets/recentprojects.png')" height="100%" />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import http from "@/util/http-common";

export default {
  name: "RecentProjects",

  data: () => ({
    projects: ["project1", "project2", "project3", "project4"],
    id: "",
    nickname: "",
    password: ""
  }),
  methods: {
    register() {
      http
        .post("/users/signUp", {
          // id: this.id,
          // password: this.password,
          // nickname: this.nickname
          id: "ssafy222",
          password: "Qwer!234",
          nickname: "ssafy222"
        })
        .then(({ data }) => {
          console.log(data);
          if (data.statusCode == 200) {
            alert("회원가입이 완료되었습니다");
          } else {
            alert("회원가입 실패");
          }
        });
    }
  }
};
</script>
