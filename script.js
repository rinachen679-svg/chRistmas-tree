:root{
  --bg:#fffaf6;
  --card:#fff;
  --accent:#ffb6c1;
  --mint:#b8f3d1;
  --soft:#ffdfe9;
  --shadow: 0 6px 18px rgba(0,0,0,0.12);
  --cute: 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
}

*{box-sizing:border-box}
html,body{height:100%;margin:0;background:linear-gradient(180deg,var(--bg),#f6f0ff 80%);font-family:var(--cute);color:#2b2b2b}
.topbar{display:flex;justify-content:space-between;align-items:center;padding:18px 28px;}
.topbar h1{margin:0;font-size:20px;letter-spacing:0.2px}
.actions button{margin-left:8px;padding:8px 12px;border-radius:10px;border:none;background:linear-gradient(180deg,#fff,#ffdfe9);box-shadow:var(--shadow);cursor:pointer}
.main{display:flex;gap:20px;padding:0 28px 28px}
.left{flex:1;display:flex;flex-direction:column;gap:12px}
.tree-wrap{position:relative;width:420px;height:640px;margin:auto;border-radius:18px;padding:12px;background:linear-gradient(180deg,#fcf9ff,#fff);box-shadow:var(--shadow)}
canvas{display:block;border-radius:12px;background:transparent}
.drop-hint{position:absolute;left:50%;transform:translateX(-50%);bottom:12px;background:rgba(255,255,255,0.9);padding:6px 10px;border-radius:12px;font-size:13px;color:#666;pointer-events:none}

.message-panel{margin-top:6px;background:var(--card);padding:12px;border-radius:12px;box-shadow:var(--shadow);max-width:420px}
.msg-input{display:flex;gap:8px}
.msg-input input{flex:1;padding:10px;border-radius:10px;border:1px solid #f0dfea;background:#fff}
.msg-input button{padding:8px 12px;border-radius:10px;border:none;background:linear-gradient(180deg,#ffccd9,#ff9fc3);cursor:pointer}

.msg-area{margin-top:10px;min-height:50px;display:flex;flex-wrap:wrap;gap:8px}
.msg-card{background:linear-gradient(180deg,#fff,#fffaf0);padding:8px 10px;border-radius:12px;box-shadow:0 6px 12px rgba(0,0,0,0.08);font-size:13px;position:relative;cursor:default}
.msg-card .del{position:absolute;top:6px;right:6px;font-size:12px;opacity:.5;cursor:pointer}

.right{width:260px}
.palette{background:var(--card);padding:12px;border-radius:12px;box-shadow:var(--shadow)}
.palette h3{margin-top:0}
.stickers{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}
.sticker-btn{width:64px;height:64px;border-radius:12px;border:none;background:linear-gradient(180deg,#fff,#fffaf0);display:flex;align-items:center;justify-content:center;cursor:grab;box-shadow:0 6px 12px rgba(0,0,0,0.06)}
.sticker-btn:active{cursor:grabbing;transform:scale(.98)}
.help{margin-top:12px;background:var(--card);padding:10px;border-radius:12px;box-shadow:var(--shadow)}
.foot{text-align:center;padding:12px;color:#666}

/* floating decoration styles (on-canvas overlays) */
.decoration{position:absolute;transform:translate(-50%,-50%);cursor:grab;user-select:none;touch-action:none}
.decoration img{width:56px;height:56px}

/* snow */
#snow{position:fixed;left:0;right:0;top:0;bottom:0;pointer-events:none;z-index:5}
.snowflake{position:absolute;font-size:16px;opacity:.9;filter:drop-shadow(0 2px 3px rgba(0,0,0,0.08))}

/* responsive */
@media (max-width:900px){
  .main{flex-direction:column;align-items:center}
  .right{width:100%}
  .tree-wrap{width:320px;height:480px}
  canvas{width:100%;height:100%}
}

