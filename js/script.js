;(function() {

  'use strict'

  var vm = new Vue({
    el: 'body',
    data: {
      table: [],
      diary: _act,
      status: {
        team: false,
        box: false
      },
      infoBox: []
    },
    computed: {

    },
    methods: {
      json: function (arr) {
        return arr.join('、')
      },
      treasure: function (arr) {
        if (arr.point) {
          return arr.ren + ' ' + arr.point + '分 ' + arr.name
        } else {
          return arr.name + ' 被分解'
        }
      },
      showInfo: function (index) {
        vm.infoBox = vm.table[index]
        vm.status.box = true
      },
      init: function () {
        var arr = [], table = {}, nick, name, pro

        for (var i = 0, dio = _gays.length; i < dio; i++ ) {

          var total = 0, spend = 0, pageList = []

          nick = _gays[i].nick
          name = _gays[i].name
          pro = _gays[i].pro

          for (var j = 0, jotaro = _act.length; j < jotaro; j++ ) {

            var page = {date: _act[j].date, begin: 0, end: 0, boss: 0, spend: 0, info: []}, count = 0

            if(_act[j].begin.indexOf(nick) > -1) {
              total = total + 30
              page.begin = 30
              count++
            }

            if (_act[j].off.indexOf(nick) > -1) {
              total = total + 10
              page.begin = 10
              count++
            }

            if (_act[j].end.indexOf(nick) > -1) {
              total = total + 20
              page.end = 20
              count++
            }

            for (var k = 0, joseku = _act[j].kill.length; k < joseku; k++) {

              if(_act[j].kill[k].ren.indexOf(nick) > -1) {
                total = total + 10
                page.boss = page.boss + 10
                count++
              }

              for (var m = 0, joseph = _act[j].kill[k].equip.length; m < joseph; m++) {

                if(_act[j].kill[k].equip[m].ren === nick) {
                  spend = spend + _act[j].kill[k].equip[m].point
                  page.spend = page.spend + _act[j].kill[k].equip[m].point
                  page.info.push(_act[j].kill[k].equip[m])
                }

              }

            }

            pageList.push(page)

          }

          arr.push({nick: nick, name: name, pro: pro, total: total, spend: spend, save: total - spend, date: pageList})

      }

      vm.table = arr

    }
  }
  })

  vm.init()

})()
