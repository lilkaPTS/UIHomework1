import{Tree}from"../binary-search-tree/tree.js";window.addEventListener("load",init,!1);let vertexArray=[];function init(){document.getElementById("add").onclick=onclickAdd,document.getElementById("get").onclick=onclickGet}function onclickAdd(){var e=document.getElementById("key").value,t=document.getElementById("vvv").value;vertexArray[vertexArray.length]=String(e+"~"+t);let r=new Tree;for(let e=0;e<vertexArray.length;e++)r.insert(Number(vertexArray[e].split("~")[0]),vertexArray[e].split("~")[1]);r.print("h")}function onclickGet(){}