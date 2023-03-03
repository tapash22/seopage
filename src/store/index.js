import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state(){
    return{
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
              id: 1,
              name: "client name",
              cimage:
                "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            },
          ],
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
          listImage: [
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
          ],
          like: 12,
          commont: [
            {
              id: 1,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
            {
              id: 2,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
            {
              id: 3,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
            {
              id: 4,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
          ],
          fileCount: 25,
          date: new Date(),
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
              id: 1,
              name: "client name",
              cimage:
                "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            },
          ],
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
          listImage: [
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
          ],
          like: 12,
          commont: [
            {
              id: 1,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
            {
              id: 2,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
            {
              id: 3,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
            {
              id: 4,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
          ],
          fileCount: 25,
          date: new Date(),
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
              id: 1,
              name: "client name",
              cimage:
                "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            },
          ],
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
          listImage: [
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
          ],
          like: 12,
          commont: [
            {
              id: 1,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
            {
              id: 2,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
            {
              id: 3,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
            {
              id: 4,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
          ],
          fileCount: 25,
          date: new Date(),
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
              id: 1,
              name: "client name",
              cimage:
                "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            },
          ],
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
          listImage: [
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
          ],
          like: 12,
          commont: [
            {
              id: 1,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
            {
              id: 2,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
            {
              id: 3,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
            {
              id: 4,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
          ],
          fileCount: 25,
          date: new Date(),
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
              id: 1,
              name: "client name",
              cimage:
                "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            },
          ],
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
          listImage: [
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
          ],
          like: 12,
          commont: [
            {
              id: 1,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
            {
              id: 2,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
            {
              id: 3,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
            {
              id: 4,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
          ],
          fileCount: 25,
          date: new Date(),
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
              id: 1,
              name: "client name",
              cimage:
                "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            },
          ],
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
          listImage: [
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
          ],
          like: 12,
          commont: [
            {
              id: 1,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
            {
              id: 2,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
            {
              id: 3,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
            {
              id: 4,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
          ],
          fileCount: 25,
          date: new Date(),
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
              id: 1,
              name: "client name",
              cimage:
                "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            },
          ],
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
          listImage: [
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
          ],
          like: 12,
          commont: [
            {
              id: 1,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
            {
              id: 2,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
            {
              id: 3,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
            {
              id: 4,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
          ],
          fileCount: 25,
          date: new Date(),
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
              id: 1,
              name: "client name",
              cimage:
                "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            },
          ],
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
          listImage: [
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
            "https://www.nicepng.com/png/detail/7-78595_asian-businessman-png-professional-man-images-png.png",
          ],
          like: 12,
          commont: [
            {
              id: 1,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
            {
              id: 2,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
            {
              id: 3,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
            {
              id: 4,
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, officia...",
            },
          ],
          fileCount: 25,
          date: new Date(),
        },
      ],
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
