(()=>{var o={372:(e,r,t)=>{const{userHandler:o}=t(542);e.exports={commentHandler:function(r){"object"==typeof r.author&&o(r.author);for(let e=0;e<r.likes.length;e+=1)"object"==typeof r.likes[e]&&o(r.likes[e])}}},183:(e,r,t)=>{const{userHandler:o}=t(542);e.exports={commitHandler:function(e){"object"==typeof e.author&&o(e.author)}}},594:(e,r,t)=>{const{userHandler:o}=t(542);e.exports={issueHandler:function(e){e.resolvedBy&&"object"==typeof e.resolvedBy&&o(e.resolvedBy)}}},542:e=>{const o=new Map;e.exports={users:o,userHandler:function r(t){var e={id:t.id,name:t.name,avatar:t.avatar};o.has(t.id)||o.set(e.id,e);for(let e=0;e<t.friends.length;e+=1)"object"==typeof t.friends[e]&&r(t.friends[e]);return e.id}}},138:(e,r,t)=>{const{userHandler:o}=t(542),{commentHandler:n}=t(372),{commitHandler:s}=t(183),{issueHandler:a}=t(594);e.exports={prepareData:function(r,{sprintId:t}){for(let e=0;e<r.length;e+=1)switch(r[e].type){case"User":o(r[e],t);break;case"Comment":n(r[e],t);break;case"Commit":s(r[e],t);break;case"Issue":a(r[e],t);break;default:throw new Error("error: type of entity is invalid")}}}}},n={};(function e(r){if(n[r])return n[r].exports;var t=n[r]={exports:{}};return o[r](t,t.exports,e),t.exports})(138)})();