const Reliever = () => {}

class CounterReliever extends Reliever {
  someFailingEpic(action$) {
    return action$
  }
}

export default CounterReliever
