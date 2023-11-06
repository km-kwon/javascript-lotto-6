import setCashData from "./util/setCashData.js";
import setLottos from "./util/setLottos.js";
import setPrizeNumber from "./util/setPrizeNumber.js";

class App {
  async play() {
    let cash = //5000;
      await setCashData();

    let lottos = await setLottos(cash);

    const prizeNumberArr = await setPrizeNumber();
  }
}

export default App;
