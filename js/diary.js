var _act = [
  {
    id: 1, // 第一次活动
    date: '2016.9.22', // 活动日期
    begin: ['阿何','吊爷','樱井','麦兜','西法','悟饭','奇迹','蝌蚪王','踏足者',
            '本泽马','猫粮','满爷','马静','火歌','伤心','风哥','老严','血魔','小七',
            '6BB','喵星人','前卫','Des','杯酱','言水','滑稽'], // 集合分 30
    off: [], // 请假分 10
    end: ['阿何','吊爷','樱井','麦兜','西法','奇迹','蝌蚪王','踏足者','本泽马','老严',
          '猫粮','满爷','马静','火歌','伤心','风哥','血魔','小七','6BB','喵星人',
          'Des','杯酱','言水','滑稽','命运','速度灭','小黑','小虾','小峰','黑锋'], // 解散分 20
    kill: [
      {
        name: '梦魇之龙', // 击杀BO术士
        dif: 'pt', // 难度
        ren: ['阿何','吊爷','樱井','麦兜','西法','悟饭','奇迹','蝌蚪王','踏足者','本泽马',
              '猫粮','满爷','马静','火歌','伤心','风哥','老严','血魔','小七','6BB','喵星人',
              '前卫','Des','杯酱','言水','滑稽','速度灭','小黑','小峰','黑锋'],
        equip: [
          {
            name: '暗影圣物',
            point: 20,
            ren: '樱井'
          },
          {
            name: '暗影圣物',
            point: 20,
            ren: '前卫'
          },
          {
            name: '暗影圣物',
            point: 20,
            ren: '喵星人'
          },
          {
            name: '生命圣物',
            point: 20,
            ren: '蝌蚪王'
          },
          {
            name: '远程SP',
            point: 20,
            ren: '6BB'
          },
          {
            name: '布甲肩',
            point: 15,
            ren: '小七'
          },
        ]
      },
      {
        name: '腐蚀之心',
        dif: 'pt', // 难度
        ren: ['阿何','吊爷','樱井','麦兜','西法','奇迹','蝌蚪王','踏足者','本泽马',
              '猫粮','满爷','马静','火歌','伤心','风哥','血魔','小七','6BB','喵星人',
              '小虾','Des','杯酱','言水','滑稽','命运','速度灭','小黑','小峰','黑锋'],
        equip: [
          {
            name: '布甲手',
            point: 5,
            ren: '6BB'
          },
          {
            name: '锁甲手',
            point: 5,
            ren: '速度灭'
          },
          {
            name: '鲜血圣物',
            point: 50,
            ren: '吊爷'
          },
          {
            name: '火焰圣物',
            point: 40,
            ren: '血魔'
          },
          {
            name: '火焰圣物',
            point: 20,
            ren: '小七'
          },
          {
            name: '精通SP',
            point: 25,
            ren: '蝌蚪王'
          },
        ]
      },
      {
        name: '乌索克',
        dif: 'pt', // 难度
        ren: ['阿何','吊爷','樱井','麦兜','西法','奇迹','蝌蚪王','踏足者','本泽马',
              '猫粮','满爷','马静','火歌','伤心','风哥','老严','血魔','小七','6BB','喵星人',
              '小虾','Des','杯酱','言水','滑稽','命运','速度灭','小黑','小峰','黑锋'],
        equip: [
          {
            name: '项链',
            point: 35,
            ren: '本泽马'
          },
          {
            name: '板甲鞋',
            point: 15,
            ren: '西法'
          },
          {
            name: '板甲鞋',
            point: 5,
            ren: '小虾'
          },
          {
            name: '皮甲',
            point: 35,
            ren: '言水'
          },
          {
            name: '力量SP',
            point: 0,
            ren: ''
          },
          {
            name: '力量SP',
            point: 0,
            ren: ''
          },
        ]
      },
      {
        name: '四傻龙',
        dif: 'pt', // 难度
        ren: ['阿何','吊爷','樱井','麦兜','西法','奇迹','蝌蚪王','踏足者','本泽马',
              '猫粮','满爷','马静','火歌','伤心','风哥','老严','血魔','小七','6BB','喵星人',
              '小虾','Des','杯酱','言水','滑稽','命运','速度灭','小黑','小峰','黑锋'],
        equip: [
          {
            name: '板甲',
            point: 5,
            ren: '喵星人'
          },
          {
            name: '布甲',
            point: 10,
            ren: '猫粮'
          },
          {
            name: '远程SP',
            point: 0,
            ren: ''
          },
          {
            name: '板甲',
            point: 20,
            ren: '小虾'
          },
          {
            name: '暗影圣物',
            point: 40,
            ren: 'Des'
          },
          {
            name: '锁甲鞋',
            point: 5,
            ren: '风哥'
          },
        ]
      },
      {
        name: '蜘蛛鸟',
        dif: 'pt', // 难度
        ren: ['阿何','吊爷','樱井','麦兜','西法','奇迹','蝌蚪王','踏足者','本泽马',
              '猫粮','满爷','马静','火歌','伤心','风哥','老严','血魔','小七','6BB','喵星人',
              '小虾','Des','杯酱','言水','滑稽','命运','速度灭','小黑','小峰','黑锋'],
        equip: [
          {
            name: '邪能圣物',
            point: 40,
            ren: '小七'
          },
          {
            name: '板甲头',
            point: 5,
            ren: '麦兜'
          },
          {
            name: '锁甲衣',
            point: 20,
            ren: '老严'
          },
          {
            name: 'SP',
            point: 80,
            ren: '伤心'
          },
          {
            name: '皮甲头',
            point: 50,
            ren: '樱井'
          },
          {
            name: '板甲腿',
            point: 10,
            ren: '小虾'
          },
        ]
      }
    ]
  },
  {
  id: 1, // 第二次活动
  date: '2016.9.23', // 活动日期
  begin: ['阿何','吊爷','樱井','麦兜','西法','本泽马','猫粮','速度灭','悟饭','风哥',
          '伤心','言水','满爷','奇迹','樱井','血魔','小峰','小灵','Des','老严','滑稽'
          ,'蝌蚪王','火歌','前卫','小虾','黑锋','小黑'],
  off: ['马静','6BB','小七','喵星人','杯酱'], // 请假分 10
  end: ['阿何','吊爷','樱井','麦兜','西法','本泽马','猫粮','速度灭','悟饭',
        '伤心','言水','奇迹','樱井','血魔','小峰','Des','老严','滑稽'
        ,'蝌蚪王','火歌','前卫','小虾','满爷','马静','小七','6BB','小黑','风哥'],
  add: [
    {
      name: '本泽马',
      point: 5,
      mes: '塞纳留斯治疗第一'
    },
    {
      name: '吊爷',
      point: 5,
      mes: '塞纳留斯DPS第一'
    },
    {
      name: '本泽马',
      point: 5,
      mes: '萨维斯治疗第一'
    },
    {
      name: '小黑',
      point: 5,
      mes: '萨维斯DPS第一'
    }
  ],
  reduce: [
    {
      name: '小虾',
      point: 5,
      mes: '毒炸人群'
    },
    {
      name: '吊爷',
      point: 5,
      mes: '毒炸人群'
    },
    {
      name: '吊爷',
      point: 5,
      mes: '被翅膀下面藏着的虫子炸死'
    },
    {
      name: '麦兜',
      point: 5,
      mes: '毒放BOSS前面'
    },
  ],
  kill: [
    {
      name: '塞纳留斯',
      dif: 'pt', // 难度
      ren: ['阿何','吊爷','樱井','麦兜','西法','本泽马','猫粮','速度灭','悟饭','风哥',
            '伤心','言水','满爷','奇迹','樱井','血魔','小峰','小灵','Des','老严','滑稽'
            ,'蝌蚪王','火歌','前卫','小虾','黑锋','马静','小七','6BB','小黑'],
      equip: [
        {
          name: '近战SP',
          point: 20,
          ren: '奇迹'
        },
        {
          name: '近战SP',
          point: 20,
          ren: '言水'
        },
        {
          name: '板甲头',
          point: 20,
          ren: '小虾'
        },
        {
          name: '皮甲胸',
          point: 110,
          ren: '小峰'
        },
        {
          name: '板甲衣',
          point: 5,
          ren: '黑锋'
        },
        {
          name: '生命圣物',
          point: 20,
          ren: '悟饭'
        },
      ]
    }
    ,
    {
      name: '萨维斯',
      dif: 'pt', // 难度
      ren: ['阿何','吊爷','樱井','麦兜','西法','本泽马','猫粮','速度灭','悟饭','风哥',
            '伤心','言水','满爷','奇迹','樱井','血魔','小峰','小灵','Des','老严','滑稽'
            ,'蝌蚪王','火歌','前卫','小虾','黑锋','马静','小七','6BB','小黑'],
      equip: [
        {
          name: '锁甲腿',
          point: 30,
          ren: '马静'
        },
        {
          name: '锁甲护腕',
          point: 20,
          ren: '老严'
        },
        {
          name: '布甲',
          point: 30,
          ren: '猫粮'
        },
        {
          name: '皮甲裤',
          point: 50,
          ren: '本泽马'
        },
        {
          name: '板甲腰',
          point: 35,
          ren: '黑锋'
        },
        {
          name: '邪能圣物',
          point: 20,
          ren: '言水'
        },
      ]
    }
  ]
},
{
  id: 1, // 第一次活动
  date: '2016.9.24', // 活动日期
  begin: ['阿何','奇迹','西法','Des','小黑','蝌蚪王','猫粮','速度灭','小峰','风哥'
          ,'言水','血魔','饭团','伤心','小七','满爷','滑稽','马静','前卫','今晚'
          ,'樱井','吊爷','小灵','火歌','麦兜','尼好','悟饭','小虾'], // 集合分 30
  off: ['老严','6BB'], // 请假分 10
  end: ['阿何','奇迹','西法','Des','小黑','蝌蚪王','猫粮','速度灭','小峰','风哥'
          ,'言水','血魔','伤心','小七','满爷','滑稽','马静','前卫','今晚'
          ,'樱井','吊爷','火歌','麦兜','尼好','6BB','小虾','饭团'],
  add: [
    {
      name: '尼好',
      point: 50,
      mes: '初始分'
    },
    {
      name: '饭团',
      point: 50,
      mes: '初始分'
    },
    {
      name: '今晚',
      point: 50,
      mes: '初始分'
    },
    {
      name: '奇迹',
      point: 5,
      mes: 'H尼姗德拉DPS第一'
    },
    {
      name: '猫粮',
      point: 5,
      mes: 'H尼姗德拉治疗第一'
    },
    {
      name: '血魔',
      point: 5,
      mes: 'H梦魇之龙DPS第一'
    },
    {
      name: '小峰',
      point: 5,
      mes: 'H梦魇之龙治疗第一'
    },
    {name: '阿何',point: 30,mes: '全勤分'},{name: '吊爷',point: 30,mes: '全勤分'},
    {name: '麦兜',point: 30,mes: '全勤分'},{name: '西法',point: 30,mes: '全勤分'},
    {name: '奇迹',point: 30,mes: '全勤分'},{name: '蝌蚪王',point: 30,mes: '全勤分'},
    {name: '猫粮',point: 30,mes: '全勤分'},{name: '风哥',point: 30,mes: '全勤分'},
    {name: '满爷',point: 30,mes: '全勤分'},{name: '火歌',point: 30,mes: '全勤分'},
    {name: '伤心',point: 30,mes: '全勤分'},{name: '血魔',point: 30,mes: '全勤分'},
    {name: '樱井',point: 30,mes: '全勤分'},{name: 'Des',point: 30,mes: '全勤分'},
    {name: '言水',point: 30,mes: '全勤分'},{name: '滑稽',point: 30,mes: '全勤分'}
  ],
  reduce: [
    {
      name: '小灵',
      point: 10,
      mes: '炸人群'
    }
  ],
  kill: [
    {
      name: '尼姗德拉',
      dif: 'H', // 难度
      ren: ['阿何','奇迹','西法','Des','小黑','蝌蚪王','猫粮','速度灭','小峰','风哥'
              ,'言水','血魔','伤心','小七','满爷','滑稽','马静','前卫','今晚'
              ,'樱井','吊爷','小灵','火歌','麦兜','尼好','悟饭','小虾'],
      equip: [
        {
          name: '皮甲鞋',
          point: 50,
          ren: '奇迹'
        },
        {
          name: '神圣圣物',
          point: 60,
          ren: '西法'
        },
        {
          name: '戒指',
          point: 105,
          ren: '言水'
        },
        {
          name: '冰霜圣物',
          point: 100,
          ren: '蝌蚪王'
        },
        {
          name: '板甲衣',
          point: 50,
          ren: '吊爷'
        }
      ]
    },
    {
      name: '梦魇之龙',
      dif: 'H', // 难度
      ren: ['阿何','奇迹','西法','Des','小黑','蝌蚪王','猫粮','速度灭','小峰','风哥'
              ,'言水','血魔','伤心','小七','满爷','滑稽','马静','前卫','今晚'
              ,'樱井','吊爷','火歌','麦兜','尼好','6BB','小虾','饭团'],
      equip: [
        {
          name: '带槽戒指',
          point: 190,
          ren: '麦兜'
        },
        {
          name: '战火戒指',
          point: 160,
          ren: '风哥'
        },
        {
          name: '奥术圣物',
          point: 125,
          ren: '血魔'
        },
        {
          name: '布甲手',
          point: 80,
          ren: '6BB'
        },
        {
          name: '生命圣物',
          point: 160,
          ren: '速度灭'
        }
        ,
        {
          name: '板甲护腕',
          point: 60,
          ren: '阿何'
        }
      ]
    }
    ]
},
{
id: 2, // 第二次活动
date: '2016.9.29', // 活动日期
begin: ['阿何','小七','前卫','言水','伤心','火歌','满爷','今晚','马静','西法'
        ,'奇迹','小峰','悟饭','速度灭','小虾','小黑','Des','麦兜','一建','滑稽','河蟹'],
off: ['吊爷','6BB','樱井','猫粮','风哥','血魔'], // 请假分 10
end: ['阿何','小七','前卫','言水','伤心','火歌','满爷','今晚','马静','西法'
      ,'奇迹','小峰','悟饭','速度灭','小虾','小黑','Des','麦兜','一建','滑稽'
      ,'老严','黑锋','喵星人','蝌蚪王','河蟹','风哥','吊爷','猫粮'],
add: [
  {
    name: '小七',
    point: 5,
    mes: 'H老一DPS第一'
  },
  {
    name: '蝌蚪王',
    point: 5,
    mes: 'H老一治疗第一'
  }
  ,
  {
    name: '河蟹',
    point: 50,
    mes: '初始分'
  }
  ,
  {
    name: '一建',
    point: 50,
    mes: '初始分'
  },
  {
    name: '小七',
    point: 5,
    mes: 'H梦魇之龙DPS第一'
  },
  {
    name: '小峰',
    point: 5,
    mes: 'H梦魇之龙治疗第一'
  }
],
reduce: [
  {
    name: '吊爷',
    point: 10,
    mes: '被虫子炸死'
  },
  {
    name: '黑锋',
    point: 10,
    mes: '被虫子炸死'
  },
  {
    name: '言水',
    point: 10,
    mes: '被虫子炸死'
  },
  {
    name: '吊爷',
    point: 10,
    mes: '被虫子炸死'
  },
  {
    name: '小黑',
    point: 10,
    mes: '地上放水'
  }
  ,
  {
    name: '麦兜',
    point: 5,
    mes: '引BOSS'
  }
  ,
  {
    name: '小虾',
    point: 10,
    mes: '引BOSS并灭团'
  }
  ,
  {
    name: '小虾',
    point: 10,
    mes: '风放绿水'
  }
  ,
  {
    name: '阿何',
    point: 50,
    mes: '被BOSS打下去'
  }
],
kill: [
  {
    name: '尼姗德拉',
    dif: 'H', // 难度
    ren: ['阿何','小七','前卫','言水','伤心','火歌','满爷','今晚','马静','西法'
            ,'奇迹','小峰','悟饭','速度灭','小虾','小黑','Des','麦兜','一建','滑稽'
          ,'老严','黑锋','喵星人','蝌蚪王','河蟹','风哥','吊爷'],
    equip: [
      {
        name: '生命圣物',
        point: 75,
        ren: '火歌'
      },
      {
        name: '戒指',
        point: 20,
        ren: '速度灭'
      },
      {
        name: '戒指',
        point: 20,
        ren: '蝌蚪王'
      },
      {
        name: '神圣圣物',
        point: 70,
        ren: '悟饭'
      },
      {
        name: '皮甲鞋',
        point: 15,
        ren: '前卫'
      }
    ]
  },
  {
    name: '梦魇之龙',
    dif: 'H', // 难度
    ren: ['阿何','小七','前卫','言水','伤心','火歌','满爷','今晚','马静','西法'
            ,'奇迹','小峰','悟饭','速度灭','小虾','小黑','Des','麦兜','一建','滑稽'
          ,'老严','黑锋','喵星人','蝌蚪王','河蟹','风哥','吊爷','猫粮'],
    equip: [
      {
        name: '治疗SP',
        point: 80,
        ren: '猫粮'
      },
      {
        name: '暗影圣物',
        point: 90,
        ren: 'Des'
      },
      {
        name: '板甲护腕',
        point: 35,
        ren: '喵星人'
      },
      {
        name: '暴击SP',
        point: 20,
        ren: '伤心'
      },
      {
        name: '生命SP',
        point: 230,
        ren: '奇迹'
      }
    ]
  }
  ]
}
,
{
id: 2,
date: '2016.9.30',
begin: ['阿何','小灵','喵星人','麦兜','樱井','蘑菇','血魔','一建','滑稽'
	,'满爷','言水','风哥','奇迹','马静','西法','蝌蚪王','小峰','吊爷'
	,'小七','火歌','小黑','速度灭','今晚','命运'],
off: ['黑锋','小虾','Des','猫粮','悟饭','6BB'], // 请假分 10
end: ['阿何','小灵','喵星人','麦兜','樱井','血魔','一建','滑稽'
  ,'满爷','风哥','言水','奇迹','马静','西法','蝌蚪王','小峰','吊爷'
  ,'小七','火歌','小黑','速度灭','猫粮','小虾','今晚'],
add: [
  {
    name: '蘑菇',
    point: 50,
    mes: '初始分'
  },
  {
    name: '血魔',
    point: 5,
    mes: 'H蜘蛛鸟DPS第一'
  },
  {
    name: '速度灭',
    point: 5,
    mes: 'H蜘蛛鸟治疗第一'
  }
  ,
  {
    name: '血魔',
    point: 5,
    mes: 'H眼球DPS第一'
  }
  ,
  {
    name: '西法',
    point: 5,
    mes: 'H眼球治疗第一'
  }
  ,
  {
    name: '奇迹',
    point: 5,
    mes: 'H乌索克DPS第一'
  }
  ,
  {
    name: '猫粮',
    point: 5,
    mes: 'H乌索克治疗第一'
  }
],
reduce: [
  {
    name: '小灵',
    point: 10,
    mes: '引到BOSS'
  },
  {
    name: '今晚',
    point: 10,
    mes: '风放绿水上'
  },
  {
    name: '吊爷',
    point: 10,
    mes: '死在内场'
  },
  {
    name: '前卫',
    point: 10,
    mes: '死在内场'
  }
  ,
  {
    name: '风哥',
    point: 10,
    mes: '死在内场'
  }
  ,
  {
    name: '踏足者',
    point: 10,
    mes: '死在内场'
  }
  ,
  {
    name: '小灵',
    point: 10,
    mes: '乌索克跑头上'
  }
],
kill: [
  {
    name: '蜘蛛鸟',
    dif: 'H',
    ren: ['阿何','小灵','喵星人','麦兜','樱井','蘑菇','血魔','一建','滑稽'
    	,'满爷','言水','风哥','奇迹','马静','西法','蝌蚪王','小峰','吊爷'
    	,'小七','火歌','小黑','速度灭','今晚','命运','踏足者'],
    equip: [
      {
        name: '皮甲护腕',
        point: 65,
        ren: '樱井'
      },
      {
        name: '治疗SP',
        point: 80,
        ren: '西法'
      },
      {
        name: '锁甲鞋',
        point: 80,
        ren: '马静'
      },
      {
        name: '布甲腰带',
        point: 60,
        ren: '小七'
      },
      {
        name: '风暴圣物',
        point: 200,
        ren: '马静'
      },
    ]
  }
  ,
  {
    name: '眼球',
    dif: 'H',
    ren: ['阿何','小灵','喵星人','麦兜','樱井','蘑菇','血魔','一建','滑稽'
    	,'满爷','言水','风哥','奇迹','马静','西法','蝌蚪王','小峰','吊爷'
    	,'小七','火歌','小黑','速度灭','猫粮','小虾','前卫'],
    equip: [
      {
        name: '布甲腰带',
        point: 25,
        ren: '猫粮'
      },
      {
        name: '锁甲腿',
        point: 100,
        ren: '速度灭'
      },
      {
        name: '法系SP',
        point: 150,
        ren: '滑稽'
      }
      ,
      {
        name: '皮甲手',
        point: 20,
        ren: '小峰'
      }
      ,
      {
        name: 'TSP',
        point: 20,
        ren: '麦兜'
      }
      ,
      {
        name: '鲜血SP',
        point: 275,
        ren: '火歌'
      }
    ]
  },
  {
    name: '乌索克',
    dif: 'H',
    ren: ['阿何','小灵','喵星人','麦兜','樱井','血魔','一建','滑稽'
    	,'满爷','风哥','奇迹','马静','西法','蝌蚪王','小峰','吊爷'
    	,'小七','火歌','小黑','速度灭','猫粮','小虾','今晚'],
    equip: [
      {
        name: '锁甲鞋',
        point: 65,
        ren: '今晚'
      },
      {
        name: '治疗SP',
        point: 70,
        ren: '西法'
      }
      ,
      {
        name: 'TSP',
        point: 20,
        ren: '麦兜'
      }
      ,
      {
        name: '布甲护腕',
        point: 10,
        ren: '猫粮'
      }
      ,
      {
        name: '敏捷SP',
        point: 330,
        ren: '满爷'
      }
    ]
  }
]
}
,
{
id: 2,
date: '2016.10.1',
begin: ['阿何','吊爷','麦兜','饭团','奇迹','西法','老圈','猫粮','速度灭','辣眼睛','滑稽'
      ,'一建','血魔','小七','小峰','火歌','小黑','马静','樱井','小虾','私欲','正气','前卫'
      ,'风哥','满爷'],
off: ['老严','6BB','黑锋'], // 请假分 10
end: ['阿何','吊爷','麦兜','奇迹','西法','老圈','猫粮','速度灭','滑稽'
      ,'一建','血魔','小峰','火歌','小黑','马静','樱井','小虾','正气','前卫'
      ,'风哥','满爷','今晚','小灵'],
add: [
  {
    name: '辣眼睛',
    point: 50,
    mes: '初始分'
  },
  {
    name: '私欲',
    point: 50,
    mes: '初始分'
  },
  {
    name: '正气',
    point: 50,
    mes: '初始分'
  },
  {
    name: '老圈',
    point: 50,
    mes: '初始分'
  },
  {
    name: '奇迹',
    point: 30,
    mes: '全勤分'
  },
  {
    name: '满爷',
    point: 30,
    mes: '全勤分'
  },
  {
    name: '西法',
    point: 30,
    mes: '全勤分'
  },
  {
    name: '阿何',
    point: 30,
    mes: '全勤分'
  },
  {
    name: '火歌',
    point: 30,
    mes: '全勤分'
  },
  {
    name: '滑稽',
    point: 30,
    mes: '全勤分'
  },
  {
    name: '麦兜',
    point: 30,
    mes: '全勤分'
  },
  {
    name: '小峰',
    point: 30,
    mes: '全勤分'
  },
  {
    name: '马静',
    point: 30,
    mes: '全勤分'
  },
  {
    name: '小黑',
    point: 30,
    mes: '全勤分'
  },
  {
    name: '速度灭',
    point: 30,
    mes: '全勤分'
  },
  {
    name: '一建',
    point: 30,
    mes: '全勤分'
  }
],
reduce: [
  {
    name: '麦兜',
    point: 10,
    mes: '拉BOSS摔死'
  },
  {
    name: '风哥',
    point: 10,
    mes: '提前开怪'
  }
  ,
  {
    name: '正气',
    point: 10,
    mes: '提前开怪'
  }
],
kill: []
},
{
  id: 3,
  date: '2016.10.6',
  begin: ['阿何','一建','奇迹','奥特曼','老圈','猫粮','正气','神魔','蝌蚪王','马静'
          ,'大T','喵星人','蘑菇','西法','大S','河蟹','小黑','吊爷','火歌','大H','前卫'
        ,'言水','满爷','风哥','血魔','滑稽','命运','小虾','小峰','6BB','小七','麦兜'],
  off: ['悟饭','樱井','速度灭','老严','小灵'], // 请假分 10
  end: ['阿何','一建','奇迹','奥特曼','老圈','猫粮','正气','神魔','蝌蚪王','马静'
          ,'大T','喵星人','蘑菇','西法','大S','河蟹','小黑','吊爷','火歌','大H','前卫'
        ,'言水','满爷','风哥','血魔','滑稽','命运','小虾','小峰','6BB','小七','麦兜'],
  add: [
    {
      name: '奥特曼',
      point: 50,
      mes: '初始分'
    }
    ,
    {
      name: '神魔',
      point: 50,
      mes: '初始分'
    }
    ,
    {
      name: '大T',
      point: 50,
      mes: '初始分'
    }
    ,
    {
      name: '大S',
      point: 50,
      mes: '初始分'
    }
    ,
    {
      name: '大H',
      point: 50,
      mes: '初始分'
    }
    ,
    {
      name: '神魔',
      point: 10,
      mes: 'H尼珊德拉治疗第一'
    }
    ,
    {
      name: '奇迹',
      point: 10,
      mes: 'H尼珊德拉DPS第一'
    }
    ,
    {
      name: '神魔',
      point: 10,
      mes: 'H梦魇之龙治疗第一'
    }
    ,
    {
      name: '血魔',
      point: 10,
      mes: 'H梦魇之龙DPS第一'
    }
    ,
    {
      name: '马静',
      point: 10,
      mes: 'H蜘蛛鸟DPS第一'
    }
    ,
    {
      name: '正气',
      point: 10,
      mes: 'H蜘蛛鸟治疗第一'
    }
    ,
    {
      name: '奇迹',
      point: 10,
      mes: 'H乌索克DPS第一'
    }
    ,
    {
      name: '正气',
      point: 10,
      mes: 'H乌索克治疗第一'
    }
    ,
    {
      name: '火歌',
      point: 10,
      mes: 'H眼球DPS第一'
    }
    ,
    {
      name: '神魔',
      point: 10,
      mes: 'H眼球治疗第一'
    }
  ],
  reduce: [
    {
      name: '大H',
      point: 10,
      mes: '绿水堵路'
    },
    {
      name: '马静',
      point: 10,
      mes: '提前开怪'
    },
    {
      name: '血魔',
      point: 10,
      mes: '绿水堵路'
    }
    ,
    {
      name: '阿何',
      point: 10,
      mes: '跟风智障'
    }
    ,
    {
      name: '小峰',
      point: 10,
      mes: '分担的太近'
    }
  ],
  kill: [
    {
      name: '尼珊德拉',
      dif: 'H',
      ren: ['阿何','一建','奇迹','奥特曼','老圈','猫粮','正气','神魔','蝌蚪王','马静'
              ,'大T','喵星人','蘑菇','西法','大S','河蟹','小黑','吊爷','火歌','大H','前卫'
            ,'言水','满爷','风哥','血魔','滑稽','命运','小虾','小峰','6BB','小七','麦兜'],
      equip: []
    },
    {
      name: '梦魇之龙',
      dif: 'H',
      ren: ['阿何','一建','奇迹','奥特曼','老圈','猫粮','正气','神魔','蝌蚪王','马静'
              ,'大T','喵星人','蘑菇','西法','大S','河蟹','小黑','吊爷','火歌','大H','前卫'
            ,'言水','满爷','风哥','血魔','滑稽','命运','小虾','小峰','6BB','小七','麦兜','小灵'],
      equip: [
        {
          name: '奥术圣物',
          point: 20,
          ren: '一建'
        },
        {
          name: '板甲衣',
          point: 15,
          ren: '西法'
        },
        {
          name: '锁甲鞋',
          point: 5,
          ren: '正气'
        },
        {
          name: '板甲护腕',
          point: 10,
          ren: '吊爷'
        },
        {
          name: '远程SP',
          point: 20,
          ren: '小峰'
        }
        ,
        {
          name: '板甲衣服',
          point: 240,
          ren: '喵星人'
        }
      ]
    }
    ,
    {
      name: '蜘蛛鸟',
      dif: 'H',
      ren: ['阿何','一建','奇迹','奥特曼','老圈','猫粮','正气','神魔','蝌蚪王','马静','速度灭'
              ,'大T','喵星人','蘑菇','西法','大S','河蟹','小黑','吊爷','火歌','大H','前卫'
            ,'言水','满爷','风哥','血魔','滑稽','命运','小虾','小峰','6BB','小七','麦兜','小灵'],
      equip: [
        {
          name: '皮甲头',
          point: 50,
          ren: '小黑'
        },
        {
          name: '板甲头',
          point: 300,
          ren: '小虾'
        },
        {
          name: '风暴圣物',
          point: 100,
          ren: '风哥'
        },
        {
          name: '板甲腿',
          point: 350,
          ren: '阿何'
        },
        {
          name: '锁甲衣',
          point: 110,
          ren: '满爷'
        }
        ,
        {
          name: '钢铁圣物',
          point: 100,
          ren: '麦兜'
        }
      ]
    }
    ,
    {
      name: '乌索克',
      dif: 'H',
      ren: ['阿何','一建','奇迹','奥特曼','老圈','猫粮','正气','神魔','蝌蚪王','马静','速度灭'
              ,'大T','喵星人','蘑菇','西法','大S','河蟹','小黑','吊爷','火歌','大H','前卫'
            ,'言水','满爷','风哥','血魔','滑稽','命运','小虾','小峰','6BB','小七','麦兜','小灵'],
      equip: [
        {
          name: '皮甲腿',
          point: 250,
          ren: '蝌蚪王'
        },
        {
          name: '钢铁圣物',
          point: 80,
          ren: '马静'
        },
        {
          name: '风暴圣物',
          point: 80,
          ren: '大S'
        },
        {
          name: '锁甲鞋',
          point: 5,
          ren: '大T'
        },
        {
          name: '布甲鞋',
          point: 130,
          ren: '猫粮'
        }
        ,
        {
          name: '力量SP',
          point: 50,
          ren: '河蟹'
        }
      ]
    },
    {
      name: '眼球',
      dif: 'H',
      ren: ['阿何','一建','奇迹','奥特曼','老圈','猫粮','正气','神魔','蝌蚪王','马静','速度灭'
              ,'大T','喵星人','蘑菇','西法','大S','河蟹','小黑','吊爷','火歌','大H','前卫'
            ,'言水','满爷','风哥','血魔','滑稽','命运','小虾','小峰','6BB','小七','麦兜','小灵'],
      equip: [
        {
          name: '布甲护腕',
          point: 20,
          ren: '蘑菇'
        },
        {
          name: 'SP',
          point: 205,
          ren: '奇迹'
        },
        {
          name: '冰霜圣物',
          point: 20,
          ren: '一建'
        },
        {
          name: '火焰圣物',
          point: 115,
          ren: '血魔'
        },
        {
          name: '板甲肩膀',
          point: 110,
          ren: '神魔'
        }
        ,
        {
          name: '戒指',
          point: 180,
          ren: '正气'
        }
      ]
    }
  ]
},
{
  id: 3,
  date: '2016.10.7',
  begin: [],
  off: [], // 请假分 10
  end: [],
  add: [],
  reduce: [],
  kill: [
    {
      name: '',
      dif: '',
      ren: [],
      equip: []
    }
  ]
},
{
  id: 3,
  date: '2016.10.8',
  begin: [],
  off: [], // 请假分 10
  end: [],
  add: [],
  reduce: [],
  kill: [
    {
      name: '',
      dif: '',
      ren: [],
      equip: []
    }
  ]
}
]

