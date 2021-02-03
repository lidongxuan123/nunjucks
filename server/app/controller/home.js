'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render("index.html",{
      name: 'lidongxuan',
      title: "测试页"
    })
  }
}

module.exports = HomeController;
