(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{19:function(e,t,s){"use strict";s.r(t);var r=s(12),n=s(13),a=s(7),i=s(8),c=s(14),o=s(11),l=s(0),u=s.n(l),j=s(18),h=s(15),b=s.n(h),d=(s(24),s(1));function v(e){return Object(d.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var x=function(e){Object(c.a)(s,e);var t=Object(o.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"renderSquare",value:function(e){var t=this;return Object(d.jsx)(v,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}},e)}},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{children:Object(n.a)(new Array(3)).map((function(t,s){return Object(d.jsx)("div",{className:"board-row",children:Object(n.a)(new Array(3)).map((function(t,r){return e.renderSquare(3*s+r)}))},s)}))})}}]),s}(u.a.Component),f=function(e){Object(c.a)(s,e);var t=Object(o.a)(s);function s(e){var r;return Object(a.a)(this,s),(r=t.call(this,e)).state={history:[{squares:Array(9).fill(null),position:Array(2).fill(null)}],stepNumber:0,xIsNext:!0,sortDesc:!1},r}return Object(i.a)(s,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),s=t[t.length-1].squares.slice();if(!O(s)&&!s[e]){var r=Math.floor(e/3),n=e%3;s[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:s,position:[r+1,n+1]}]),stepNumber:t.length,xIsNext:!this.state.xIsNext})}}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"toggleSort",value:function(){this.setState({sortDesc:!this.state.sortDesc})}},{key:"render",value:function(){var e,t=this,s=this.state.history,n=s[this.state.stepNumber],a=O(n.squares),i=s.map((function(e,s){var r=s?"Go to move #"+s+" ("+e.position[0]+", "+e.position[1]+")":"Go to game start";return s===t.state.stepNumber&&(r=Object(d.jsx)("b",{children:r})),Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:function(){return t.jumpTo(s)},children:r})},s)}));if(this.state.sortDesc&&i.reverse(),a){var c=Object(r.a)(a,4),o=c[0],l=c[1],u=c[2],j=c[3];e="Winner: "+o,n.squares[l]=Object(d.jsx)("div",{style:{color:"red"},children:n.squares[l]}),n.squares[u]=Object(d.jsx)("div",{style:{color:"red"},children:n.squares[u]}),n.squares[j]=Object(d.jsx)("div",{style:{color:"red"},children:n.squares[j]})}else e=n.squares.every((function(e){return null!==e}))?"It's a draw!":"Next player: "+(this.state.xIsNext?"X":"O");var h="Sort "+(this.state.sortDesc?"Desc":"Asc");return Object(d.jsxs)("div",{className:"game",children:[Object(d.jsx)("div",{className:"game-board",children:Object(d.jsx)(x,{squares:n.squares,onClick:function(e){return t.handleClick(e)}})}),Object(d.jsxs)("div",{className:"game-info",children:[Object(d.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(d.jsx)("div",{children:e})}),Object(d.jsx)("div",{style:{margin:8,display:"flex",alignItems:"center",justifyContent:"center"},children:Object(d.jsx)("button",{onClick:function(){return t.toggleSort()},children:h})}),Object(d.jsx)("ol",{children:i})]})]})}}]),s}(u.a.Component);function O(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],s=0;s<t.length;s++){var n=Object(r.a)(t[s],3),a=n[0],i=n[1],c=n[2];if(e[a]&&e[a]===e[i]&&e[a]===e[c])return Array(1).fill(e[a]).concat(t[s])}return null}b.a.render(Object(d.jsx)(j.a,{basename:"/react-apps",children:Object(d.jsx)(f,{})}),document.getElementById("root"))},24:function(e,t,s){}},[[19,1,2]]]);
//# sourceMappingURL=main.b1c2c7f1.chunk.js.map