System.register("chunks:///_virtual/GamePhysicsData.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _createClass, _defineProperty, cclegacy;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "22e3aB3cEpItYTjlw7FAHW7", "GamePhysicsData", undefined);
      /*
       * @Author: Sunshine
       * @Date: 2021-06-09 12:32:14
       * @LastEditors: Sunshine
       * @LastEditTime: 2021-06-11 15:40:09
       * @Description: file content
       */


      var GamePhysicsData = exports('GamePhysicsData', /*#__PURE__*/function () {
        function GamePhysicsData() {}

        GamePhysicsData.clearBlocks = function clearBlocks() {
          this.bolcksData = [];
        };

        GamePhysicsData.clearLines = function clearLines() {
          this.lines = [];
        };

        _createClass(GamePhysicsData, [{
          key: "bolcksData",
          set: function set(v) {
            this.bolcksData.push(v);
          },
          get: function get() {
            return this.bolcksData;
          }
        }, {
          key: "lines",
          set: function set(v) {
            this.lines.push(v);
          },
          get: function get() {
            return this.lines;
          }
        }]);

        return GamePhysicsData;
      }());

      _defineProperty(GamePhysicsData, "bolcksData", []);

      _defineProperty(GamePhysicsData, "lines", []);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './PlayerController.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _defineProperty, _assertThisInitialized, _initializerDefineProperty, _createClass, cclegacy, _decorator, Prefab, CCInteger, Node, Label, v3, instantiate, Component, PlayerController;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _initializerDefineProperty = module.initializerDefineProperty;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      CCInteger = module.CCInteger;
      Node = module.Node;
      Label = module.Label;
      v3 = module.v3;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      PlayerController = module.PlayerController;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

      cclegacy._RF.push({}, "51398BHiRlMVL0+vefN7D2H", "GameManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BlockType;

      (function (BlockType) {
        BlockType[BlockType["BT_NONE"] = 0] = "BT_NONE";
        BlockType[BlockType["BT_STONE"] = 1] = "BT_STONE";
      })(BlockType || (BlockType = {}));

      var GameState;

      (function (GameState) {
        GameState[GameState["GS_INIT"] = 0] = "GS_INIT";
        GameState[GameState["GS_PLAYING"] = 1] = "GS_PLAYING";
        GameState[GameState["GS_END"] = 2] = "GS_END";
      })(GameState || (GameState = {}));

      var GameManager = exports('GameManager', (_dec = ccclass('GameManager'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: CCInteger
      }), _dec4 = property({
        type: PlayerController
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Label
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameManager, _Component);

        function GameManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "_curState", GameState.GS_INIT);

          _initializerDefineProperty(_assertThisInitialized(_this), "cubePrfb", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "roadLength", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_road", []);

          _initializerDefineProperty(_assertThisInitialized(_this), "playerCtrl", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "startMenu", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "stepsLabel", _descriptor5, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = GameManager.prototype;

        _proto.start = function start() {
          this.curState = GameState.GS_INIT;
          this.playerCtrl.node.on("JumpEnd", this.onPlayerJumpEnd, this); // [3]
        };

        _proto.init = function init() {
          this.startMenu.active = true;
          this.generateRoad();
          this.playerCtrl.setInputActive(false);
          this.playerCtrl.node.setPosition(v3());
          this.playerCtrl.reset();
        };

        _proto.onStartButtonClicked = function onStartButtonClicked() {
          this.curState = GameState.GS_PLAYING;
        };

        _proto.generateRoad = function generateRoad() {
          this.node.removeAllChildren();
          this._road = []; // startPos

          this._road.push(BlockType.BT_STONE);

          for (var i = 1; i < this.roadLength; i++) {
            if (this._road[i - 1] === BlockType.BT_NONE) {
              this._road.push(BlockType.BT_STONE);
            } else {
              this._road.push(Math.floor(Math.random() * 2));
            }
          }

          for (var j = 0; j < this._road.length; j++) {
            var block = this.spawnBlockByType(this._road[j]);

            if (block) {
              this.node.addChild(block);
              block.setPosition(j, -1.5, 0);
            }
          }
        };

        _proto.onPlayerJumpEnd = function onPlayerJumpEnd(moveIndex) {
          this.stepsLabel.string = '' + moveIndex;
          this.checkResult(moveIndex);
        };

        _proto.checkResult = function checkResult(moveIndex) {
          if (moveIndex <= this.roadLength) {
            if (this._road[moveIndex] == BlockType.BT_NONE) {
              this.curState = GameState.GS_INIT;
            }
          } else {
            this.curState = GameState.GS_INIT;
          }
        };

        _proto.spawnBlockByType = function spawnBlockByType(type) {
          var block = null;

          switch (type) {
            case BlockType.BT_STONE:
              block = instantiate(this.cubePrfb);
              break;
          }

          return block;
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        _createClass(GameManager, [{
          key: "curState",
          set: function set(value) {
            var _this2 = this;

            switch (value) {
              case GameState.GS_INIT:
                this.init();
                break;

              case GameState.GS_PLAYING:
                this.stepsLabel.string = "0";
                this.startMenu.active = false;
                setTimeout(function () {
                  _this2.playerCtrl.setInputActive(true);
                }, 0.1);

              case GameState.GS_END:
                break;
            }

            this._curState = value;
          }
        }]);

        return GameManager;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cubePrfb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "roadLength", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 50;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "playerCtrl", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "startMenu", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "stepsLabel", [_dec6], {
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

System.register("chunks:///_virtual/GameTreeLineHud.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, _decorator;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "73aeboh2uhOlrLGPZlOuXb1", "GameTreeLineHud", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GameTreeLineHud = exports('GameTreeLineHud', (_dec = ccclass('GameTreeLineHud'), _dec(_class = function GameTreeLineHud() {}) || _class));
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

System.register("chunks:///_virtual/CollideManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GamePhysicsData.ts', './GameStatus.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component, GamePhysicsData, GameStatus;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      GamePhysicsData = module.GamePhysicsData;
    }, function (module) {
      GameStatus = module.GameStatus;
    }],
    execute: function () {
      exports({
        collideRoundRound: collideRoundRound,
        collideRoundSquare: collideRoundSquare
      });

      var _dec, _class;

      cclegacy._RF.push({}, "a24edTwbOhGhZA6uPz5CQd1", "CollideManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      function collideRoundSquare(o, b) {
        var y1 = o.y - o.r;
        var h1 = o.r * 2;
        var y2 = b.y;
        var h2 = b.h;
        var x1 = o.x - o.r;
        var w1 = o.r * 2;
        var x2 = b.x;
        var w2 = b.w;
        return !(y1 + h1 < y2 || y1 > y2 + h2 || x1 + w1 < x2 || x1 > x2 + w2);
      }

      function collideRoundRound(o, b) {
        var y1 = o.y - o.r;
        var h1 = o.r * 2;
        var y2 = b.y - b.r;
        var h2 = b.r * 2;
        var x1 = o.x - o.r;
        var w1 = o.r * 2;
        var x2 = b.x - b.r;
        var w2 = b.r * 2;
        return !(y1 + h1 < y2 || y1 > y2 + h2 || x1 + w1 < x2 || x1 > x2 + w2);
      }

      var CollideManager = exports('CollideManager', (_dec = ccclass('CollideManager'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CollideManager, _Component);

        function CollideManager() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = CollideManager.prototype;

        _proto.physicsWorld = function physicsWorld(dt) {
          if (GamePhysicsData.bolcksData.length > 0 && !GameStatus.isDead) {
            if (this.posX - this.posR < 0 || this.posX + this.posY > screen.width) {
              this.isDead = true;
              return;
            }

            for (var i = 0; i < this.blocks.length; i++) {
              if (collideRoundSquare(this, this.blocks[i])) {
                break;
              }
            }
          }
        };

        return CollideManager;
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

System.register("chunks:///_virtual/GameDrawLiner.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GamePhysicsData.ts', './GameStatus.ts', './CollideManager.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, _decorator, Color, GamePhysicsData, GameStatus, collideRoundSquare;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Color = module.Color;
    }, function (module) {
      GamePhysicsData = module.GamePhysicsData;
    }, function (module) {
      GameStatus = module.GameStatus;
    }, function (module) {
      collideRoundSquare = module.collideRoundSquare;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "a3b34RiHVhCgruk6AE5JuUZ", "GameDrawLiner", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GameDrawLiner = exports('GameDrawLiner', (_dec = ccclass('GameDrawLiner'), _dec(_class = (_temp = /*#__PURE__*/function () {
        function GameDrawLiner() {
          _defineProperty(this, "posX", 0);

          _defineProperty(this, "posY", -screen.height * .5 + 400);

          _defineProperty(this, "posR", 5);

          _defineProperty(this, "clearCount", 200);

          _defineProperty(this, "speedX", 4);

          _defineProperty(this, "speedY", 4);

          _defineProperty(this, "speed", 4);

          _defineProperty(this, "tarX", -1);

          _defineProperty(this, "tarXRate", -1);

          _defineProperty(this, "tarXTime", 0);

          _defineProperty(this, "lineColor", new Color(122, 64, 200, 255));
        }

        var _proto = GameDrawLiner.prototype;

        _proto.clearGone = function clearGone() {
          for (var i = GamePhysicsData.lines.length - 1; i >= 0; i--) {
            if (GamePhysicsData.lines[i].y < -screen.height - .5 * this.posR * 2) {
              GamePhysicsData.lines.splice(0, i);
              break;
            }
          }
        };

        _proto.draw = function draw(pen) {
          var tail = GamePhysicsData.lines[0];
          var head = GamePhysicsData.lines[GamePhysicsData.lines.length - 1];
          if (!tail || !head) return;
          pen.moveTo(tail.x, tail.y);
          pen.strokeColor = this.lineColor;
          pen.lineWidth = 20;
          GamePhysicsData.lines.forEach(function (ele) {
            pen.lineTo(ele.x, ele.y);
          });
          pen.stroke();
        };

        _proto.physicsWorld = function physicsWorld(dt) {
          var _this = this;

          if (GamePhysicsData.lines.length >= this.clearCount) {
            this.clearGone();
          }

          GamePhysicsData.lines.forEach(function (ele) {
            ele.y -= _this.speedY;
          });

          if (this.tarX == -1) {
            var n = GameStatus.directionX; // if(Math.abs(n) > 10){
            //     n = n > 0?10:-10;
            // }

            this.posX += n;
          }

          if (!GameStatus.isDead) {
            GamePhysicsData.lines.push({
              x: this.posX,
              y: this.posY,
              r: this.posR,
              color: this.lineColor
            });
          }

          if (GamePhysicsData.bolcksData && !GameStatus.isDead) {
            if (this.posX - this.posR < -screen.width * .5 || this.posX + this.posR > screen.width * .5) {
              GameStatus.isDead = true;
              return;
            }

            var blocks = GamePhysicsData.bolcksData;

            for (var i = 0; i < blocks.length; i++) {
              if (collideRoundSquare({
                x: this.posX,
                y: this.posY,
                r: this.posR
              }, blocks[i])) {
                GameStatus.isDead = true;
                break;
              }
            }
          }
        };

        _proto.resetXYR = function resetXYR() {
          this.posX = 0;
          this.posY = -screen.height * .5 + 400;
          this.posR = 5;
        };

        return GameDrawLiner;
      }(), _temp)) || _class));
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

System.register("chunks:///_virtual/GameStatus.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _createClass, _defineProperty, cclegacy;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "aec372PaXJG+olyETVwdJOp", "GameStatus", undefined);
      /*
       * @Author: Sunshine
       * @Date: 2021-06-09 12:27:04
       * @LastEditors: Sunshine
       * @LastEditTime: 2021-06-11 16:11:08
       * @Description: file content
       */


      var GameStatus = exports('GameStatus', /*#__PURE__*/function () {
        function GameStatus() {}

        _createClass(GameStatus, [{
          key: "isDead",
          set: function set(flag) {
            this.isDead = flag;
          }
        }]);

        return GameStatus;
      }());

      _defineProperty(GameStatus, "isDead", false);

      _defineProperty(GameStatus, "blockSpeed", 4);

      _defineProperty(GameStatus, "lineSpeed", 4);

      _defineProperty(GameStatus, "level", 1);

      _defineProperty(GameStatus, "touchDirection", []);

      _defineProperty(GameStatus, "directionX", 0);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameThreeLine.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GamePhysicsData.ts', './GameStatus.ts', './GameDrawLiner.ts', './BlockSpawner.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Canvas, Graphics, Button, AudioSource, Node, Component, GamePhysicsData, GameStatus, GameDrawLiner, BlockSpawner;

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
      Canvas = module.Canvas;
      Graphics = module.Graphics;
      Button = module.Button;
      AudioSource = module.AudioSource;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      GamePhysicsData = module.GamePhysicsData;
    }, function (module) {
      GameStatus = module.GameStatus;
    }, function (module) {
      GameDrawLiner = module.GameDrawLiner;
    }, function (module) {
      BlockSpawner = module.BlockSpawner;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

      cclegacy._RF.push({}, "d7647v52P9IwYk8s8SUcU87", "GameThreeLine", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GameThreeLine = exports('GameThreeLine', (_dec = ccclass('GameThreeLine'), _dec2 = property(Canvas), _dec3 = property(Graphics), _dec4 = property(Button), _dec5 = property(AudioSource), _dec6 = property(Button), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameThreeLine, _Component);

        function GameThreeLine() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "canvas", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "pen", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "directionBtn", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "audioSource", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "resetBtn", _descriptor5, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "objects", []);

          _defineProperty(_assertThisInitialized(_this), "prevTime", Date.now());

          _defineProperty(_assertThisInitialized(_this), "speed", 4);

          _defineProperty(_assertThisInitialized(_this), "pause", false);

          _defineProperty(_assertThisInitialized(_this), "play", true);

          _defineProperty(_assertThisInitialized(_this), "timeTillLevel", 1000);

          _defineProperty(_assertThisInitialized(_this), "timer", 0);

          _defineProperty(_assertThisInitialized(_this), "timeDelta", 0);

          return _this;
        }

        var _proto = GameThreeLine.prototype;

        _proto.start = function start() {
          this.blockSpawner = new BlockSpawner();
          this.line = new GameDrawLiner();
          this.addObject("spawner", this.blockSpawner);
          this.addObject("line", this.line); // this.directionBtn.node.on(Node.EventType.TOUCH_START, this.directionBtnTouchs, this);

          this.directionBtn.node.on(Node.EventType.TOUCH_MOVE, this.directionBtnTouchs, this);
          this.directionBtn.node.on(Node.EventType.TOUCH_END, this.directionBtnTouchs, this);
          this.directionBtn.node.on(Node.EventType.TOUCH_CANCEL, this.directionBtnTouchs, this);
        };

        _proto.resetGame = function resetGame() {
          this.audioSource.play();
          GamePhysicsData.clearBlocks();
          GamePhysicsData.clearLines();
          GameStatus.isDead = false;
          this.resetBtn.node.active = false;
          this.line.resetXYR();
        };

        _proto.update = function update(dt) {
          if (GameStatus.isDead) {
            if (!this.resetBtn.node.active) {
              this.resetBtn.node.active = true;
              this.audioSource.stop();
            }

            return;
          }

          this.timeDelta = dt;
          this.pen.clear();
          this.physicsWorld(dt);
          this.draw();
        };

        _proto.directionBtnTouchs = function directionBtnTouchs(event) {
          switch (event.type) {
            case Node.EventType.TOUCH_START:
              // 按下时事件
              break;

            case Node.EventType.TOUCH_MOVE:
              // 按住移动后事件
              this.line.tarX = -1;
              GameStatus.directionX = event.getDeltaX();
              break;

            case Node.EventType.TOUCH_END:
              this.line.tarX = 1;
              break;
            // 按下后松开后事件

            case Node.EventType.TOUCH_CANCEL:
              this.line.tarX = 1;
              break;
            // 按下取消事件
          }
        };

        _proto.physicsWorld = function physicsWorld(dt) {
          this.timer += dt;

          if (this.timer > this.timeTillLevel) {
            this.timer = 0;

            if (this.objects["spawner"]) {
              this.objects["spawner"].level += 1;
            }

            if (this.objects["power_spawn"]) {
              this.objects["power_spawn"].spawn();
            }
          }

          this.objects.forEach(function (element) {
            element.physicsWorld(dt);
          });
        };

        _proto.draw = function draw() {
          var _this2 = this;

          this.objects.forEach(function (element) {
            element.draw(_this2.pen);
          });
        };

        _proto.addObject = function addObject(name, o) {
          this.objects[name] = o;
          this.objects.push(o);
        };

        return GameThreeLine;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "canvas", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pen", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "directionBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "audioSource", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "resetBtn", [_dec6], {
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

System.register("chunks:///_virtual/PlayerController.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Node, v3, systemEvent, SystemEvent, Vec3, Component;

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
      Node = module.Node;
      v3 = module.v3;
      systemEvent = module.systemEvent;
      SystemEvent = module.SystemEvent;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "dbc74UMEx1FZYS+oMRMOhje", "PlayerController", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PlayerController = exports('PlayerController', (_dec = ccclass('PlayerController'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PlayerController, _Component);

        function PlayerController() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "BodyAnim", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_curMoveIndex", 0);

          _defineProperty(_assertThisInitialized(_this), "_startJump", false);

          _defineProperty(_assertThisInitialized(_this), "_jumpStep", 0);

          _defineProperty(_assertThisInitialized(_this), "_curJumpTime", 0);

          _defineProperty(_assertThisInitialized(_this), "_curJumpSpeed", 0);

          _defineProperty(_assertThisInitialized(_this), "_jumpTime", 0.1);

          _defineProperty(_assertThisInitialized(_this), "_curPos", v3());

          _defineProperty(_assertThisInitialized(_this), "_deltaPos", v3(0, 0, 0));

          _defineProperty(_assertThisInitialized(_this), "_targetPos", v3());

          _defineProperty(_assertThisInitialized(_this), "_isMoving", false);

          return _this;
        }

        var _proto = PlayerController.prototype;

        _proto.start = function start() {
          // [3]
          systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this);
        };

        _proto.onMouseUp = function onMouseUp(event) {
          console.log("PlayerController EventMouse:" + event.getButton());

          if (event.getButton() === 0) {
            this.jumpByStep(1);
          } else if (event.getButton() === 2) {
            this.jumpByStep(2);
          }
        };

        _proto.jumpByStep = function jumpByStep(step) {
          if (this._isMoving) {
            return;
          }

          if (step == 1) {
            this.BodyAnim.getComponent("cc.Animation").play('oneStep');
          } else if (step == 2) {
            this.BodyAnim.getComponent("cc.Animation").play('oneStep');
          }

          this._startJump = true;
          this._jumpStep = step;
          this._curJumpTime = 0;
          this._curJumpSpeed = this._jumpStep / this._jumpTime;
          this.node.getPosition(this._curPos);
          Vec3.add(this._targetPos, this._curPos, v3(this._jumpStep, 0, 0));
          this._curMoveIndex += step;
          this._isMoving = true;
        };

        _proto.reset = function reset() {
          this._curMoveIndex = 0;
        };

        _proto.setInputActive = function setInputActive(active) {
          if (active) {
            systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this);
          } else {
            systemEvent.off(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this);
          }
        };

        _proto.onOnceJumpEnd = function onOnceJumpEnd() {
          this._isMoving = false;
          this.node.emit("JumpEnd", this._curMoveIndex);
        };

        _proto.update = function update(deltaTime) {
          if (this._startJump) {
            this._curJumpTime += deltaTime;

            if (this._curJumpTime > this._jumpTime) {
              this.node.setPosition(this._targetPos);
              this._startJump = false;
              this.onOnceJumpEnd();
            } else {
              this.node.getPosition(this._curPos);
              this._deltaPos.x = this._curJumpSpeed * deltaTime;
              Vec3.add(this._curPos, this._curPos, this._deltaPos);
              this.node.setPosition(this._curPos);
            }
          } // [4]

        };

        return PlayerController;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "BodyAnim", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
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

System.register("chunks:///_virtual/BlockSpawner.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GamePhysicsData.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, Component, Color, GamePhysicsData;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      Color = module.Color;
    }, function (module) {
      GamePhysicsData = module.GamePhysicsData;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "e663eyUQp1F5aEBULtivrMz", "BlockSpawner", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      var Block = /*#__PURE__*/function () {
        function Block(x, y, w, h, speed) {
          _defineProperty(this, "x", void 0);

          _defineProperty(this, "y", void 0);

          _defineProperty(this, "h", void 0);

          _defineProperty(this, "w", void 0);

          _defineProperty(this, "speed", 4);

          _defineProperty(this, "color", null);

          this.x = x || 0;
          this.y = y || 0;
          this.w = w || 20;
          this.h = h || 20;
          this.speed = speed || 4;
          this.color = this.color || new Color(Math.random() * 255, Math.random() * 255, Math.random() * 255, 255);
        }

        var _proto = Block.prototype;

        _proto.draw = function draw(pen) {
          pen.fillColor = this.color;
          pen.fillRect(this.x, this.y, this.w, this.h);
        };

        _proto.physicsWorld = function physicsWorld(dt) {
          this.y -= this.speed;
        };

        return Block;
      }();

      var BlockSpawner = exports('BlockSpawner', (_dec = ccclass('BlockSpawner'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BlockSpawner, _Component);

        function BlockSpawner() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "speed", 4);

          _defineProperty(_assertThisInitialized(_this), "clearCount", 200);

          _defineProperty(_assertThisInitialized(_this), "level", 1);

          return _this;
        }

        var _proto2 = BlockSpawner.prototype;

        _proto2.draw = function draw(pen) {
          GamePhysicsData.bolcksData.forEach(function (ele) {
            ele.draw(pen);
          });
        };

        _proto2.physicsWorld = function physicsWorld(dt) {
          if (GamePhysicsData.bolcksData.length >= this.clearCount) {
            for (var _i = GamePhysicsData.bolcksData.length - 1; _i >= 0; _i--) {
              if (GamePhysicsData.bolcksData[_i].y < -screen.height * .5) {
                GamePhysicsData.bolcksData.splice(0, _i);
                break;
              }
            }
          }

          var i = 5;

          while (i-- > 0) {
            if (Math.random() * 100 > 100 - this.level / 2 - 1) {
              var x = Math.random() * screen.width - screen.width * .5;
              x = x > 0 ? x - 100 : x + 100;
              var w = Math.random() * 100 + 10;
              var h = Math.random() * 100 + 10;
              var y = screen.height * .5;
              GamePhysicsData.bolcksData.push(new Block(x, y, w, h, this.speed));
            }
          }

          GamePhysicsData.bolcksData.forEach(function (ele) {
            ele.physicsWorld(dt);
          });
        };

        return BlockSpawner;
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

System.register("chunks:///_virtual/Game", ['./GamePhysicsData.ts', './PlayerController.ts', './GameManager.ts', './GameTreeLineHud.ts', './GameStatus.ts', './CollideManager.ts', './GameDrawLiner.ts', './BlockSpawner.ts', './GameThreeLine.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/Game', 'chunks:///_virtual/Game'); 
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