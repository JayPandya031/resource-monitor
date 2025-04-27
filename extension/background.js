chrome.runtime.onInstalled.addListener(()=>{
    chrome.alarms.create("report-usage", { periodInMinutes: 0.1 }); // Every 6 Seconds
});

chrome.alarms.onAlarm.addListener(async (alarm)=>{
    if (alarm.name === "report-usage") {
        const cpuInfo = await chrome.system.cpu.getInfo();
        const memoryInfo = await chrome.system.memory.getInfo();
        fetch("http://localhost:5000/report-usage", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                cpu: cpuInfo,
                memory: memoryInfo,
                datetime: (new Date()).toISOString()
            })
        })
        .catch((error)=>{
            chrome.alarms.clear("report-usage", ()=>{
                console.log("Report usage cleared due to : ", error)
            })
        })
    }
})
