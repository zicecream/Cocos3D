System.register("chunks:///_virtual/LoadFeature.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _defineProperty, _assertThisInitialized, _initializerDefineProperty, cclegacy, _decorator, ScrollView, Button, Node, Graphics, Label, Prefab, SpriteFrame, Sprite, instantiate, Layout, loader, director, SpriteAtlas, Font, TextureCube, Texture2D, Layers, MeshRenderer, UIMeshRenderer, builtinResMgr, AudioSource, Component;

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
      ScrollView = module.ScrollView;
      Button = module.Button;
      Node = module.Node;
      Graphics = module.Graphics;
      Label = module.Label;
      Prefab = module.Prefab;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      instantiate = module.instantiate;
      Layout = module.Layout;
      loader = module.loader;
      director = module.director;
      SpriteAtlas = module.SpriteAtlas;
      Font = module.Font;
      TextureCube = module.TextureCube;
      Texture2D = module.Texture2D;
      Layers = module.Layers;
      MeshRenderer = module.MeshRenderer;
      UIMeshRenderer = module.UIMeshRenderer;
      builtinResMgr = module.builtinResMgr;
      AudioSource = module.AudioSource;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _temp;

      cclegacy._RF.push({}, "5d96d1JCPJDjoraMgy10ZkD", "LoadFeature", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var LoadFeature = exports('LoadFeature', (_dec = ccclass('LoadFeature'), _dec2 = property(ScrollView), _dec3 = property(Button), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Graphics), _dec7 = property(Label), _dec8 = property(Prefab), _dec9 = property(Node), _dec10 = property(String), _dec11 = property({
        type: Prefab
      }), _dec12 = property({
        type: SpriteFrame
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LoadFeature, _Component);

        function LoadFeature() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "_urls", {
            Audio: "tst/she",
            Txt: "tst/text",
            ImageAsset: "tst/paper",
            Texture2D: "tst/paper/texture",
            Font: "tst/font",
            SpriteAtlas: "tst/atlas.plist",
            SpriteFrame: "tst/image/spriteFrame",
            Prefab: "tst/prefab",
            Animation: "tst/testAnim",
            Scene: "tst/test-scene",
            TextureCube: "tst/cubemap",
            CORS: "https://cn.bing.com/th?id=OHR.PoellatWasserfall_ZH-CN3028716235_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
            Material: "tst/testMat",
            Mesh: "tst/Monster/monster.mesh",
            Skeleton: "tst/Monster/Armature.skeleton"
          });

          _initializerDefineProperty(_assertThisInitialized(_this), "scrollView", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "runBtn", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "drawPanel", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "scrllList", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "penGraphics", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "tipLabel", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "boxPrefab", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "scrollItem", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "contentName", _descriptor9, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "isLoading", false);

          _defineProperty(_assertThisInitialized(_this), "curRes", void 0);

          _defineProperty(_assertThisInitialized(_this), "audioSource", null);

          _initializerDefineProperty(_assertThisInitialized(_this), "loadAnimTestPrefab", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "loadMaterialSpriteFrame", _descriptor11, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = LoadFeature.prototype;

        _proto.onLoad = function onLoad() {
          var node = new Node();
          var sprite = node.addComponent(Sprite);
          var spriteFrame = new SpriteFrame();
          this.init();
        };

        _proto.init = function init() {
          this.initDraw();
          this.initScrollItemAndNameData();
        };

        _proto.initDraw = function initDraw() {};

        _proto.initScrollItemAndNameData = function initScrollItemAndNameData() {
          var _this$scrollView$cont, _this$scrollView$cont2;

          var view = this.scrllList;

          for (var i = 0; i < this.contentName.length; i++) {
            var _node$getChildByName;

            var node = instantiate(this.scrollItem);
            var label = (_node$getChildByName = node.getChildByName("Label")) === null || _node$getChildByName === void 0 ? void 0 : _node$getChildByName.getComponent(Label);
            label.string = "加载 " + this.contentName[i];
            view === null || view === void 0 ? void 0 : view.addChild(node);
          }

          this.scrollItem.active = false;
          (_this$scrollView$cont = this.scrollView.content) === null || _this$scrollView$cont === void 0 ? void 0 : (_this$scrollView$cont2 = _this$scrollView$cont.getComponent(Layout)) === null || _this$scrollView$cont2 === void 0 ? void 0 : _this$scrollView$cont2.updateLayout();
        };

        _proto.onClickScrollItem = function onClickScrollItem(event, customData) {
          if (this.isLoading) {
            return;
          }

          this.clearDrawPanel();
          var name = "";
          var target = event.target;
          var labelNode = target.getChildByName("Label");
          var label = labelNode.getComponent(Label);
          name = label.string;
          name = name.split(' ')[1];
          this.curType = name;

          if (this.lastType !== "" && this.curType == this.lastType) {
            this.tipLabel.string = '';
            this.onShowResClick(event);
            return;
          }

          if (this.btnLabel) {
            this.btnLabel.string = "已加载 " + this.lastType;
          }

          this.lastType = this.curType;

          if (target) {
            this.btnLabel = target.getChildByName("Label").getComponent(Label);
          }

          this.tipLabel.string = this.curType + " Loading....";
          this.isLoading = true;
          this.load();
        };

        _proto.load = function load() {
          var url = this._urls[this.curType];
          var loadCallBack = this.loadResCallBack.bind(this);

          switch (this.curType) {
            case 'SpriteFrame':
              // specify the type to load sub asset from texture's url
              loader.loadRes(url, SpriteFrame, loadCallBack);
              break;

            case 'Texture2D':
              loader.loadRes(url, Texture2D, loadCallBack);
              break;

            case 'TextureCube':
              loader.loadRes(url, TextureCube, loadCallBack);
              break;

            case 'Font':
              loader.loadRes(url, Font, loadCallBack);
              break;

            case 'SpriteAtlas':
              loader.loadRes(url, SpriteAtlas, loadCallBack);
              break;

            case 'Animation':
            case 'Prefab':
            case 'Skeleton':
            case 'Mesh':
            case 'ImageAsset':
            case 'Txt':
            case 'Audio':
            case 'Material':
            case 'Skeleton':
              loader.loadRes(url, loadCallBack);
              break;

            case 'Scene':
              director.loadScene(url);
              break;

            case 'CORS':
              loader.load({
                url: url,
                type: 'jpg'
              }, loadCallBack);
              this.tipLabel.string = "CORS image should report texImage2D error under WebGL and works ok under Canvas";
              break;

            default:
              loader.load(url, loadCallBack);
              break;
          }
        };

        _proto.onShowResClick = function onShowResClick(event) {
          if (this.curType == "Scene") {
            return;
          }

          this.createNode(this.curType, this.curRes);
        };

        _proto.createNode = function createNode(type, res) {
          this.tipLabel.string = "";
          var node = new Node("test");
          node.layer = Layers.Enum.UI_2D;
          node.setPosition(0, 0, 0);
          var component = null;

          switch (this.curType) {
            case "SpriteFrame":
              component = node.addComponent(Sprite);
              component.spriteFrame = res;
              break;

            case "SpriteAtlas":
              component = node.addComponent(Sprite);
              component.spriteFrame = res.getSpriteFrames()[0];
              break;

            case "Texture2D":
              var cube = instantiate(this.loadAnimTestPrefab);
              var model = cube.getComponent(MeshRenderer);
              model.material.setProperty('albedoMap', res);
              cube.setPosition(0, 0, 50);
              cube.setScale(100, 100, 100);
              cube.parent = this.drawPanel;
              break;

            case 'ImageAsset':
            case "CORS":
              component = node.addComponent(Sprite);
              var spriteFrame = new SpriteFrame();
              spriteFrame.texture = res;
              component.spriteFrame = spriteFrame;
              break;

            case "Audio":
              component = node.addComponent(AudioSource);
              component.clip = res;
              component.play();
              this.audioSource = component;
              this.tipLabel.string = "播放音乐。";
              break;

            case "Txt":
              component = node.addComponent(Label);
              component.lineHeight = 40;
              component.string = res.text;
              break;

            case "Material":
              component = node.addComponent(Sprite);
              component.sharedMaterials = res;
              component.spriteFrame = this.loadMaterialSpriteFrame;
              break;

            case "Font":
              component = node.addComponent(Label);
              component.font = res;
              component.lineHeight = 40;
              component.string = "This is BitmapFont!";
              break;

            case 'Mesh':
              component = node.addComponent(MeshRenderer);
              node.addComponent(UIMeshRenderer);
              node.setPosition(0, 0, 50);
              node.setScale(5, 5, 5);
              component.mesh = res;
              component.material = builtinResMgr.get('standard-material');
              break;

            case "Prefab":
              var prefab = instantiate(res);
              prefab.parent = node;
              prefab.setPosition(0, 0, 0);
              break;

            default:
              this.tipLabel.string = "此项没有展示效果";
              break;
          }

          this.drawPanel.addChild(node);
        };

        _proto.loadResCallBack = function loadResCallBack(err, res) {
          this.isLoading = false;

          if (err) {
            console.log("Error url [" + err + "]");
            return;
          }

          if (this.curType === "ImageAsset" || this.curType == "CORS") {
            this.curRes = new Texture2D();
            this.curRes.image = res;
          } else {
            this.curRes = res;
          }

          if (this.btnLabel) {
            if (this.curType === "Audio") {
              this.btnLabel.string = "播放 ";
            } else {
              this.btnLabel.string = "创建 ";
            }

            this.btnLabel.string += this.curType;
          }

          this.tipLabel.string = this.curType + " Loaded Successfully!";
        };

        _proto.clearDrawPanel = function clearDrawPanel() {
          this.drawPanel.removeAllChildren();

          if (this.audioSource && this.audioSource instanceof AudioSource) {
            this.audioSource.stop();
          }
        };

        return LoadFeature;
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scrllList", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "penGraphics", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "tipLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "boxPrefab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "scrollItem", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "contentName", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "loadAnimTestPrefab", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "loadMaterialSpriteFrame", [_dec12], {
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

System.register("chunks:///_virtual/Creator", ['./LoadFeature.ts'], function () {
  'use strict';

  return {
    setters: [null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/Creator', 'chunks:///_virtual/Creator'); 
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