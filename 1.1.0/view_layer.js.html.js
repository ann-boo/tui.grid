ne.util.defineNamespace("fedoc.content", {});
fedoc.content["view_layer.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview Base class for layers\n * @author NHN Ent. FE Development Team\n */\n'use strict';\n\nvar View = require('../base/view');\n\n/**\n * Base class for layers\n * @module view/layer\n */\nvar Layer = View.extend(/**@lends module:view/layer.prototype */{\n    /**\n     * @constructs\n     * @extends module:base/view\n     */\n    initialize: function() {\n        View.prototype.initialize.apply(this, arguments);\n        this.setOwnProperties({\n            text: '기본 텍스트'\n        });\n        this.listenTo(this.grid.dimensionModel, 'change', this._resize, this);\n    },\n\n    template: _.template('' +\n        '&lt;div>' +\n        '    &lt;%=text%>' +\n        '    &lt;div class=\"loading_img\">&lt;/div>' +\n        '&lt;/div>'),\n\n    /**\n     * 랜더링 한다.\n     * @param {String} text 레이어에 노출할 text\n     * @return {View.Layer.Base} this object\n     */\n    render: function(text) {\n        this.$el.html(this.template({\n            text: text || this.text\n        })).css('display', 'none');\n        return this;\n    },\n\n    /**\n     * Layer를 노출한다.\n     * @param {String} text 레이어에 노출할 text\n     */\n    show: function(text) {\n        this.render(text).$el.css('display', 'block')\n            .css('zIndex', 1);\n        this._resize();\n    },\n\n    /**\n     * Layer 를 감춘다.\n     */\n    hide: function() {\n        this.$el.css('display', 'none');\n    },\n\n    /**\n     * 그리드의 크기에 맞추어 resize 한다.\n     * @private\n     */\n    _resize: function() {\n        var headerHeight, bodyHeight;\n\n        if (this.$el.css('display') === 'block') {\n            headerHeight = this.grid.dimensionModel.get('headerHeight');\n            bodyHeight = this.grid.dimensionModel.get('bodyHeight');\n\n            this.$el.css('marginTop', headerHeight + 'px')\n                .css('height', bodyHeight + 'px');\n        }\n    }\n});\n\nmodule.exports = Layer;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"