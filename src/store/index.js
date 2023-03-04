import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      groupHeader1: {
        name: "Incomplete",
        color: "red",
        count: 0,
      },
      groupHeader2: {
        name: "Incomplete",
        color: "yellow",
        count: 0,
      },
      groupHeader3: {
        name: "orange",
        color: "red",
        count: 0,
      },
      groupHeader4: {
        name: "green",
        color: "red",
        count: 0,
      },
      filecounts: [
        {
          id: 1,
          image:'https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png'
        },
        {
          id: 2,
          image:'https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png'
        },
      ],

      cards: [
        {
          id: 1,
          client: [
            {
              id: 1,
              name: "client name",
              cimage:
                "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            },
            {
              id: 2,
              name: "client name",
              cimage:
                "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            },
          ],
          text: "Lorem ipsum dolor sit amet consectetur ...",
          count:'1/2',
          listImage: [
           "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
          ],
          like: 12,
          count1:new Date().toLocaleDateString(),
          icon1:'mdi-calendar-month',
          count2:10,
          icon2:'mdi-chat-plus-outline', 
        },
        {
          id: 2,
          client: [
            {
              id: 1,
              name: "client name",
              cimage:
                "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            },
            {
              id: 2,
              name: "client name",
              cimage:
                "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            },
          ],
          text: "Lorem ipsum dolor sit amet consectetur ...",
          count:'1/2',
          listImage: [
           "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
          ],
          like: 12,
          count1:new Date().toLocaleDateString(),
          icon1:'mdi-calendar-month',
          count2:10,
          icon2:'mdi-chat-plus-outline', 
        },
        {
          id: 3,
          client: [
            {
              id: 1,
              name: "client name",
              cimage:
                "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            },
            {
              id: 2,
              name: "client name",
              cimage:
                "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            },
          ],
          text: "Lorem ipsum dolor sit amet consectetur ...",
          count:'1/2',
          listImage: [
           "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
          ],
          like: 12,
          count1:new Date().toLocaleDateString(),
          icon1:'mdi-calendar-month',
          count2:10,
          icon2:'mdi-chat-plus-outline', 
        },
        {
          id: 4,
          client: [
            {
              id: 1,
              name: "client name",
              cimage:
                "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            },
            {
              id: 2,
              name: "client name",
              cimage:
                "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            },
          ],
          text: "Lorem ipsum dolor sit amet consectetur ...",
          count:'1/2',
          listImage: [
           "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
          ],
          like: 12,
          count1:new Date().toLocaleDateString(),
          icon1:'mdi-calendar-month',
          count2:10,
          icon2:'mdi-chat-plus-outline', 
        },
        {
          id: 5,
          client: [
            {
              id: 1,
              name: "client name",
              cimage:
                "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            },
            {
              id: 2,
              name: "client name",
              cimage:
                "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            },
          ],
          text: "Lorem ipsum dolor sit amet consectetur ...",
          count:'1/2',
          listImage: [
           "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
          ],
          like: 12,
          count1:new Date().toLocaleDateString(),
          icon1:'mdi-calendar-month',
          count2:10,
          icon2:'mdi-chat-plus-outline', 
        },
        {
          id: 6,
          client: [
            {
              id: 1,
              name: "client name",
              cimage:
                "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            },
            {
              id: 2,
              name: "client name",
              cimage:
                "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            },
          ],
          text: "Lorem ipsum dolor sit amet consectetur ...",
          count:'1/2',
          listImage: [
           "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
          ],
          like: 12,
          count1:new Date().toLocaleDateString(),
          icon1:'mdi-calendar-month',
          count2:10,
          icon2:'mdi-chat-plus-outline', 
        },
        {
          id: 7,
          client: [
            {
              id: 1,
              name: "client name",
              cimage:
                "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            },
            {
              id: 2,
              name: "client name",
              cimage:
                "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            },
          ],
          text: "Lorem ipsum dolor sit amet consectetur ...",
          count:'1/2',
          listImage: [
           "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
          ],
          like: 12,
          count1:new Date().toLocaleDateString(),
          icon1:'mdi-calendar-month',
          count2:10,
          icon2:'mdi-chat-plus-outline', 
        },
        {
          id: 8,
          client: [
            {
              id: 1,
              name: "client name",
              cimage:
                "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            },
            {
              id: 2,
              name: "client name",
              cimage:
                "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            },
          ],
          text: "Lorem ipsum dolor sit amet consectetur ...",
          count:'1/2',
          listImage: [
           "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
          ],
          like: 12,
          count1:new Date().toLocaleDateString(),
          icon1:'mdi-calendar-month',
          count2:10,
          icon2:'mdi-chat-plus-outline', 
        },
      ],
    };
  },
  getters: {
    getFile(state){
      return state.filecounts.length;
    }
  },
  mutations: {
    UPLOAD_IMAGE(state,payload){
      let file = payload;
      if(file.length>1){
        state.filecounts += file;
      }
      state.filecounts.push(file);

    }
  },
  actions: {
      uploadFile({commit},image){
      commit('UPLOAD_IMAGE',image);
      
    }
  },
  modules: {},
});
