(function() {
  "use strict";

  var vm = new Vue({
    el: "body",
    data: {
      table: [],
      diary: [],
      status: {
        team: false,
        box: false,
        diary: [],
        chart: false
      },
      sort: {
        nick: false,
        name: false,
        pro: false,
        total: false,
        spend: false,
        save: false
      },
      bool: false,
      infoBox: [],
      infoBoxDate: [],
      thisDate: "",
      dateNum: [],
      updateDiary: _update,
      addTable: [],
      reduceTable: [],
      serviceTable: []
    },
    computed: {},
    methods: {
      json: function(arr) {
        return arr.join("、");
      },
      treasure: function(arr) {
        if (arr.point) {
          return " " + arr.point + "分 ";
        } else {
          return " 分解";
        }
      },
      showInfo: function(index) {
        var arr = [];
        vm.infoBox = vm.table[index];
        for (var i = 1; i < 4; i++) {
          arr.unshift(vm.infoBox.date[vm.infoBox.date.length - i]);
        }
        vm.status.box = true;
        vm.infoBoxDate = arr;
        vm.thisDate = vm.infoBoxDate[vm.infoBoxDate.length - 1].id;
      },
      proColor: function(pro) {
        return eng[chinese.indexOf(pro)];
      },
      nameColor: function(name) {
        var pro;

        for (var i = 0, dio = _gays.length; i < dio; i++) {
          if (_gays[i].nick === name) {
            pro = _gays[i].pro;
          }
        }

        return eng[chinese.indexOf(pro)];
      },
      dateChange: function() {
        var arr = [];
        for (var i = 1; i < 4; i++) {
          arr.unshift(vm.infoBox.date[vm.thisDate * 3 - i]);
        }
        vm.infoBoxDate = arr;
      },
      showDiary: function(index) {
        vm.status.diary.$set(index, !vm.status.diary[index]);
      },
      keySort: function(key) {
        var bool = !vm.sort[key];

        var compare = function(a, b) {
          if (a[key] < b[key]) {
            return bool ? 1 : -1;
          } else if (a[key] > b[key]) {
            return bool ? -1 : 1;
          }
        };

        vm.sort[key] = bool;

        vm.table.sort(compare);
      },
      init: function() {
        var arr = [],
          table = {},
          nick,
          name,
          pro;

        for (var i = 0, dio = _gays.length; i < dio; i++) {
          var total = 0,
            spend = 0,
            pageList = [];

          nick = _gays[i].nick;
          name = _gays[i].name;
          pro = _gays[i].pro;

          for (var j = 0, jotaro = _act.length; j < jotaro; j++) {
            var page = {
                id: _act[j].id,
                date: _act[j].date,
                begin: 0,
                end: 0,
                boss: 0,
                spend: 0,
                info: [],
                add: 0,
                reduce: 0,
                addMes: [],
                reduceMes: []
              },
              count = 0;

            if (_act[j].begin.indexOf(nick) > -1) {
              total = total + 30;
              page.begin = 30;
              count++;
            }

            if (_act[j].off.indexOf(nick) > -1) {
              total = total + 10;
              page.begin = 10;
              count++;
            }

            if (_act[j].end.indexOf(nick) > -1) {
              total = total + 20;
              page.end = 20;
              count++;
            }

            if (_act[j].add) {
              for (var n = 0, johny = _act[j].add.length; n < johny; n++) {
                if (_act[j].add[n].name === nick) {
                  total = total + _act[j].add[n].point;
                  page.add = page.add + _act[j].add[n].point;
                  page.addMes.push(_act[j].add[n]);
                }
              }
            }

            if (_act[j].reduce) {
              for (var o = 0, joly = _act[j].reduce.length; o < joly; o++) {
                if (_act[j].reduce[o].name === nick) {
                  spend = spend + _act[j].reduce[o].point;
                  page.reduce = page.reduce + _act[j].reduce[o].point;
                  page.reduceMes.push(_act[j].reduce[o]);
                }
              }
            }

            for (var k = 0, joseku = _act[j].kill.length; k < joseku; k++) {
              if (_act[j].kill[k].ren.indexOf(nick) > -1) {
                total = total + 10;
                page.boss = page.boss + 10;
                count++;
              }

              for (
                var m = 0, joseph = _act[j].kill[k].equip.length;
                m < joseph;
                m++
              ) {
                if (_act[j].kill[k].equip[m].ren === nick) {
                  spend = spend + _act[j].kill[k].equip[m].point;
                  page.spend = page.spend + _act[j].kill[k].equip[m].point;
                  page.info.push(_act[j].kill[k].equip[m]);
                }
              }
            }

            pageList.push(page);
          }

          arr.push({
            nick: nick,
            name: name,
            pro: pro,
            total: total,
            spend: spend,
            save: total - spend,
            date: pageList
          });
        }

        vm.table = arr;

        vm.dateDiary();
        vm.actDiary();
        vm.initAddTable();
        vm.initReduceTable();
        vm.initServiceTable();
      },
      dateDiary: function() {
        var arr = [],
          statusArr = [];

        for (var i = 0, dio = _act.length; i < dio; i++) {
          statusArr.push(false);
        }

        for (var j = 0, jotaro = _act.length; j < jotaro; j = j + 3) {
          arr.push({
            id: _act[j].id,
            begin: _act[j].date,
            end: _act[j + 2].date
          });
        }

        vm.dateNum = arr;
        vm.status.diary = statusArr;
        vm.thisDate = arr[arr.length - 1].id;
      },
      actDiary: function() {
        var arr = [];
        for (var j = 0, jotaro = _act.length; j < jotaro; j++) {
          arr.unshift(_act[j]);
        }
        vm.diary = arr;
      },
      chart: function() {
        var chart = document.querySelector(".chart");

        if (chart.className === "chart") {
          var arrName = [],
            arrNum = [];

          for (var i = 0, dio = vm.table.length; i < dio; i++) {
            arrName.push(vm.table[i].nick);
            arrNum.push(vm.table[i].save);
          }

          var options = {
            scaleFontFamily: "'微软雅黑'",
            scaleFontColor: "#fff"
          };

          var ctx = document.getElementById("myChart").getContext("2d"),
            data = {
              labels: arrName,
              datasets: [
                {
                  fillColor: "rgba(220,220,220,0.5)",
                  strokeColor: "rgba(220,220,220,1)",
                  data: arrNum
                }
              ]
            };

          var myNewChart = new Chart(ctx).Bar(data, options);

          chart.classList.add("active");
        } else {
          var ctx = document.getElementById("myChart").getContext("2d"),
            data = {
              labels: [],
              datasets: [
                {
                  fillColor: "rgba(220,220,220,0.5)",
                  strokeColor: "rgba(220,220,220,1)",
                  pointColor: "rgba(255,255,255,1)",
                  pointStrokeColor: "#fff",
                  data: []
                }
              ]
            };

          var myNewChart = new Chart(ctx).Bar(data);

          chart.classList.remove("active");
        }
      },
      initAddTable: function() {
        let addTableData = [];
        for (var i = 0, dio = vm.table.length; i < dio; i++) {
          let info = {
            name: vm.table[i].nick,
            addArr: []
          };
          for (var j = 0, mango = vm.table[i].date.length; j < mango; j++) {
            var data = vm.table[i].date[j];
            for (var k = 0, jojo = data.addMes.length; k < jojo; k++) {
              if (
                data.addMes[k].mes !== "全勤分" &&
                data.addMes[k].mes !== "初始分"
              )
                info.addArr.push(data.addMes[k].mes);
            }
          }
          if (info.addArr.length > 0) addTableData.push(info);
        }
      },
      initReduceTable: function() {
        let reduceData = [];
        for (var i = 0, dio = vm.table.length; i < dio; i++) {
          let info = {
            name: vm.table[i].nick,
            reduceArr: []
          };
          for (var j = 0, mango = vm.table[i].date.length; j < mango; j++) {
            var data = vm.table[i].date[j];
            for (var k = 0, jojo = data.reduceMes.length; k < jojo; k++) {
              info.reduceArr.push(data.reduceMes[k].mes);
            }
          }
          if (info.reduceArr.length > 0) reduceData.push(info);
        }
      },
      initServiceTable: function() {
        let serviceTableData = [];
        for (var i = 0, dio = vm.table.length; i < dio; i++) {
          let info = {
            name: vm.table[i].nick,
            serviceArr: []
          };
          for (var j = 0, mango = vm.table[i].date.length; j < mango; j++) {
            var data = vm.table[i].date[j];
            for (var k = 0, jojo = data.addMes.length; k < jojo; k++) {
              if (data.addMes[k].mes == "全勤分")
                info.serviceArr.push(data.addMes[k].mes);
            }
          }
          if (info.serviceArr.length > 0) serviceTableData.push(info);
        }
      }
    }
  });

  vm.init();
})();
