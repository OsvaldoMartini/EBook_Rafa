require([
  "dojo/parser",
  "dojo/ready",
  "dojo/dom",
  "dojo/dom-construct",
  "dojo/_base/array",
  "esri/symbols/PictureMarkerSymbol",
  "dojo/_base/json",
  "dijit/registry",
  "dojo/on",
  "dojo/_base/connect",
  "esri/dijit/editing/TemplatePicker",
  "esri/arcgis/Portal",
  "esri/domUtils",
  "esri/config",
  "esri/request",
  "esri/symbols/jsonUtils",
  "esri/symbols/Symbol",
  "esri/lang",
  "dojo/store/Memory",
  "dijit/form/ComboBox",
  "dijit/layout/BorderContainer",
  "dijit/layout/ContentPane"
], function(
  parser,
  ready,
  dom,
  domConstruct,
  array,
  PictureMarkerSymbol,
  dojoJson,
  registry,
  on,
  connect,
  TemplatePicker,
  arcgisPortal,
  domUtils,
  config,
  esriRequest,
  jsonUtils,
  Symbol,
  esriLang,
  Memory
) {
  var templatePicker, store;
  ready(function() {
    parser.parse();

    var portalUrl = document.location.protocol + "//www.arcgis.com";
    on(registry.byId("symbolList"), "change", updateSymbolDisplay);
    var portal = new arcgisPortal.Portal(portalUrl);
    config.defaults.io.proxyUrl = "/proxy/";

    on(portal, "load", function(p) {
      portal.queryGroups(portal.symbolSetsGroupQuery).then(function(groups) {
        if (groups.results && groups.results.length) {
          var group = groups.results[0];
          var params = {
            num: 20,
            q:
              "typekeywords: marker AND typekeywords: 'by value' AND !name: 'Business' AND !name: 'Animated'"
          };
          group.queryItems(params).then(function(items) {
            var list = registry.byId("symbolList");
            // Do not use items that don't have a name.
            var sets = array.filter(items.results, function(n) {
              return n.name;
            });
            store = new Memory({ data: sets });
            list.set("store", store);
            list.set("value", "Basic");
          });
        }
      });
    });
  });

  function updateSymbolDisplay(value) {
    domUtils.show(dom.byId("status"));
    dom.byId("info").innerHTML = "";
    if (templatePicker) {
      console.log("destroy");
      templatePicker.destroy();
      templatePicker = null;
    }
    //get the symbols for the selected category
    var results = store.query({ name: value });
    if (results && results.length) {
      var url = results[0].itemDataUrl;
      var request = esriRequest({
        url: url,
        handleAs: "json"
      });
      request.then(function(result) {
        var data = result.map(function(item) {
          return {
            angle: item.angle,
            contentType: item.contentType,
            height: item.height,
            imageData: item.imageData,
            //   "PHN2Zz48ZGVmcz48bGluZWFyZ3JhZGllbnQgaWQ9InBhdHRlcm5NdWx0aSIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3AgaWQ9InN0b3AxIiBvZmZzZXQ9IjMzJSIgc3RvcC1jb2xvcj0icmVkIj48L3N0b3A+PHN0b3AgaWQ9InN0b3AyIiBvZmZzZXQ9IjMzJSIgc3RvcC1jb2xvcj0iI0ZGNiI+PC9zdG9wPjxzdG9wIGlkPSJzdG9wMyIgb2Zmc2V0PSI2NiUiIHN0b3AtY29sb3I9IiNGRjYiPjwvc3RvcD48c3RvcCBpZD0ic3RvcDQiIG9mZnNldD0iNjYlIiBzdG9wLWNvbG9yPSIjRjYwIj48L3N0b3A+PC9saW5lYXJncmFkaWVudD48L2RlZnM+PHJlY3QgaWQ9InJlY3RNdWx0aSIgeD0iMCIgeT0iMCIgcng9IjUiIHJ5PSI1IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9InVybCgjcGF0dGVybk11bHRpKSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjUiPjwvcmVjdD48L3N2Zz4=", //item.imageData, //
            name: item.name,
            type: item.type,
            url: item.url, //"data/BaseLand-DoubleGrp.svg",
            width: item.width,
            xoffset: item.xoffset,
            yoffset: item.yoffset
          };
        });

        createTemplatePicker(data);
      });
    }
  }
  function createTemplatePicker(result) {
    var symbolItems = array.map(result, function(item) {
      return {
        symbol: jsonUtils.fromJson(item),
        description: item.name,
        type: item.type
      };
    });

    var mySymbol = new PictureMarkerSymbol({
      angle: 0,
      xoffset: 0,
      yoffset: 0,
      type: "esriPMS",
      url:
        "https://cdn4.iconfinder.com/data/icons/VistaICO-File-Icons/128/Script/JS.png",
      imageData:
        "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",
      contentType: "image/png",
      width: 24,
      height: 24
    });
    symbolItems[72] = {
      symbol: mySymbol,
      description: "test",
      type: "esriSMS"
    };

    templatePicker = new TemplatePicker(
      {
        items: symbolItems,
        rows: "auto",
        columns: 8
      },
      domConstruct.create("div")
    );

    dom.byId("templatePickerDiv").appendChild(templatePicker.domNode);
    domUtils.hide(dom.byId("status"));
    templatePicker.startup();

    connect.connect(templatePicker, "onSelectionChange", updateSymbol);
  }
  function updateSymbol() {
    var selected = templatePicker.getSelected();
    var symbol = selected.item.symbol.toJson();
    if (!dom.byId("base64Enabled").checked) {
      delete symbol["imageData"];
    }

    var template = "var symbol = new Symbol.${type}(${value});";
    var symbolType =
      selected.item.type === "esriPMS"
        ? "PictureMarkerSymbol"
        : "SimpleMarkerSymbol";
    var value = dojoJson.toJson(symbol);
    dom.byId("info").innerHTML = esriLang.substitute(
      { type: symbolType, value: dojoJson.toJson(symbol) },
      template
    );
  }
});
