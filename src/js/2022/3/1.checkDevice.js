
function checkDevice() {
    const ua = window.navigator?.userAgent?.toLowerCase() || ''
    const agent = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    let device
    if(ua) {
        device = agent.map(item=>item.toLowerCase()).find(i=>ua.indexOf(i)>-1)
    }
    return device || ''
}
console.log(checkDevice())