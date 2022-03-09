
import axios from "axios";

export default {
  data() {
    return {
      message: ""
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      axios
        .get('https://api.github.com/users/' + this.username)
        .then((res) => {
          this.message = res.data;
        })
        .catch((error) => {
          console.log(error);
          
        });
    },
  },
}
