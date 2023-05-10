// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TestController {
  public async handle() {
    return { test: 'controller' }
  }
}
