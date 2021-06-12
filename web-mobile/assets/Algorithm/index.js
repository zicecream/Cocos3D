System.register("chunks:///_virtual/MergeSort.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "03ac1yB82JBF4QM8+bLPxTl", "MergeSort", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MergeSort = exports('MergeSort', (_dec = ccclass('MergeSort'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MergeSort, _Component);

        function MergeSort() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "arr", []);

          _defineProperty(_assertThisInitialized(_this), "curArrow", []);

          _defineProperty(_assertThisInitialized(_this), "arrowAction", []);

          _defineProperty(_assertThisInitialized(_this), "curTarget", []);

          _defineProperty(_assertThisInitialized(_this), "targetAction", []);

          return _this;
        }

        var _proto = MergeSort.prototype;

        _proto.init = function init(arr) {
          this.arr = arr;
        };

        _proto.sort = function sort() {
          this.mergeSort(0, this.arr.length - 1);
        };

        _proto.mergeSort = function mergeSort(left, right) {
          if (left == right) {
            return;
          }

          var mid = left + Math.floor((right - left) / 2);
          this.mergeSort(left, mid);
          this.mergeSort(mid + 1, right);
          this.merge(left, right, mid);
        };

        _proto.merge = function merge(left, right, mid) {
          var helpArr = [];
          var p1 = left;
          var p2 = mid + 1;
          var helpDrawArr = [];

          while (p1 <= mid && p2 <= right) {
            if (this.arr[p1] < this.arr[p2]) {
              helpDrawArr.push(p1);
            } else {
              helpDrawArr.push(p2);
            }

            helpArr[helpArr.length] = this.arr[p1] < this.arr[p2] ? this.arr[p1++] : this.arr[p2++];
          }

          while (p1 <= mid) {
            helpDrawArr.push(p1);
            helpArr[helpArr.length] = this.arr[p1++];
          }

          while (p2 <= right) {
            helpDrawArr.push(p2);
            helpArr[helpArr.length] = this.arr[p2++];
          }

          for (var i = 0; i < helpArr.length; i++) {
            this.setTargetAndCurStep(left + i, helpDrawArr[i], 2);
            this.arr[left + i] = helpArr[i];
          }
        };

        _proto.setTargetAndCurStep = function setTargetAndCurStep(index, target, action) {
          this.curArrow.push(index);
          this.curTarget.push(target);
          this.arrowAction.push(action);
        };

        _proto.swap = function swap(arr, i, j) {
          var tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
        };

        return MergeSort;
      }(Component), _temp)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AlgorithmSort.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './MergeSort.ts', './BoxData.ts', './BubbleSort.ts', './DataChecker.ts', './HeapSort.ts', './QuickSort.ts', './SelectSort.ts', './AlgorithmDrawKit.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, ScrollView, Button, Node, Graphics, Label, Prefab, director, instantiate, Layout, tween, Vec3, Component, MergeSort, BoxData, BubbleSort, DataChecker, HeapSort, QuickSort, SelectSort, AlgorithmDrawKit;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ScrollView = module.ScrollView;
      Button = module.Button;
      Node = module.Node;
      Graphics = module.Graphics;
      Label = module.Label;
      Prefab = module.Prefab;
      director = module.director;
      instantiate = module.instantiate;
      Layout = module.Layout;
      tween = module.tween;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      MergeSort = module.MergeSort;
    }, function (module) {
      BoxData = module.BoxData;
    }, function (module) {
      BubbleSort = module.BubbleSort;
    }, function (module) {
      DataChecker = module.DataChecker;
    }, function (module) {
      HeapSort = module.HeapSort;
    }, function (module) {
      QuickSort = module.QuickSort;
    }, function (module) {
      SelectSort = module.SelectSort;
    }, function (module) {
      AlgorithmDrawKit = module.AlgorithmDrawKit;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp;

      cclegacy._RF.push({}, "05017UlFChJQ4sIDUlGIPCO", "AlgorithmSort", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var AlgorithmSort = exports('AlgorithmSort', (_dec = ccclass('AlgorithmSort'), _dec2 = property(ScrollView), _dec3 = property(Button), _dec4 = property(Node), _dec5 = property(Graphics), _dec6 = property(Label), _dec7 = property(Prefab), _dec8 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AlgorithmSort, _Component);

        function AlgorithmSort() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "scrollView", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "runBtn", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "drawPanel", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "penGraphics", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "tipLabel", _descriptor5, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "dataCheck", new DataChecker());

          _initializerDefineProperty(_assertThisInitialized(_this), "boxPrefab", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "scrollItem", _descriptor7, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "actionList", []);

          _defineProperty(_assertThisInitialized(_this), "boxArr", []);

          _defineProperty(_assertThisInitialized(_this), "sortObj", null);

          return _this;
        }

        var _proto = AlgorithmSort.prototype;

        _proto.onLoad = function onLoad() {
          this.init();
        };

        _proto.init = function init() {
          this.initDraw();
          this.initScrollAndSorNameData();
        };

        _proto.initDraw = function initDraw() {
          var len = this.dataCheck.arr2.length;
          var scale = 1;

          if (director.getWinSize().width < len * 50) {
            scale = (director.getWinSize().width - 100) / (len * 50);
          }

          var widthMin = -len * 50 * scale * .5 + 25 * scale;

          for (var i = 0; i < len; i++) {
            var pos = [widthMin + 50 * i * scale, 80];
            var index = i;
            var value = this.dataCheck.arr2[i];

            if (this.boxArr[i]) {
              var boxLabel = this.boxArr[i].getChildByName("Index").getComponent(Label);
              var boxData = this.boxArr[i].getComponent(BoxData);
              boxLabel.string = "\n" + value + "\n" + index;
              boxData.index = index;
              boxData.value = value;
            } else {
              this.boxArr[i] = AlgorithmDrawKit.drawBox(index, value, pos, scale, this.boxPrefab);
              this.drawPanel.addChild(this.boxArr[i]);
            }
          }
        };

        _proto.initScrollAndSorNameData = function initScrollAndSorNameData() {
          var _this$scrollView$cont, _this$scrollView$cont2;

          var view = this.scrollView.node.getChildByName("view");
          var sortName = ["BubbleSort", "SelectSort", "HeapSort", "QuickSort", "MergeSort"];

          for (var i = 0; i < sortName.length; i++) {
            var _node$getChildByName;

            var node = instantiate(this.scrollItem);
            var label = (_node$getChildByName = node.getChildByName("Label")) === null || _node$getChildByName === void 0 ? void 0 : _node$getChildByName.getComponent(Label);
            label.string = sortName[i];
            view === null || view === void 0 ? void 0 : view.addChild(node);
          }

          this.scrollItem.active = false;
          (_this$scrollView$cont = this.scrollView.content) === null || _this$scrollView$cont === void 0 ? void 0 : (_this$scrollView$cont2 = _this$scrollView$cont.getComponent(Layout)) === null || _this$scrollView$cont2 === void 0 ? void 0 : _this$scrollView$cont2.updateLayout();
        };

        _proto.selectSort = function selectSort(event, customData) {
          var _target$getChildByNam;

          var srotName = "";
          var target = event.getCurrentTarget();
          var label = (_target$getChildByNam = target.getChildByName("Label")) === null || _target$getChildByNam === void 0 ? void 0 : _target$getChildByNam.getComponent(Label);
          srotName = label.string;
          this.tipLabel.string = srotName;

          switch (srotName) {
            case "BubbleSort":
              this.sortObj = new BubbleSort();
              break;

            case "SelectSort":
              this.sortObj = new SelectSort();
              break;

            case "HeapSort":
              this.sortObj = new HeapSort();
              break;

            case "QuickSort":
              this.sortObj = new QuickSort();
              break;

            case "MergeSort":
              this.sortObj = new MergeSort();
              break;
          }

          this.initSort();
        };

        _proto.initSort = function initSort() {
          if (this.sortObj == null) {
            this.tipLabel.string = "请选择一个排序算法";
            return;
          }

          this.clearAlgorithm();
          this.sortObj.init(this.dataCheck.arr);
          this.sortObj.sort();
        };

        _proto.actionJump = function actionJump(target, y) {
          var jump = tween(target).to(0.1, {
            position: new Vec3(0, y, 0)
          });
          return jump;
        };

        _proto.actionMove = function actionMove(target, x) {
          var move = tween(target).to(0.1, {
            position: new Vec3(x, 0, 0)
          });
          return move;
        };

        _proto.drawAction = function drawAction(type, index, max, obj) {
          if (index < max) {
            var _getChildByName;

            var curArrow = obj.curArrow;
            var arrowAction = obj.arrowAction;
            var curTarget = obj.curTarget;
            var box = this.boxArr[curArrow[index]];
            var box1 = this.boxArr[curTarget[index]];
            var pos = box.getPosition();
            var pos1 = box1.getPosition();
            var label = (_getChildByName = box.getChildByName("Index")) === null || _getChildByName === void 0 ? void 0 : _getChildByName.getComponent(Label);
            var time = .1;
            var self = this;
            this.tipLabel.string = "步骤" + index + "\n" + max;

            if (type == 0) {
              //遍历
              label.scheduleOnce(function () {
                self.penGraphics.clear();
                AlgorithmDrawKit.drawLineFromA2B(self.penGraphics, [pos.x, pos.y + 60], [pos.x, pos.y + 30], [], 0);
                AlgorithmDrawKit.drawLineFromA2B(self.penGraphics, [pos1.x, pos1.y + 60], [pos1.x, pos1.y + 30], [], 0);
                self.drawAction(arrowAction[index + 1], index + 1, max, obj);
              }, time);
            } else if (type == 1) {
              //交换
              label.scheduleOnce(function () {
                self.penGraphics.clear();
                AlgorithmDrawKit.drawSwapLineFromA2B(self.penGraphics, pos, pos1);
                AlgorithmDrawKit.actionSwapTwoBox(box, box1, function () {
                  var tmp = self.boxArr[curArrow[index]];
                  self.boxArr[curArrow[index]] = self.boxArr[curTarget[index]];
                  self.boxArr[curTarget[index]] = tmp;
                  self.drawAction(arrowAction[index + 1], index + 1, max, obj);
                });
              }, time);
            }
          } else {
            this.tipLabel.string = "绘制完成";
            this.penGraphics.clear();
          }
        };

        _proto.runAlgorithm = function runAlgorithm(obj) {
          if (this.sortObj == null) {
            return;
          }

          var curArrow = this.sortObj.curArrow;
          var arrowAction = this.sortObj.arrowAction;
          this.drawAction(arrowAction[0], 0, curArrow.length, this.sortObj);
        };

        _proto.checkAlgorithm = function checkAlgorithm() {
          if (this.sortObj == null) {
            this.tipLabel.string = "还未选择算法";
            return;
          }

          if (this.dataCheck.resoult()) {
            this.tipLabel.string = "当前校验是正确的";
          } else {
            this.tipLabel.string = "当前校验是错误的";
          }
        };

        _proto.resetAlgorithm = function resetAlgorithm() {
          this.dataCheck.init();
          this.sortObj = null;
          this.tipLabel.string = "请选择算法";

          for (var i = 0; i < this.boxArr.length; i++) {
            var label = this.boxArr[i].getChildByName("Index").getComponent(Label);
            label.unscheduleAllCallbacks();
          }

          this.penGraphics.clear();
          this.initDraw();
        };

        _proto.clearAlgorithm = function clearAlgorithm() {
          this.dataCheck.init();
          this.initDraw();
        };

        return AlgorithmSort;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "runBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "drawPanel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "penGraphics", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tipLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "boxPrefab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "scrollItem", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SelectSort.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "30fc35JV4dF3JFPJlv+tUFh", "SelectSort", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SelectSort = exports('SelectSort', (_dec = ccclass('SelectSort'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SelectSort, _Component);

        function SelectSort() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "arr", []);

          _defineProperty(_assertThisInitialized(_this), "curArrow", []);

          _defineProperty(_assertThisInitialized(_this), "arrowAction", []);

          _defineProperty(_assertThisInitialized(_this), "curTarget", []);

          _defineProperty(_assertThisInitialized(_this), "targetAction", []);

          return _this;
        }

        var _proto = SelectSort.prototype;

        _proto.init = function init(arr) {
          this.arr = arr;
        };

        _proto.sort = function sort() {
          this.selectSort();
        };

        _proto.selectSort = function selectSort() {
          var len = this.arr.length;
          var maxIndex = 0;

          for (var i = len - 1; i > 0; i--) {
            maxIndex = i;

            for (var j = 0; j < i; j++) {
              this.curArrow.push(maxIndex);
              this.curTarget.push(j);
              this.arrowAction.push(0);
              this.targetAction.push(0);

              if (this.arr[j] > this.arr[maxIndex]) {
                maxIndex = j;
              }
            }

            this.curArrow.push(i);
            this.curTarget.push(maxIndex);
            this.arrowAction.push(1);
            this.targetAction.push(1);
            this.swap(this.arr, i, maxIndex);
          }
        };

        _proto.swap = function swap(arr, i, j) {
          var tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
        };

        return SelectSort;
      }(Component), _temp)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BubbleSort.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "595b7ujnFlHIqWlQ3FY/Xmj", "BubbleSort", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BubbleSort = exports('BubbleSort', (_dec = ccclass('BubbleSort'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BubbleSort, _Component);

        function BubbleSort() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "arr", []);

          _defineProperty(_assertThisInitialized(_this), "curArrow", []);

          _defineProperty(_assertThisInitialized(_this), "arrowAction", []);

          _defineProperty(_assertThisInitialized(_this), "curTarget", []);

          _defineProperty(_assertThisInitialized(_this), "targetAction", []);

          return _this;
        }

        var _proto = BubbleSort.prototype;

        _proto.init = function init(arr) {
          this.arr = arr;
        };

        _proto.sort = function sort() {
          this.bubbleSort();
        };

        _proto.bubbleSort = function bubbleSort() {
          for (var i = 0; i < this.arr.length; i++) {
            for (var j = 0; j < this.arr.length - i - 1; j++) {
              this.curArrow.push(j);
              this.curTarget.push(j + 1);

              if (this.arr[j] > this.arr[j + 1]) {
                this.arrowAction.push(1);
                this.targetAction.push(1);
                this.swap(this.arr, j, j + 1);
              } else {
                this.arrowAction.push(0);
                this.targetAction.push(0);
              }
            }
          }
        };

        _proto.swap = function swap(arr, i, j) {
          var tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
        };

        return BubbleSort;
      }(Component), _temp)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/QuickSort.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "6746fWtV+dI2YVc9lydluP5", "QuickSort", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var QuickSort = exports('QuickSort', (_dec = ccclass('QuickSort'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(QuickSort, _Component);

        function QuickSort() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "arr", []);

          _defineProperty(_assertThisInitialized(_this), "curArrow", []);

          _defineProperty(_assertThisInitialized(_this), "arrowAction", []);

          _defineProperty(_assertThisInitialized(_this), "curTarget", []);

          _defineProperty(_assertThisInitialized(_this), "targetAction", []);

          return _this;
        }

        var _proto = QuickSort.prototype;

        _proto.init = function init(arr) {
          this.arr = arr;
        };

        _proto.sort = function sort() {
          console.log("快速排序");
          this.quickSort(0, this.arr.length - 1);
        };

        _proto.quickSort = function quickSort(left, right) {
          if (left < right) {
            var pivot = this.arr[right];
            var minPos = left - 1;
            var maxPos = right + 1;
            var cur = left;

            while (cur < maxPos) {
              if (this.arr[cur] < pivot) {
                minPos += 1;
                this.swap(this.arr, minPos, cur);
                cur += 1;
              } else if (this.arr[cur] > pivot) {
                maxPos -= 1;
                this.swap(this.arr, maxPos, cur);
              } else {
                cur++;
              }
            }

            this.quickSort(left, minPos);
            this.quickSort(maxPos, right);
          }
        };

        _proto.setTargetAndCurStep = function setTargetAndCurStep(index, target, action) {
          this.curArrow.push(index);
          this.curTarget.push(target);
          this.arrowAction.push(action);
        };

        _proto.swap = function swap(arr, i, j) {
          this.setTargetAndCurStep(i, j, 1);
          var tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
        };

        return QuickSort;
      }(Component), _temp)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HeapSort.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "6a342jsut1LIJ2+X1UuIdCO", "HeapSort", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var HeapSort = exports('HeapSort', (_dec = ccclass('HeapSort'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HeapSort, _Component);

        function HeapSort() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "arr", []);

          _defineProperty(_assertThisInitialized(_this), "curArrow", []);

          _defineProperty(_assertThisInitialized(_this), "arrowAction", []);

          _defineProperty(_assertThisInitialized(_this), "curTarget", []);

          _defineProperty(_assertThisInitialized(_this), "targetAction", []);

          return _this;
        }

        var _proto = HeapSort.prototype;

        _proto.init = function init(arr) {
          this.arr = arr;
        };

        _proto.sort = function sort() {
          console.log("堆排序");
          this.heapSort();
        };

        _proto.heapSort = function heapSort() {
          var heapSize = this.arr.length;

          for (var i = 0; i < heapSize; i++) {
            this.heapInsert(this.arr[i], i);
          }

          this.swap(this.arr, --heapSize, 0);

          while (heapSize > 0) {
            this.heapify(heapSize);
            this.swap(this.arr, --heapSize, 0);
          }
        };

        _proto.heapInsert = function heapInsert(value, index) {
          while (this.arr[index] > this.arr[Math.floor((index - 1) / 2)]) {
            this.swap(this.arr, index, Math.floor((index - 1) / 2));
            index = Math.floor((index - 1) / 2);
          }
        };

        _proto.heapify = function heapify(heapSize) {
          var index = 0;
          var leftChild = 1;
          var rightChild = 2;
          var largestChild = leftChild;

          while (leftChild < heapSize && rightChild < heapSize) {
            if (this.arr[leftChild] > this.arr[index]) {
              largestChild = leftChild;
            }

            if (this.arr[rightChild] > this.arr[index]) {
              if (this.arr[rightChild] > this.arr[leftChild]) {
                largestChild = rightChild;
              }
            }

            if (largestChild == index) {
              break;
            }

            this.swap(this.arr, index, largestChild);
            index = largestChild;
            leftChild = index * 2 + 1;
            rightChild = leftChild + 1;
          }
        };

        _proto.setTargetAndCurStep = function setTargetAndCurStep(index, target, action) {
          this.curArrow.push(index);
          this.curTarget.push(target);
          this.arrowAction.push(action);
        };

        _proto.swap = function swap(arr, i, j) {
          this.setTargetAndCurStep(i, j, 1);
          var tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
        };

        return HeapSort;
      }(Component), _temp)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AlgorithmBinaryTree.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './BoxData.ts', './DataChecker.ts', './Queue.ts', './AlgorithmDrawKit.ts', './BaseDataUnit.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, ScrollView, Button, Node, Graphics, Label, Prefab, EditBox, instantiate, Layout, Component, tween, BoxData, DataChecker, Queue, AlgorithmDrawKit, TreeNode;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ScrollView = module.ScrollView;
      Button = module.Button;
      Node = module.Node;
      Graphics = module.Graphics;
      Label = module.Label;
      Prefab = module.Prefab;
      EditBox = module.EditBox;
      instantiate = module.instantiate;
      Layout = module.Layout;
      Component = module.Component;
      tween = module.tween;
    }, function (module) {
      BoxData = module.BoxData;
    }, function (module) {
      DataChecker = module.DataChecker;
    }, function (module) {
      Queue = module.Queue;
    }, function (module) {
      AlgorithmDrawKit = module.AlgorithmDrawKit;
    }, function (module) {
      TreeNode = module.TreeNode;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _temp;

      cclegacy._RF.push({}, "70922iMP9lKiI+HNS1GTLdq", "AlgorithmBinaryTree", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var AlgorithmBinaryTree = exports('AlgorithmBinaryTree', (_dec = ccclass('AlgorithmBinaryTree'), _dec2 = property(ScrollView), _dec3 = property(Button), _dec4 = property(Node), _dec5 = property(Graphics), _dec6 = property(Label), _dec7 = property(Prefab), _dec8 = property(Node), _dec9 = property(EditBox), _dec10 = property(String), _dec11 = property(String), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AlgorithmBinaryTree, _Component);

        function AlgorithmBinaryTree() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "scrollView", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "runBtn", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "drawPanel", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "penGraphics", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "tipLabel", _descriptor5, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "dataCheck", new DataChecker());

          _initializerDefineProperty(_assertThisInitialized(_this), "boxPrefab", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "scrollItem", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "editBox", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "serializationStr", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "contentName", _descriptor10, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "actionList", []);

          _defineProperty(_assertThisInitialized(_this), "boxArr", []);

          _defineProperty(_assertThisInitialized(_this), "algorithmObj", null);

          _defineProperty(_assertThisInitialized(_this), "preArr", []);

          _defineProperty(_assertThisInitialized(_this), "levelArr", []);

          return _this;
        }

        var _proto = AlgorithmBinaryTree.prototype; //层级遍历

        _proto.onLoad = function onLoad() {
          this.init();
        };

        _proto.onEditDidEnded = function onEditDidEnded(editbox, customEventData) {
          this.serializationStr = editbox.string;
          this.tipLabel.string = editbox.string;
        };

        _proto.init = function init() {
          this.initDraw();
          this.initScrollItemAndNameData();
        };

        _proto.initDraw = function initDraw() {
          var arrStr = this.serializationStr.split(",");
          var head = this.preBuild(arrStr);
          var postionMap = AlgorithmDrawKit.getBinaryTreePostionMap(head);
          this.searchTree(head, 0, null, postionMap);
        };

        _proto.preBuild = function preBuild(arr) {
          //根据先序遍历进行序列化二叉树
          var v = arr.shift();

          if (v == "#" || !v) {
            return;
          }

          var head = new TreeNode(v);
          head.left = this.preBuild(arr);
          head.right = this.preBuild(arr);
          return head;
        };

        _proto.searchTree = function searchTree(root, index, curNode, postionMap) {
          var _cur$getComponent;

          if (root == undefined || root == null) {
            return;
          }

          var cur = null;
          var left = null;
          var right = null;

          if (curNode) {
            cur = curNode;
          } else {
            var posRoot = AlgorithmDrawKit.getTreeNodePosByLevelAndIndex(postionMap.get(root), postionMap.get("maxLevel"));
            cur = AlgorithmDrawKit.drawBox(index, root.value, posRoot, 1, this.boxPrefab);
            this.setBoxUI(cur, index, root.value);
            this.drawPanel.addChild(cur);
          }

          this.preArr.push(cur);
          (_cur$getComponent = cur.getComponent(BoxData)) === null || _cur$getComponent === void 0 ? void 0 : _cur$getComponent.customMap.set("treeNode", root);

          if (root.left != undefined) {
            var _left$getComponent;

            index += 1;
            var posLeft = AlgorithmDrawKit.getTreeNodePosByLevelAndIndex(postionMap.get(root.left), postionMap.get("maxLevel"));
            left = AlgorithmDrawKit.drawBox(index, root.left.value, posLeft, 1, this.boxPrefab);
            this.setBoxUI(left, index, root.left.value);
            (_left$getComponent = left.getComponent(BoxData)) === null || _left$getComponent === void 0 ? void 0 : _left$getComponent.customMap.set("treeNodeParent", cur);
            this.drawPanel.addChild(left);
          }

          if (root.right != undefined) {
            var _right$getComponent;

            index += 1;
            var posRight = AlgorithmDrawKit.getTreeNodePosByLevelAndIndex(postionMap.get(root.right), postionMap.get("maxLevel"));
            right = AlgorithmDrawKit.drawBox(index, root.right.value, posRight, 1, this.boxPrefab);
            this.setBoxUI(right, index, root.right.value);
            this.drawPanel.addChild(right);
            (_right$getComponent = right.getComponent(BoxData)) === null || _right$getComponent === void 0 ? void 0 : _right$getComponent.customMap.set("treeNodeParent", cur);
          }

          AlgorithmDrawKit.drawTreeLine(this.penGraphics, cur, left, right);
          this.searchTree(root.left, index, left, postionMap);
          this.searchTree(root.right, index, right, postionMap);
        };

        _proto.setBoxUI = function setBoxUI(cur, index, value) {
          var boxLabel = cur.getChildByName("Index").getComponent(Label);
          var boxData = cur.getComponent(BoxData);
          boxLabel.string = "\n" + value + "\n" + index;
          boxData.index = index;
          boxData.value = value;
        };

        _proto.pre = function pre(root) {
          //先序遍历
          var stack = new Array();
          stack.push(root);

          while (stack.length > 0) {
            var curTreeNode = stack.pop();

            if (curTreeNode.right) {
              stack.push(curTreeNode.right);
            }

            if (curTreeNode.left != null) {
              stack.push(curTreeNode.left);
            }
          }
        };

        _proto.getTreeMaxLevelWithMap = function getTreeMaxLevelWithMap(root) {
          var queue = new Queue();
          var map = new Map();
          queue.push(root);
          var level = 1;
          var curLevel = 0;
          var curMaxNum = 1;
          var maxNum = 0;
          map.set(root, level);

          while (queue.size > 0) {
            root = queue.poll();
            curLevel = map.get(root);

            if (root.left) {
              map.set(root.left, curLevel + 1);
              queue.push(root.left);
            }

            if (root.right) {
              map.set(root.right, curLevel + 1);
              queue.push(root.right);
            }

            if (curLevel == level) {
              curMaxNum++;
            } else {
              level++;
              maxNum = Math.max(curMaxNum, maxNum);
              curMaxNum = 1;
            }
          }

          maxNum = Math.max(curMaxNum, maxNum);
          return maxNum;
        };

        _proto.getTreeMaxLevelWithNoMap = function getTreeMaxLevelWithNoMap(root) {
          //获取二叉树最大层数
          var queue = new Queue();
          queue.push(root);
          var curEnd = root; //当前层，最右边节点是谁

          var nextEnd = null; //下一层，最右边节点是谁

          var max = 0;
          var curLevelNodes = 0;

          while (!queue.isEmpty()) {
            var cur = queue.poll();

            if (cur.left) {
              queue.push(cur.left);
              nextEnd = cur.left;
            }

            if (cur.right) {
              queue.push(cur.right);
              nextEnd = cur.right;
            }

            curLevelNodes++;

            if (cur == curEnd) {
              max = Math.max(curLevelNodes, max);
              curLevelNodes = 0;
              curEnd = nextEnd;
            }
          }

          return max;
        };

        _proto["in"] = function _in(root) {
          //中序遍历
          var stack = new Array();
          stack.push(root);

          while (stack.length > 0 || root != null) {
            if (root != null) {
              stack.push(root);
              root = root.left;
            } else {
              root = stack.pop();
              root = root.right;
            }
          }
        };

        _proto.initScrollItemAndNameData = function initScrollItemAndNameData() {
          var _this$scrollView$cont, _this$scrollView$cont2;

          var view = this.scrollView.node.getChildByName("view");

          for (var i = 0; i < this.contentName.length; i++) {
            var _node$getChildByName;

            var node = instantiate(this.scrollItem);
            var label = (_node$getChildByName = node.getChildByName("Label")) === null || _node$getChildByName === void 0 ? void 0 : _node$getChildByName.getComponent(Label);
            label.string = this.contentName[i];
            view === null || view === void 0 ? void 0 : view.addChild(node);
          }

          this.scrollItem.active = false;
          (_this$scrollView$cont = this.scrollView.content) === null || _this$scrollView$cont === void 0 ? void 0 : (_this$scrollView$cont2 = _this$scrollView$cont.getComponent(Layout)) === null || _this$scrollView$cont2 === void 0 ? void 0 : _this$scrollView$cont2.updateLayout();
        };

        _proto.selectAlgorithm = function selectAlgorithm(event, customData) {
          var _target$getChildByNam;

          var name = "";
          var target = event.getCurrentTarget();
          var label = (_target$getChildByNam = target.getChildByName("Label")) === null || _target$getChildByNam === void 0 ? void 0 : _target$getChildByNam.getComponent(Label);
          name = label.string;
          this.tipLabel.string = name;
        };

        _proto.drawAction = function drawAction(type, index, max, obj) {};

        _proto.runAlgorithm = function runAlgorithm(obj) {
          var _this2 = this;

          var _loop = function _loop(i) {
            var node = _this2.preArr[i];
            node.getChildByName("Index").getComponent(Label).scheduleOnce(function () {
              tween(node).hide().delay(0.05).show().start().repeat(4);
            }, i * .2);
          };

          for (var i = 0; i < this.preArr.length; i++) {
            _loop(i);
          }

          if (this.algorithmObj == null) {
            return;
          }
        };

        _proto.checkAlgorithm = function checkAlgorithm() {
          if (this.algorithmObj == null) {
            this.tipLabel.string = "还未选择算法";
            return;
          }

          if (this.dataCheck.resoult()) {
            this.tipLabel.string = "当前校验是正确的";
          } else {
            this.tipLabel.string = "当前校验是错误的";
          }
        };

        _proto.resetAlgorithm = function resetAlgorithm() {
          this.dataCheck.init();
          this.algorithmObj = null;
          this.tipLabel.string = "请选择算法";
          this.drawPanel.removeAllChildren();
          this.penGraphics.clear();
          this.initDraw();
        };

        _proto.clearAlgorithm = function clearAlgorithm() {
          this.dataCheck.init();
          this.initDraw();
        };

        _proto.update = function update(dt) {};

        return AlgorithmBinaryTree;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "runBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "drawPanel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "penGraphics", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tipLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "boxPrefab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "scrollItem", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "editBox", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "serializationStr", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "contentName", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BoyerMoore.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "78875snQhlPF71w2ONxVutO", "BoyerMoore", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BoyerMoore = exports('BoyerMoore', (_dec = ccclass('BoyerMoore'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BoyerMoore, _Component);

        function BoyerMoore() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = BoyerMoore.prototype;

        _proto.onLoad = function onLoad() {
          var text = "abcbcbaasfigjoiabc";
          var pattern = "abc";
          var badTable = new Map();
          var suffix = [];
          var prefix = [];
          var m = pattern.length;
          var n = text.length;

          for (var _i = 0; _i < m; _i++) {
            badTable.set(pattern.charAt(_i), _i);
          }

          for (var _i2 = 0; _i2 < m - 1; _i2++) {
            var j = _i2;
            var k = 0;

            while (pattern.charAt(j) == pattern.charAt(m - 1 - k)) {
              --j;
              ++k;
              suffix[k] = j + 1;
            }

            if (j == -1) {
              prefix[k] = true;
            }
          }

          var i = 0; //i表示主串对齐的第一个字符

          while (i <= n - m) {
            var _j = void 0;

            for (_j = m - 1; _j >= 0; _j--) {
              //j表示模式串的最后一个字符
              if (pattern.charAt(_j) != text.charAt(i + _j)) {
                break;
              }
            }

            if (_j == 0 && pattern.charAt(_j) == text.charAt(i)) {
              i = i + m + 1; //匹配成功
            } else {
              var skip = -1;

              if (badTable.has(text.charAt(i))) {
                skip = badTable.get(text.charAt(i));
              }

              var badSkip = m - skip;
              var goodSkip = -1;

              var _k = m - 1 - _j; //好后缀的长度


              if (suffix[_k]) {
                goodSkip = _j - suffix[_k] + 1; //模式串中有匹配的子串
              } else {
                var r = _j + 2;

                for (r = _j + 2; r <= m - 1; r++) {
                  if (prefix[m - r] == true) {
                    goodSkip = r;
                    break;
                  }
                }

                if (goodSkip != r) {
                  goodSkip = m;
                }
              }

              i = i + Math.max(goodSkip, badSkip);
            }
          }
        };

        return BoyerMoore;
      }(Component)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DataChecker.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "b9fd4d5J3RDAYSvZE8hdHO+", "DataChecker", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DataChecker = exports('DataChecker', (_dec = ccclass('DataChecker'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DataChecker, _Component);

        function DataChecker() {
          var _this;

          _this = _Component.call(this) || this;

          _defineProperty(_assertThisInitialized(_this), "maxSize", 20);

          _defineProperty(_assertThisInitialized(_this), "maxValue", 100);

          _defineProperty(_assertThisInitialized(_this), "arr", []);

          _defineProperty(_assertThisInitialized(_this), "arr1", []);

          _defineProperty(_assertThisInitialized(_this), "arr2", []);

          _this.init();

          return _this;
        }

        var _proto = DataChecker.prototype;

        _proto.init = function init() {
          this.arr = this.generateRandomArry(this.maxSize, this.maxValue);
          this.arr1 = this.copyArray(this.arr);
          this.arr2 = this.copyArray(this.arr);
          this.comparator(this.arr1);
        };

        _proto.generateRandomArry = function generateRandomArry(maxSize, maxValue) {
          var len = 20; //Math.floor(Math.random()*(maxSize+1));

          var arr = [];

          for (var i = 0; i < len; i++) {
            arr[i] = Math.floor((maxValue + 1) * Math.random()) - Math.floor(maxValue * Math.random());
          }

          return arr;
        };

        _proto.comparator = function comparator(arr) {
          arr.sort(function (a, b) {
            return a - b;
          });
        };

        _proto.copyArray = function copyArray(arr) {
          var res = [];

          for (var i = 0; i < arr.length; i++) {
            res[i] = arr[i];
          }

          return res;
        };

        _proto.resoult = function resoult() {
          return this.check(this.arr, this.arr1);
        };

        _proto.check = function check(arr, arr1) {
          var success = true;

          if (!arr || !arr1) {
            success = false;
          }

          if (arr.length != arr1.length) {
            success = false;
          }

          for (var i = 0; i < arr.length; i++) {
            if (arr[i] != arr1[i]) {
              success = false;
              console.log("排序失败");
              console.log("原始序列=" + this.arr2);
              console.log("错误结果=" + arr);
              console.log("正确结果=" + arr1);
              return success;
            }
          }

          console.log("排序成功");
          return success;
        };

        return DataChecker;
      }(Component), _temp)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Labyrinth.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Prefab, Graphics, AudioSource, Label, director, Vec3, instantiate, Sprite, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      Graphics = module.Graphics;
      AudioSource = module.AudioSource;
      Label = module.Label;
      director = module.director;
      Vec3 = module.Vec3;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

      cclegacy._RF.push({}, "e369bPV1SBHt4/6JoMBvYua", "Labyrinth", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      var RoomEdge = function RoomEdge() {
        _defineProperty(this, "Up", 0);

        _defineProperty(this, "Down", 0);

        _defineProperty(this, "Left", 0);

        _defineProperty(this, "Right", 0);

        _defineProperty(this, "Path", []);
      };

      var Labyrinth = exports('Labyrinth', (_dec = ccclass('Labyrinth'), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(Graphics), _dec5 = property({
        type: AudioSource,
        displayName: "创建路径音效"
      }), _dec6 = property({
        type: Label
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Labyrinth, _Component);

        function Labyrinth() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "panelNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "boxPrefab", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "penGraphics", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "clearEdgeAudio", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "tip", _descriptor5, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "cleanTimes", 0);

          _defineProperty(_assertThisInitialized(_this), "boxScale", 1);

          _defineProperty(_assertThisInitialized(_this), "m", 10);

          _defineProperty(_assertThisInitialized(_this), "n", 10);

          _defineProperty(_assertThisInitialized(_this), "roomPathMap", new Map());

          _defineProperty(_assertThisInitialized(_this), "roomSelectedMap", new Map());

          _defineProperty(_assertThisInitialized(_this), "canSelecteNum", 0);

          _defineProperty(_assertThisInitialized(_this), "drawBoxMap", new Map());

          _defineProperty(_assertThisInitialized(_this), "state", "normal");

          return _this;
        }

        var _proto = Labyrinth.prototype;

        _proto.init = function init(m, n) {
          console.log("初始化迷宫算法");
          this.m = m | this.m;
          this.n = n | this.n;
          this.canSelecteNum = this.m * this.n;
        };

        _proto.run = function run() {
          if (this.canSelecteNum <= 0 || this.state == "draw") {
            return;
          }

          this.state = "draw";
          var curPos = [0, 0];
          this.setStartPos(curPos);
          this.buildLabyrinth(curPos);
        };

        _proto.onLoad = function onLoad() {
          var maxw = this.m * 50;
          var maxh = this.n * 50;
          var scale = 1;

          if (maxw > director.getWinSize().width || maxh > director.getWinSize().height) {
            if (director.getWinSize().width / maxw < director.getWinSize().height / maxh) {
              scale = director.getWinSize().width / maxw;
            } else {
              scale = director.getWinSize().height / maxh;
            }
          }

          this.schedule;
          this.panelNode.scale = new Vec3(scale, scale, 1);
          this.initBox();
          this.init();
        };

        _proto.reset = function reset() {
          if (this.state == "draw") {
            this.tip.getComponent(Label).string = "正在绘制";
            return;
          }

          this.tip.getComponent(Label).string = "重置成功";
          this.penGraphics.clear();
          this.canSelecteNum = this.m * this.n;
          this.roomPathMap = new Map();
          this.roomSelectedMap = new Map();

          for (var _iterator = _createForOfIteratorHelperLoose(this.drawBoxMap.values()), _step; !(_step = _iterator()).done;) {
            var v = _step.value;

            for (var i = 0, l = v.children.length; i < l; i++) {
              if (v.children[i]._name != "Index") {
                v.children[i].active = true;
              }
            }
          }
        };

        _proto.setTip = function setTip(str) {
          this.tip.getComponent(Label).string = str;
        };

        _proto.initBox = function initBox() {
          this.state = "draw";

          for (var i = 0; i < this.m; i++) {
            for (var j = 0; j < this.n; j++) {
              this.drawBox([i, j]);
            }
          }

          this.state = "normal";
        };

        _proto.drawBox = function drawBox(pos) {
          var box = instantiate(this.boxPrefab);
          box.parent = this.panelNode;
          box.scale = new Vec3(this.boxScale, this.boxScale, 1);

          if (!pos) {
            pos = [0, 0];
          }

          var x = pos[0] * 47 - this.m * 47 * 0.5;
          var y = pos[1] * 47 - this.n * 47 * 0.5;
          var label = box.getChildByName("Index").getComponent(Label);
          label.string = this.getIndexByMN(pos[0], pos[1]) + "";
          this.drawBoxMap.set(this.getIndexByMN(pos[0], pos[1]), box);
          box.setPosition(x, y);
        };

        _proto.clearBoxEdge = function clearBoxEdge(pos, nextPos, dir, nextStr) {
          var box = this.drawBoxMap.get(this.getIndexByMN(pos[0], pos[1]));
          var next = this.drawBoxMap.get(this.getIndexByMN(nextPos[0], nextPos[1]));
          var self = this;
          this.cleanTimes++;

          if (box.getChildByName(dir)) {
            box.getChildByName(dir).getComponent(Sprite).scheduleOnce(function () {
              self.penGraphics.moveTo(pos[0] * 47 - self.m * 47 * 0.5, pos[1] * 47 - self.n * 47 * 0.5);
              self.penGraphics.lineTo(nextPos[0] * 47 - self.m * 47 * 0.5, nextPos[1] * 47 - self.n * 47 * 0.5);
              self.penGraphics.stroke(); // self.clearEdgeAudio.play();

              box.getChildByName(dir).active = false;
              next.getChildByName(nextStr).active = false;
              self.cleanTimes--;

              if (self.cleanTimes == 0) {
                self.setTip("路径绘制完成");
                self.state = "normal";
              }
            }, 1 + 0.1 * this.roomPathMap.size);
          }
        };

        _proto.setStartPos = function setStartPos(curPos) {
          this.setRoomSelected(curPos);
        };

        _proto.buildLabyrinth = function buildLabyrinth(curPos) {
          //创建迷宫
          if (this.canSelecteNum > 0) {
            while (curPos[0] >= 0 && curPos[1] >= 0 && this.canSelecteNum > 0) {
              curPos = this.getNextRandomRoom(curPos); //获取下个房间
            }

            if (this.canSelecteNum > 0) {
              //走到死胡同，并且还有房间未曾访问,回溯到一个可以访问一个房间到节点
              var backPos = this.backToSeleckedRoom();

              if (backPos[0] == -1) {
                // this.state = "normal";
                this.setTip("waring 回溯的路径错误");
              } else {
                this.buildLabyrinth(backPos);
              }
            } else {
              this.buildSuccess();
            }
          }
        };

        _proto.buildSuccess = function buildSuccess() {
          this.setTip("迷宫计算完成，开始绘制");
        };

        _proto.getNextRandomRoom = function getNextRandomRoom(curPos) {
          var nearRoom = [];
          var nearRooomIndex = 0;

          if (curPos[0] > 0) {
            //up
            if (!this.isRoomSelected([curPos[0] - 1, curPos[1]])) {
              nearRoom[nearRooomIndex++] = [curPos[0] - 1, curPos[1]];
            }
          }

          if (curPos[0] < this.m - 1) {
            //down
            if (!this.isRoomSelected([curPos[0] + 1, curPos[1]])) {
              nearRoom[nearRooomIndex++] = [curPos[0] + 1, curPos[1]];
            }
          }

          if (curPos[1] > 0) {
            //left
            if (!this.isRoomSelected([curPos[0], curPos[1] - 1])) {
              nearRoom[nearRooomIndex++] = [curPos[0], curPos[1] - 1];
            }
          }

          if (curPos[1] < this.n - 1) {
            //right
            if (!this.isRoomSelected([curPos[0], curPos[1] + 1])) {
              nearRoom[nearRooomIndex++] = [curPos[0], curPos[1] + 1];
            }
          }

          if (nearRooomIndex == 0) {
            return [-1, -1];
          } else {
            var nextRoom = nearRoom[Math.floor(Math.random() * nearRooomIndex)];

            if (!this.roomPathMap.has(this.getIndexByMN(curPos[0], curPos[1]))) {
              this.roomPathMap.set(this.getIndexByMN(curPos[0], curPos[1]), new RoomEdge());
            }

            if (!this.roomPathMap.has(this.getIndexByMN(nextRoom[0], nextRoom[1]))) {
              this.roomPathMap.set(this.getIndexByMN(nextRoom[0], nextRoom[1]), new RoomEdge());
            }

            var curtRoomEdge = this.roomPathMap.get(this.getIndexByMN(curPos[0], curPos[1]));
            var nextRoomEdge = this.roomPathMap.get(this.getIndexByMN(curPos[0], curPos[1]));
            var dirStr = "";
            var nextDirStr = "";

            if (nextRoom[0] == curPos[0]) {
              if (nextRoom[1] - curPos[1] == 1) {
                dirStr = "Up";
                nextDirStr = "Down";
                curtRoomEdge.Down = 1;
                nextRoomEdge.Up = 1;
              } else if (nextRoom[1] - curPos[1] == -1) {
                dirStr = "Down";
                nextDirStr = "Up";
                curtRoomEdge.Up = 1;
                nextRoomEdge.Down = 1;
              }
            } else if (nextRoom[1] == curPos[1]) {
              if (nextRoom[0] - curPos[0] > 0) {
                dirStr = "Right";
                nextDirStr = "Left";
                curtRoomEdge.Right = 1;
                nextRoomEdge.Left = 1;
              } else if (nextRoom[0] - curPos[0] < 0) {
                dirStr = "Left";
                nextDirStr = "Right";
                curtRoomEdge.Left = 1;
                nextRoomEdge.Right = 1;
              }
            }

            this.clearBoxEdge(curPos, nextRoom, dirStr, nextDirStr);
            curtRoomEdge.Path.push(nextRoomEdge);
            this.setRoomSelected(nextRoom);
            return nextRoom;
          }
        };

        _proto.backToSeleckedRoom = function backToSeleckedRoom() {
          //返回到一个已经遍历过的路径点,这个路径点必须满足有连同的未曾访问的房间
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.roomSelectedMap.keys()), _step2; !(_step2 = _iterator2()).done;) {
            var key = _step2.value;
            var value = this.roomSelectedMap.get(key);
            var i = value[0];
            var j = value[1];
            var flag = false;
            var room = this.roomPathMap.get(key);

            if (room.Down == 0 && i < this.m - 1 && !this.roomSelectedMap.has(key + this.m)) {
              flag = true;
            }

            if (room.Up == 0 && i > 0 && !this.roomSelectedMap.has(key - this.m)) {
              flag = true;
            }

            if (room.Right == 0 && j < this.n - 1 && !this.roomSelectedMap.has(key + 1)) {
              flag = true;
            }

            if (room.Left == 0 && j > 0 && !this.roomSelectedMap.has(key - 1)) {
              flag = true;
            }

            if (flag) {
              return [i, j];
            }
          }

          return [-1, -1];
        };

        _proto.setRoomSelected = function setRoomSelected(curPos) {
          if (!this.roomSelectedMap.has(this.getIndexByMN(curPos[0], curPos[1]))) {
            this.roomSelectedMap.set(this.getIndexByMN(curPos[0], curPos[1]), curPos);
            this.canSelecteNum--;
          }
        };

        _proto.isRoomSelected = function isRoomSelected(curPos) {
          try {
            return this.roomSelectedMap.has(this.getIndexByMN(curPos[0], curPos[1]));
          } catch (error) {
            console.log("error=" + curPos);
          }
        };

        _proto.getIndexByMN = function getIndexByMN(m, n) {
          return this.m * m + n;
        };

        _proto.getPosByIndex = function getPosByIndex(index) {
          return [index % this.m, (index - index % this.m) / this.m];
        };

        return Labyrinth;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "panelNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "boxPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "penGraphics", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "clearEdgeAudio", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tip", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Algorithm", ['./MergeSort.ts', './BubbleSort.ts', './DataChecker.ts', './HeapSort.ts', './QuickSort.ts', './SelectSort.ts', './AlgorithmSort.ts', './AlgorithmBinaryTree.ts', './BoyerMoore.ts', './Labyrinth.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/Algorithm', 'chunks:///_virtual/Algorithm'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});