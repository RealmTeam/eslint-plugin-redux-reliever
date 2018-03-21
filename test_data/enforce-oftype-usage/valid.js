class A {
  someEpic(action$) {
    const selector$ = action$.ofType('X')
    return selector$.mapTo({type: 'Y'})
  }

  someOtherEpic(action$) {
    return action$.ofType('X').mapTo({type: 'Y'})
  }

  someTest() {
    console.log('something completely unrelated')
  }
}
