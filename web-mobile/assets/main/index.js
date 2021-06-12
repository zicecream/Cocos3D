System.register("chunks:///_virtual/Stack.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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

      cclegacy._RF.push({}, "0afe048EaRMKKm8LS1rc+uC", "Stack", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Stack = exports('Stack', (_dec = ccclass('Stack'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Stack, _Component);

        function Stack() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "arr", []);

          _defineProperty(_assertThisInitialized(_this), "size", 0);

          return _this;
        }

        var _proto = Stack.prototype;

        _proto.push = function push(element) {
          this.size++;
          this.arr.push(element);
        };

        _proto.pop = function pop() {
          if (this.size > 0) {
            this.arr.pop();
          }
        };

        _proto.peek = function peek() {
          return this.arr[this.size - 1];
        };

        _proto.isEmpty = function isEmpty() {
          return this.size == 0;
        };

        return Stack;
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

System.register("chunks:///_virtual/BoxData.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _defineProperty, _assertThisInitialized, _initializerDefineProperty, cclegacy, _decorator, Label, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "2fa55Uh1H9DH7zqXVWDihlR", "BoxData", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BoxData = exports('BoxData', (_dec = ccclass('BoxData'), _dec2 = property(Label), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BoxData, _Component);

        function BoxData() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "value", 0);

          _defineProperty(_assertThisInitialized(_this), "index", 0);

          _defineProperty(_assertThisInitialized(_this), "customMap", new Map());

          _initializerDefineProperty(_assertThisInitialized(_this), "showLabel", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = BoxData.prototype;

        _proto.setValue = function setValue(value) {
          this.value = value;
        };

        _proto.setIndex = function setIndex(index) {
          this.index = index;
        };

        return BoxData;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "showLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
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

System.register("chunks:///_virtual/SoundManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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

      cclegacy._RF.push({}, "3804chkf25OcK/SySasQlrA", "SoundManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SoundManager = exports('SoundManager', (_dec = ccclass('SoundManager'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SoundManager, _Component);

        function SoundManager() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = SoundManager.prototype; // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;

        _proto.onLoad = function onLoad() {};

        SoundManager.playSound = function playSound(soundType, soundIndex) {
          this.audio.play();
          return true;
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return SoundManager;
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

System.register("chunks:///_virtual/BaseDataUnit.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, _decorator;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      cclegacy._RF.push({}, "42ce6QFNgxLkoX4y5IpiPle", "BaseDataUnit", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TreeNode = exports('TreeNode', function TreeNode(v) {
        _defineProperty(this, "value", void 0);

        _defineProperty(this, "left", void 0);

        _defineProperty(this, "right", void 0);

        this.value = v;
      });
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

System.register("chunks:///_virtual/UiKit.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4f3961iK4lKyIkQoqnTl386", "UiKit", undefined);
      /*
       * @Author: your name
       * @Date: 2021-06-05 13:10:09
       * @LastEditTime: 2021-06-09 12:15:41
       * @LastEditors: Sunshine
       * @Description: In User Settings Edit
       * @FilePath: /assets/Res/Scripts/UI/UiKit.ts
       */


      var UiKit = exports('UiKit', /*#__PURE__*/function () {
        function UiKit() {}

        var _proto = UiKit.prototype;

        _proto.drawLineFromA2B = function drawLineFromA2B(pen, from, to, color, durting) {
          pen.moveTo(from[0], from[1]);
          pen.lineTo(to[0], to[1]);
          pen.stroke(); //1,2,4,8,#,#,9,#,#,5,10,#,#,11,#,#,3,6,12,#,#,13,#,#,7,14,#,#,15,#,#
        }
        /**
         * Converts an RGB color value to HSL. Conversion formula
         * adapted from https://en.wikipedia.org/wiki/HSL_color_space.
         * Assumes r, g, and b are contained in the set [0, 255] and
         * returns h, s, and l in the set [0, 1].
         *
         * @param   Number  r       The red color value
         * @param   Number  g       The green color value
         * @param   Number  b       The blue color value
         * @return  Array           The HSL representation
         */
        ;

        _proto.rgb2hsl = function rgb2hsl(r, g, b) {
          r /= 255, g /= 255, b /= 255;
          var max = Math.max(r, g, b),
              min = Math.min(r, g, b);
          var h,
              s,
              l = (max + min) / 2;

          if (max == min) {
            h = s = 0; // achromatic
          } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

            switch (max) {
              case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;

              case g:
                h = (b - r) / d + 2;
                break;

              case b:
                h = (r - g) / d + 4;
                break;
            }

            h /= 6;
          }

          return [h, s, l];
        }
        /**
         * Converts an HSL color value to RGB. Conversion formula
         * adapted from https://en.wikipedia.org/wiki/HSL_color_space.
         * Assumes h, s, and l are contained in the set [0, 1] and
         * returns r, g, and b in the set [0, 255].
         *
         * @param   Number  h       The hue
         * @param   Number  s       The saturation
         * @param   Number  l       The lightness
         * @return  Array           The RGB representation
         */
        ;

        _proto.hsl2rgb = function hsl2rgb(h, s, l) {
          var r, g, b;

          if (s == 0) {
            r = g = b = l; // achromatic
          } else {
            var hue2rgb = function hue2rgb(p, q, t) {
              if (t < 0) t += 1;
              if (t > 1) t -= 1;
              if (t < 1 / 6) return p + (q - p) * 6 * t;
              if (t < 1 / 2) return q;
              if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
              return p;
            };

            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
          }

          return [r * 255, g * 255, b * 255];
        };

        return UiKit;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Loading.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, ProgressBar, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ProgressBar = module.ProgressBar;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "6fe13nvRNpLUpi3WruwMRFG", "Loading", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Loading = exports('Loading', (_dec = ccclass('Loading'), _dec2 = property(ProgressBar), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Loading, _Component);

        function Loading() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "progressBar", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Loading.prototype;

        _proto.onLoad = function onLoad() {// let n = 0;
          // this.schedule(()=>{
          //     this.setLoaded(n);
          //     n = n > 1?0:(n+.1);
          // },.1);
        };

        _proto.setLoaded = function setLoaded(loaded) {
          if (loaded > 1 || loaded < 0) {
            loaded = 1;
          }

          var progress = this.progressBar.progress;
          progress = loaded;
          this.progressBar.progress = progress;
        };

        return Loading;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
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

System.register("chunks:///_virtual/Queue.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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

      cclegacy._RF.push({}, "75559aVCOhHG5ASv6oTzh3P", "Queue", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Queue = exports('Queue', (_dec = ccclass('Queue'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Queue, _Component);

        function Queue() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "arr", []);

          _defineProperty(_assertThisInitialized(_this), "size", 0);

          return _this;
        }

        var _proto = Queue.prototype;

        _proto.push = function push(element) {
          this.arr.push(element);
          this.size++;
        };

        _proto.poll = function poll() {
          if (this.size > 0) {
            this.size--;
            return this.arr.shift();
          }
        };

        _proto.peek = function peek() {
          if (this.size > 0) {
            return this.arr[0];
          }
        };

        _proto.isEmpty = function isEmpty() {
          return this.size == 0;
        };

        return Queue;
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

System.register("chunks:///_virtual/LoadManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, _inheritsLoose, cclegacy, _decorator, assetManager, Component;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      assetManager = module.assetManager;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2, _temp;

      cclegacy._RF.push({}, "a3587aJgMNMjoI3+sH81jFJ", "LoadManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var LoadManager = exports('LoadManager', (_dec = ccclass('LoadManager'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LoadManager, _Component);

        function LoadManager() {
          return _Component.apply(this, arguments) || this;
        }

        LoadManager.loadBundle = function loadBundle(name, progress) {
          var _this = this;

          return new Promise(function (resolve, reject) {
            if (assetManager.bundles.has(name)) {
              resolve(assetManager.bundles.get(name));
              return;
            }

            assetManager.loadBundle(name, {
              onFileProgress: function onFileProgress(loaded, total) {
                progress(loaded, total);
              }
            }, function (err, bundle) {
              if (err) {
                return reject(err);
              }

              _this.hadLoadBundle.push(name);

              LoadManager._updateCanLoadSceneName();

              resolve(bundle);
            });
          });
        }
        /**
         * @description: 更新可加载的场景的名字
         * @param {*}
         * @return {*}
         */
        ;

        LoadManager._updateCanLoadSceneName = function _updateCanLoadSceneName() {
          var _this2 = this;

          this._clearCanLoadSceneName();

          assetManager.bundles.forEach(function (v, k) {
            v.config.scenes.forEach(function (v, k) {
              var str = k;
              console.log(str);
              var firstIndex = str.lastIndexOf('/') + 1;
              var lastIndex = str.lastIndexOf('.scene');
              console.log(str.substring(firstIndex, lastIndex));

              _this2._scenesName.push(str.substring(firstIndex, lastIndex));
            });
          });
        }
        /**
         * @description: 重置可加载场景的名字列表
         * @param {*}
         * @return {*}
         */
        ;

        LoadManager._clearCanLoadSceneName = function _clearCanLoadSceneName() {
          this._scenesName = [];
        };

        LoadManager.getCanBuildSceneName = function getCanBuildSceneName() {
          return this._scenesName;
        };

        return LoadManager;
      }(Component), _defineProperty(_class2, "hadLoadBundle", []), _defineProperty(_class2, "_scenesName", []), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Global.ts.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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

      cclegacy._RF.push({}, "b5726+ESQZMhZYQYrMLcqxm", "Global.ts", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GlobalTs = exports('GlobalTs', (_dec = ccclass('GlobalTs'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GlobalTs, _Component);

        function GlobalTs() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = GlobalTs.prototype; // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;

        _proto.start = function start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return GlobalTs;
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

System.register("chunks:///_virtual/Popup.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './LoadManager.ts', './FontManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, BlockInputEventsComponent, Button, tween, Vec3, instantiate, Label, Layout, Component, LoadManager, FontManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      BlockInputEventsComponent = module.BlockInputEventsComponent;
      Button = module.Button;
      tween = module.tween;
      Vec3 = module.Vec3;
      instantiate = module.instantiate;
      Label = module.Label;
      Layout = module.Layout;
      Component = module.Component;
    }, function (module) {
      LoadManager = module.LoadManager;
    }, function (module) {
      FontManager = module.FontManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "b88acAVdl1LRoS76UqAqxEq", "Popup", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Popup = exports('Popup', (_dec = ccclass('Popup'), _dec2 = property(BlockInputEventsComponent), _dec3 = property(Button), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Popup, _Component);

        function Popup() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "block", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "safeBtn", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Popup.prototype;

        _proto.onLoad = function onLoad() {};

        _proto.onCloseBtn = function onCloseBtn() {
          var _this2 = this;

          this.safeBtn.node.active = true;
          tween(this.node).to(.1, {
            scale: new Vec3(1.2, 1.2, 1.2)
          }, {
            easing: "quadIn"
          }).to(.1, {
            scale: new Vec3(.5, .5, .5)
          }, {
            easing: "quadOut"
          }).call(function () {
            _this2.node.removeAllChildren();

            _this2.destroy();
          }).start();
        };

        _proto.configShow = function configShow(bundleName) {
          var _popup$getChildByName, _layoutNode$getCompon;

          var popup = this.node;
          var layoutNode = (_popup$getChildByName = popup.getChildByName("panel")) === null || _popup$getChildByName === void 0 ? void 0 : _popup$getChildByName.getChildByName("Layout");
          var sceneArray = LoadManager.getCanBuildSceneName();

          for (var i = 0; i < sceneArray.length; i++) {
            if (sceneArray[i].includes(bundleName)) {
              var _popup$getChildByName2, _popup$getChildByName3, _node$getChildByName;

              var prefab = (_popup$getChildByName2 = popup.getChildByName("panel")) === null || _popup$getChildByName2 === void 0 ? void 0 : (_popup$getChildByName3 = _popup$getChildByName2.getChildByName("Layout")) === null || _popup$getChildByName3 === void 0 ? void 0 : _popup$getChildByName3.getChildByName("Item");
              var node = instantiate(prefab);
              node.active = true;
              var label = (_node$getChildByName = node.getChildByName("Label")) === null || _node$getChildByName === void 0 ? void 0 : _node$getChildByName.getComponent(Label);
              label.overflow = 2;
              label.string = sceneArray[i];
              label.font = FontManager.curFont;

              if (layoutNode) {
                layoutNode.addChild(node);
              }
            }
          }

          layoutNode === null || layoutNode === void 0 ? void 0 : (_layoutNode$getCompon = layoutNode.getComponent(Layout)) === null || _layoutNode$getCompon === void 0 ? void 0 : _layoutNode$getCompon.updateLayout();
          return layoutNode;
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return Popup;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "block", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "safeBtn", [_dec3], {
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

System.register("chunks:///_virtual/PlayMusic.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _defineProperty, _assertThisInitialized, _initializerDefineProperty, cclegacy, _decorator, Graphics, Prefab, Label, Node, UITransform, Color, Vec2, assetManager, director, instantiate, Quat, math, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Graphics = module.Graphics;
      Prefab = module.Prefab;
      Label = module.Label;
      Node = module.Node;
      UITransform = module.UITransform;
      Color = module.Color;
      Vec2 = module.Vec2;
      assetManager = module.assetManager;
      director = module.director;
      instantiate = module.instantiate;
      Quat = module.Quat;
      math = module.math;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

      cclegacy._RF.push({}, "c9e29FUjGpMUr9JETGhQ9ln", "PlayMusic", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PlayMusic = exports('PlayMusic', (_dec = ccclass('PlayMusic'), _dec2 = property(Graphics), _dec3 = property(Prefab), _dec4 = property(Label), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PlayMusic, _Component);

        function PlayMusic() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "status", -1);

          _initializerDefineProperty(_assertThisInitialized(_this), "pen", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "item", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "labelStatus", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "midSphere", _descriptor4, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "audioBufferSourceNode", void 0);

          _defineProperty(_assertThisInitialized(_this), "analyser", void 0);

          _defineProperty(_assertThisInitialized(_this), "dataArray", void 0);

          _defineProperty(_assertThisInitialized(_this), "PI", 3.1415926);

          _defineProperty(_assertThisInitialized(_this), "R", 6.18);

          _defineProperty(_assertThisInitialized(_this), "E", 2.71828);

          _defineProperty(_assertThisInitialized(_this), "N", Math.floor(_this.PI * _this.R * _this.E));

          _defineProperty(_assertThisInitialized(_this), "T", 0.016);

          _defineProperty(_assertThisInitialized(_this), "effct2DPos", []);

          _defineProperty(_assertThisInitialized(_this), "effect2DColor", []);

          return _this;
        }

        var _proto = PlayMusic.prototype;

        _proto.onLoad = function onLoad() {
          // 处理不同平台
          window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
          this.schedule(this.checkMusic, 1);
        };

        _proto.start = function start() {
          this.init();
        };

        _proto.init = function init() {
          var uiBox = this.node.parent.getComponent(UITransform);
          var beginX = 60 - .5 * uiBox.width;
          var endX = .5 * uiBox.width - 60;
          var space = (endX - beginX) / (this.N * 2);
          var color = new Color(Math.random() * 255, Math.random() * 255, Math.random() * 255, 255);

          for (var i = 0; i < this.N * 2; i++) {
            this.effct2DPos[i] = new Vec2();
            this.effct2DPos[i].x = space * i + beginX;
            this.effct2DPos[i].y = -120;
            this.effect2DColor[i] = color; //this.pen.color;
          }
        };

        _proto.checkMusic = function checkMusic() {
          var _this2 = this;

          var bundle = assetManager.getBundle("LargerThe1M");

          if (bundle) {
            bundle.load("big big world", function (loaded, total) {
              if (loaded == total) {
                _this2.status = 0;

                _this2.changeStatusLabel();
              } else {
                _this2.labelStatus.string = "加载音乐中..." + loaded + "/" + total;
              }
            }, function (error, res) {
              _this2.unschedule(_this2.checkMusic);

              if (!error) {
                // this.schedule(this.dynamicCreate,this.T,macro.REPEAT_FOREVER,3);
                _this2.music = res;

                _this2.onPlay();
              }
            });
          } else {
            this.labelStatus.string = "等待加载音乐";
          }
        };

        _proto.dynamicCreate = function dynamicCreate() {
          var delta = director.getDeltaTime();
          var maxFramesTime = this.T * (60 / 50);
          var minFramesTime = this.T;

          if (delta > minFramesTime && delta < maxFramesTime) {
            if (this.node.children.length < this.N * 2) {
              var addnum = 10;
              var less = this.N * 2 - this.node.children.length;

              while (less > 0 && addnum > 0) {
                var item = instantiate(this.item);
                this.node.addChild(item);
                addnum--;
              } // 实例化 item


              for (var i = 0; i < this.node.children.length / 2; i++) {
                var _item = this.node.children[i];

                _item.setPosition(this.R * Math.sin(i / (this.node.children.length / 2) * 2 * this.PI), 0, -this.R * 2 + 4 * this.R / this.N * i);
              }

              for (var _i = this.node.children.length / 2; _i < this.rightItem.length; _i++) {
                var _item2 = this.node.children[_i];
                var index = _i - this.node.children.length / 2;

                _item2.setPosition(-this.R * Math.sin(index / (this.node.children.length / 2) * 2 * this.PI), 0, -this.R * 2 + 4 * this.R / this.N * _i);
              }
            } else {
              this.unschedule(this.dynamicCreate);
            }
          } else {
            this.unschedule(this.dynamicCreate);
          }
        };

        _proto.changeStatusLabel = function changeStatusLabel() {
          // let label = this.play
          if (this.status == -1) {
            this.labelStatus.string = "加载音乐中...";
          }

          if (this.status == 1) {
            this.labelStatus.string = "Stop";
          }

          if (this.status == 0) {
            this.labelStatus.string = "Play";
          }
        };

        _proto.onClick = function onClick() {
          if (this.status == -1) {
            return;
          }

          if (this.status == 1) {
            this.onStop();
          } else if (this.status == 0) {
            this.onPlay();
          }
        };

        _proto.onPlay = function onPlay() {
          if (this.status == 1) {
            return;
          }

          this.status = 1;
          this.changeStatusLabel();
          var AudioContext = window.AudioContext; // audioContext 只相当于一个容器。

          var audioContext = new AudioContext(); // 要让 audioContext 真正丰富起来需要将实际的音乐信息传递给它的。
          // 也就是将 AudioBuffer 数据传递进去。
          // 以下就是创建音频资源节点管理者。

          this.audioBufferSourceNode = audioContext.createBufferSource(); // 将 AudioBuffer 传递进去。

          this.audioBufferSourceNode.buffer = this.music._nativeAsset; // 创建分析器。

          this.analyser = audioContext.createAnalyser(); // 精度设置

          this.analyser.fftSize = 256; // 在传到扬声器之前，连接到分析器。

          this.audioBufferSourceNode.connect(this.analyser); // 连接到扬声器。

          this.analyser.connect(audioContext.destination); // 开始播放

          this.audioBufferSourceNode.start(0);
        };

        _proto.onStop = function onStop() {
          if (this.status == 0) {
            return;
          }

          this.status = 0;
          this.changeStatusLabel(); // 停止方法

          this.audioBufferSourceNode.stop();
        };

        _proto.update = function update(dt) {
          var rotation = this.midSphere.getRotation();
          Quat.rotateY(rotation, rotation, .01);
          this.midSphere.setRotation(rotation); // 等待准备好

          if (!this.analyser) return; // 建立数据准备接受数据

          this.dataArray = new Uint8Array(this.analyser.frequencyBinCount); // 分析结果存入数组。

          this.analyser.getByteFrequencyData(this.dataArray); // this.draw3D(this.dataArray);

          this.draw2D(this.dataArray);
        };

        _proto.draw2D = function draw2D(dataArray) {
          this.pen.clear();
          var star = this.effct2DPos[0];
          var subfix = Math.floor(this.effct2DPos.length / 2); //使两边开始对称的位置

          for (var i = subfix; i < this.effct2DPos.length; i++) {
            var index = i;
            var soundDataIndex = index - subfix;
            var pos = this.effct2DPos[index];
            var h = dataArray[soundDataIndex] + pos.y;
            star = pos;
            h = math.lerp(h, pos.y, .3);
            this.pen.moveTo(star.x, star.y);
            this.pen.lineTo(pos.x, h);
            var color = this.effect2DColor[index];
            color.r = 255;

            if (dataArray[soundDataIndex + 1]) {
              color.g = 255 - dataArray[soundDataIndex + 1];
            } else {
              color.g = color.r;
            }

            this.pen.strokeColor = color;
            this.pen.stroke();
          }

          for (var _i2 = subfix; _i2 >= 0; _i2--) {
            var _index = _i2;

            var _soundDataIndex = subfix - _index;

            var _pos = this.effct2DPos[_index];

            var _h = dataArray[_soundDataIndex] + _pos.y;

            star = _pos;
            _h = math.lerp(_h, _pos.y, .3);
            this.pen.moveTo(star.x, star.y);
            this.pen.lineTo(_pos.x, _h);
            var _color = this.effect2DColor[_index];
            _color.r = 255;

            if (dataArray[_soundDataIndex + 1]) {
              _color.g = 255 - dataArray[_soundDataIndex + 1];
            } else {
              _color.g = _color.r;
            }

            this.pen.strokeColor = _color;
            this.pen.stroke();
          }
        };

        _proto.draw3D = function draw3D(dataArray) {
          for (var i = 0; i < Math.floor(this.node.children.length / 2); i++) {
            var h = dataArray[i * 1] * .03;
            var pos = this.node.children[i].getPosition();
            h = math.lerp(h, pos.y, 0.3);
            this.node.children[i].setPosition(pos.x, h, pos.z);
            this.node.children[i + Math.floor(this.node.children.length / 2)].setPosition(-pos.x, h, pos.z);
          }
        };

        return PlayMusic;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pen", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "item", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelStatus", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "midSphere", [_dec5], {
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

System.register("chunks:///_virtual/AlgorithmDrawKit.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './BoxData.ts', './Queue.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, tween, Vec3, instantiate, Label, director, Component, BoxData, Queue;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      tween = module.tween;
      Vec3 = module.Vec3;
      instantiate = module.instantiate;
      Label = module.Label;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      BoxData = module.BoxData;
    }, function (module) {
      Queue = module.Queue;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "cd63fCkNyZPr5kJGVKYPSi1", "AlgorithmDrawKit", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var AlgorithmDrawKit = exports('AlgorithmDrawKit', (_dec = ccclass('AlgorithmDrawKit'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AlgorithmDrawKit, _Component);

        function AlgorithmDrawKit() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "nodeMap", new Map());

          return _this;
        }

        AlgorithmDrawKit.actionSwapTwoBox = function actionSwapTwoBox(node1, node2, call) {
          var pos = node1.getPosition();
          var pos1 = node2.getPosition();
          tween(node1).to(0.1, {
            position: new Vec3(pos.x, pos.y + 30)
          }).delay(0.1).to(0.1, {
            position: new Vec3(pos1.x, pos.y + 30)
          }).to(0.1, {
            position: new Vec3(pos1.x, pos1.y)
          }).start();
          tween(node2).to(0.1, {
            position: new Vec3(pos1.x, pos1.y + 30)
          }).delay(0.1).to(0.1, {
            position: new Vec3(pos.x, pos1.y + 30)
          }).to(0.1, {
            position: new Vec3(pos.x, pos.y)
          }).call(function () {
            if (call) {
              call();
            }
          }).start();
        };

        AlgorithmDrawKit.drawBox = function drawBox(index, value, pos, scale, boxPrefab) {
          var box = instantiate(boxPrefab);
          var boxLabel = box.getChildByName("Index").getComponent(Label);
          var boxData = box.getComponent(BoxData);
          boxLabel.string = "\n" + value + "\n" + index;
          boxData.index = index;
          boxData.value = value;
          box.setPosition(pos[0], pos[1]);
          box.scale = new Vec3(scale, scale, 1);
          return box;
        };

        AlgorithmDrawKit.getTreeNodePosByLevelAndIndex = function getTreeNodePosByLevelAndIndex(levelAndIndex, maxLevel) {
          var width = 80;
          var height = 80;
          var level = levelAndIndex[0] || 0;
          var levelIndex = levelAndIndex[1] || 0;
          var winSize = director.getWinSize();
          var maxWidth = maxLevel * width - (maxLevel - level) * 2 * 40;
          width = (maxLevel - level + 1) * width;
          return [-maxWidth * .5 + levelIndex * width, -(level - 1) * height + winSize.height * 0.5 - 80];
        };

        AlgorithmDrawKit.drawSwapLineFromA2B = function drawSwapLineFromA2B(pen, pos, pos1) {
          this.drawLineFromA2B(pen, [pos.x, pos.y + 30], [pos.x, pos.y + 60], [], 0);
          this.drawLineFromA2B(pen, [pos.x, pos.y + 60], [pos1.x, pos1.y + 60], [], 0);
          this.drawLineFromA2B(pen, [pos1.x, pos1.y + 60], [pos1.x, pos1.y + 30], [], 0);
        };

        AlgorithmDrawKit.drawLineFromA2B = function drawLineFromA2B(pen, from, to, color, durting) {
          pen.moveTo(from[0], from[1]);
          pen.lineTo(to[0], to[1]);
          pen.stroke(); //1,2,4,8,#,#,9,#,#,5,10,#,#,11,#,#,3,6,12,#,#,13,#,#,7,14,#,#,15,#,#
        };

        AlgorithmDrawKit.getBinaryTreePostionMap = function getBinaryTreePostionMap(root) {
          var treePosMap = new Map();
          var queue = new Queue();
          var curEnd = root;
          var nextEnd = null;
          var level = 1;
          var index = 0;
          queue.push(root);

          while (queue.size > 0) {
            var cur = queue.poll();
            treePosMap.set(cur, [level, index]);
            index = index + 1;

            if (cur.left) {
              queue.push(cur.left);
              nextEnd = cur.left;
            }

            if (cur.right) {
              queue.push(cur.right);
              nextEnd = cur.right;
            }

            if (cur == curEnd) {
              curEnd = nextEnd;
              index = 0;
              level++;
            }
          }

          level = level - 1;
          treePosMap.set("maxLevel", level);
          return treePosMap;
        };

        AlgorithmDrawKit.drawTreeLine = function drawTreeLine(pen, root, left, right) {
          var posRoot = root.getPosition();
          var offsetOfTreeNodeY = 25;

          if (left != null) {
            var posLeft = left.getPosition();
            pen.moveTo(posRoot.x, posRoot.y - offsetOfTreeNodeY);
            pen.lineTo(posLeft.x, posLeft.y + offsetOfTreeNodeY);
            pen.stroke();
          }

          if (right != null) {
            var posRight = right.getPosition();
            pen.moveTo(posRoot.x, posRoot.y - offsetOfTreeNodeY);
            pen.lineTo(posRight.x, posRight.y + offsetOfTreeNodeY);
            pen.stroke();
          }
        };

        var _proto = AlgorithmDrawKit.prototype;

        _proto.update = function update(dt) {};

        return AlgorithmDrawKit;
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

System.register("chunks:///_virtual/FontManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, _inheritsLoose, cclegacy, _decorator, Component, Label;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      Label = module.Label;
    }],
    execute: function () {
      var _dec, _class, _class2, _temp;

      cclegacy._RF.push({}, "cdb1cPK6SxHYLqrFdOhNghZ", "FontManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var FontManager = exports('FontManager', (_dec = ccclass('FontManager'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FontManager, _Component);

        function FontManager() {
          return _Component.apply(this, arguments) || this;
        }

        FontManager.setFont = function setFont(font) {
          this.curFont = font;
        };

        FontManager.changeNodeFont = function changeNodeFont(node, font) {
          font = font || this.curFont;

          if (font) {
            var changeChildFont = function changeChildFont(n) {
              n.children.forEach(function (element) {
                var label = element.getComponent(Label);

                if (label) {
                  label.font = font;
                }

                changeChildFont(element);
              });
            };

            changeChildFont(node);
          }
        };

        return FontManager;
      }(Component), _defineProperty(_class2, "curFont", void 0), _temp)) || _class));
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

System.register("chunks:///_virtual/PopupManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, _inheritsLoose, cclegacy, _decorator, tween, Vec3, director, Component;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      tween = module.tween;
      Vec3 = module.Vec3;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2, _temp;

      cclegacy._RF.push({}, "e2715w7HFJLO46m6VmRrmdd", "PopupManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PopupManager = exports('PopupManager', (_dec = ccclass('PopupManager'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PopupManager, _Component);

        function PopupManager() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = PopupManager.prototype;

        _proto.onLoad = function onLoad() {
          for (var i = 0; i < PopupManager.maxLevel; i++) {
            PopupManager.popupsMap.set(i, []);
          }
        };

        PopupManager.push = function push(item, level) {
          if (typeof level != 'number') {
            level = 9;
          }

          var popups = this.popupsMap.get(level);

          if (!popups) {
            console.log("Error level!level must be 0 to 9");
            return;
          }

          popups.push(item);
        };

        PopupManager.pop = function pop() {
          for (var i = 0; i < this.maxLevel; i++) {
            var popups = this.popupsMap.get(i);
            var item = popups === null || popups === void 0 ? void 0 : popups.shift;

            if (item) {
              this.show(item);
              break;
            }
          }
        };

        PopupManager.show = function show(item, parent) {};

        PopupManager.showWithAction = function showWithAction(item, parent) {
          item.parent = parent;
          tween(item).to(.1, {
            scale: new Vec3(1.2, 1.2, 1.2)
          }, {
            easing: "quadIn"
          }).to(.1, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: "quadOut"
          }).start();
        };

        PopupManager.showImmeditaely = function showImmeditaely(item, parent) {
          var scene = director.getScene();
          scene === null || scene === void 0 ? void 0 : scene.addChild(item);
        };

        return PopupManager;
      }(Component), _defineProperty(_class2, "popupsMap", new Map()), _defineProperty(_class2, "maxLevel", 10), _temp)) || _class));
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

System.register("chunks:///_virtual/BtnCommon.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, cclegacy, _decorator, AudioSource, Button, Node, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
      Button = module.Button;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _dec5, _dec6, _dec7, _dec8, _class4, _class5, _descriptor4, _descriptor5, _descriptor6, _temp2;

      cclegacy._RF.push({}, "f54debdCQVPsYZzoqQ7sPSp", "BtnCommon", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var commandConfig = (_dec = ccclass("commandConfig"), _dec2 = property(String), _dec3 = property(String), _dec4 = property(String), _dec(_class = (_class2 = (_temp = function commandConfig() {
        _initializerDefineProperty(this, "name", _descriptor, this);

        _initializerDefineProperty(this, "command", _descriptor2, this);

        _initializerDefineProperty(this, "commandArg", _descriptor3, this);
      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "name", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "command", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "commandArg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class);
      var BtnCommon = exports('BtnCommon', (_dec5 = ccclass('BtnCommon'), _dec6 = property({
        type: AudioSource
      }), _dec7 = property({
        type: Button
      }), _dec8 = property({
        type: commandConfig
      }), _dec5(_class4 = (_class5 = (_temp2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BtnCommon, _Component);

        function BtnCommon() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "touchAudio", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "btn", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "config", _descriptor6, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = BtnCommon.prototype;

        _proto.onLoad = function onLoad() {
          this.btn.node.on(Node.EventType.TOUCH_START, this.btnEvent, this);
          this.btn.node.on(Node.EventType.TOUCH_MOVE, this.btnEvent, this);
          this.btn.node.on(Node.EventType.TOUCH_CANCEL, this.btnEvent, this);
          this.btn.node.on(Node.EventType.TOUCH_END, this.btnEvent, this);
        };

        _proto.btnEvent = function btnEvent(event) {
          switch (event.type) {
            case Node.EventType.TOUCH_START:
              // 按下时事件
              break;

            case Node.EventType.TOUCH_MOVE:
              // 按住移动后事件
              break;

            case Node.EventType.TOUCH_END:
              this.playSound();
              break;
            // 按下后松开后事件

            case Node.EventType.TOUCH_CANCEL:
              break;
            // 按下取消事件
          }
        };

        _proto.playSound = function playSound() {
          if (this.touchAudio == null) {
            console.log("空的声音组件");
          }

          this.touchAudio.playOneShot(this.touchAudio.clip);
        };

        return BtnCommon;
      }(Component), _temp2), (_descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "touchAudio", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "btn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "config", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new commandConfig();
        }
      })), _class5)) || _class4));
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

System.register("chunks:///_virtual/Logger.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, log;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
    }],
    execute: function () {
      exports('LogLv', void 0);

      cclegacy._RF.push({}, "fbfddImdgNBEYYq9QVt/jfT", "Logger", undefined);
      /**
       * 日志等级枚举
       */


      var LogLv;

      (function (LogLv) {
        LogLv[LogLv["DEBUG"] = 0] = "DEBUG";
        LogLv[LogLv["INFO"] = 1] = "INFO";
        LogLv[LogLv["WARN"] = 2] = "WARN";
        LogLv[LogLv["ERROR"] = 3] = "ERROR";
      })(LogLv || (LogLv = exports('LogLv', {})));

      var LogInfo = exports('LogInfo', function LogInfo() {});
      var Logger = exports('default', /*#__PURE__*/function () {
        function Logger() {}
        /**
         *
         * 从第几个插入，如果是0则无线插入，如果是1则从第一个开始
         * @private
         * @static
         * @type {number}
         * @memberof Logger
         */

        /**
         * 收集、打印调试等级的日志
         * @param tag
         * @param msg
         */


        Logger.debug = function debug(msg, tag) {
          if (tag === void 0) {
            tag = "default";
          }

          if (Logger.level > LogLv.DEBUG) {
            return;
          }

          var logMsg = "[DEBUG] [" + tag + "] " + msg;

          Logger._addLog(LogLv.DEBUG, logMsg);

          log(logMsg);
        }
        /**
            * 添加缓存日志
            * @param level
            * @param logMsg
        */
        ;

        Logger._addLog = function _addLog(level, logMsg) {
          if (Logger.logs.length >= Logger.MAX_LEN) {
            Logger.logs.splice(0, Logger.CLEAR_COUNT);
          }

          Logger.logs.push({
            level: level,
            msg: logMsg
          });
        };

        Logger.PrintLog = function PrintLog() {
          console.dir(Logger.logs);
        };

        Logger.ObjLog = function ObjLog(obj, msg) {
          log(obj + msg + "");
        };

        return Logger;
      }());

      _defineProperty(Logger, "MAX_LEN", 100);

      _defineProperty(Logger, "CLEAR_COUNT", 1);

      _defineProperty(Logger, "level", 0);

      _defineProperty(Logger, "logs", []);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PersistRootNode.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Loading.ts', './LoadManager.ts', './FontManager.ts', './Popup.ts', './PopupManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Button, Camera, Layout, Prefab, Sprite, Node, Label, Canvas, Layers, game, tween, Vec3, assetManager, instantiate, director, Component, Loading, LoadManager, FontManager, Popup, PopupManager;

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
      Button = module.Button;
      Camera = module.Camera;
      Layout = module.Layout;
      Prefab = module.Prefab;
      Sprite = module.Sprite;
      Node = module.Node;
      Label = module.Label;
      Canvas = module.Canvas;
      Layers = module.Layers;
      game = module.game;
      tween = module.tween;
      Vec3 = module.Vec3;
      assetManager = module.assetManager;
      instantiate = module.instantiate;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      Loading = module.Loading;
    }, function (module) {
      LoadManager = module.LoadManager;
    }, function (module) {
      FontManager = module.FontManager;
    }, function (module) {
      Popup = module.Popup;
    }, function (module) {
      PopupManager = module.PopupManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _temp;

      cclegacy._RF.push({}, "ff886mM2JtFEbGPsCc3kD5I", "PersistRootNode", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PersistRootNode = exports('PersistRootNode', (_dec = ccclass('PersistRootNode'), _dec2 = property({
        type: Button,
        displayName: "返回关闭按钮"
      }), _dec3 = property([Button]), _dec4 = property(Camera), _dec5 = property(Layout), _dec6 = property(Prefab), _dec7 = property(Sprite), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Prefab), _dec11 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PersistRootNode, _Component);

        function PersistRootNode() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "backBtn", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "btnList", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "localCamera", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "secondnaryLayout", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "secondnaryItem", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "backgroundColorSprite", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "musicNode", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "tipLabel", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "popupPrefab", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "loadingNode", _descriptor10, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "showTipLabelArr", []);

          return _this;
        }

        var _proto = PersistRootNode.prototype;

        _proto.onLoad = function onLoad() {
          var _this2 = this;

          var bundleList = ["Game", "Algorithm", "Creator", "LargerThe1M"];
          bundleList.forEach(function (element) {
            LoadManager.loadBundle(element, function (loaded, total) {
              _this2.refreshTipLabel("加载bundle " + element + Math.floor(loaded / total * 10000) / 100 + "%");

              if (element == bundleList[bundleList.length - 1]) {
                _this2.refreshTipLabel("加载完毕");
              }
            });
          });
          this.checkFont();
          this.showTipLabelPreSecond();
        };

        _proto.showTipLabelPreSecond = function showTipLabelPreSecond() {
          var _this3 = this;

          this.schedule(function () {
            var str = _this3.showTipLabelArr.shift();

            if (str) {
              _this3.tipLabel.string = str;
            } else {
              _this3.tipLabel.string = "";
            }
          }, 1);
        };

        _proto.checkFont = function checkFont() {
          var _this4 = this;

          var refreshFont = function refreshFont() {
            var bundle = assetManager.getBundle("LargerThe1M");

            if (bundle) {
              bundle === null || bundle === void 0 ? void 0 : bundle.load("STHeitiTC-Medium-06", function (loaded, total) {
                _this4.refreshTipLabel("加载字体中..." + loaded + "/" + total);
              }, function (err, res) {
                if (!err) {
                  _this4.refreshTipLabel("加载字体成功");

                  FontManager.setFont(res);

                  _this4.scheduleOnce(function () {
                    FontManager.changeNodeFont(_this4.node);
                  }, 5);

                  _this4.unschedule(refreshFont);
                } else {
                  var _err = new Error();

                  console.log(_err.stack);
                  console.log(_err);
                }
              });
            } else {
              _this4.refreshTipLabel("等待字体加载...");
            }
          };

          this.schedule(refreshFont, 1);
        };

        _proto.refreshTipLabel = function refreshTipLabel(str) {
          this.showTipLabelArr.push(str);
        };

        _proto.start = function start() {
          var camera = this.node.getComponent(Canvas).cameraComponent;
          if (camera.visibility & Layers.Enum.UI_2D) camera.visibility &= ~Layers.Enum.UI_2D;
          game.addPersistRootNode(this.node); //把本节点的node设为常驻节点    

          var t = tween(this.backBtn.node).to(2, {
            scale: new Vec3(1.9, 1.9, 1)
          }, {
            easing: "quadIn"
          }).to(2, {
            scale: new Vec3(1.86, 1.86, 1)
          }, {
            easing: "quadOut"
          }).union().repeatForever();
          t.start();
          this.backBtn.node.active = false;
        };

        _proto.onBtnEvent = function onBtnEvent(event, customData) {
          if (customData == undefined) {
            customData = event.target._name;
          }

          switch (customData) {
            case "Main":
              this.changeScene("Main");
              break;

            case "Algorithm":
            case "Game":
            case "Graphics":
            case "Creator":
              this.showSecondaryPanel(customData);
              break;
          }
        };

        _proto.showSecondaryPanel = function showSecondaryPanel(bundleName) {
          var _this5 = this;

          if (!assetManager.bundles.has(bundleName)) {
            console.log("还未加载" + bundleName);
            return;
          }

          var item = instantiate(this.popupPrefab);
          var popupScript = item.getComponent(Popup);
          var layoutConfig = popupScript === null || popupScript === void 0 ? void 0 : popupScript.configShow(bundleName);
          PopupManager.showWithAction(item, this.node);
          layoutConfig.children.forEach(function (element) {
            _this5.registerSecondaryBtnEvent(element);
          });
        };

        _proto.changeScene = function changeScene(sceneName) {
          var _this6 = this;

          this.showLoading();
          this.changeLoadingPer(0);
          director.preloadScene(sceneName, function (completedCount, totalCount, item) {
            _this6.changeLoadingPer(completedCount / totalCount);
          }, function () {
            _this6.scheduleOnce(function () {
              director.loadScene(sceneName, function () {
                _this6.changeLoadingPer(0);

                _this6.hideLoading();

                _this6.loadSceneSuccess();
              });
            }, .1);
          });
        };

        _proto.changeLoadingPer = function changeLoadingPer(n) {
          var loading = this.loadingNode.getComponent(Loading);
          loading.setLoaded(n);
        };

        _proto.showLoading = function showLoading() {
          this.loadingNode.active = true;
        };

        _proto.hideLoading = function hideLoading() {
          this.loadingNode.active = false;
        };

        _proto.registerSecondaryBtnEvent = function registerSecondaryBtnEvent(element) {
          var _this7 = this;

          element.on(Node.EventType.TOUCH_END, function () {
            var _element$getChildByNa;

            var label = (_element$getChildByNa = element.getChildByName("Label")) === null || _element$getChildByNa === void 0 ? void 0 : _element$getChildByNa.getComponent(Label);

            _this7.changeScene(label.string);
          });
        };

        _proto.loadSceneSuccess = function loadSceneSuccess() {
          var _director$getScene;

          if (((_director$getScene = director.getScene()) === null || _director$getScene === void 0 ? void 0 : _director$getScene.name) == "Main") {
            this.showMainSceneBtn();
          } else {
            this.showOtherSceneBtn();
          }
        };

        _proto.showMainSceneBtn = function showMainSceneBtn() {
          var _this8 = this;

          this.backBtn.node.active = false;
          this.node.children.forEach(function (ele) {
            if (ele != _this8.backBtn.node && ele != _this8.loadingNode) {
              ele.active = true;
            }
          });
        };

        _proto.showOtherSceneBtn = function showOtherSceneBtn() {
          var _this9 = this;

          this.backBtn.node.active = true;
          this.node.children.forEach(function (ele) {
            if (ele != _this9.backBtn.node && ele != _this9.loadingNode) {
              ele.active = false;
            }
          });
        };

        return PersistRootNode;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "backBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "localCamera", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "secondnaryLayout", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "secondnaryItem", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "backgroundColorSprite", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "musicNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "tipLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "popupPrefab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "loadingNode", [_dec11], {
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

System.register("chunks:///_virtual/main", ['./BoxData.ts', './Queue.ts', './AlgorithmDrawKit.ts', './BaseDataUnit.ts', './Stack.ts', './SoundManager.ts', './UiKit.ts', './Loading.ts', './LoadManager.ts', './Global.ts.ts', './FontManager.ts', './Popup.ts', './PlayMusic.ts', './PopupManager.ts', './BtnCommon.ts', './Logger.ts', './PersistRootNode.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
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