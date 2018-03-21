class A {
  someEpic(action$) {
    return action$.mapTo({type: 'XXX'})
  }
}
