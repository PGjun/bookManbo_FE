import axios from "axios";

const TestAxios = () => {
  axios
    .get("fakesearchData.json")
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default TestAxios;