var _gays = [
  {id: 1,nick: '阿何',name: '零下一度',pro: '战士'},
  {id: 2,nick: '吊爷',name: '吊爷不懒惰',pro: '战士'},
  //{id: 38,nick: '饭团',name: '冲锋的饭团儿',pro: '战士'},
  {id: 42,nick: '河蟹',name: '河蟹',pro: '战士'},
  {id: 4,nick: '麦兜',name: 'Réinhàrdt',pro: '圣骑士'},
  {id: 30,nick: '悟饭',name: 'Babycora',pro: '圣骑士'},
  {id: 5,nick: '西法',name: '西法灬',pro: '圣骑士'},
  {id: 27,nick: '小虾',name: '蓝晓虾',pro: '圣骑士'},
  {id: 46,nick: '神魔',name: '神魔之雪',pro: '圣骑士'},
  {id: 43,nick: '老圈',name: '明鸟',pro: '德鲁伊'},
  {id: 6,nick: '奇迹',name: '奇迹吾身与共',pro: '德鲁伊'},
  {id: 7,nick: '蝌蚪王',name: '蝌蚪王',pro: '德鲁伊'},
  //{id: 8,nick: '踏足者',name: '踏足者',pro: '德鲁伊'},
  {id: 28,nick: '小峰',name: '随机食品',pro: '德鲁伊'},
  {id: 10,nick: '猫粮',name: '不吃猫粮的喵',pro: '牧师'},
  {id: 35,nick: '大H',name: 'Hydrá',pro: '牧师'},
  {id: 15,nick: '风哥',name: '紫色星星',pro: '猎人'},
  {id: 11,nick: '满爷',name: '漓墨',pro: '猎人'},
  {id: 12,nick: '马静',name: 'Imvback',pro: '猎人'},
  {id: 13,nick: '火歌',name: '火歌精灵',pro: '猎人'},
  {id: 31,nick: '老严',name: '叫我老严好了',pro: '猎人'},
  {id: 14,nick: '伤心',name: '伤心绝望',pro: '猎人'},
  //{id: 39,nick: '尼好',name: '尼好旅行者',pro: '猎人'},
  {id: 40,nick: '今晚',name: '今晚猎的痛快',pro: '猎人'},
  {id: 48,nick: '大T',name: 'Ticksk',pro: '猎人'},
  {id: 16,nick: '血魔',name: '丶卡尔丶',pro: '法师'},
  {id: 41,nick: '一建',name: '一建倾心',pro: '法师'},
  {id: 23,nick: '滑稽',name: '欧吃矛',pro: '法师'},
  {id: 48,nick: '奥特曼',name: '奥特曼小怪兽',pro: '法师'},
  {id: 25,nick: '速度灭',name: '速度灭灬',pro: '萨满'},
  {id: 45,nick: '正气',name: '嚯香正气',pro: '萨满'},
  {id: 17,nick: '小七',name: 'Krystale',pro: '术士'},
  {id: 18,nick: '6BB',name: '柳哔哔',pro: '术士'},
  {id: 36,nick: '蘑菇',name: '小鸡炒蘑菇',pro: '术士'},
  {id: 47,nick: '大S',name: 'Secretg',pro: '武僧'},
  {id: 33,nick: '小灵',name: '亡灬小灵',pro: '盗贼'},
  {id: 3,nick: '樱井',name: '樱井智子丶',pro: '盗贼'},
  {id: 19,nick: '喵星人',name: '喵星人的救赎',pro: '死亡骑士'},
  {id: 29,nick: '黑锋',name: '黑锋强盗',pro: '死亡骑士'},
  {id: 26,nick: '小黑',name: '工口少女黄泉',pro: '恶魔猎手'},
  {id: 20, nick: 'Des',name: 'Desperater',pro: '恶魔猎手'},
  //{id: 46, nick: '私欲',name: '私欲乱人心',pro: '恶魔猎手'},
  //{id: 21,nick: '杯酱',name: '杯酱',pro: '恶魔猎手'},
  {id: 22,nick: '言水',name: '言水',pro: '恶魔猎手'},
  {id: 24,nick: '命运',name: '命运宠儿',pro: '恶魔猎手'},
  {id: 37,nick: '前卫',name: '前卫萧卡加',pro: '恶魔猎手'}
]

var chinese = ['战士', '法师', '牧师', '死亡骑士', '圣骑士', '猎人', '盗贼', '恶魔猎手', '萨满', '武僧', '术士', '德鲁伊'],
    eng = ['zs', 'fs', 'ms', 'dk', 'qs', 'lr', 'dz', 'dh', 'sm', 'ws', 'ss', 'xd']

var _update = [
  '表格头部支持点击排序及二次点击反向排序',
  '添加当前DKP图表，图表顺序根据点击图表按钮时表格顺序生成，二次点击图表按钮删除该次生成的图表',
  '个人信息详情按每CD显示',
  '团队日志内容伸缩显示',
  '支持手机端浏览总体表格及个人信息',
  '添加标签页小图标',
  '更新时间：2016.10.04'
]
