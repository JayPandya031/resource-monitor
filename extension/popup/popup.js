// Utility function for formatting bytes to KBs, MBs and GBs
const formatSize = (size) => {
    const sizeMap = [
        {label: "GBs", value: 1024 ** 3},
        {label: "MBs", value: 1024 ** 2},
        {label: "KBs", value: 1024},
    ]

    for(const {label, value} of sizeMap){
        if(size > value){
            const ret = (size / value).toFixed(2)
            return `${ret} ${label}`
        }
    }
}

// update usage info
const logInfo = async ()=>{
    const cpuInfo = await chrome.system.cpu.getInfo();
    const cpus = cpuInfo.processors;
    const idle = cpus.reduce((prev, item) => prev + item.usage.idle, 0);
    const total = cpus.reduce((prev, item) => prev + item.usage.total, 0);
    document.getElementById("cpu-info").innerText = `${cpuInfo.modelName}`;
    document.getElementById("num-of-cores").innerText = `${cpuInfo.numOfProcessors} cores`;
    document.getElementById("average-usage").innerText = `${(100 * (total - idle)/total).toFixed(2)}%`;
    
    const memoryInfo = await chrome.system.memory.getInfo();
    const used = memoryInfo.capacity - memoryInfo.availableCapacity;
    document.getElementById("memory-usage").innerText = `${formatSize(used)}/${formatSize(memoryInfo.capacity)} (${(100 * used/memoryInfo.capacity).toFixed(2)}%)`;
}

logInfo();
setInterval(logInfo, 1000);