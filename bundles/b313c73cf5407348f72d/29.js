(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1676:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var a=n(83),s=n.n(a),i=n(82),r=n.n(i),l=n(98),o=n(96),d=n(107),c=n(87),u=n(84),p=n(89),b=n(250),h=n(92),m=n(101);class w extends r.a.Component{constructor(e){super(e),s()(this,"onDisable",async()=>{this.setState({disabling:!0}),await p.b.setValue("enableEventIndexing",null,m.a.DEVICE,!1),await b.a.deleteEventIndex(),this.props.onFinished(!0),c.a.fire(h.a.ViewUserSettings)}),this.state={disabling:!1}}render(){return r.a.createElement(l.a,{onFinished:this.props.onFinished,title:Object(u.a)("Are you sure?")},Object(u.a)("If disabled, messages from encrypted rooms won't appear in search results."),this.state.disabling?r.a.createElement(o.a,null):r.a.createElement("div",null),r.a.createElement(d.a,{primaryButton:Object(u.a)("Disable"),onPrimaryButtonClick:this.onDisable,primaryButtonClass:"danger",cancelButtonClass:"warning",onCancel:this.props.onFinished,disabled:this.state.disabling}))}}}}]);
//# sourceMappingURL=29.js.map