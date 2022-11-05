/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx25fc2017dfe78f5a',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '1b3b58eb6d05bd6e3b6c774d5fe13a34',

  PROVINCE: '黑龙江',
  CITY: '齐齐哈尔',

  USERS: [
    {
      // 想要发送的人的名字
      name: '丫头',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'obeK75zdLHCUIELxEaDdI9CK5ijY',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-16',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '丫头', year: '2000', date: '12-10',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '丫头', year: '2000', date: '01-16',
        },
        {
          type: '节日', name: '相恋纪念日', year: '2021', date: '12-20',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-12-20' },
        // 相识纪念日
        { keyword: 'marry_day', date: '2021-08-12' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'MkA4RwGyUsPsYpe9p1kE3patk8yCwQJApuIB_Te2_Ko',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'obeK758HefPXSh0GZsBShljDb1Ic',
    }
  ],

}

module.exports = USER_CONFIG

