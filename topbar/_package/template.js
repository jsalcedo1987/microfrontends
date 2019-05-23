var oc=oc||{};oc.components=oc.components||{};oc.components['bc5653077839bf9f07e8efeb8b53eb32a1929075']=function(model){
  var modelHTML =  model.__html ? model.__html : '';
  var staticPath = model.reactComponent.props._staticPath;
  var props = JSON.stringify(model.reactComponent.props);
  var randomId = Math.random() * 10000000;
  var reactRootId = "oc-reactRoot-topbar-" + randomId;
  return '<div id="'+ reactRootId +'" class="oc-reactRoot-topbar">' + modelHTML + '</div>' +
    '<style>.oc__topbar-styles-css__special__omixhmUH{background:#000;color:#fff}</style>' +
    '<script>' +
    'window.oc = window.oc || {};' +
    'oc.cmd = oc.cmd || [];' +
    'oc.cmd.push(function(oc){' +
    'oc.events.fire(\'oc:cssDidMount\', \'.oc__topbar-styles-css__special__omixhmUH{background:#000;color:#fff}\');' +
      'oc.requireSeries([{"global":["Object","assign"],"url":"https://unpkg.com/es6-object-assign@1.1.0/dist/object-assign-auto.min.js","name":"Object.assign"},{"global":"PropTypes","url":"https://unpkg.com/prop-types@15.7.2/prop-types.min.js","name":"prop-types"},{"global":"React","url":"https://unpkg.com/react@16.8.5/umd/react.production.min.js","name":"react"},{"global":"ReactDOM","url":"https://unpkg.com/react-dom@16.8.5/umd/react-dom.production.min.js","name":"react-dom"}], function(){' +
        'oc.require(' +
          '["oc", "reactComponents", "2f7f65948580372d5608809142d3db0b86c57187"],' + 
          '"' + staticPath + 'react-component.js",' +
          'function(ReactComponent){' +
            'var targetNode = document.getElementById("'+ reactRootId +'");' +
            'targetNode.setAttribute("id","");' +
            'ReactDOM.hydrate(React.createElement(ReactComponent,' +  props + '),targetNode);' +
          '}' +
        ');' +
      '});' +
    '});' +
  '</script>'
}