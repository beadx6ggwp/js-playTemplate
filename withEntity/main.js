/* 
運作流程: 
    資源載入完成後自動調用windows.onload()->
    init()->mainloop-> [upadte->draw]反覆循環
    requestAnimationFrame為類似自動垂直同步的timer
keys: 
    按鍵被按下為true,按下a後keys[65]為true,詳細可看console.log(keys);
mousePos:
    滑鼠當前位置 mousePos.x,mousePox.y 即可存取
*/

function init() {
    console.log("Start");
    ctx_backColor = "#777"

    let t1 = new Entity(random(0, width), random(0, height) * 3 / 4, 20, 'target1');
    t1.vel.setLength(200);
    t1.vel.setAngleDeg(-35);

    entities.push(t1);
}

// loop star
function update(dt) {


}


function draw(ctx) {

}
