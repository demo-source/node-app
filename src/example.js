export class Test {
  #test1 = 'test: '
  #test2 = () => 'ok'

  getResult() {
    return this.#test1 + this.#test2()
  }
}
