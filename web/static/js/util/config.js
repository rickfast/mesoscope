import _ from "lodash";

const CONFIG = window && window.mesoscopeConfig ?
  window.mesoscopeConfig :
  {
    marathon: {
      enabled: true
    },
    chronos: {
      enabled: true
    }
  };

class Config {

  static get(key) {
    return _.get(CONFIG, key);
  }
}

export default Config;
