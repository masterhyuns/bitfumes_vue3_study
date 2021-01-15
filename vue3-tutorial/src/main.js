const template = `
        <div>
          <h1>Hi</h1>
          <h3>{{title}}</h3>
        </div>
      `;

const data = function data() {
  return {
    title: "Vue3 Tutorial",
  };
};
const App = { data, template };
Vue.createApp({
  App,
}).mount("#vue-app");
