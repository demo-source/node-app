/**
 * Тестовый класс
 *
 * @returns {Test}
 */
export class Test {

  #test1 = 'test: '
  #test2 = () => 'ok'

  /** @returns {string} */
  getResult() {
    return this.#test1 + this.#test2()
  }

}
